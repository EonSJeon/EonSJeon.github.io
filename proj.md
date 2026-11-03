# Personal Academic Website Implementation Brief

Updated: 2026-11-01. Repository: `EonSJeon/EonSJeon.github.io`.

## 1. Objective and next task

Build a minimal, polished personal academic website on GitHub Pages. The academic profile and News lead Home. Publications is the sole paper destination, followed by engineering projects, Coursework, and individually approved writing/ideas.

The portfolio contains **six paper records (three published journal articles, two conference submissions under review and one hemophilia manuscript), four engineering projects, one laboratory-course detail and a bilingual HTML CV**. Research pages are retired. Home shows the profile, interests, a News list board and contact; no research/project preview. Blog and Ideas remain empty pending individual finished-article approval.

Maintain the existing Astro implementation with the eleven portfolio entries, three confirmed journal publication records, and a bilingual HTML CV. Keep Blog and Ideas empty until individual finished articles receive explicit approval. Treat this document as the durable implementation brief. Development progress, remaining tasks, validation records, preview commands, and execution-environment details belong in the ignored English handoff at `development-status.md`. Public release follows the owner's publication instructions and the content boundaries below.

Maintain this local checkout and the canonical `EonSJeon/EonSJeon.github.io` repository path. The owner requested recreating that same remote repository while preserving the separate development commits in the cleaned history. Exclude CV/Resume documents and their document changes from every published commit; retain unrelated changes from mixed commits. Keep the original document-containing graph and withdrawn originals only in ignored private recovery archives; never merge or push them into the recreated repository. Do not replace the cleaned development history with a single snapshot commit or move the build to a hosted website-builder service.

## 2. Sources and authority

Read the relevant references before writing each entry. These are local editorial inputs, not files to copy wholesale into website content.

| Material | Local source | Use |
| --- | --- | --- |
| OCDM research | `reference-private/icassp_2027_ocdm_research_project_summary.md` | High-level research description and disclosure limits |
| TI-ADC / OFDM research | `reference-private/tiadc_ofdm_project_website_reference.md` | Project summary, period, manuscript status, collaborator order and supplied links |
| When to Eat | `reference-private/KAIST-Makerathon2024/website-reference.md` | Independent project, Grand Prize, implementation, team and repository |
| Venus Flytrap | `reference-private/Gatech-ECE4723-PROJ/website-reference.md` | ECE 4723 capstone, final digital system, demonstrated outcomes and contribution |
| Detailed coursework refresh | `reference-private/Gatech-ECE3011-PROJ/refresh-2026-10-29/`, `reference-private/Gatech-ECE4723-PROJ/refresh-2026-10-29/`, `reference-private/KAIST-EE405-PROJ/refresh-2026-10-29/` | Renewed source snapshots, full technical guides, document extraction, selected code/media evidence and provenance for the README-depth article expansion |
| RoBACHtic Symphony | `reference-private/ECE3011/ECE3011_RoBACHtic_Symphony_Coursework_Website_Reference.md` and the final document package in that folder | ECE 3011 Junior Design, mechanical contribution, limitations, demonstration and lesson-plan details |
| Electronics Design Lab | `reference-private/EE305/KAIST_EE305_Coursework_Website_Reference.md` | One consolidated EE305 entry with selected internal highlights |
| Robotic Tic-Tac-Toe | `reference-private/EE405_Coursework_Website_Reference.md` | One EE405 implementation entry, supporting labs and unknown metadata |
| Withdrawn CV/Resume documents | `reference-private/cv-resume-withdrawal/2026-11-01/` | Private biography provenance and recovery only; no tracked documents/downloads |
| Version provenance | Ignored withdrawn-document archive | Source dates, pairing decisions and private recovery |
| Portrait candidate | `reference-private/profile_photo.jpeg` | Existing owner-supplied portrait candidate |
| Ideas sources and owner selection | `reference-private/아이디어-생각할 거리.md`, `아이디어-연구.md`, `아이디어-연구프로젝트.md`, `아이디어-프로젝트.md`; local `아이디어-선택목록.csv` | Owner replaced DOCX with four Markdown sources; source material and the -1/0/1/2 decision CSV remain private and Git-ignored |
| Disease-modeling research source collection | `reference-private/Meta_Research_Website_Reference.md` | Owner-requested October 29 local collection from HEM-meta, OCD-meta, SMA-meta, and AMD-meta: bilingual description candidates, original saved figures, evidence and provenance; selected high-level Research descriptions for the current overhaul; no unsupported publication records or numeric medical claims |

`reference-private/CV.pdf`, `personal-info.md`, and `research.md` are not currently present. Do not depend on these obsolete paths or invent substitutes.

Resolve conflicts in this order: the owner's latest explicit instructions; project-specific curated references and their disclosure limits; the newer industrial CV for current biography; older CVs for historical context. A broad CV claim does not override a project's narrower public-description limits.

`story.md` and `instructions.md` are temporary instruction pads, not reference articles or permanent specifications. Read the requested pad's saved contents, apply its instructions, and reconcile the durable requirements into the relevant sections of **this file**. The owner may erase or replace either pad at any time; site content, builds, and future maintenance must not depend on either pad. Keep both Git-ignored and out of deployment output. Do not clear or rewrite either pad on the owner's behalf unless asked.

Examples requiring this rule:

- Use the TI-ADC reference's September 2024–October 2026 research period and the owner's latest ICC 2027 submission/under-review status rather than older manuscript-in-preparation wording.
- Use When to Eat's documented Grand Prize amount of ₩2,500,000 if an amount is shown. Do not reuse the older CV's approximate dollar amount.
- For When to Eat, credit the confirmed team-leader role. Specific software or hardware ownership is unconfirmed in the curated reference even though older CVs make broader claims.
- Use the final Venus Flytrap architecture and demonstrated outcomes without importing numerical performance claims from historical CVs.

