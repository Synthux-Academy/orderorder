# Awesome Synthux Community

[![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

[!Synthux image](community-owl/badge.svg) * todo

> This is a community led initiative to share anything of interest related to Synthux and the mission of learning, Building and programming synthesizers.

Synthux Academy is part of Stichting PTM Academy - a registered non-profit organization based in Rotterdam, Netherlands. It's founder Roey Tsemah has started the organization and community for anyone looking to learn and connect with fellow synth-nerds. The community ranges from music maker enthousiasts, DIY makers as well as professionals. The common goal is to share our love for music and technology.

Synthux has a few of their own synths, most available as DIY kits. There's a very open culture, building on the vast amount of available content in the space of music technology.

While most Synthux kits come with the Electrosmith Daisy Seed microcontroller, the Simple PCB’s do fit other microcontrollers as well.

Synthux has official working firmware for the existing instruments shared on their GitHub page. 

Top of this list has the basic official links, further down we're curating a list of community submitted instruments/firmware and other resources either directly or indirectly connected to the Synthux Simple boards.

As we await the building of a full blown community library, we're trying to share direct links to .bin files or repositories (for easy uploading to Daisy Seed), as well as the full code and any relevant demo's.

### Synthux Community invite and code of conduct

- [join the community](https://www.synthux.academy/join) by signing up via the official website (free)
- The Synthux community adheres to the [Berlin Code of Conduct](https://berlincodeofconduct.org/).
- Contributions welcome. Add links through pull requests or create an issue to start a discussion, or join the conversation on Discord.

---

### TOC: Contents (use a github tool?)

---

## Official Synthux links

[synthux.academy](http://www.synthux.academy/) - main website

[synthux.academy/shop](http://synthux.academy/shop) - Beginner friendly kits with video course included

[simple resources](https://www.synthux.academy/simple-synth) - instrument firmware downloads and tutorials for Simple Instruments. Touch 2, Simple Designer and Simple Fix.

[Synthux GitHub](https://github.com/Synthux-Academy) - official Synthux Github with all the official firmware and shared hardware files

[Discord community and newsletter](https://www.synthux.academy/join) - where the community comes together to share code, ask and offer help, show off and find like minded synth-heads.

---

# Community submitted code and hardware mods for Synthux instruments

💡ideally these links would only include a short description and would lead to the community archive website, for now I'm adding basic info and links here as well. 

---

### General - applicable to (all) simple / Daisy

[Expanded pins list / spreadsheet with Synthux numbering](https://docs.google.com/spreadsheets/d/1xtg_s1tk8tm-6qNkBLFc6V1L_Mpmu-PCOvv7qEyr9mU/edit?usp=drivesdk) - made by jonwtr, living document, different tabs, handy to pinpoint pins of Daisy and their corresponding numbers and functions in Synthux hardware and code.

[Electrosmith libDaisy pinout list](https://github.com/electro-smith/libDaisy/blob/master/doc/Daisy_Seed_Rev4_Pinout.csv) 

---

### **Simple Fix**

[Official Synthux YouTube channel “Fix” query](https://www.youtube.com/@SynthuxAcademy/search?query=fix)- This link is a search query with “fix” on the Synthux academy channel, spot the 25 min video 

---

### **Simple Touch 2**

**Code / instruments**

[SimplePlaits](https://github.com/JorgeVelez/TallerSimple/tree/main/SimplePlaits) - Mutable instruments Plaits by Jorge Velez

- .bin shared; no code (yet); [discord thread](https://discord.com/channels/802197755442626590/1252740022755528775/135310798104218845)

[Selfdistort Touch](https://github.com/jonwaterschoot/Synthux-Simple-Touch-Plugdata/tree/main/FX/selfdistort_touch) - Selftriggering **d**istortion FX - by jonwtr - inspired by Audrey, can function as a regular distortion or as a droning fx. Made with plugdata - patch and instructions available.

- [.bin shared; code / pd patch on Github](https://github.com/jonwaterschoot/Synthux-Simple-Touch-Plugdata/tree/main/FX/selfdistort_touch); [demo](https://www.youtube.com/watch?v=csmBTfaORss) video YouTube; [discord thread](https://discord.com/channels/802197755442626590/1359248570913394829)

[FM BleepBloop](https://github.com/jonwaterschoot/Synthux-Simple-Touch-Plugdata/tree/main/FX-Instruments/FM_bleepbloop_touch) - randomized sequencer for a complex FM oscillator Made with plugdata - patch and instructions available. - by jonwtr

- .[.bin shared; code / pd patch on Github](https://github.com/jonwaterschoot/Synthux-Simple-Touch-Plugdata/tree/main/FX-Instruments/FM_bleepbloop_touch); [discord thread](https://discord.com/channels/802197755442626590/1393384183602086020)

**Hardware**

**Simple Touch case**

[Simple Touch case - markotardito](https://discord.com/channels/802197755442626590/1249745829053468692/1250867297728462968) - shared on [Synthux Discord](https://discord.com/channels/802197755442626590/1249745829053468692/1250867297728462968) - based on design for Plinky

[Synthux-Simple-Touch-2-case](https://github.com/jonwaterschoot/Synthux-Simple-Touch-2-case) - jonwtr with and without bottom, holes at back for TRS CV jacks - based on design from markotardito

- discord discussion thread

**CV / Clock / mods**

[Clock sync](https://discord.com/channels/802197755442626590/1249745829053468692) - first thread on the Synthux discord on adding clock and or CV to Simple Touch

[PCB breakout - battery + CV + clock + midi](https://discord.com/channels/802197755442626590/1379746221543129149) - thread on Discord to build a breakout, just a concept.

---

### **Simple Designer**

A few of the Synthux and community made instruments are made on top of the Designer PCB, Audrey is probably the most spread and officially sold in the Synthux shop. Therefore Audrey has it’s own section.

[simple-front-face-midi](https://github.com/lucblender/simple-front-face-midi) - a PCB front panel for the simple kit with midi - by discord user helixbyte - [discord thread](https://discord.com/channels/802197755442626590/1039072802956918844/1051486326840623244)

[Simple Canvas](https://github.com/Synthux-Academy/simple-designer-instruments/tree/main/official/canvas) - The Canvas is a cordless patchable West Cost Synthesizer. This synthesizer is born from a collaboration with the Synthux Academy. Its design is inspired by the famous Easel by Buchla. design in coöperation with community member Helixbyte

**Audrey (II)**

Audrey was first shared / made as a diy project on top of the Simple Designer PCB board. Later Synthux started selling the updated kit and standalone unit.

The code of version one and two is the same, the main difference is that V2 has a dedicated enclosure and front plate option.

**Audrey hardware mods**

[Gate input, audio input and other Audrey modifications](https://discord.com/channels/802197755442626590/1366503223124561983/1366503223124561983) - Discord thread - by Bruce

[Adding Gate switch to the Audrey II](https://discord.com/channels/802197755442626590/1351119656009863259) - Discord thread - by wireheadinstruments

**Audrey Case / Looks**

[Black Limba tilted stand for Audrey II](https://discord.com/channels/802197755442626590/1390880501782413492) - Discord thread - by Nick "Walker" Grimshaw

[Black walnut case for Audrey II](https://discord.com/channels/802197755442626590/1383964174429851688) - Discord thread - by faasdnb

[Custom skin: Feedback Gardenscapr](https://github.com/jonwaterschoot/Feedback-Gardenscpr-for-Synthux-Audrey-II) - GitHub - Custom top plate, lasercut case and 3d printed knobs built on top of the Synthux Designer Simple kit - files shared - by jonwtr

[Audrey II 3D Printed Case](https://discord.com/channels/802197755442626590/1353943474998743140/1355504016129527878) - Discord thread - .stl shared - by kurt

[Just in case … bamboo enclosure](https://discord.com/channels/802197755442626590/1350821391401877575) - Discord thread - by KHAGEmusik

---

## Documentation / guides (Electrosmith Daisy)

Synthux instruments are mostly made with **Daisy**, though other boards can fit the Simple PCB's. Therefore some info or guides may be in full about Synthux, some partly.

Note Synthux also has paid-for courses (and/or included with bying kits). Do check out the official website for more info. Here we're trying to link to freely available info.

Daisy can be programmed with **Arduino**, **CPP** and **Plugdata** (puredata), **Max** (oopsy)

Some guides will have info about hardware and adding circuits, where possible mention this.

---

## Electrosmith - Daisy

[Electrosmith](https://electro-smith.com/) - official website

[Daisy Forum](https://forum.electro-smith.com/) - Forum run by Electrosmith ranging topics about all their products 

[Daisy Discord Server](https://discord.gg/ByHBnMtQTR) - contains useful topics from troubleshooting hardware and software to showcases

[Daisy Support Site](https://daisy.audio/) - the main portal linking to documentation for hardware and software, community and the shop

[Daisy Web Programmer](https://flash.daisy.audio/) - web based tool to program the Daisy microcontroller (simple blink test; examples; upload .bin; set the bootloader)

[Electrosmith YouTube Channel](https://www.youtube.com/@electrosmithco)

[Daisy Pinout Table (libDaisy Docs)](https://github.com/electro-smith/libDaisy/blob/master/doc/Daisy_Seed_Rev4_Pinout.csv)

[Daisy Bootloader (libDaisy Docs)](https://github.com/electro-smith/libDaisy/blob/master/doc/md/_a7_Getting-Started-Daisy-Bootloader.md)

---

### **Arduino - DaisyDuino**

DaisyDuino is very similar to the library for C++, libDaisy, though there are differences, and are not interchangeable.

Note that it is also possible to use e.g. VSCode to program Arduino’s - though following the most tutorials you’ll use the dedicated Arduino IDE. Follow the guidelines to setup your environment as you’ll need to 1: install the **STM32CubeProg**, and 2: install the official DaisyDuino library from within the IDE.

[arduino.cc](http://arduino.cc) - main website

[Arduino IDE](https://www.arduino.cc/en/software/#ide) - download the official Arduino software

[Arduino setup instructions from Electrosmith](https://daisy.audio/tutorials/arduino-dev-env) - Note that uploading / compiling and flashing with Arduino to Daisy will require the additional steps laid out in this guide

[Zadig Driver](https://www.notion.so/PD-Daisy-docs-meeting-notes-17a26099464b80b5ac96e25f4994e508?pvs=21) - Reset instructions (Windows Only)

[Synthux Simple Fix](https://github.com/Synthux-Academy/simple-fix-instruments) DaisyDuino - Arduino based instruments 

[Synthux Simple Touch DaisyDuino](https://github.com/Synthux-Academy/simple-touch-instruments/tree/main/daisyduino) - note that the parent folder also contains cpp libDaisy code

- All the Simple Touch 2 instruments are made with Arduino code split into handy blocks. - you will also find the .bin versions you could upload with the webprogrammer.

---

### **General Arduino related**

[Getting Started with Arduino IDE 2](https://docs.arduino.cc/software/ide-v2/tutorials/getting-started-ide-v2/) - An introduction to the software and workflow

---

### **CPP / C++**

[Electrosmith documentation](https://daisy.audio/tutorials/cpp-dev-env/) - Toolchain and VSCode installation

[libDaisy Electrosmith documentation](https://daisy.audio/libDaisy/) - libDaisy is a C++ hardware support library for the Electrosmith Daisy platform.

[libDaisy Github](https://github.com/electro-smith/libDaisy) - official Electrosmith repository

---

### **Plugdata**

Plugdata is a visual programmer based on PureData; though patches made with this method cannot be uploaded as is, HVCC is integrated into Plugdata; it converts pd to compiled code that can be uploaded to Daisy (as well as other formats from full plugins to game related code). HVCC is the Heavy compiler maintained by one of the members who have joined the community: dreamer, aka Wasted Audio. 

[Plugdata.org](http://Plugdata.org) - official plugdata website, stable and nightly releases

[**hvcc](https://wasted-audio.github.io/hvcc/) -** Heavy compiler collection - `hvcc` is a python-based dataflow audio programming language compiler that generates C/C++ code and a variety of specific framework wrappers.

- [getting started (hvcc docs)](https://github.com/Wasted-Audio/hvcc/blob/develop/docs/01.introduction.md)
- [Tips & Tricks and known limitations (hvcc docs)](https://github.com/Wasted-Audio/hvcc/blob/develop/docs/02.getting_started.md)
- [Plug Data – Compiling Patches with heavy](https://plugdata.org/docs/book/CompilingPatches.html)
- [Plug Data and Heavy - Wasted Audio YouTube Channel](https://www.youtube.com/@Wasted-Audio)
- [Supported Vanilla Objects (hvcc docs)](https://github.com/Wasted-Audio/hvcc/blob/develop/docs/09.supported_vanilla_objects.md)
- [Unsupported Vanilla Objects (hvcc docs)](https://github.com/Wasted-Audio/hvcc/blob/develop/docs/10.unsupported_vanilla_objects.md)
- [Daisy Section in the hvcc docs](https://github.com/Wasted-Audio/hvcc/blob/develop/docs/03.gen.daisy.md)

[Daisy Seed and plugdata](https://jasperkempf.github.io/DIY-Synth-DaisySeed-and-PlugData/) - guide by **Jasper Kempf** that goes over all the basics, useful for all Daisy related designs

[Beginners guide to programming Daisy with Plugdata](https://jonwaterschoot.github.io/plugdata-daisy-simple/)  - unfinished guide started by jonwtr as he was learning plugdata while using Synthux boards

- can be applied to general Daisy seed - geared towards Simple boards and Simple Touch
- contains examples on how to implement components like potentiometers and switches

[Hardware test patches](https://github.com/jonwaterschoot/Synthux-Simple-Touch-Plugdata/tree/main/HW_test-patches) - a list of simple troubleshooting patches to test components (also contains .bin files that can be used for non PD specific testing)

[Awesome Puredata](https://github.com/MikeMorenoDSP/awesome-puredata) - list of Pure Data documentation and other useful resources

**Pure Data / Plug Data lessons:**

[QCGInteractiveMusic - Realtime Music and Sound with Pure Data Vanilla](https://youtu.be/SLx7kjuFheY?si=Al6hmUHhqnK8-pkg)[Sound Codex - Plug Data Introduction](https://www.youtube.com/watch?v=EoOEZYn4xdA)

[Sound SImulator - Pure Data Tutorial Series](https://youtu.be/1o5Wasmd8yU?si=8Cyid-OEyHV6KcKr)

---

## Social

**Discord servers:**

[Join the Synthux community and Discord server](https://www.synthux.academy/join) - by signing up via the official website (free) 

[Daisy electrosmith](https://discord.gg/ByHBnMtQTR) - official Electrosmith Discord server

[HVCC](https://discord.gg/fmxJveg) - The heavy hvcc compiler for Pure Data patches.

---

## General hardware info:

### DIY tips / tricks

**Soldering**

Roey has a few tips on soldering in these videos:

[Overview of tools to get started](https://youtu.be/2UCG4jI6atU?si=QVxos6U0raJAYQDd) - learn about basic tools like the soldering gear

[Soldering Simple Fix](https://youtu.be/YEbMJKAfjao?t=215&si=qbOT8vYWN7qf_taG) - Demo of soldering Daisy and the components like jacks

[Soldering Simple Designer](https://youtu.be/3HX0H36eN_A?si=NKhLZckNGSWlJS0-) - a demo of soldering components onto the Simple Designer PCB

**Other tutorials:**

[https://youtu.be/jz67KgHzXVw?si=X0Zl9I1Bv41mLVkE](https://youtu.be/jz67KgHzXVw?si=X0Zl9I1Bv41mLVkE) Another great rundown on how to get perfect solder joints

[Adafruit soldering guide](https://learn.adafruit.com/adafruit-guide-excellent-soldering/tools) - a written guide with clear illustrations 

Soldering + electronics tools:

- Soldering iron:
    - [Pinecil](https://pine64.org/documentation/Pinecil/) - a small but extremely powerful iron, it has a small screen with customizable settings, you will need an additional power source, either a strong USB charger (USB-C PD65W, 3.25A, 20V) or a DC barrel supply up to 24V. (check docs)
    - [Weller WE1010](https://www.weller-tools.com/eu/gb/industrial-soldering/products/soldering-stations/we1010-set-230v) - a complete kit with a station, soldering iron and safety rest
- flux
- soldering tin
- desoldering: wick -
- desoldering pump
- multimeter
- helping hands
    - [omnifixo](https://omnifixo.com/en-eu/products/omnifixo-m4-makers-third-hand) - third helping hand, has some nifty features like option to connect power through or isolate, uses clamps and magnets.

### **Components for Simple PCB’s**

- list of components compatible with Synthux PCB's
- sensors included in Daisy libraries
- link to Electrosmith docs
- non supported / custom components - e.g. the faders that come in the kits can be used in a ‘hacked’ way

### **Manufacturing**

### **3D Software**:

[FreeCAD](https://www.freecad.org/) - is an open-source parametric 3D modeler made primarily to design real-life objects of any size.

[Blender](https://www.blender.org/) - open source 3D modeling and animation tool, though not CAD, can be used to create STL and other physical modeling formats, plugins with CAD like abilities exist.  

### **Circuit & PCB Design Software:**

[KiCad](https://www.kicad.org/) - is a free software suite for electronic design automation (EDA). It facilitates the design and simulation of electronic hardware for PCB manufacturing.

[CircuitMaker](https://circuitmaker.com/) - free-to-use schematic and PCB design tool for the Open Source Hardware community.

[Falstad](https://www.falstad.com/circuit/) - Circuit Simulator applet

[Cirkit Designer](https://www.cirkitstudio.com/) - online free breadboarding tool (they have Daisy as a component) - Design, Simulate and Prototype Circuits. They have a built in AI assistant.

[Fritzing](https://fritzing.org/) - is an open-source hardware initiative, no longer a free (gratis) download, still available via GitHub

[Tinkercad](https://www.tinkercad.com/) - available for free with account - by Autocad; contains a breadboard, circuit and simple 3D application

[circuito](https://www.circuito.io/) - online app that generates instant and accurate schematics and code for your electronic circuit.

### **PCB Design resources / lessons and best practices:**

- list

### **Design, UI, UX**

[Front Panel UI Kit](https://discord.com/channels/802197755442626590/1044290461772304424) - Discord thread - Affinity Designer Template + SVG - by felix | mindful devices

### **Laser cutting**

[Makercase](https://www.makercase.com/#/) - MakerCase is a web-based application for designing boxes or project cases for laser cutters and CNC routers. (options to add kerf, fingers, etc …)

[Boxes.py](https://boxes.hackerspace-bamberg.de/?language=en) - plain boxes and other things like shelving, stands, …  an Open Source box generator written in Python. It features both finished parametrized generators as well as a [Python API](https://hackaday.io/project/10649-boxespy) for writing your own. 

---

## Synthux community members

How to phrase / sort these?

**Worked on official Synthux instruments:**

Nick Donaldson - worked on Audrey, Spotykach

Vlad - worked on Simple Touch, author of the official firmware

Roey Tsemah - Founder of Synthux 

Helixbyte - worked on Canvas, one of the first big projects built on top of the Simple Designer board.

**Members who sell / made a (commercial) available project / instrument / working at a synthcompany**

[Infrasonic Audio](https://www.infrasonicaudio.com/about) - Nick Donaldson – Founder, Owner, and Chief Engineer

- 
- 

**Community members playing with Synthux instruments**

- 
- 
- 

## Sound and music - made with Synthux related gear:

- list
- list

---

---

---

---

Addendum; we’re also looking at the structure of the Synthux Discord channels

## **Restructuring the Synthux Discord server channels:**

- under general: adding a general Simple instruments channel for posts applicable to all simple boards
    - **simple-general**
        - moving posts between forums is not possible in Discord. We could manually copy some of the most relevant posts from the other channels and link to the archived / closed threads
    - **closing** the other simple / threads / adding links to new threads
        - from the forum channels section:
            - **forum-beginners**
            - **forum-simple**
        - Projects by members section:
            - **simple-synth**
