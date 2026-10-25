---
title: "Electronics Design Laboratory"
summary: "Hands-on electronics laboratories spanning analog circuits, digital logic, embedded systems, and a MATLAB communication chain with QPSK and Viterbi decoding."
categoryLabel: "Laboratory coursework"
status: "Completed coursework"
period: "Fall 2022"
institution: "KAIST"
courseCode: "EE305"
courseTitle: "Introduction to Electronics Design Lab"
type: "laboratory"
displayOrder: 30
featured: true
approvedForPublication: true
tags: ["MATLAB", "C / AVR", "Digital logic", "Analog circuits", "Digital communications"]
---

## From analytical models to working circuits

KAIST EE305 combined electronics experiments, circuit construction, embedded programming, and communication-system simulation. These assignments were completed in course laboratory groups, connecting theoretical models with measurements, debugging, and implementation.

## Digital audio communication

Experiments 7–8 implemented a simulated audio transmission chain in MATLAB: PCM quantization and encoding, QPSK modulation, an AWGN channel, and demodulation. The system was extended with rate-1/2 convolutional coding and a four-state Viterbi decoder.

The assignments compared reconstructed audio and simulated bit-error behavior with and without coding. The decoder targeted the course's specific trellis, and the communication chain was a simulation rather than a wireless-radio demonstration.

## ALU-based calculator

Experiments 4–5 combined an ALU, registers, flip-flops, input switches, and control logic in a breadboard calculator. The prototype stored operands, performed OR and XOR operations, and supported resetting the stored state. Building it involved debugging switch conditioning and component behavior.

## Further laboratory work

- **Embedded stopwatch:** ATmega128A firmware in C, using timer and external interrupts with an LCD interface.
- **Analog audio circuits:** Amplification and high-pass/low-pass filtering, comparing measured responses with theoretical predictions.
- **Instrumentation and devices:** RC transients, RLC response, impedance and phase measurement, and diode/LED–phototransistor experiments.