Never invent dates, affiliations, author contributions, publications, repositories, metrics, media, or collaborator URLs. Supplied profile and repository links may be used as supplied; verify a destination before adding new claims based on its contents.

## 3. Initial content inventory

### Paper records and retired Research section

There is no Research navigation, index or explanatory article surface. Keep paper facts only in `src/content/publications/`, using metadata-only paired records. The previous full Research narratives and model-diagnostic image are archived in ignored `reference-private/research-page-retirement/2026-10-31/`. Keep existing Research URLs as redirects to Publications or the corresponding paper anchor, excluded from sitemap. Do not reintroduce independent publication-detail pages.

Use these exact English titles in both languages:

- **Wide Range Carrier Frequency Offset Estimation for OCDM With a Single Pilot** — Conference, under review at ICASSP 2027. The owner subsequently confirmed author order: Sangeon Jeon, Xiaoli Ma.
- **Robust and Computationally Efficient Joint Channel and TI-ADC Mismatch Estimation for OFDM** — Conference, under review at ICC 2027. Confirmed order: Sangeon Jeon, Jiwon Sung, Xiaoli Ma, Jinseok Choi. Use English author names in both languages (including Jiwon Sung) and preserve supplied profiles in metadata, per the latest owner instruction. September 2024–October 2026 is a research period, not a publication date.
- **Global disparities and unmet treatment needs in hemophilia toward 2030** — Journal manuscript; the owner has supplied its title and ordered authors, but not venue, submission status or publication date. Display Manuscript / 원고 without implying publication or review.
- **Global Prevalence of Obsessive-Compulsive and Related Disorders: A Systematic Review and Modeling Study**.
- **Global Prevalence of Spinal Muscular Atrophy in 204 Countries and Territories, 1960-2024: A Systematic Review and Bayesian Modeling Study**.
- **Global Burden of Age-Related Macular Degeneration, with Forecast up to 2050: A Modeling Study** — use the owner's supplied publisher-title spelling Modeling.

The final three are confirmed published journal articles, with the author lists, dates and DOI records below. Preserve authorship marks and profile URLs. Never promote submissions to accepted/published work, infer HEM venue/status or publish detailed algorithms/numerical results from private research sources. Bayesian statistics / 베이지안 통계 remains an interest in the profile. The old Meta Analysis category and standalone research presentation are no longer site sections.

**Engineering media:** Use selected real prototype/device/interface photos from the prepared Engineering_Projects collection for When to Eat, Venus Flytrap and RoBACHtic. Keep content and covers colocated, use typed optimized Astro image metadata, meaningful bilingual captions, responsive cards and galleries, and a lightweight article contents navigation. Preserve pixels/orientation and remove unneeded camera metadata in selected web copies. No fabricated prototypes, measured performance, classroom validation or unsupported ownership.

### Engineering Projects

Projects includes **When to Eat — RFID Food Storage Reminder** at `/projects/when-to-eat`, plus the three course-origin designs listed below.

- Display `2024 KAIST Makerathon`, `Summer 2024`, `Grand Prize (1st Place)`, and the confirmed team-leader role.
- Embed the owner-selected official Idea Factory KAIST video `https://www.youtube.com/watch?v=qc1B9trBHxY` on both project-language pages. Label it as the official Makerathon video, use a responsive privacy-enhanced player and keep autoplay off. Preserve the owner’s player-only layout without adding back a separate caption/link footer. YouTube oEmbed confirms the title `2024 KAIST 메이커톤 Make-A-Thon` and uploader `Idea Factory KAIST`. The shared video's optional `heading` field distinguishes event coverage from a project demonstration.
- Remove the stylized RFID-token/desktop conceptual illustration from the project page and all Home fallbacks. Retain selected real photos and the official video; use a text-only feature layout if a future cover is absent.
- Describe a completed team prototype using detachable RFID tokens, a token station, and a Windows desktop reminder interface.
- Use the supported stack: ATID ATD100, UHF RFID, C#, XAML, Windows UWP, and USB VCP integration through the manufacturer's SDK. The specific ATD100N variant is unconfirmed.
- Link the supplied project repository. Display the four team members and only the supplied professional-profile links; do not invent a profile for Yujin Park. Use the owner-confirmed Korean names 김세현 (Sehyeon Kim), 정병영 (Byeongyoung Jeong), 박유진 (Yujin Park), preserving team order and existing English spellings.
- Keep suggested sound alerts, phone widgets, and other future concepts separate from implemented features.
- Describe elapsed-time reminders. Do not claim direct spoilage sensing, food-safety guarantees, measured waste reduction, or user-study results.

### Course-origin projects and general coursework

The owner's October 31 reclassification moves Senior Design, Junior Design and Robotic Tic-Tac-Toe into Projects with all bilingual detail text and media. Preserve their course context; moving them does not imply independent research. Keep the old `/coursework/<slug>/` and Korean URLs as query/hash-preserving redirects to their `/projects/` equivalents, excluded from sitemap. Coursework now uses a list-board layout with Course / Institution / Term columns, and only released entries from the coursework collection. Initially include only Electronics Design Laboratory. Do not automatically add general subjects found in CV documents; retain those as private candidates until the owner selects them. Do not invent course numbers, terms, grades or credits. The laboratory course remains a linked course detail, with its internal course number hidden.

