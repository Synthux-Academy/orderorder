> [!IMPORTANT]
> This tool is a sketch made by StubeMusic as we're figuring out how to make a template for Simple Touch instruments submissions.
> 
> Not for any production use atm.
> Join the Discussion on Discord if you have questions about this


# Synthux Touch 2 Firmware Submission Builder

This is an interactive web-based tool for generating, editing, and validating `submission.json` files for the Synthux Touch 2 synthesizer community repository.

## Features

- **Template Generation**: Download a boilerplate JSON template to quickly start your submission offline.
- **JSON Import & Parsing**: Upload an existing `submission.json` file to visually edit your metadata, mappings, and MIDI settings.
- **Dynamic Mapping Builder**: Easily create complex Combos by adding multiple modifiers to any primary control.
- **Smart Validation**:
  - Prevents a control from being its own modifier.
  - Prevents duplicate modifiers in the same mapping.
- **Hardware Parity**: Strictly follows the printed Synthux Touch 2 hardware nomenclature (S30-S37, S07-S10, P00-P11) using organized dropdown groups.
- **Image Tracking**: Define your main and additional image filenames to keep your GitHub PR organized.
- **MIDI CC Builder**: Easily map incoming CC numbers to software parameters.
- **Live Output Previews**: See your `submission.json` and a GitHub-ready `README.md` Markdown table update in real-time.
- **Secure Export**: Uses client-side Blob generation to securely download files without browser restrictions.

## How to Use

1. Open `index.html` in any modern web browser.
2. Click **Download Template** to start fresh, or **Import Submission JSON** to load existing work.
3. Fill out the **Firmware Details** (Name, Author, GitHub URLs, and Image filenames).
4. Use the **Hardware Mapping** section:
   - Select a **Primary Control** (e.g., a Knob like `S30`).
   - (Optional) Click **+ Add Modifier** to chain touch pads or switches for combo interactions.
   - Enter the **Parameter Name** and a brief **Description**.
   - Click **Save Mapping**.
5. Define any **Connectivity & MIDI** features, adding CC maps if your firmware supports them.
6. Review your data in the Output tabs (JSON or Markdown).
7. Click **Download** to save your final `submission.json` file.

## Technical Details

- Built with Vanilla HTML5, CSS3, and JavaScript.
- Features a clean, bright, light-grey UI optimized for readability and data entry.
- Fully client-side; no server required.
