document.addEventListener('DOMContentLoaded', () => {
    // Hardware Reference
    const hardwareList = [
        { id: 'S30', type: 'knob' }, { id: 'S31', type: 'knob' }, { id: 'S32', type: 'knob' }, { id: 'S33', type: 'knob' },
        { id: 'S34', type: 'knob' }, { id: 'S35', type: 'knob' }, { id: 'S36', type: 'knob' }, { id: 'S37', type: 'knob' },
        { id: 'S07-S08', type: 'switch' }, { id: 'S09-S10', type: 'switch' },
        { id: 'P00', type: 'pad' }, { id: 'P01', type: 'pad' }, { id: 'P02', type: 'pad' }, { id: 'P03', type: 'pad' },
        { id: 'P04', type: 'pad' }, { id: 'P05', type: 'pad' }, { id: 'P06', type: 'pad' }, { id: 'P07', type: 'pad' },
        { id: 'P08', type: 'pad' }, { id: 'P09', type: 'pad' }, { id: 'P10', type: 'pad' }, { id: 'P11', type: 'pad' },
        { id: 'P03-P09', type: 'pad_group' }
    ];

    // State
    let ccMaps = [];
    let currentModifiers = [];
    let savedMappings = [];
    let mainImageFile = null;
    let otherImageFiles = [];
    let editingIndex = -1; // NEW: Tracks which mapping is currently being edited

    // --- DOM Elements ---
    const fwInputs = ['id', 'name', 'type', 'author', 'bin', 'source', 'desc'].reduce((acc, val) => {
        acc[val] = document.getElementById(`fw_${val}`);
        return acc;
    }, {});
    const featUsb = document.getElementById('feat_usb_midi');
    const featSync = document.getElementById('feat_sync');

    const primarySelect = document.getElementById('primary_control');
    const modifierSelect = document.getElementById('modifier_select');
    const btnAddModifier = document.getElementById('btn-add-modifier');
    const activeModifiersContainer = document.getElementById('active-modifiers');
    const mappingForm = document.getElementById('mapping-form');
    const savedMappingsContainer = document.getElementById('saved-mappings-container');
    const btnCancelEdit = document.getElementById('btn-cancel-edit');
    const btnSaveMapping = document.getElementById('btn-save-mapping');

    // --- HOISTED FUNCTIONS ---

    function updateOutputs() {
        document.getElementById('json-view').textContent = generateJSON();
        document.getElementById('md-view').textContent = generateMarkdown();
    }

    function generateJSON() {
        const imgObj = {};
        if (mainImageFile) imgObj.main = mainImageFile;
        if (otherImageFiles.length > 0) imgObj.additional = otherImageFiles;

        const submission = {
            id: fwInputs.id.value,
            name: fwInputs.name.value,
            type: fwInputs.type.value,
            author: fwInputs.author.value,
            binary_url: fwInputs.bin.value,
            source_url: fwInputs.source.value,
            description: fwInputs.desc.value,
            images: Object.keys(imgObj).length > 0 ? imgObj : undefined,
            features: {
                usb_midi: featUsb.checked,
                external_sync: featSync.value || false
            },
            mappings: savedMappings,
            midi_cc_map: ccMaps.length > 0 ? ccMaps : undefined
        };
        return JSON.stringify(submission, null, 2);
    }

    function generateMarkdown() {
        let md = `### Hardware Mappings\n\n`;

        const groups = {};
        savedMappings.forEach(m => {
            const state = m.state_context || 'Global Default';
            if (!groups[state]) groups[state] = [];
            groups[state].push(m);
        });

        for (const [groupName, maps] of Object.entries(groups)) {
            md += `#### ${groupName}\n\n`;
            md += `| Primary Control | Modifier (Hold) | Parameter | Description |\n`;
            md += `| :--- | :--- | :--- | :--- |\n`;
            
            maps.forEach(m => {
                const mods = (m.modifiers && m.modifiers.length > 0) ? m.modifiers.join(' + ') : '-';
                md += `| **${m.primary_control}** | ${mods} | ${m.parameter} | ${m.description} |\n`;
            });
            md += `\n`;
        }

        if (ccMaps.length > 0) {
            md += `### MIDI CC Map\n\n`;
            md += `| CC# | Parameter |\n`;
            md += `| :--- | :--- |\n`;
            ccMaps.forEach(cc => {
                md += `| ${cc.cc} | ${cc.parameter} |\n`;
            });
        }

        return md;
    }

    function renderSavedMappings() {
        if (savedMappings.length === 0) {
            savedMappingsContainer.innerHTML = '<div class="empty-state">No mappings added yet.</div>';
            return;
        }

        const groups = {};
        savedMappings.forEach(m => {
            const state = m.state_context || 'Global Default';
            if (!groups[state]) groups[state] = [];
            groups[state].push(m);
        });

        savedMappingsContainer.innerHTML = '';
        
        for (const [groupName, maps] of Object.entries(groups)) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'mapping-group';
            groupDiv.innerHTML = `<h3 style="color: var(--accent-primary); border-bottom-color: var(--accent-primary); font-size: 1.05rem;">${groupName}</h3>`;
            
            maps.forEach(map => {
                const realIdx = savedMappings.indexOf(map);
                const item = document.createElement('div');
                item.className = 'mapping-item';
                
                const modsHTML = (map.modifiers || []).map(m => `<span class="tag" style="padding: 0.1rem 0.3rem; font-size: 0.7rem;">+ ${m}</span>`).join('');
                
                item.innerHTML = `
                    <div class="mapping-info">
                        <div class="mapping-controls">
                            <span class="primary-badge">${map.primary_control}</span>
                            ${modsHTML}
                        </div>
                        <strong>${map.parameter}</strong>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${map.description}</span>
                    </div>
                    <div style="display: flex; gap: 0.5rem; align-items: center;">
                        <button type="button" style="color: var(--accent-primary); background: none; border:none; font-size:1.2rem; cursor:pointer;" title="Edit Mapping" onclick="editMapping(${realIdx})">✎</button>
                        <button type="button" class="btn-remove" style="color: #e60067; background: none; border:none; font-size:1.5rem; cursor:pointer;" title="Delete Mapping" onclick="deleteMapping(${realIdx})">×</button>
                    </div>
                `;
                groupDiv.appendChild(item);
            });
            savedMappingsContainer.appendChild(groupDiv);
        }
    }

    function renderCCMaps() {
        const container = document.getElementById('cc-list');
        container.innerHTML = '';
        ccMaps.forEach((cc, idx) => {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = `CC ${cc.cc}: ${cc.parameter} <button type="button">×</button>`;
            tag.querySelector('button').onclick = () => {
                ccMaps.splice(idx, 1);
                renderCCMaps();
                updateOutputs();
            };
            container.appendChild(tag);
        });
    }

    function populateModifierDropdown() {
        const primary = primarySelect.value;
        modifierSelect.innerHTML = '<option value="" disabled selected>Add modifier...</option>';
        
        const groups = {
            'Pads': hardwareList.filter(h => h.type.includes('pad')),
            'Switches': hardwareList.filter(h => h.type === 'switch'),
            'Knobs': hardwareList.filter(h => h.type === 'knob')
        };

        for (const [label, items] of Object.entries(groups)) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = label;
            let hasOptions = false;
            
            items.forEach(hw => {
                if (hw.id !== primary && !currentModifiers.includes(hw.id)) {
                    const opt = document.createElement('option');
                    opt.value = hw.id;
                    opt.textContent = hw.id;
                    optgroup.appendChild(opt);
                    hasOptions = true;
                }
            });

            if (hasOptions) {
                modifierSelect.appendChild(optgroup);
            }
        }
    }

    function renderModifierTags() {
        activeModifiersContainer.innerHTML = '';
        currentModifiers.forEach(mod => {
            const tag = document.createElement('div');
            tag.className = 'tag';
            tag.innerHTML = `${mod} <button type="button" data-id="${mod}">×</button>`;
            tag.querySelector('button').onclick = () => {
                currentModifiers = currentModifiers.filter(m => m !== mod);
                renderModifierTags();
                populateModifierDropdown();
            };
            activeModifiersContainer.appendChild(tag);
        });
    }

    function validateAndLoadSubmission(data) {
        let fw = data;
        if (data.firmwares && Array.isArray(data.firmwares)) {
            fw = data.firmwares[0]; 
        }

        if (!fw || typeof fw !== 'object') {
            alert('Validation Error: Invalid JSON structure.');
            return;
        }

        fwInputs.id.value = fw.id || '';
        fwInputs.name.value = fw.name || '';
        fwInputs.type.value = fw.type || '';
        fwInputs.author.value = fw.author || '';
        fwInputs.bin.value = fw.binary_url || '';
        fwInputs.source.value = fw.source_url || '';
        fwInputs.desc.value = fw.description || '';

        if (fw.features) {
            featUsb.checked = !!fw.features.usb_midi;
            featSync.value = fw.features.external_sync || '';
        } else {
            featUsb.checked = false;
            featSync.value = '';
        }

        if (fw.images) {
            mainImageFile = fw.images.main || null;
            otherImageFiles = fw.images.additional || [];
            
            document.getElementById('main-image-preview').innerHTML = mainImageFile ? `<div class="tag" style="margin-top:10px;">${mainImageFile} <button onclick="clearMainImage()">×</button></div>` : '';
            
            document.getElementById('other-images-preview').innerHTML = otherImageFiles.map((img) => 
                `<div class="tag" style="margin-top:10px;">${img} <button onclick="removeOtherImage('${img}')">×</button></div>`
            ).join('');
        }

        savedMappings = Array.isArray(fw.mappings) ? fw.mappings : [];
        ccMaps = Array.isArray(fw.midi_cc_map) ? fw.midi_cc_map : [];

        renderSavedMappings();
        renderCCMaps();
        updateOutputs();
    }

    // NEW: Function to handle Edit cancellation
    function cancelEdit() {
        editingIndex = -1;
        document.getElementById('map_param').value = '';
        document.getElementById('map_desc').value = '';
        currentModifiers = [];
        renderModifierTags();
        populateModifierDropdown();
        
        btnSaveMapping.textContent = 'Save Mapping';
        btnCancelEdit.style.display = 'none';
    }

    // --- EVENT LISTENERS ---

    // Live update listeners
    Object.values(fwInputs).forEach(input => input.addEventListener('input', updateOutputs));
    featUsb.addEventListener('change', updateOutputs);
    featSync.addEventListener('input', updateOutputs);

    // File Import
    document.getElementById('btn-import').addEventListener('click', () => {
        document.getElementById('import_file').click();
    });

    document.getElementById('import_file').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                validateAndLoadSubmission(data);
            } catch (err) {
                alert('Error: The uploaded file is not valid JSON.');
            }
        };
        reader.readAsText(file);
        e.target.value = ''; 
    });

    // Template Download
    document.getElementById('btn-template').addEventListener('click', () => {
        const template = {
            id: "your-firmware-id",
            name: "Your Firmware Name",
            type: "e.g., Polyphonic Synth",
            author: "Your Name/Handle",
            binary_url: "https://github.com/.../firmware.bin",
            source_url: "https://github.com/.../source",
            description: "A brief description of what this firmware does.",
            images: {
                main: "front_panel.jpg",
                additional: ["diagram.png"]
            },
            features: {
                usb_midi: false,
                external_sync: "via USB MIDI Clock"
            },
            mappings: [
                {
                    state_context: "Global Default",
                    primary_control: "S30",
                    modifiers: [],
                    parameter: "Master Volume",
                    description: "Main output level.",
                    type: "knob"
                },
                {
                    state_context: "Voice Edit State (Hold P03-P09)",
                    primary_control: "S30",
                    modifiers: ["P10"],
                    parameter: "Voice Pitch",
                    description: "Hold P10 while in Edit Mode to change pitch.",
                    type: "combo_knob"
                }
            ],
            midi_cc_map: [
                {
                    cc: 74,
                    parameter: "Filter Cutoff"
                }
            ]
        };

        const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = "firmware_template.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    });

    // Image Upload Logic
    document.getElementById('img_main').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if(file) {
            mainImageFile = file.name;
            const reader = new FileReader();
            reader.onload = (ev) => {
                document.getElementById('main-image-preview').innerHTML = `
                    <div class="img-thumb">
                        <img src="${ev.target.result}" alt="Main">
                        <button type="button" onclick="clearMainImage()">×</button>
                    </div>
                `;
            };
            reader.readAsDataURL(file);
            updateOutputs();
        }
    });

    window.clearMainImage = () => {
        mainImageFile = null;
        document.getElementById('main-image-preview').innerHTML = '';
        document.getElementById('img_main').value = '';
        updateOutputs();
    };

    document.getElementById('img_other').addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if(!otherImageFiles.includes(file.name)) {
                otherImageFiles.push(file.name);
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const div = document.createElement('div');
                    div.className = 'img-thumb';
                    div.innerHTML = `
                        <img src="${ev.target.result}" alt="Additional">
                        <button type="button" onclick="removeOtherImage('${file.name}')">×</button>
                    `;
                    document.getElementById('other-images-preview').appendChild(div);
                };
                reader.readAsDataURL(file);
            }
        });
        updateOutputs();
    });

    window.removeOtherImage = (filename) => {
        otherImageFiles = otherImageFiles.filter(f => f !== filename);
        document.getElementById('other-images-preview').innerHTML = '';
        otherImageFiles.forEach(name => {
            const div = document.createElement('div');
            div.className = 'tag';
            div.style.marginTop = '10px';
            div.innerHTML = `${name} <button type="button" onclick="removeOtherImage('${name}')">×</button>`;
            document.getElementById('other-images-preview').appendChild(div);
        });
        updateOutputs();
    };

    // Mapping Builder
    primarySelect.addEventListener('change', () => {
        if (currentModifiers.includes(primarySelect.value)) {
            currentModifiers = currentModifiers.filter(m => m !== primarySelect.value);
            renderModifierTags();
        }
        populateModifierDropdown();
    });

    btnAddModifier.addEventListener('click', () => {
        const val = modifierSelect.value;
        if (val) {
            currentModifiers.push(val);
            renderModifierTags();
            populateModifierDropdown(); 
        }
    });

    btnCancelEdit.addEventListener('click', cancelEdit);

    mappingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const primary = primarySelect.value;
        const hwDef = hardwareList.find(h => h.id === primary);
        
        let type = hwDef.type;
        if (currentModifiers.length > 0) type = `combo_${type}`;

        const mappingData = {
            state_context: document.getElementById('map_state').value || 'Global Default',
            primary_control: primary,
            modifiers: [...currentModifiers],
            parameter: document.getElementById('map_param').value,
            description: document.getElementById('map_desc').value,
            type: type
        };

        if (editingIndex > -1) {
            // Update existing entry
            savedMappings[editingIndex] = mappingData;
            editingIndex = -1;
            btnSaveMapping.textContent = 'Save Mapping';
            btnCancelEdit.style.display = 'none';
        } else {
            // Create new entry
            savedMappings.push(mappingData);
        }

        // Only clear the parameter/description, keep the state and primary control
        document.getElementById('map_param').value = '';
        document.getElementById('map_desc').value = '';
        currentModifiers = [];
        renderModifierTags();
        populateModifierDropdown();
        renderSavedMappings();
        updateOutputs();
    });

    // NEW: Function to trigger Edit Mode
    window.editMapping = (idx) => {
        editingIndex = idx;
        const map = savedMappings[idx];

        document.getElementById('map_state').value = map.state_context || 'Global Default';
        document.getElementById('primary_control').value = map.primary_control;
        document.getElementById('map_param').value = map.parameter;
        document.getElementById('map_desc').value = map.description;

        currentModifiers = [...(map.modifiers || [])];
        renderModifierTags();
        populateModifierDropdown();

        // Update UI buttons
        btnSaveMapping.textContent = 'Update Mapping';
        btnCancelEdit.style.display = 'inline-block';

        // Scroll back up to the form for better UX
        document.getElementById('mapping-form').scrollIntoView({ behavior: 'smooth' });
    };

    window.deleteMapping = (idx) => {
        if (editingIndex !== -1) {
            cancelEdit(); // Reset form if user deletes something while in edit mode to prevent indexing errors
        }
        savedMappings.splice(idx, 1);
        renderSavedMappings();
        updateOutputs();
    };

    // CC Map 
    document.getElementById('btn-add-cc').addEventListener('click', () => {
        const num = document.getElementById('cc_number').value;
        const param = document.getElementById('cc_param').value;
        if (num && param) {
            ccMaps.push({ cc: parseInt(num), parameter: param });
            document.getElementById('cc_number').value = '';
            document.getElementById('cc_param').value = '';
            renderCCMaps();
            updateOutputs();
        }
    });

    // Tabs & Export
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.code-view').forEach(v => v.classList.remove('active'));
            e.target.classList.add('active');
            document.getElementById(e.target.dataset.target).classList.add('active');
        });
    });

    document.getElementById('btn-copy').addEventListener('click', (e) => {
        const activeView = document.querySelector('.code-view.active');
        navigator.clipboard.writeText(activeView.textContent);
        const originalText = e.target.textContent;
        e.target.textContent = 'Copied!';
        setTimeout(() => e.target.textContent = originalText, 2000);
    });

    document.getElementById('btn-download').addEventListener('click', () => {
        const jsonContent = generateJSON();
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fwInputs.id.value || 'submission'}.json`;
        document.body.appendChild(link);
        link.click();
        
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    });

    // Initialize UI on load
    populateModifierDropdown();
    updateOutputs();
});