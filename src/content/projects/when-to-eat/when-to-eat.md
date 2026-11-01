---
title: "When to Eat — RFID Food Storage Reminder"
summary: "Reusable RFID tokens and a Windows desktop interface make food-storage reminders tangible. Grand Prize at the 2024 KAIST Makerathon."
categoryLabel: "Makerathon & prototypes"
status: "Completed prototype · Grand Prize"
period: "Summer 2024"
institution: "KAIST"
displayOrder: 10
featured: true
approvedForPublication: true
video:
  youtubeId: "qc1B9trBHxY"
  heading: "Official Makerathon video"
  title: "2024 KAIST Make-A-Thon — Idea Factory KAIST"
  caption: "Official 2024 KAIST Make-A-Thon video, uploaded by Idea Factory KAIST."
cover:
  src: "./prototype-overview.jpg"
  alt: "When to Eat prototype with a wooden refrigerator mockup, RFID token station, and Windows interface."
tags: ["UHF RFID", "ATID ATD100", "C#", "XAML", "Windows UWP"]
contribution: "Team leader of the four-person makerathon team."
collaborators:
  - name: "Sangeon Jeon"
    role: "Team leader"
  - name: "Sehyeon Kim"
    role: "Team member"
    url: "https://www.linkedin.com/in/sehyeon-kim-a763a1227/"
  - name: "Byeongyoung Jeong"
    role: "Team member"
    url: "https://www.linkedin.com/in/%EB%B3%91%EC%98%81-%EC%A0%95-956791383/"
  - name: "Yujin Park"
    role: "Team member"
links:
  - label: "Project repository"
    url: "https://github.com/EonSJeon/2024Sum_KAIST_Makerathon"
---

## A physical reminder for everyday food storage

Keeping track of food in a refrigerator can be difficult, particularly when printed labels are small or hard to read. **When to Eat (웬 투 잇)** explores a more tangible interface: reusable RFID tokens associated with food containers, a token storage station, and a desktop display of storage time.

Removing a token from the station starts tracking its period of use. Returning it resets the tracking state. The interface shows food categories, dates, and remaining days, with visual indicators for approaching or passed suggested discard dates.

<figure>

![Prototype with a wooden refrigerator mockup, illustrated food tokens in a transparent RFID station, and the Windows interface on a laptop.](./prototype-overview.jpg)

<figcaption>The demonstrated setup connected reusable container tokens and a reader-equipped storage station to a Windows interface.</figcaption>
</figure>

## Attach, use, and return

Illustrated tokens can attach to a container's lid or side. Unused tokens sit in the storage station; a token that is no longer detected by its reader places the associated food on the active list. Returning the token connects a familiar physical action to resetting its tracking state.

<figure>

![A vegetable-illustrated RFID token attached to a clear food-container lid above the token station.](./token-lid-attachment.jpg)

<figcaption>A reusable token attached to a container lid. Moving tokens between containers and the station provides the physical input to the reminder.</figcaption>
</figure>

## Implementation

The team integrated an **ATID ATD100 UHF RFID reader** through the manufacturer's .NET SDK and a USB virtual COM port. A Windows UWP application, written in **C# and XAML**, receives tag-read events and updates the time-based storage display. The team also explored token attachments suited to different container shapes.

The demonstration used example tokens and preset storage periods. The prototype tracks elapsed storage time and displays reference-based reminders. It does not directly measure spoilage or determine whether food is safe to eat.

## Outcome

The project received the **Grand Prize (first place)** at the **2024 KAIST Makerathon**, with a **₩2,500,000** prize. Sangeon Jeon served as team leader of the four-person team.


<figure>

![Award board showing the 2024 KAIST Makerathon Grand Prize and the 2,500,000 won prize amount.](./grand-prize-board.jpg)

<figcaption>The team's Grand Prize award at the 2024 KAIST Makerathon, with a ₩2,500,000 prize.</figcaption>
</figure>
