---
title: "Venus Flytrap Bioelectrical Signal Recording and Playback"
summary: "A Seeeduino–MATLAB system recorded a Venus flytrap's electrical response and replayed it as stimulation, successfully triggering trap closure."
categoryLabel: "Senior Design / Capstone"
status: "Completed · successfully demonstrated"
period: "Spring 2024"
institution: "Georgia Institute of Technology"
courseCode: "ECE 4723"
courseTitle: "Interdisciplinary Capstone Design"
type: "senior-design"
displayOrder: 10
featured: true
approvedForPublication: true
clips:
  - src: "plant-closure.mp4"
    poster: "plant-closure-poster.jpg"
    title: "Electrically triggered trap closure"
    caption: "A full recording of trap closure from the original device experiment, identified by the project team as electrical stimulation from the recording/playback system."
    width: 720
    height: 1280
  - src: "waveform-upload.mp4"
    poster: "waveform-upload-poster.jpg"
    title: "Selecting and uploading a waveform"
    caption: "The original bench recording shows waveform-range selection in Hashirama, uploading controls and the USB-connected hardware."
    width: 320
    height: 568
cover:
  src: "./device-on-lab-bench.jpeg"
  alt: "Assembled Venus flytrap recording and playback device with digital control and analog circuitry in a transparent enclosure."
tags: ["Bioelectronics", "Seeeduino XIAO", "C++", "MATLAB", "MATLAB App Designer", "USB/serial"]
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
video:
  youtubeId: "vUATFXuZiM0"
  title: "Project explanation video"
  caption: "The team's walkthrough of the Venus flytrap recording/playback device and project workflow."
links:
  - label: "Project repository"
    url: "https://github.com/EonSJeon/Gatech-ECE4723-PROJ"
  - label: "Final project poster"
    url: "https://github.com/EonSJeon/Gatech-ECE4723-PROJ/blob/main/docs/poster/venus-flytrap-recording-playback-poster.jpeg"
---

## Recording a biological response, then driving it electrically

The Venus flytrap offers an unusually visible interface to plant electrophysiology: electrical activity accompanies the rapid movement of its trap. Our Spring 2024 Senior Design project asked whether we could capture a signal associated with that response, keep it as a reusable recording, and send an electrical waveform back through a plant interface to induce closure.

The resulting instrument combined electrodes and analog signal conditioning, a Seeeduino XIAO, a USB-connected laptop, and a MATLAB application called **Hashirama**. The team demonstrated both electrical recording and device-induced trap closure. The walkthrough above explains the wider system; the short videos below show physical closure and waveform uploading.

The project was advised by **Dr. William Hunt** and developed in association with **Vivent Biosignals**. The application context was plant electrophysiology, and the delivered instrument connected signal recording with an observable response to electrical stimulation.

<figure>

![Senior Design presentation table with Venus flytraps, a display showing observation footage, and a laptop running the MATLAB application.](./project-fair-setup.jpeg)

<figcaption>The Senior Design setup brought together living plants, observation footage, the assembled instrument, and the laptop interface.</figcaption>
</figure>

## From the plant to the laptop and back

Recording and stimulation require different interfaces to the same biological experiment. On the input side, small electrode signals pass through amplification, filtering, and a DC offset before reaching the microcontroller's ADC. The offset places the conditioned waveform in the device's readable range. On the output side, the microcontroller's DAC drives a conditioning stage that attenuates the signal and removes the offset before the stimulation electrodes.

| Stage | Role in the final prototype |
| --- | --- |
| Plant electrodes and input conditioning | Connect the experiment to an amplified, filtered, biased electrical input. |
| Seeeduino XIAO | Digitize the conditioned input, buffer uploaded waveforms, and generate playback output. |
| USB/serial and Hashirama | Move data to the laptop, visualize and save recordings, and prepare a selected waveform for replay. |
| Output conditioning and electrodes | Adapt the DAC output for the plant-stimulation setup. |

The same device could therefore participate in a complete loop: acquire a signal, inspect and store it, select a useful interval, upload that interval, and observe the response during electrical playback. MATLAB ran directly on the laptop.

<figure>

![Recording and playback device in a transparent enclosure, with input/output leads, circuit boards, and a USB cable.](./device-on-lab-bench.jpeg)

<figcaption>The assembled instrument contains the team's analog conditioning and digital control hardware. I designed and programmed the complete digital subsystem.</figcaption>
</figure>

## Embedded acquisition and waveform output

The firmware, **Senju**, uses an Arduino-style C++ implementation. Its final configuration reads the input on **A1** with 12-bit ADC resolution and writes playback on **A0** with 10-bit DAC resolution. The software converts between converter codes and a 3300 mV device scale; those are device-interface quantities after analog conditioning.

The controller separates idle, upload, and monitor states. Indicator pins identify these states, while a circular buffer holds the waveform received from the laptop. In monitoring, the controller reads the ADC, chooses an output sample from the playback buffer, writes the DAC, and sends a timestamped input/output record to the host. A separate command generates a finite pulse and collects its response.

This arrangement puts the sample generation and acquisition next to the physical interface while leaving visualization, recording management, and waveform selection to the laptop. The buffer is part of the device's state: selecting a file on the laptop and uploading samples to the controller are distinct operations.

## A small protocol between the firmware and MATLAB