| Order | Entry | Route | Type and evidence |
| --- | --- | --- | --- |
| 30 | Venus Flytrap Bioelectrical Signal Recording and Playback | `/projects/venus-flytrap-bioelectrical-playback` | Georgia Tech ECE 4723; Senior Design / Capstone; Spring 2024; successfully demonstrated |
| 40 | RoBACHtic Symphony — Educational Robotic Violin Kit | `/projects/ece3011-robachtic-symphony` | Georgia Tech ECE 3011 Design Fundamentals; Junior Design; Fall 2023 (owner-confirmed); completed prototype with limitations |
| 30 | Electronics Design Laboratory | `/coursework/electronics-design-lab` | KAIST EE305 Introduction to Electronics Design Lab; laboratory coursework; Fall 2022; completed |
| 10 | Robotic Tic-Tac-Toe with a Four-Degree-of-Freedom Manipulator | `/projects/ee405-robotic-tic-tac-toe` | KAIST EE405; course final project; Fall 2024 (owner-confirmed); hardware demonstration documented |

Projects must be reverse chronological in both languages and on Projects and CV. Use the existing `displayOrder` values consistently: Robotic Tic-Tac-Toe (10; Fall 2024), When to Eat (20; Summer 2024), Venus Flytrap (30; Spring 2024), RoBACHtic Symphony (40; Fall 2023). Keep future project priorities aligned with confirmed periods; do not invent exact dates to sort terms. The latest Home design has no project preview; use this order on Projects and CV. Do not retain separate Outside the lab / 연구실 밖에서 or Learning through making headings or a special When to Eat feature. Do not show the old coursework-project preview or move ordinary classes into CV's Selected engineering.

**Venus Flytrap:** Emphasize successful signal recording and electrically triggered closure. Credit Sangeon Jeon with the complete digital-system design and programming: Seeeduino firmware, MATLAB software, MATLAB App Designer interface, serial communication, recording, and playback. The current source poster/README confirm Seeeduino XIAO, Spring2024, advisor Dr. William Hunt and association with Vivent Biosignals. The final stack is Seeeduino XIAO, C++/Arduino-style firmware, MATLAB, and direct USB/serial to a laptop. Do not list the abandoned Raspberry Pi/Python approach, ADS1115, or MCP4725 as final components. Analog-system ownership and numerical performance remain unconfirmed. Use the five supplied collaborator links without assigning additional roles. Explain the protocol, Monitor/Uploader workflow, measurement evidence and concrete buffer/timing limitations; distinguish nominal configured sampling from measured behavior. Add the source-selected explanation YouTube plus reviewed native closure and uploader footage.

**RoBACHtic Symphony:** Emphasize mechanical design and fabrication using SolidWorks, 3D printing, laser cutting, and integration testing. Attribute overall system development to the team. The final demonstration combined robotic bow/string-position movement with electronically generated micro:bit tones; do not claim acoustic violin performance, recorded violin-sample playback, complete articulation controls, or validated classroom outcomes. The report submission date, December 14, 2023, is not an exact project-completion date. Use the owner-confirmed collaborator names/links and supplied repositories. Do not attribute another author's first-person software-lead statement to Jeon.

The owner supplied and selected two PNGs now in `src/content/projects/ece3011-robachtic-symphony/`: front views of the final build and the labeled CAD/build comparison. Display both with meaningful alt text and captions. Embed the supplied demonstration, `https://youtu.be/gud--ybyr-s`, directly on the page using a responsive, click-to-play YouTube privacy-enhanced player with the owner’s current player-only layout. Link the original team's final design-document/lesson-plan/BOM package. The temporary project `README.md` has been incorporated into `ece3011-robachtic-symphony.md` and removed as instructed; retain the root repository README. Describe the lesson plan's fifth-grade Music/Computer Science curriculum alignment as a design goal, not a measured educational result.

The owner's October 28 ECE3011 update adds local report, photo, README, and video references under `reference-private/ECE3011/`. Supplement the article with the report's final demonstration (12 keys in two octave ranges), mechanical fit and mounting-hole checks, labeled actuation mechanisms, and proposed lesson activities. Present photos and the video with semantic figure captions. Keep the two distinct existing visuals; the additional front-view PNG is near-duplicate imagery. Continue using the selected YouTube embed rather than copying the 250 MB source video into the site. Keep the raw report and original README as local references; the report's contribution section remains authoritative over the README's first-person software attribution.

**Electronics laboratory (internal EE305 source):** Publish one broad electronics laboratory entry at `/coursework/electronics-design-lab/`, with the same clean Korean route. Do not expose the course number in the public title, body, metadata, alt text, navigation, or URL. Keep the source folder/internal code for maintainability, set `showCourseCode: false`, and pair both languages through `translationKey: electronics-design-lab`. Lead with the Lab 4–5 three-bit OR/XOR calculator, its input conditioning, registers, ALU, wiring/debugging, and selected breadboard/schematic/test photos. Keep the course overview and meaningful supporting sections for Labs 7–8 MATLAB communication simulation, ATmega128A stopwatch, analog audio filtering, and foundational measurements. The latest instruction is emphasis on Lab 4–5, not exclusion of the other labs or renaming the whole course as only a calculator. Distinguish simulated communication from physical hardware. Do not claim a general-purpose decoder, CPU architecture, sole authorship, or unconfirmed collaborator identities.

**EE405:** Center the page on the C++ robotic tic-tac-toe implementation with DYNAMIXEL control, stored joint configurations, and Jacobian-based adjustment. The refreshed source README explicitly confirms KAIST and2024; inspected final-apparatus footage now supports hardware-demonstration status. Describe the physical board/paint stations, keyboard input, direct teaching, waypoint layout, win/block/random logic, interpolation and requested Jacobian pressing displacement, with substantive supporting lab context. The owner confirmed Fall 2024 as the term. Official course title, collaborators and individual contribution remain unspecified. Do not infer them, describe the rule-based opponent as machine learning, or claim force-controlled contact, measured accuracy, a complete autonomous game or an exact filmed executable/source match. Clearly label the separate manual stamping/setup footage.

