---
title: "RoBACHtic Symphony — Educational Robotic Violin Kit"
summary: "An educational robot that connects piano-keyboard input to violin bow movement and electronic note tones. I led mechanical design and fabrication for this four-person Junior Design project."
categoryLabel: "Junior Design"
status: "Completed coursework prototype"
period: "2023"
institution: "Georgia Institute of Technology"
courseCode: "ECE 3011"
courseTitle: "Design Fundamentals"
type: "junior-design"
displayOrder: 20
featured: false
approvedForPublication: true
cover:
  src: "./front-assembly.jpg"
  alt: "Front assembly of RoBACHtic Symphony, combining its keyboard, violin model, and bow mechanism."
tags: ["SolidWorks", "3D printing", "Laser cutting", "Mechatronics", "BBC micro:bit"]
contribution: "Led mechanical design and fabrication, including SolidWorks models, mechanical components, laser-cut wooden parts, and revisions during integration testing."
video:
  youtubeId: "gud--ybyr-s"
  title: "RoBACHtic Symphony — educational robotic violin demonstration"
  caption: "The team's prototype in action: keyboard input controls the bowing mechanism while the micro:bit speaker produces electronic note tones."
collaborators:
  - name: "Victoriano Alfaro"
    role: "Electrical design"
    url: "https://www.linkedin.com/in/victor-alfaro-05aa3b1aa/"
  - name: "Christian Santiago"
    role: "Integration, testing, and mechanical/electrical support"
  - name: "Christopher Semali"
    role: "Software development"
    url: "https://www.linkedin.com/in/semali-christopher/"
links:
  - label: "Project repository"
    url: "https://github.com/EonSJeon/ECE3011-RoBACHtic_Symphony"
  - label: "Original team repository"
    url: "https://github.com/BellLabsEra/RoBACHtic-Symphony"
  - label: "Demonstration video"
    url: "https://youtu.be/gud--ybyr-s"
  - label: "Final design document, lesson plan & BOM"
    url: "https://github.com/BellLabsEra/RoBACHtic-Symphony/blob/main/ECE3011%20Team%20C2%20Final%20Document%20Package.pdf"
---

## A physical connection between music and code

RoBACHtic Symphony was developed by a four-person team for Georgia Tech's ECE 3011 — Design Fundamentals course in 2023. The project explored an educational kit for fifth-grade STEAM activities, making the connection between musical notes and violin bow movement visible through a physical model.

The team combined a piano-style keyboard, a BBC micro:bit, servo-driven mechanisms, and a scaled violin model. My role was to lead mechanical design and fabrication, from SolidWorks models to the assembled hardware.

<figure>

![Front views of the completed RoBACHtic Symphony prototype, showing the keyboard, wooden frame, violin model, and bow mechanism.](./Front_View_of_RoBachtic_Symphony_Final_Build_pic1.png)

<figcaption>Two front views of the completed prototype, showing the piano-style keyboard, violin model, geared bow mechanism, and laser-cut enclosure.</figcaption>
</figure>

## From a key press to bow movement

The keyboard supplies note input to the controller, which coordinates two outputs: the robotic arm's position relative to the violin strings and an electronic note from the micro:bit's built-in speaker. Octave buttons change the available note range.

In the final demonstration, the team exercised all 12 piano keys in two octave ranges and showed the arm moving to the string position mapped to the selected note. The mechanism also demonstrated basic up/down bow movement. The sound came from the micro:bit speaker; acoustic violin performance was not established.

## Mechanical design and fabrication

I created and updated the SolidWorks models, built the mechanical components, and fabricated the laser-cut wooden parts. The assembly brought together the shoulder and elbow mechanisms, a servo-driven linear bow, and housings for the keyboard and main electronics.

The mechanical work required repeated fit and motion checks as the subsystems came together. The team checked that the 3D-printed and laser-cut parts fit the electrical components and verified the alignment of the frame's mounting holes before assembly. I revised the mechanical design in response to testing and integration feedback.

<div class="project-gallery">

<figure>

![Labeled SolidWorks model above the assembled prototype, identifying the shoulder, elbow, and bow-movement servos, linear bow, keyboard, and electronics housings.](./Alt_View_of_RoBachtic_Symphony_Final_Build_pics.png)

<figcaption>From SolidWorks to the physical build: the labeled views locate the three actuation mechanisms, linear bow, keyboard, and electronics housings.</figcaption>
</figure>

<figure>

![Close view inside the wooden enclosure showing the gear drive, vertical shaft, control boards, and wiring.](./mechanism-and-electronics.jpg)

<figcaption>The enclosure brings the gear drive and electronics together, showing why component clearances, mounting positions, and wiring had to be considered during integration.</figcaption>
</figure>

</div>

## An educational kit and lesson plan

Alongside the prototype, the team prepared a design document, bill of materials, lesson plan, and project notebook. The lesson plan was designed around Georgia's fifth-grade Music and Computer Science Standards of Excellence, connecting musical notes and bow positions to programmable physical actions.

The proposed activities moved from reading sheet music and discussing digital sound to kit assembly, guided practice, and composing a short melody for peer review. These were planned classroom activities; learning gains were not evaluated in the project.

The [final document package](https://github.com/BellLabsEra/RoBACHtic-Symphony/blob/main/ECE3011%20Team%20C2%20Final%20Document%20Package.pdf) includes the design document, lesson plan, and bill of materials.

## Demonstrated scope

The completed prototype demonstrated keyboard-controlled string positioning, basic bow movement, and electronic note output with octave selection. Staccato and legato controls, full string-indicator LED operation, and external audio amplification remained incomplete. The result was a working educational demonstrator with a supporting lesson plan.
