# orderorder
Creating a home to collect plans on the restructuring of things in the synthux github

I, Jon (aka jonwtr), have been gathering discussions from discord, and my own thoughts into one big chunk of text, below is the summary by LLM Gemini.
It's the first step in taking a methodological approach in restructuring the Simple Touch repositories.
LLM's use of language is not always my fovorite, but it does help to bring order in my chaos.

[This was my conversation with Gemini](https://gemini.google.com/share/c696e5ea4923)

My first plan is to now take a deeper dive into the work that Rosa - vitrinekast has already done a while back in studying the approach with touchstring as an example (repo hidden atm)

Here's a list I made that could serve as the base for a manual for each instrument:

list of things for the json manifest:

- title
- author
- instrument hardware (simple touch, spotykach, Audrey ii, custom designer, etc.)
- short description - categories, tags?
- microcontroller (going to be defaulting to 99% Daisy Seed with .bin as a result, but we want options to be free)
- framework (cpp libdaisy, arduino daisyduino, plugdata hvcc)
- existing ports (cpp, ino, pd, web …)
- version
- assets:
    - .bin
    - images
    - yt.be / ig / …
    - source / project url 1
    - url 2
    - other (e.g. mods, .stl)
- controls:
    - standard controls:
      - 2 sliders s36, s37 right
      - 6 pots s30 - s35 
      - 12 touchpads p0 - p11
      - switch 1: 3 positions on/off/on (two pins s09 - s10)
      - switch 2: 3 positions on/off/on (two pins s07 - s08)
      - userled 
    - mods:
      - Gate pin / clock (no extra circuit)
      - trs midi
      - other

often controls will have multiple options when used in combo: eg. P10 + P0/P02 - arpeggiator speed +/-


---
---
---
---

# Synthux Firmware Restructuring & Standardization Plan

**Executive Summary**
This document outlines the strategic roadmap for migrating Synthux Academy's instruments from a fragmented repository state into a scalable, open-source multi-repo ecosystem. By strictly separating the "Kitchen" (how developers build and track tasks using native GitHub tools) from the "Menu" (how end-users browse and flash firmwares), we avoid technical debt while fostering an accessible, community-driven development environment.

---

## Index
1. [Architecture: The Multi-Repo Ecosystem](#1-architecture-the-multi-repo-ecosystem)
2. [The Golden Standard: Repository Structure](#2-the-golden-standard-repository-structure)
3. [The Schema: manifest.json](#3-the-schema-manifestjson)
4. [The Kitchen: Task Tracking & Collaboration](#4-the-kitchen-task-tracking--collaboration)
5. [Contributor Onboarding: CONTRIBUTING.md](#5-contributor-onboarding-contributingmd)
6. [The Menu: Firmware Browser & Flasher](#6-the-menu-firmware-browser--flasher)

---

## 1. Architecture: The Multi-Repo Ecosystem

To maximize scalability and community involvement, Synthux will adopt a **Multi-Repository Architecture**. 

* **The Core Repositories:** The current `simple-touch-instruments` repository will be dismantled. Each instrument (e.g., TouchBass, TouchString) will receive its own standalone repository under the Synthux-Academy organization.
* **Community Repositories:** Third-party developers can host their own instrument repositories outside of the main Synthux organization. As long as they adhere to the "Golden Standard" (detailed below), their instruments can be seamlessly integrated into the Synthux firmware browser.
* **Framework Unification:** The primary goal is transitioning all legacy DaisyDuino codebases to C++ (`libDaisy`). However, the architecture is designed to track and support `ino` and `plugdata` builds during the transition phase.

---

## 2. The Golden Standard: Repository Structure

Every instrument repository—whether internal or community-built—must follow a strict, flat file structure. This ensures predictability for both contributors and automated crawler scripts.

* **`/src`**: Contains the active source code (C++, Arduino, or Plugdata files).
* **`/bin`**: Contains the compiled binary file(s) ready for the web flasher.
* **`/assets`**: Contains images, diagrams, and other media (e.g., `.stl` files).
* **`manifest.json`**: The machine-readable configuration file detailing controls and metadata.
* **`README.md`**: Human-readable setup instructions and patching notes.
* **`TODO.md`**: The specific porting checklist or roadmap for that instrument.

---

## 3. The Schema: manifest.json

The `manifest.json` is the linchpin of the automated ecosystem. It provides all the necessary metadata for the future library browser to dynamically render user interfaces, control mappings, and flashing instructions. 

```json
{
  "title": "TouchBass",
  "author": "Synthux Academy",
  "hardware": "Simple Touch",
  "description": "A deep, paraphonic bass synthesizer with arpeggiator.",
  "tags": ["bass", "monophonic", "paraphonic", "arpeggiator"],
  "version": "1.0.1",
  "microcontroller": "Daisy Seed",
  "framework": "cpp",
  "existing_ports": ["cpp", "ino"],
  "assets": {
    "bin": "./bin/TouchBass.bin",
    "images": [
      "./assets/front_panel.jpg"
    ],
    "media_urls": [
      "[https://youtu.be/example](https://youtu.be/example)"
    ],
    "source_urls": [
      "[https://github.com/Synthux-Academy/TouchBass](https://github.com/Synthux-Academy/TouchBass)"
    ],
    "other": {
      "3d_print_case": "./assets/case.stl"
    }
  },
  "controls": {
    "standard": {
      "sliders": {
        "s36": "Filter Cutoff",
        "s37": "Envelope Amount"
      },
      "pots": {
        "s30": "Osc 2 Amount",
        "s31": "Osc 1 Pitch"
      },
      "touchpads": {
        "p0": "Note C",
        "p10": "Modifier 1"
      },
      "switches": {
        "sw2_s07_s08": {
          "description": "Arpeggiator",
          "up": "On",
          "center": "Off",
          "down": "Latch"
        }
      },
      "userled": "Arpeggiator Tempo Sync"
    },
    "combos": [
      {
        "keys": ["p10", "p0"],
        "action": "Arpeggiator Speed -"
      }
    ],
    "mods": {
      "gate_clock": "In/Out via Pin 15",
      "trs_midi": "MIDI In via Pin 13"
    }
  }
}
```

---

## 4. The Kitchen: Task Tracking & Collaboration

To avoid the technical debt of maintaining custom tracking software, Synthux will rely entirely on GitHub's native, industry-standard tools. This makes the project instantly familiar to any open-source contributor.

* **GitHub Issues:** Used for all bug reports, feature requests (e.g., "Add MIDI support"), and porting tasks.
* **Standardized Labels:** Issues will be tagged with clear, actionable labels such as `good first issue`, `enhancement`, `c++ port`, and `help wanted`. This allows volunteers to easily filter and find tasks suited to their skill level.
* **Organization Project Board:** A single, automated GitHub Project Board (Kanban style) will exist at the Synthux organization level. It will automatically pull in Issues and Pull Requests (PRs) from all individual instrument repositories, providing a unified, visual overview of the entire ecosystem's health and progress.

---

## 5. Contributor Onboarding: CONTRIBUTING.md

To minimize friction for new volunteers and reduce the burden on core maintainers, a master `CONTRIBUTING.md` file will be placed in every repository. GitHub automatically surfaces this file when a user opens a PR or Issue.

**Key components of the CONTRIBUTING.md guide:**
* Instructions on how to fork the repository, clone it locally, and create a new branch.
* A link to the standard C++ (`libDaisy`) boilerplate.
* A strict requirement to update the `manifest.json` whenever modifying physical controls or adding features.
* The standard PR workflow: Submit the PR, wait for continuous integration checks (if any), and await a code review from a core Synthux maintainer.

---

## 6. The Menu: Firmware Browser & Flasher

The final piece of the ecosystem is the user-facing library gallery. By standardizing the data layer (the `manifest.json`), the frontend application can be built, modified, or entirely replaced without ever touching the instrument repositories.

* **The Crawler:** A lightweight script (or MkDocs generator) will fetch the public `manifest.json` files from known internal and external repositories.
* **The Gallery UI:** The frontend will use the parsed JSON to dynamically render search tags, control mapping graphics, YouTube embeds, and download links.
* **Web Flashing:** The UI will link directly to the `.bin` files via the Web Serial API, allowing users to flash their Daisy Seed directly from their browser without needing a development environment.