**Detail and video policy (latest owner request):** ECE3011, ECE4723 and EE405 detail pages should approach their original repository README in depth, rather than stop at a portfolio summary. Import usable material into ignored references first, retain provenance, then publish selected bilingual technical narratives covering architecture, implementation, design iterations, tests, outcomes and limitations. Approved selected videos may be brought over as native browser-playable web copies; keep full raw originals private, preserve motion/timing/orientation, filter unnecessary camera metadata, and create posters from actual frames. Native clips are colocated with articles, selected per-language through `clips`, and emitted through a release-gated `/media/` route. Keep playback user-initiated with controls, no autoplay and `preload="none"`. Keep the existing ECE3011 final YouTube demo; its large/raw early-button video does not need to be emitted.

## 4. Publications, writing, and proposals

**Publications:** The only paper page is `/publications/` and its Korean counterpart. Use the owner's reference style: **[Conference] first, [Journal] second** in English; Korean labels are **출판** with **[학회] first, [저널] second**. Use compact title / ordered author line / italic venue and year. Put verified DOI links on titles, keep every author name in English even on Korean pages and render them without hyperlinks on Publications, bold the owner and preserve †/‡ marks with one shared legend. Keep stored profile URLs for provenance; Publications and CV both render author names without links. Add only a short Under review / 심사 중 or Manuscript / 원고 label for non-published work. Do not render abstracts, summaries, Project Manager/collaboration paragraphs, separate status sections, research links or independent paper-description pages. Keep all bibliographic/source metadata stored, even when not expanded in the compact UI. Legacy detail URLs redirect to list anchors.

On October 29 the owner supplied the published titles, complete ordered author lists, journal names, publication dates and public links for three Meta Analysis papers. Register these as Published in both languages, preserving the official English titles and author order. Show the owner's name prominently with a co-first-author mark and legend on all three. The owner's subsequent contribution excerpts confirm OCD co-first authors Yi Deun Jeong, Yejun Son, Sangeon Jeon; SMA's leading co-first group Yi Deun Jeong, Yejun Son, Sangeon Jeon; and AMD co-first authors Yi Deun Jeong, Sangeon Jeon, Wonseok Shin, Seoyoung Park. SMA's publisher footnote also names Jiseung Kang and Dong Keon Yon as equal contributors: preserve those two with a separate generic equal-contribution mark, without inventing first/senior/corresponding status. Use † for co-first authors and ‡ for other equal contributors, with bilingual legends. Store Yi Deun Jeong's supplied profile `https://scholar.google.com/citations?user=HvDDOvsAAAAJ&hl=en` and the [Center for Digital Health, Kyung Hee University](http://cdh.khu.ac.kr/) collaboration in metadata. Publications and CV both render author names without links. Store **Dong Keon Yon** as Project Manager in all four Meta Analysis records with the owner-supplied [introduction page](http://cdh.khu.ac.kr/%EB%B6%80%EC%84%BC%ED%84%B0%EC%9E%A5-%EC%86%8C%EA%B0%9C). Retain that profile in metadata; the latest Publications style renders author names as plain text and suppresses separate role/collaboration paragraphs.

