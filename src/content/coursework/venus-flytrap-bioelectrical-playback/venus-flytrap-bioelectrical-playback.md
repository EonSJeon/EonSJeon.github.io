---
title: "Venus Flytrap Bioelectrical Signal Recording and Playback"
summary: "A Seeeduino–MATLAB system recorded a Venus flytrap's electrical response and replayed it as stimulation, successfully triggering trap closure."
categoryLabel: "Senior Design / Capstone"
status: "Completed · successfully demonstrated"
period: "2024"
institution: "Georgia Institute of Technology"
courseCode: "ECE 4723"
courseTitle: "Interdisciplinary Capstone Design"
type: "senior-design"
displayOrder: 10
featured: true
approvedForPublication: true
tags: ["Bioelectronics", "Seeeduino", "C++", "MATLAB", "MATLAB App Designer", "USB/serial"]
contribution: "Designed and programmed the complete digital system: embedded firmware, MATLAB application, communication, recording, monitoring, and playback."
collaborators:
  - name: "Amanda Hegadorn"
    url: "https://www.linkedin.com/in/amanda-hegadorn-6493461b0/"
  - name: "Ross Gunther"
    url: "https://www.linkedin.com/in/ross-gunther/"
  - name: "Colton Walker"
    url: "https://www.linkedin.com/in/colton-lee-walker/"
  - name: "Skylar Kennett"
    url: "http://linkedin.com/in/skylar-kennett/"
  - name: "Hector Alejandro Duran"
    url: "https://www.linkedin.com/in/hector-duran-0a669316b/"
---

## Recording and replaying a plant's electrical response

The Venus flytrap responds to stimulation through electrical signaling that precedes its rapid closing motion. This interdisciplinary capstone explored whether a signal associated with closure could be recorded and then reproduced to induce closure electrically.

The team demonstrated both parts of that workflow: recording the electrical signal and triggering trap closure through waveform playback.

## Final system

A **Seeeduino** connected directly to a laptop over **USB/serial**. C++ firmware handled signal acquisition and waveform output, while a **MATLAB App Designer** application supported monitoring, visualization, recording, waveform transfer, and playback control. Supporting MATLAB scripts enabled signal analysis and digital-system verification.

The workflow connected plant-signal acquisition, laptop recording and visualization, and embedded electrical playback into one system.

## My contribution

I designed and programmed the complete digital subsystem, including the Seeeduino firmware, MATLAB software and interface, device communication, and recording/playback workflow. The biological experimentation and analog hardware were parts of the team effort.
