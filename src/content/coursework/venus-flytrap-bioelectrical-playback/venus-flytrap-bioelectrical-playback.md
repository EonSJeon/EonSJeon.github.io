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
cover:
  src: "./device-on-lab-bench.jpeg"
  alt: "Assembled Venus flytrap recording and playback device with digital control and analog circuitry in a transparent enclosure."
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

<figure>

![Senior Design presentation table with Venus flytraps, a display showing observation footage, and a laptop running the MATLAB application.](./project-fair-setup.jpeg)

<figcaption>The Senior Design setup brought together the plants, observation footage, and control application for the team's recording and stimulation demonstration.</figcaption>
</figure>

## Final system

A **Seeeduino** connected directly to a laptop over **USB/serial**. C++ firmware handled signal acquisition and waveform output, while a **MATLAB App Designer** application supported monitoring, visualization, recording, waveform transfer, and playback control. Supporting MATLAB scripts enabled signal analysis and digital-system verification.

The workflow connected plant-signal acquisition, laptop recording and visualization, and embedded electrical playback into one system.

<figure>

![Recording and playback device in a transparent enclosure, with input/output leads, circuit boards, and a USB cable.](./device-on-lab-bench.jpeg)

<figcaption>The team's assembled device contains analog signal conditioning and digital control. My responsibility was the digital system, including firmware and the laptop application.</figcaption>
</figure>

## An application from recording to playback

The Hashirama application supported input/output monitoring, recording and CSV storage, interval selection, and waveform upload to the device. Its workflow brought device connection, monitoring, recording, and playback preparation into one interface.

<figure>

![Hashirama MATLAB application Monitor view with port selection, input/output plots, and recording and storage controls.](./hashirama-app.png)

<figcaption>The Hashirama Monitor interface built with MATLAB App Designer. This is its empty initial view before connection, rather than a recorded experimental waveform.</figcaption>
</figure>

## My contribution

I designed and programmed the complete digital subsystem, including the Seeeduino firmware, MATLAB software and interface, device communication, and recording/playback workflow. The biological experimentation and analog hardware were parts of the team effort.