Both ends communicate at **9600 baud**. MATLAB sends 16-bit commands and waveform samples; the firmware reconstructs each value from its low byte followed by its high byte. Control words sit outside the intended 10-bit waveform-code range.

| Command | Operation |
| --- | --- |
| `SIG_IDLE` / `0x4944` | Return to the idle state. |
| `SIG_UPLOAD` / `0x554C` | Receive a waveform into the playback buffer. |
| `SIG_MONITOR` / `0x4D4E` | Acquire input and produce playback output. |
| `SIG_IMPULSE` / `0x4950` | Generate a finite pulse and collect the response. |
| `SIG_FLUSH` / `0x464C` | Clear the existing playback waveform. |

The device sends ASCII records in the opposite direction:

```text
timestamp_ms,input_mV,output_mV;
```

The semicolon separates records, and commas separate the three values. Saved CSVs use `Time` with `Volt_In`, `Volt_Out`, or both. Time is in milliseconds and voltage is in millivolts at the conditioned device interface. A saved value should therefore not be interpreted directly as the original voltage at a plant electrode.

## Hashirama: inspect, record, select, and upload

The MATLAB App Designer application brings the instrument's operations into two main views. **Monitor** shows input and output together, while **Uploader** prepares a recording for replay. Keeping these activities in one application makes it possible to move from an observed event to a reusable stimulation waveform without manually transferring data between unrelated tools.

| Monitor mode | Intended workflow |
| --- | --- |
| `Record` | Observe and record the incoming signal. |
| `Playback` | Run an uploaded waveform from the controller. |
| `Record & Playback` | Observe input and output during the same experiment. |
| `Impulse Response` | Apply a finite pulse and examine the collected response. |

Monitor includes time-scale controls, interval-selection cursors, and signal summaries. Recording can be started and stopped independently of the visible plot; the application can save a recording or a selected interval as CSV. These controls help separate the longer observation period from the shorter event chosen for later analysis or playback.

<figure>

![Hashirama MATLAB application Monitor view with port selection, input/output plots, and recording and storage controls.](./hashirama-app.png)

<figcaption>The final Hashirama Monitor interface. This screenshot is its empty initial view before connection, rather than an experimental trace.</figcaption>
</figure>

A typical recording-to-playback session follows this sequence:

1. Connect the instrument over USB, launch Hashirama, and select its serial port.
2. Choose a Monitor mode and use **RUN/STOP** to control acquisition or output.
3. Record the event and save the result as CSV, or save a selected interval from the plot.
4. In Uploader, load the CSV and choose the full waveform or a smaller range.
5. Upload the prepared samples, return to Monitor, and start Playback or Record & Playback.

During preparation, the application normalizes the imported time origin, removes duplicate timestamps, and interpolates the selected waveform on a nominal 2 ms grid using spline interpolation. It then converts millivolt values into output codes for transmission. This grid defines waveform preparation; it does not by itself establish the achieved end-to-end sampling rate.

## Measurements and verification

The retained evidence includes original CSV recordings, pulse/response figures, oscilloscope captures, and ten sine-wave verification sets from **10 Hz through 100 Hz**. The paired oscilloscope images show different saved views; they are not a repeatability study or a frequency-by-frequency success rate.

Bench verification and plant demonstration address different questions. The former checks how signals pass through the instrument and appear in the software. The latter shows an observable biological response when the assembled system is used for electrical stimulation. Neither should be substituted for the other.

<figure>

![Recorded finite pulse in red and device response in blue, plotted against time in milliseconds with a millivolt amplitude axis.](./impulse-response-overlay.jpg)

<figcaption>An original saved pulse/response plot from the project. The axes describe time and conditioned device-interface voltage, including the effect of the analog interface.</figcaption>
</figure>

One of the two archived closure recordings is included on this page. It documents the team's electrically induced closure demonstration, without establishing a numerical success rate, response-latency distribution, or controlled comparison between stimulation strategies.

## Prototype boundaries and engineering lessons

The preserved software also makes the next engineering steps concrete. The application allows more upload samples than the firmware's 10,000-sample playback buffer holds. The monitor loop includes a delay and serial output, so its nominal 2 ms indexing interval cannot be treated as a guaranteed 500 Hz acquisition rate. The impulse-response export path needs its transfer length reconciled with its smaller response buffers before reuse.

A robust revision would align upload limits across the two programs, track the valid length of each buffered waveform, retain incomplete serial records across reads, and separate sample timing from communication and display work. These are instrument-design issues: a working demonstration and a reusable acquisition platform require different levels of timing, state, and data-integrity control.

The final App Designer file contains the application code and callbacks. Earlier MATLAB scripts and RTOS experiments remain development history rather than required launch components. The available source preserves the prototype; running it with hardware still requires the matching board toolchain, circular-buffer library, analog circuitry, and electrodes.

## My contribution and project materials

I designed and programmed the **complete digital system**: the Seeeduino firmware, MATLAB application and interface, serial communication, acquisition and monitoring, waveform preparation, recording, and playback workflow. The wider team integrated the analog hardware and biological experiments with this digital subsystem.

The [project repository](https://github.com/EonSJeon/Gatech-ECE4723-PROJ) preserves the final application and firmware, implementation notes, measured data, original media, and development history. The [final poster](https://github.com/EonSJeon/Gatech-ECE4723-PROJ/blob/main/docs/poster/venus-flytrap-recording-playback-poster.jpeg) brings together the motivation, circuit diagrams, software design, and original verification discussion.