The owner also supplied HEM's complete author order: Yi Deun Jeong†, Sangeon Jeon†, Yejun Son†, Soeun Kim†, Ellia Tootoonchian, Donna Coffin, Taehwan Park, Dong Keon Yon, Jeffrey Stonebraker, Glenn F. Pierce. Store these directly on both HEM publication records, with the four † names as confirmed co-first authors. Keep Glenn F. Pierce's [ISTH biography](https://genetherapy.isth.org/glenn-f-pierce-md-phd) in author-profile metadata for provenance, while rendering his name as plain text on Publications and CV. The owner confirms that HEM is a collaboration with the Center for Digital Health at Kyung Hee University and the [World Federation of Hemophilia (WFH)](https://wfh.org/); preserve both organizations and their links in the records' collaborator metadata; do not add a prose introduction. No HEM publication metadata/status or affiliation-number mapping was supplied; do not infer it or the meaning of other manuscript footnote symbols.

| Publication route | Journal | DOI | Owner-supplied date |
| --- | --- | --- | --- |
| `/publications/#amd-global-burden` | Ophthalmology Retina | `10.1016/j.oret.2026.09.019` | 2026-09-19 |
| `/publications/#ocd-related-disorders-prevalence` | American Journal of Psychiatry | `10.1176/appi.ajp.20250944` | 2026-07-08 |
| `/publications/#sma-global-prevalence` | Pediatric Neurology | `10.1016/j.pediatrneurol.2026.04.005` | 2026-04-20 (online) |

Display compact venue/year citations and title DOI links, with newest records first within each category. Conference comes before Journal; use inline review labels rather than separate Published/Under Review sections. Publication status alone does not establish a particular retained code revision's complete agreement with the published analysis. Do not rewrite the dated CV/Resume source documents or infer an additional HEM publication from older manuscript entries.

**Blog / Ideas — individual review required:** On October 31 the owner withdrew all existing Blog and Ideas articles from the site and unpublished main history. Keep editable Korean/English drafts in ignored `reference-private/writing-review/`; preserve the source notebooks, decision CSV and conditional-review questions. Do not commit or expose a draft until the owner explicitly approves that finished article. Earlier bulk selections are revoked as publication approval. Preserve empty collection indexes and per-language release controls.

## 5. Information architecture and Home

| Route | Purpose |
| --- | --- |
| `/` | Unified profile hero with brief academic background and portrait-side contact, interests and News list board; no research/project/Ideas/Blog previews |
| `/about` | Legacy redirect to Home, preserving query strings and contact fragments; Korean equivalent redirects to `/ko/` |
| `/research` and `/research/[slug]` | Retired; redirect to Publications or the corresponding paper anchor |
| `/publications` | Accurate bibliographic records with clear publication-status groupings |
| `/projects` and `/projects/[slug]` | When to Eat, Senior Design, Junior Design and Robotic Tic-Tac-Toe |
| `/coursework` and `/coursework/[slug]` | Course list board, initially only the electronics laboratory course; old project paths redirect |
| `/blog` and `/blog/[slug]` | Released writing |
| `/proposals` and `/proposals/[slug]` | Ideas; retain these existing URLs |
| `/cv` | Full bilingual HTML CV; no file downloads |

Navigation uses the **top-right menu button at every viewport width**. Keep all section links and CV inside its initially closed panel; the wide-screen banner should show only the owner's name, visible language selector and menu button. Retain the existing full-width narrow-screen panel, with a compact right-aligned panel on wider screens. Publications, Projects, Coursework, Ideas and Blog remain reachable after opening it; there is no Research menu item. Support keyboard activation, Escape and outside-click dismissal. On screens wider than 740px, keep the opaque white header sticky at the top while scrolling, above page content and with its menu available. Match its height closely to the portrait: 6px padding per side, no 88px minimum (about 59.8px total with the border). Derive the menu maximum height, anchor scrolling and sticky CV contents offset from the same portrait-based header height so they remain visible. Retain the scrolling header at narrower widths and hide it for printing. Label the writing section **Blog** in English and **블로그** in Korean, including navigation, collection headings, and RSS titles; retain `/blog/` URLs. Contact belongs on Home with its `#contact` anchor. Footer has no Contact/Email/GitHub/RSS navigation, address or email. Use the same English paragraph in both locales, marked lang="en": “© Copyright 2026 Sangeon Jeon. Powered by Astro. Last updated: November 1, 2026.” Astro is the actual installed site builder, configured for static output; do not substitute an unused generator or a programming language for the generator credit. Keep one desktop line with natural mobile wrapping. Do not copy the example's other person, old date or incorrect Jekyll/al-folio credit. The hero instead links to the localized HTML CV using the exact text **Curriculum Vitae** in both languages.

After merging Home and About, use this menu order in both languages: **Home → Publications → Projects → Coursework → Ideas → Blog → CV**. The first Korean label is **홈**. Preserve existing section routes and the legacy About redirects.

Home should open with Sangeon Jeon's name, a concise academic identity, research interests, and a portrait-side address followed by these **five icon-only controls**, with accessible names and tooltips (email first):

| Profile | Destination |
| --- | --- |
| Email | Copy `sjeon84@gatech.edu`; localized feedback and manual-copy fallback |
| GitHub | `https://github.com/EonSJeon`; display `github.com/EonSJeon` |
| Google Scholar | `https://scholar.google.com/citations?user=vwwPFNMAAAAJ` |
| ORCID | `https://orcid.org/0009-0001-5883-0774` |
| LinkedIn | `https://www.linkedin.com/in/sangeon-jeon-b8bb7b239/` |

Keep these destinations in shared profile configuration. Under the portrait, show only the two-line address and then five icon-only controls in this exact order: **email, GitHub, Google Scholar, ORCID, LinkedIn**. Remove the visible email string and the old profile-link row below the biography. The email icon remains a semantic copy button; the other icons are links. Keep accessible names, tooltips and visible keyboard focus without visible labels. Retain the localized three-second copy feedback/reset. On clipboard failure, temporarily show and select the public email for manual copying, then clear it. The shared ProfileLinks default remains text-labelled on HTML CV. Retain `#contact` with no visible Contact/ADDRESS heading, institution caption, Get in touch action or separate bottom block. Address text is 14px in a system monospace stack (SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace), matching the owner's fixed-width reference, and has two logical lines: plain **Rm 5263, Centergy One**, then linked **75 5th St NW, Atlanta, GA 30308**. Keep `site.address`, `site.mapAddress` and `site.mapPlaceName` separate; open Google's supported search URL for **Centergy One, 75 5th St NW, Atlanta, GA 30308**, never including the room number. Do not guess a place ID or add separate Write/Copy/CV buttons. No backend is required.

Keep Home's established name/portrait hero and interest line. Use a readable 13px interest label and 16px topics (15px topics on mobile), with wrapping that fits intermediate widths. Align the portrait with the start of the continuous biography on desktop, with a compact gap and no unused text-width cap between them. On mobile, pair the name and portrait above the full-width biography. Use the larger responsive portrait, with a 270px desktop frame and smaller tablet/mobile sizes that do not overlap the name. End the biography with a full localized sentence containing an inline **Curriculum Vitae** hyperlink to the localized HTML CV (English: “For further information, please refer to my Curriculum Vitae.”). Use the body text size; do not place CV as a separate action beneath the profile row. The five icon controls belong under the portrait-side address, separate from the continuous biography. Preserve the owner-edited welcome and begin the biography with the current Ph.D. affiliation and advisor. Lead the research paragraph with the current focus: next-generation waveform design and synchronization for wireless communications, especially orthogonal chirp division multiplexing (OCDM). Put TI-ADC mismatch calibration and Bayesian statistics in a following research-experience sentence; do not present them as coequal current research. Preserve the owner's final removal of medical statistics/Bayesian inference wording from this Home sentence. Keep this emphasis consistent in Korean and English; the separate Bayesian statistics interest label stays unchanged. Omit the former hardware-building sentence and RFID/bioelectrical/mechatronic examples from the Home biography. Follow with one combined M.S./bachelor academic-background paragraph and the CV referral, all within one continuous biography block in both languages. Include the confirmed Georgia Tech ECE M.S. (2025, advisor Xiaoli Ma) and explicitly state that the owner earned bachelor's degrees from KAIST and Georgia Tech through the **KAIST–Georgia Tech Dual B.S. Degree Program**. Link the entire English program name, including KAIST–Georgia Tech, to KAIST's official language-matched pages (`https://ee.kaist.ac.kr/en/education-cooperation-01/` and `https://ee.kaist.ac.kr/education-cooperation-01/`). Use the identical English label in Korean and omit the parenthetical 복수학위 프로그램 translation. In both Home languages use **Prof. Xiaoli Ma** for the Ph.D. and M.S. advisor and **Prof. Jinseok Choi** for the KAIST undergraduate advisor. Each whole Prof. + English name must be one hyperlink, with sentence punctuation/Korean particles outside; use their shared profile URLs (KAIST advisor: `https://sic-x.kaist.ac.kr/`). Mark these fixed labels with nearby `번역 금지` comments. Omit the parenthetical SIC-X Lab label. This latest owner instruction supersedes the former no-education-on-Home rule; keep the full education table/GPAs in CV. Keep the biography uninterrupted by profile links, the interest line or an About me heading. Contact belongs under the photo in the hero, with no separate bottom block. On mobile, let those contact values span the width directly below the name/portrait pair, before the biography. Follow the hero and interests with the News list board. Do not retain Selected research or Engineering projects previews. News currently contains only the January 2026 Ph.D. start, as explicitly requested by the owner. Do not add publication announcements automatically. Store bilingual news in `src/data/news.ts`, newest first, using only supported date precision. Avoid a full CV pasted into Home, an oversized hero, redundant cards across sections, and empty publication statistics.

## 6. Design and implementation stack

- Use Astro static generation, TypeScript where useful, and Markdown/MDX content collections. Select supported APIs and compatible dependencies from official documentation at implementation time; this brief does not pin an unverified framework version.
- Host on GitHub Pages for the user-site root `https://eonsjeon.github.io/`, with GitHub Actions for deployment. Do not add a repository-name base path for this user-site repository.
- Use a clean **white background**, readable typography, comfortable text widths, clear hierarchy, generous spacing, neutral text/borders, and a limited accent color. The header brand is **Sangeon Jeon** in both languages, independent of localized biography names and metadata. Place the owner's cleaned hand-drawn portrait mark immediately before it: preserve the curly hair, round glasses and smiling face; do not substitute an initials monogram. Use the same artwork for browser-tab and Apple touch icons. The header PNG is transparent; tiny favicon exports have a white background for contrast across browser themes. Keep the portrait's dense curl pattern and facial features while using stronger strokes. The final owner-selected composition keeps **Sangeon Jeon** on one line, with a 46.818px desktop portrait (after two successive 85% reductions) and 25.2px name in self-hosted Cormorant Garamond 600; keep its OFL license. On mobile, use a 29.478–36.414px icon and 18.9–21.6px name, preserving the single-line name and wrapping controls only if needed. Keep the icon decorative/accessibility-hidden beside the named Home link, and fit the name, language selector and menu at320px. This owner-selected artwork supersedes the former plain-name/no-favicon rule. Mark intentionally untranslated text with nearby non-rendering source comments (`번역 금지`) so later translation work preserves these choices.
- Provide responsive desktop/mobile navigation, accessible semantic HTML, visible keyboard focus, meaningful link text, and sufficient contrast. Omit the small overline above page titles on all pages except CV, in both languages; retain CV's existing overline. This includes Home, collection indexes, project/coursework details and 404, while keeping useful breadcrumbs and content metadata.
- Provide full Korean and English versions. Preserve existing English URLs, and use `/ko/` for Korean pages, including Home, About, CV, 404, all indexes and selected article translations. Keep a visible `En` / `한` selector in the header on desktop and mobile, with the current language marked and full accessible names `한국어` / `English`. Switch to the same article when its approved translation exists; otherwise link to the target-language collection index and advertise no nonexistent translation in hreflang metadata.
- The owner works directly in Korean. Keep editable `<slug>.ko.md` beside each English `<slug>.md`, paired by `translationKey`. Filter routes, lists, Home previews, and RSS by language and release flags. Korean-only authoring must work without an English placeholder. Localize document language, canonical/alternate URLs, metadata, UI, captions, and contact feedback. Do not turn the notes or unapproved translations into public entries automatically.
- Display the owner's exact Hanja name **全商彥** alongside 전상언 and Sangeon Jeon on both Home versions.
- Keep Korean prose natural without translating every proper name or interface label. The owner prefers **CV** in navigation, **CV & Resume** for the document page, **코스웍** as the compact coursework menu label, and **수업 프로젝트** in descriptive text. Retain **Georgia Institute of Technology / Georgia Tech**, **Electrical & Computer Engineering** in institutional labels, and **Atlanta, Georgia** in English on Korean pages.
- Owner manual edits are authoritative when reconciling languages. Current interests, in order, are Wireless communications, Waveform design, Synchronization, TI-ADC and Bayesian statistics; derive Korean labels from the shared interest list and retain the TI-ADC abbreviation. Keep Home/CV/profile metadata aligned with that scope. Preserve the owner’s Chinese beginner skill and Korean CV wording. Use Meta Analysis in English and 메타분석 in Korean. The Projects/Coursework summaries should match the owner-edited Korean copy.
- Use the officially distributed Pretendard Variable font for polished Korean typography, with readable body text and stronger heading weights. Self-host the unchanged WOFF2 and its OFL license under `public/fonts/`; avoid a runtime dependency on an external font service.
- Keep the site consistently light, including when the device prefers dark mode. The owner's white-background instruction supersedes the earlier light/dark-toggle requirement.
- Keep browser JavaScript small. No CMS, database, backend, analytics, comments, complex animation, or external embeds by default.
- Provide metadata, canonical URLs, sitemap, a useful 404 page, and social-sharing metadata where actual assets exist.
- Keep public copy focused on the person and work. Do not expose source-file names, editorial instructions, approval flags, or implementation details in rendered pages.
- Review the existing portrait's suitability and use it as the initial portrait candidate. If it is unsuitable or its use is unresolved, use a clean text-led layout without a broken image box or generated identity.
- Add project photos, waveforms, screenshots, and diagrams only with project-specific evidence and reuse clearance; do not fabricate experimental data or demo images. RoBACHtic's two owner-supplied images and embedded video are explicitly selected above. Other videos remain external links unless selected for embedding. Embed players must be responsive, keyboard accessible, titled, lazy-loaded, and free of autoplay. Preserve the owner’s shared player-only layout without a separate caption/link footer.

## 7. Biography and HTML CV

On November 1, the owner withdrew **all CV/Resume PDF and DOCX documents and their committed history** because the originals contain private contact information. This explicitly supersedes the former requirement to retain source pairs in public Git. Preserve originals, SHA-256 manifests and recovery bundles only under ignored `reference-private/cv-resume-withdrawal/2026-11-01/`. Remove the historic document directories from main history (`reference-private/CV-Resume/`, `src/documents/cv-resume/`, `public/documents/`); do not mirror-push local recovery/checkpoint refs. Do not add document downloads, their old route/manifest, or originals back to the site. The output checker rejects PDF/DOCX files and the withdrawn document directory. Remote history replacement and deployment require the owner's explicit release authorization.

Previously reviewed sources and owner confirmations support this biography: Georgia Tech ECE Ph.D. study beginning January 2026 with Prof. Xiaoli Ma; Georgia Tech ECE M.S. in 2025 with Prof. Xiaoli Ma; B.S. degrees at Georgia Tech (2023–2024) and KAIST Electrical Engineering (2018–February 2025), through the confirmed Dual Degree Program; KAIST advisor Prof. Jinseok Choi. Use the existing shared website facts; do not re-import private phone/contact details from the withdrawn documents.

Confirmed website GPAs remain **KAIST 3.95/4.3** and **all Georgia Tech entries 4.00/4.0**. Keep education, GPAs and advisors in HTML CV. Do not describe the completed M.S. as expected solely because an older source did so.

**HTML CV:** `/cv/` and `/ko/cv/` remain full readable CV pages with identity/profiles, education, publications (including clearly labeled under-review/manuscript records), research experience, employment, teaching/mentoring, awards, selected engineering and skills/languages. Use `src/data/cv.ts`, shared data and approved collections. There is no PDF-download section or download TOC item. Order CV publications **[Conference] then [Journal]**, Korean **[학회] then [저널]**, using the same record order as Publications with truthful inline status labels instead of separate published/review/manuscript groups. Enlarge desktop CV typography across entry text, headings, citations, metadata and navigation while retaining responsive mobile and print layouts. Author names remain English and unlinked. Build Selected engineering from Projects only; exclude ordinary courses and Electronics Design Laboratory. Apply project disclosure limits even where an old document made broader claims.

The owner requested newly authored **LaTeX CV and Resume**, compiled locally with Tectonic. On November 2, the owner moved the working documents out of reference-private into an independent **`CV-Resume/` folder at the website project root**, beside `reference-private/`, explicitly retaining them inside the site folder. Ignore all of `/CV-Resume/` in the parent website Git. Preserve the existing independent document Git history and its sole private Overleaf remote; do not make it a website submodule. Keep three authored versions: detailed academic CV, one-page academic CV, and one-page technical Resume. Use the four owner-supplied example PDFs for format only: centered name/contact header, single-column serif typography, thin section rules, aligned dates and concise technical contributions. Omit phone numbers, photos and a visible Curriculum Vitae label. Lead academic research with current next-generation waveform/OCDM work, then TI-ADC and Bayesian-statistics experience; retain the explicit dual B.S. program. Never copy others' facts, invent individual research responsibilities or promote submission status.

Keep root `.tex` entry points, `shared/cv-style.sty`, a standalone VS Code workspace and `build.sh` in the private document Git. Store unchanged reference PDFs in ignored `references/`, prior drafts/setup in ignored `archive/`, compiler products in ignored `build/`, and final PDFs in ignored `output/pdf/`. Use reviewed current facts and public university contact only; withdrawn originals remain in their original ignored recovery archive. Never restore them or add public downloads. `sh CV-Resume/build.sh` compiles all three documents; use the dedicated `CV-Resume/CV-Resume.code-workspace` for isolated LaTeX Workshop and Git. Overleaf uses XeLaTeX and shared TeX Gyre Pagella OpenType files; local builds use Tectonic. `main.tex` defaults to the full CV, with the compact CV/Resume selected through Overleaf's Main document setting. Source sync remains explicit Git Pull/Commit/Push, subject to owner authorization; generated outputs and reference examples never sync. The HTML CV and public site deployment remain independently maintained, and website builds have no TeX dependency. Keep credentials in the approved macOS Keychain, never in source/configuration or token-bearing URLs.

## 8. Content model and release boundaries

Use distinct collections for `publications`, `projects`, `coursework`, `blog`, and `proposals`, plus one profile/site configuration. Keep slugs, navigation, display order, and featured selections in maintainable data.

Give **every content entry its own folder**, with its Markdown/MDX and selected local images together: `src/content/<collection>/<slug>/<slug>.md` (or `.mdx`). `index.md`/`index.mdx` in the same folder is also supported. All seven initial entries use this structure. Folder wrapping must preserve the public URL `/<collection>/<slug>/` without repeating the slug. Reference images relatively from the article, such as `./prototype.png`; Astro emits referenced images as website assets. Do not treat `README.md` or files under `raw/` as content entries. Temporary sources are not published article bodies; integrate only the selected facts and remove a source when the owner requests its removal.

Shared fields as applicable: `title`, `summary`, `slug`, `status`, `period`, `tags`, `displayOrder`, `featured`, `links`, `collaborators`, and `approvedForPublication`. Status should have collection-specific values rather than treating a course prototype like a paper submission. Research dates, submission dates, publication dates, and report dates must remain separate.

- Publications: metadata-only paper records with `publicationType`, truthful status, ordered authors, verified title and optional venue/year/DOI/links. No independent detail routes or body explanations; list anchors are the public destinations.
- Projects: context/event, implementation status, supported stack, optional verified contribution/award, and evidence links. Course-origin projects retain institution/course/type metadata, with owner-confirmed terms.
- Coursework: released course entries in the coursework collection, shown as a list board with course/institution/term metadata. Initially only the electronics laboratory is included; it retains its hidden internal `courseCode`. Senior/Junior Design and the robotics final project belong in Projects. Future course additions require owner selection; unknown fields remain omitted.
- Blog: language, release date, draft state, tags, optional revision date, and author-written body.
- Proposals: tentative status, owner-controlled priority, optional milestones/related work, and unresolved questions.

Default release approval to false for new entries. The owner's website-build requests approve the conservative portfolio copy. On October 31 the owner withdrew every Blog/Ideas article from commits and requires individual review before future integration; previous CSV selections are not release approval. Keep unreviewed full text in ignored `reference-private/writing-review/`. Content approval never authorizes push, deployment or extra unpublished-research disclosure.

An `approvedForPublication: false` flag does not make a tracked file private. Keep unapproved full text and private editorial notes in ignored references. Populate tracked content only within the owner's approved public scope. If selected copy still needs review, make it available through an explicit local review mode backed by ignored content; do not upload that review copy to the public repository or enable review mode in deployment. A deployable build must exclude every unapproved entry from detail routes, index cards, search data, RSS, sitemap, metadata, and copied assets, not merely hide its navigation link.

If only a collaborator, image, link, or optional field is unresolved, omit that part and continue with the supported page. If an entire entry is not approved for release, exclude it from the release build while completing the rest of the implementation. Keep remaining review items private and summarize them to the owner; do not fill public pages with internal review labels.

## 9. Repository and asset boundaries

All of `reference-private/` is ignored, including withdrawn CV/Resume originals and recovery history. There are no tracked document sources or downloadable CV/Resume endpoints. Ignore `src/documents/` and `public/documents/` to prevent accidental restoration. Never force-add these private materials.

```gitignore
/reference-private/
/story.md
/instructions.md
/development-status.md
/src/documents/
/public/documents/
.DS_Store
```

Suggested implementation layout:

```text
proj.md
story.md / instructions.md     # ignored, replaceable owner instructions
reference-private/
  *.md                         # ignored editorial inputs
  profile_photo.jpeg           # ignored portrait source
  아이디어.docx                 # ignored notebook
public/
  images/                      # reviewed website image copies
src/
  content/
    publications/
      ocdm-cfo-estimation/
        ocdm-cfo-estimation.md  # metadata only
    projects/
      ece3011-robachtic-symphony/
        ece3011-robachtic-symphony.md
        *.png                  # selected, colocated project images
    coursework/                # course notes and laboratory records
    blog/
    proposals/
  components/
  layouts/
  pages/
  styles/
.github/workflows/             # deployment workflow within authorized release scope
```

Do not mirror instructor handouts, raw solutions, student IDs, private contact details, collaborator information outside the supplied public scope, full reports, or notebook archives into the site. Existing public repositories can be linked where supplied; their media and reports are not automatically approved for republication.

## 10. Implementation workflow and completion criteria

For continued implementation and maintenance:

1. Inspect repository status and this brief, then read the selected source summaries. Preserve unrelated work; withdrawn CV/Resume history belongs only in private recovery archives. Do not make another planning-only response a prerequisite.
   Read and maintain `development-status.md`, the Git-ignored **English** development handoff. Keep enough detail for a new LLM to resume immediately: current objective, completed/pending work, exact live preview URLs, how to start or find the server, a working Node path/commands when the shell lacks node/npm, tests and results, and local commit hashes. Update progress there rather than adding running status reports to this tracked brief. Keep it out of Git and deployment output.
2. Maintain the existing Astro project, shared layout/design, profile configuration, content schemas, routes, eleven portfolio entries and three published paper records within the authorized scope; keep unreviewed Blog/Ideas articles private.
3. Maintain the intentional empty Blog/Ideas indexes, the full bilingual HTML CV without document downloads, responsive navigation, white-background styling, profile/contact links, accessibility, metadata, and release filtering. Keep source archives and the temporary instruction pad out of site output.
4. Start a local preview and inspect Home News, the compact Publications list and legacy redirects, When to Eat, moved engineering projects, Coursework subjects/laboratory detail, CV, and mobile navigation. Resolve layout and route problems before reporting completion.
5. Run the production build, applicable type/schema checks, and focused checks that unapproved content and assets are absent from every release surface. Check stable routes after folder moves, local images/links, document targets, mobile navigation, contact navigation/copy behavior, the inline video, white-background rendering, and root-path hosting. Test behavior that can fail; avoid tests that merely restate static copy.
6. Expand the root README with setup, preview/build commands, adding/editing entries, publication states, changing display order, document privacy, asset selection, and the GitHub Pages release procedure.
7. Report what is implemented, validation results, and the few unresolved content/asset choices. The owner's October 28 instruction authorizes periodic local commits of completed work. Commit useful, validated increments as work proceeds. Do not push, configure Pages, or publish yet; the owner plans to publish after the site is complete and will authorize that stage separately.

The build is ready for review when the selected sections work end to end, the eleven portfolio entries retain their correct categories/statuses, Blog/Ideas contain only individually approved finished articles (currently none), the CV is readable as a page, withdrawn documents are absent, no unsupported achievements or manuscript claims have been introduced, and release output contains only approved material.
