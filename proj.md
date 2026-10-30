# Personal Academic Website Implementation Brief

Updated: 2026-10-29. Repository: `EonSJeon/EonSJeon.github.io`.

## 1. Objective and next task

Build a minimal, polished personal academic website on GitHub Pages. Research and academic identity lead the site, followed by independent engineering work, a dedicated Coursework section, writing, and selected proposals.

The initial portfolio contains **six research projects, one independent makerathon project, and four coursework entries**. The owner subsequently selected five notebook ideas for Proposals through the October 29 request described below. Blog remains empty.

Maintain the existing Astro implementation with the eleven portfolio entries, three confirmed journal publication records, and five selected proposal concepts. Treat this document as the durable implementation brief. Development progress, remaining tasks, validation records, preview commands, and execution-environment details belong in the ignored English handoff at `development-status.md`. Public release follows the owner's publication instructions and the content boundaries below.

Implement in this existing repository. Preserve the CV/Resume history already integrated into it. Do not create another repository or move the build to a hosted website-builder service.

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
| CV/Resume documents | `src/documents/cv-resume/` | Biography and dated document downloads; see Section 7 |
| Version provenance | `src/documents/cv-resume/README.md` and `source-inventory.json` | Source dates, pairing decisions and original recovery |
| Portrait candidate | `reference-private/profile_photo.jpeg` | Existing owner-supplied portrait candidate |
| Ideas notebook | `reference-private/아이디어.docx` | Source for the five specifically selected proposal concepts; the remaining notebook stays private |
| Disease-modeling research source collection | `reference-private/Meta_Research_Website_Reference.md` | Owner-requested October 29 local collection from HEM-meta, OCD-meta, SMA-meta, and AMD-meta: bilingual description candidates, original saved figures, evidence and provenance; selected high-level Research descriptions for the current overhaul; no unsupported publication records or numeric medical claims |

`reference-private/CV.pdf`, `personal-info.md`, and `research.md` are not currently present. Do not depend on these obsolete paths or invent substitutes.

Resolve conflicts in this order: the owner's latest explicit instructions; project-specific curated references and their disclosure limits; the newer industrial CV for current biography; older CVs for historical context. A broad CV claim does not override a project's narrower public-description limits.

`story.md` is a temporary instruction pad, not a reference article or permanent specification. Read its saved contents when the owner requests it, apply the instructions, and reconcile the durable requirements into the relevant sections of **this file**. The owner may erase or replace `story.md` at any time; site content, builds, and future maintenance must not depend on it. Keep it Git-ignored and out of deployment output. Do not clear or rewrite it on the owner's behalf unless asked.

Examples requiring this rule:

- Use the TI-ADC reference's September 2024–October 2026 research period and the owner's latest ICC 2027 submission/under-review status rather than older manuscript-in-preparation wording.
- Use When to Eat's documented Grand Prize amount of ₩2,500,000 if an amount is shown. Do not reuse the older CV's approximate dollar amount.
- For When to Eat, credit the confirmed team-leader role. Specific software or hardware ownership is unconfirmed in the curated reference even though older CVs make broader claims.
- Use the final Venus Flytrap architecture and demonstrated outcomes without importing numerical performance claims from historical CVs.

Never invent dates, affiliations, author contributions, publications, repositories, metrics, media, or collaborator URLs. Supplied profile and repository links may be used as supplied; verify a destination before adding new claims based on its contents.

## 3. Initial content inventory

### Research

Create a distinct research collection, index, and detail pages. Research projects and publication records are different entities; cross-link them when an actual manuscript record exists.

| Order | Title | Route | Status |
| --- | --- | --- | --- |
| 10 | Wide-Range Carrier Frequency Offset Estimation for OCDM | `/research/ocdm-cfo-estimation` | Under review — submitted to ICASSP 2027 |
| 20 | Joint Channel and TI-ADC Mismatch Estimation for OFDM | `/research/tiadc-ofdm-estimation` | Under review — submitted to ICC 2027 (owner-confirmed) |

**OCDM:** Explain wide-range CFO estimation for OCDM using a single pilot block in multipath channels at the level of the supplied summary. Display Xiaoli Ma as a collaborator. Research period and individual contribution are unspecified; do not infer them from another project's dates or a general CV entry. Do not disclose pilot construction, waveform-parameter design, ambiguity conditions, acquisition-range formulas, derivations, detailed estimator procedures, or numerical results. Do not promote the submission to an accepted or published paper.

**TI-ADC / OFDM:** Use the supplied short summary on the index and restrained expanded description on the detail page. Show September 2024–October 2026 as a research period, not a publication date. Preserve the supplied author order: Sangeon Jeon, Jiwon Sung, Xiaoli Ma, Jinseok Choi, with the three supplied collaborator links. The title is descriptive, not a confirmed paper title. The owner confirmed submission to ICC 2027 and under-review status. Show that venue/status without inventing acceptance, a formal paper title, DOI, numerical speedup, detailed algorithm, or individual contribution statement.

Keep research prominent on Home. Do not label coursework or the makerathon as research to fill this section.


**Meta Analysis:** Group the four disease-modeling entries (HEM, OCD, SMA, AMD) under **Meta Analysis / 메타분석**, the owner-confirmed field name. Do not label the field or SMA project as Literature-Based. Use the prepared guides for restrained bilingual research questions and computational approaches. OCD, SMA, and AMD now have owner-confirmed published papers and co-first authorship; link their research pages to the publication records below. HEM remains a research project without a confirmed publication record. Omit other unconfirmed dates, affiliations, personal contributions and numerical medical results. Only the selected OCD posterior-predictive diagnostic is shown, clearly as a model check; do not use the problematic HEM/AMD result charts or invent absent SMA figures. Keep OCD distinct from the OCDM communications waveform. The owner's latest instruction removes the Meta Analysis section from Home; retain it on Research and Publications. Add Bayesian inference to Home and About research interests in both languages.

**Engineering media:** Use selected real prototype/device/interface photos from the prepared Engineering_Projects collection for When to Eat, Venus Flytrap and RoBACHtic. Keep content and covers colocated, use typed optimized Astro image metadata, meaningful bilingual captions, responsive cards and galleries, and a lightweight article contents navigation. Preserve pixels/orientation and remove unneeded camera metadata in selected web copies. No fabricated prototypes, measured performance, classroom validation or unsupported ownership.

### Independent Projects

Create one initial entry: **When to Eat — RFID Food Storage Reminder**, at `/projects/when-to-eat`.

- Display `2024 KAIST Makerathon`, `Summer 2024`, `Grand Prize (1st Place)`, and the confirmed team-leader role.
- Describe a completed team prototype using detachable RFID tokens, a token station, and a Windows desktop reminder interface.
- Use the supported stack: ATID ATD100, UHF RFID, C#, XAML, Windows UWP, and USB VCP integration through the manufacturer's SDK. The specific ATD100N variant is unconfirmed.
- Link the supplied project repository. Display the four team members and only the supplied professional-profile links; do not invent a profile for Yujin Park.
- Keep suggested sound alerts, phone widgets, and other future concepts separate from implemented features.
- Describe elapsed-time reminders. Do not claim direct spoilage sensing, food-safety guarantees, measured waste reduction, or user-study results.

### Coursework

Keep `/coursework` as a named section with its own collection and index, separate from Research and independent Projects. Create these **four** entries, each with a stable detail route:

| Order | Entry | Route | Type and evidence |
| --- | --- | --- | --- |
| 10 | Venus Flytrap Bioelectrical Signal Recording and Playback | `/coursework/venus-flytrap-bioelectrical-playback` | Georgia Tech ECE 4723; Senior Design / Capstone; 2024; successfully demonstrated |
| 20 | RoBACHtic Symphony — Educational Robotic Violin Kit | `/coursework/ece3011-robachtic-symphony` | Georgia Tech ECE 3011 Design Fundamentals; Junior Design; 2023; completed prototype with limitations |
| 30 | Electronics Design Laboratory | `/coursework/electronics-design-lab` | KAIST EE305 Introduction to Electronics Design Lab; laboratory coursework; Fall 2022; completed |
| 40 | Robotic Tic-Tac-Toe with a Four-Degree-of-Freedom Manipulator | `/coursework/ee405-robotic-tic-tac-toe` | KAIST EE405; laboratory coursework / course final project; 2024; hardware demonstration documented |

These are initial display priorities, editable through content data. Keep Venus Flytrap above EE305 unless the owner changes the order. A compact Home preview may feature Venus Flytrap and EE305 without duplicating all four detail pages on Home.

**Venus Flytrap:** Emphasize successful signal recording and electrically triggered closure. Credit Sangeon Jeon with the complete digital-system design and programming: Seeeduino firmware, MATLAB software, MATLAB App Designer interface, serial communication, recording, and playback. The current source poster/README confirm Seeeduino XIAO, Spring2024, advisor Dr. William Hunt and association with Vivent Biosignals. The final stack is Seeeduino XIAO, C++/Arduino-style firmware, MATLAB, and direct USB/serial to a laptop. Do not list the abandoned Raspberry Pi/Python approach, ADS1115, or MCP4725 as final components. Analog-system ownership and numerical performance remain unconfirmed. Use the five supplied collaborator links without assigning additional roles. Explain the protocol, Monitor/Uploader workflow, measurement evidence and concrete buffer/timing limitations; distinguish nominal configured sampling from measured behavior. Add the source-selected explanation YouTube plus reviewed native closure and uploader footage.

**RoBACHtic Symphony:** Emphasize mechanical design and fabrication using SolidWorks, 3D printing, laser cutting, and integration testing. Attribute overall system development to the team. The final demonstration combined robotic bow/string-position movement with electronically generated micro:bit tones; do not claim acoustic violin performance, recorded violin-sample playback, complete articulation controls, or validated classroom outcomes. The report submission date, December 14, 2023, is not an exact project-completion date. Use the owner-confirmed collaborator names/links and supplied repositories. Do not attribute another author's first-person software-lead statement to Jeon.

The owner supplied and selected two PNGs in `src/content/coursework/ece3011-robachtic-symphony/`: front views of the final build and the labeled CAD/build comparison. Display both with meaningful alt text and captions. Embed the supplied demonstration, `https://youtu.be/gud--ybyr-s`, directly on the page using a responsive, click-to-play YouTube privacy-enhanced player and a normal YouTube fallback link. Link the original team's final design-document/lesson-plan/BOM package. The temporary project `README.md` has been incorporated into `ece3011-robachtic-symphony.md` and removed as instructed; retain the root repository README. Describe the lesson plan's fifth-grade Music/Computer Science curriculum alignment as a design goal, not a measured educational result.

The owner's October 28 ECE3011 update adds local report, photo, README, and video references under `reference-private/ECE3011/`. Supplement the article with the report's final demonstration (12 keys in two octave ranges), mechanical fit and mounting-hole checks, labeled actuation mechanisms, and proposed lesson activities. Present photos and the video with semantic figure captions. Keep the two distinct existing visuals; the additional front-view PNG is near-duplicate imagery. Continue using the selected YouTube embed rather than copying the 250 MB source video into the site. Keep the raw report and original README as local references; the report's contribution section remains authoritative over the README's first-person software attribution.

**Electronics laboratory (internal EE305 source):** Publish one broad electronics laboratory entry at `/coursework/electronics-design-lab/`, with the same clean Korean route. Do not expose the course number in the public title, body, metadata, alt text, navigation, or URL. Keep the source folder/internal code for maintainability, set `showCourseCode: false`, and pair both languages through `translationKey: electronics-design-lab`. Lead with the Lab 4–5 three-bit OR/XOR calculator, its input conditioning, registers, ALU, wiring/debugging, and selected breadboard/schematic/test photos. Keep the course overview and meaningful supporting sections for Labs 7–8 MATLAB communication simulation, ATmega128A stopwatch, analog audio filtering, and foundational measurements. The latest instruction is emphasis on Lab 4–5, not exclusion of the other labs or renaming the whole course as only a calculator. Distinguish simulated communication from physical hardware. Do not claim a general-purpose decoder, CPU architecture, sole authorship, or unconfirmed collaborator identities.

**EE405:** Center the page on the C++ robotic tic-tac-toe implementation with DYNAMIXEL control, stored joint configurations, and Jacobian-based adjustment. The refreshed source README explicitly confirms KAIST and2024; inspected final-apparatus footage now supports hardware-demonstration status. Describe the physical board/paint stations, keyboard input, direct teaching, waypoint layout, win/block/random logic, interpolation and requested Jacobian pressing displacement, with substantive supporting lab context. Official course title, exact term, collaborators and individual contribution remain unspecified. Do not infer them, describe the rule-based opponent as machine learning, or claim force-controlled contact, measured accuracy, a complete autonomous game or an exact filmed executable/source match. Clearly label the separate manual stamping/setup footage.

**Detail and video policy (latest owner request):** ECE3011, ECE4723 and EE405 detail pages should approach their original repository README in depth, rather than stop at a portfolio summary. Import usable material into ignored references first, retain provenance, then publish selected bilingual technical narratives covering architecture, implementation, design iterations, tests, outcomes and limitations. Approved selected videos may be brought over as native browser-playable web copies; keep full raw originals private, preserve motion/timing/orientation, filter unnecessary camera metadata, and create posters from actual frames. Native clips are colocated with articles, selected per-language through `clips`, and emitted through a release-gated `/media/` route. Keep playback user-initiated with controls, no autoplay and `preload="none"`. Keep the existing ECE3011 final YouTube demo; its large/raw early-button video does not need to be emitted.

## 4. Publications, writing, and proposals

**Publications:** Provide a publication page capable of separating Published/Accepted work from Under Review manuscripts. OCDM can appear in an explicitly labeled Under Review subsection with a link to its research page. The TI-ADC manuscript is now also shown Under Review, submitted to ICC 2027, as explicitly confirmed by the owner. Retain its descriptive title without fabricating a formal bibliographic record. Do not fabricate bibliographic fields, dates, acceptance, DOI, or paper links to fill a publication card.

On October 29 the owner supplied the published titles, complete ordered author lists, journal names, publication dates and public links for three Meta Analysis papers. Register these as Published in both languages, preserving the official English titles and author order. Show the owner's name prominently with a co-first-author mark and legend on all three. The owner's subsequent contribution excerpts confirm OCD co-first authors Yi Deun Jeong, Yejun Son, Sangeon Jeon; SMA's leading co-first group Yi Deun Jeong, Yejun Son, Sangeon Jeon; and AMD co-first authors Yi Deun Jeong, Sangeon Jeon, Wonseok Shin, Seoyoung Park. SMA's publisher footnote also names Jiseung Kang and Dong Keon Yon as equal contributors: preserve those two with a separate generic equal-contribution mark, without inventing first/senior/corresponding status. Use † for co-first authors and ‡ for other equal contributors, with bilingual legends. Link Yi Deun Jeong to `https://scholar.google.com/citations?user=HvDDOvsAAAAJ&hl=en` and credit the collaboration with [Center for Digital Health, Kyung Hee University](http://cdh.khu.ac.kr/). Keep these links on the corresponding Research pages as well. Display the complete ordered author list on each corresponding Research detail page, derived from its released same-language publication record. On all four Meta Analysis research pages, credit **Dong Keon Yon** as **Project Manager** with the owner-supplied [introduction page](http://cdh.khu.ac.kr/%EB%B6%80%EC%84%BC%ED%84%B0%EC%9E%A5-%EC%86%8C%EA%B0%9C). Use this link for his name in publication author lists too.

The owner also supplied HEM's complete author order: Yi Deun Jeong†, Sangeon Jeon†, Yejun Son†, Soeun Kim†, Ellia Tootoonchian, Donna Coffin, Taehwan Park, Dong Keon Yon, Jeffrey Stonebraker, Glenn F. Pierce. Store these directly on both HEM Research entries, with the four † names as confirmed co-first authors. Link Glenn F. Pierce's name to his [ISTH biography](https://genetherapy.isth.org/glenn-f-pierce-md-phd). The owner confirms that HEM is a collaboration with the Center for Digital Health at Kyung Hee University and the [World Federation of Hemophilia (WFH)](https://wfh.org/); credit and link both organizations in the English/Korean introduction and collaborator list. No HEM publication metadata/status or affiliation-number mapping was supplied; do not infer it or the meaning of other manuscript footnote symbols.

| Publication route | Journal | DOI | Owner-supplied date |
| --- | --- | --- | --- |
| `/publications/amd-global-burden/` | Ophthalmology Retina | `10.1016/j.oret.2026.09.019` | 2026-09-19 |
| `/publications/ocd-related-disorders-prevalence/` | American Journal of Psychiatry | `10.1176/appi.ajp.20250944` | 2026-07-08 |
| `/publications/sma-global-prevalence/` | Pediatric Neurology | `10.1016/j.pediatrneurol.2026.04.005` | 2026-04-20 (online) |

Display journal/year and DOI, order published records newest first, and cross-link each record with its corresponding Research entry. Keep Published separate from the ICASSP/ICC Under Review manuscripts. Publication status alone does not establish a particular retained code revision's complete agreement with the published analysis. Do not rewrite the dated CV/Resume source documents or infer an additional HEM publication from older manuscript entries.

**Blog / Ideas — individual review required:** Keep unpublished writing in ignored `reference-private/writing-review/`. Do not commit notebook-derived articles until the owner explicitly approves each finished article. Earlier bulk selections do not authorize publication. Preserve the empty collection indexes and per-language release controls.

## 5. Information architecture and Home

| Route | Purpose |
| --- | --- |
| `/` | Academic introduction, selected communications research, selected independent work, restrained coursework preview, and released writing when available; no Meta Analysis or Ideas preview |
| `/about` | Short biography, education, research interests, and selected experience |
| `/research` and `/research/[slug]` | The two initial research entries and later verified research projects |
| `/publications` | Accurate bibliographic records with clear publication-status groupings |
| `/projects` and `/projects/[slug]` | Independent engineering work, initially When to Eat |
| `/coursework` and `/coursework/[slug]` | The four course-based entries |
| `/blog` and `/blog/[slug]` | Released writing |
| `/proposals` and `/proposals/[slug]` | Ideas; retain these existing URLs |
| `/cv` | Clearly dated CV/Resume document choices |

Navigation should stay compact. Use a grouped menu where necessary; Research, Coursework, and Ideas must remain clearly named and reachable. Contact can be a small About/footer section rather than another top-level route.

Home should open with Sangeon Jeon's name, a concise academic identity, research interests, and these **five icon links visible in the introductory screen**, with accessible text labels:

| Profile | Destination |
| --- | --- |
| Email | `mailto:sjeon84@gatech.edu`; display `sjeon84@gatech.edu` |
| GitHub | `https://github.com/EonSJeon`; display `github.com/EonSJeon` |
| Google Scholar | `https://scholar.google.com/citations?user=vwwPFNMAAAAJ` |
| ORCID | `https://orcid.org/0009-0001-5883-0774` |
| LinkedIn | `https://www.linkedin.com/in/sangeon-jeon-b8bb7b239/` |

Keep these destinations in the shared profile configuration. Use the school email for all website contact links; do not copy the older Gmail address from a CV. Home's **Get in touch** must navigate to `/about/#contact`, where the address is readable, a mail link is available, and a Copy email button confirms success or selects the address for manual copying if clipboard access is unavailable. Contact must remain usable without a configured desktop mail handler. No contact-form backend is required.

Follow the introduction with the two research entries, one independent-project feature, then selected coursework. Avoid a full CV pasted into Home, an oversized hero, redundant cards across sections, and empty publication statistics.

## 6. Design and implementation stack

- Use Astro static generation, TypeScript where useful, and Markdown/MDX content collections. Select supported APIs and compatible dependencies from official documentation at implementation time; this brief does not pin an unverified framework version.
- Host on GitHub Pages for the user-site root `https://eonsjeon.github.io/`, with GitHub Actions for deployment. Do not add a repository-name base path for this user-site repository.
- Use a clean **white background**, readable typography, comfortable text widths, clear hierarchy, generous spacing, neutral text/borders, and a limited accent color. The header uses the owner's plain name; do not invent an initials mark, brand logo, or custom logo favicon.
- Provide responsive desktop/mobile navigation, accessible semantic HTML, visible keyboard focus, meaningful link text, and sufficient contrast.
- Provide full Korean and English versions. Preserve existing English URLs, and use `/ko/` for Korean pages, including Home, About, CV, 404, all indexes and nineteen selected article translations. Keep a visible `한국어` / `English` selector in the header on desktop and mobile, with the current language marked. Switch to the same article when its approved translation exists; otherwise link to the target-language collection index and advertise no nonexistent translation in hreflang metadata.
- The owner works directly in Korean. Keep editable `<slug>.ko.md` beside each English `<slug>.md`, paired by `translationKey`. Filter routes, lists, Home previews, and RSS by language and release flags. Korean-only authoring must work without an English placeholder. Localize document language, canonical/alternate URLs, metadata, UI, captions, and contact feedback. Do not turn the notes or unapproved translations into public entries automatically.
- Display the owner's exact Hanja name **全商彥** alongside 전상언 and Sangeon Jeon on both Home versions.
- Keep Korean prose natural without translating every proper name or interface label. The owner prefers **CV** in navigation, **CV & Resume** for the document page, **코스웍** as the compact coursework menu label, and **수업 프로젝트** in descriptive text. Retain **Georgia Institute of Technology / Georgia Tech**, **Electrical & Computer Engineering** in institutional labels, and **Atlanta, Georgia** in English on Korean pages.
- Use the officially distributed Pretendard Variable font for polished Korean typography, with readable body text and stronger heading weights. Self-host the unchanged WOFF2 and its OFL license under `public/fonts/`; avoid a runtime dependency on an external font service.
- Keep the site consistently light, including when the device prefers dark mode. The owner's white-background instruction supersedes the earlier light/dark-toggle requirement.
- Keep browser JavaScript small. No CMS, database, backend, analytics, comments, complex animation, or external embeds by default.
- Provide metadata, canonical URLs, sitemap, a useful 404 page, and social-sharing metadata where actual assets exist.
- Keep public copy focused on the person and work. Do not expose source-file names, editorial instructions, approval flags, or implementation details in rendered pages.
- Review the existing portrait's suitability and use it as the initial portrait candidate. If it is unsuitable or its use is unresolved, use a clean text-led layout without a broken image box or generated identity.
- Add project photos, waveforms, screenshots, and diagrams only with project-specific evidence and reuse clearance; do not fabricate experimental data or demo images. RoBACHtic's two owner-supplied images and embedded video are explicitly selected above. Other videos remain external links unless selected for embedding. Embed players must be responsive, keyboard accessible, titled, lazy-loaded, and free of autoplay, with a fallback source link.

## 7. Biography and CV/Resume handling

The documents are intentionally named using the owner's convention: `Resume-Full` for the comprehensive document and `CV-1Page-*` for targeted one-page versions. Preserve those names and their Git history.

| Document | Current source | Source version |
| --- | --- | --- |
| Full resume | `src/documents/cv-resume/Sangeon-Jeon-Resume-Full.pdf` and `.docx` | 2025-09-08; three-page PDF |
| Industrial/general one-page CV | `src/documents/cv-resume/Sangeon-Jeon-CV-1Page-Industrial.pdf` | Filename dated 2026-04-11; internal creation date unavailable |
| ML one-page CV | `src/documents/cv-resume/Sangeon-Jeon-CV-1Page-ML.pdf` and `.docx` | 2025-09-09 |
| Software one-page CV | `src/documents/cv-resume/Sangeon-Jeon-CV-1Page-Software.pdf` and `.docx` | 2025-09-09 |
| Telecom one-page CV | `src/documents/cv-resume/Sangeon-Jeon-CV-1Page-Telecom.pdf` and `.docx` | 2025-09-09 |
| Neuroscience one-page CV | `src/documents/cv-resume/Sangeon-Jeon-CV-1Page-Neuroscience.pdf` | Filename dated 2024-01-05; PDF exported 2024-01-10 |

The newer industrial CV supports this biography baseline: Georgia Tech ECE Ph.D. study beginning January 2026 with Xiaoli Ma; Georgia Tech ECE M.S. in 2025 and B.S. in 2023–2024; KAIST Electrical Engineering B.S. in 2018–February 2025. Do not describe the owner as still awaiting the M.S. solely because older documents use expected-graduation wording. Recheck time-sensitive current-role wording before public release.

The owner explicitly confirmed the GPAs for the website: **KAIST 3.95/4.3** and **all Georgia Tech education entries 4.00/4.0**. Show these on About alongside the corresponding degrees. These values override older CV GPA values for the website; do not rewrite the dated source documents.

The owner confirmed on October 29 that **Jinseok Choi (최진석)** was their advisor at KAIST. Show `Advisor: Jinseok Choi` with the KAIST education entry on About.

The owner also confirmed that **Xiaoli Ma** was their Georgia Tech M.S. advisor. Show `Advisor: Xiaoli Ma` with the M.S. education entry as well as the existing Ph.D. entry on About.

Use the industrial one-page PDF as the most recent available document candidate and the full resume as a separately dated comprehensive document. Do not call the 2025 full resume current as of 2026, silently merge incompatible claims, or rewrite source documents as part of the website build. Targeted older CVs need not all be prominent site downloads; the CV page should offer a clear primary choice and dates, with additional versions only where useful.

Repository tracking and website presentation are separate decisions. **PDF and DOCX files are both intentionally committed to the main website repository**, including recoverable old versions. Do not ignore, untrack, delete, or move DOCX files to a separate repository. For a future document revision, review matching DOCX/PDF together and commit the matching pair when both exist.

Select website downloads only through `src/documents/downloads.json`, using canonical source files in `src/documents/cv-resume/` and prerendered PDF endpoints. Do not maintain duplicate download binaries in `public/`. Git tracking alone does not select a document as a site download. DOCX website-download buttons are optional and should follow the owner's preference; retaining DOCX in Git is required. Do not automatically expose addresses or phone numbers from the documents on Home or About. Use only selected public contact details and links.

## 8. Content model and release boundaries

Use distinct collections for `research`, `publications`, `projects`, `coursework`, `blog`, and `proposals`, plus one profile/site configuration. Keep slugs, navigation, display order, and featured selections in maintainable data.

Give **every content entry its own folder**, with its Markdown/MDX and selected local images together: `src/content/<collection>/<slug>/<slug>.md` (or `.mdx`). `index.md`/`index.mdx` in the same folder is also supported. All seven initial entries use this structure. Folder wrapping must preserve the public URL `/<collection>/<slug>/` without repeating the slug. Reference images relatively from the article, such as `./prototype.png`; Astro emits referenced images as website assets. Do not treat `README.md` or files under `raw/` as content entries. Temporary sources are not published article bodies; integrate only the selected facts and remove a source when the owner requests its removal.

Shared fields as applicable: `title`, `summary`, `slug`, `status`, `period`, `tags`, `displayOrder`, `featured`, `links`, `collaborators`, and `approvedForPublication`. Status should have collection-specific values rather than treating a course prototype like a paper submission. Research dates, submission dates, publication dates, and report dates must remain separate.

- Research: topics, `researchArea` (`communications` or `meta-analysis`), public-safe description, optional contribution, and optional related manuscript identifier.
- Publications: publication status, ordered authors, verified title, optional venue/year/DOI/public links, and related research identifier.
- Projects: context/event, implementation status, supported stack, optional verified contribution/award, and evidence links.
- Coursework: optional institution/course title, `courseCode`, year/term, type (`senior-design`, `junior-design`, `laboratory`, or `course-final-project`), implementation/demonstration status, optional contribution/collaborators, and internal highlights. Unknown EE405 fields must be valid omissions.
- Blog: language, release date, draft state, tags, optional revision date, and author-written body.
- Proposals: tentative status, owner-controlled priority, optional milestones/related work, and unresolved questions.

Default release approval to false for new entries. The owner's website-build request selects the conservative public-safe copy for the seven initial entries, and the October 29 instruction selects the five curated proposals above. These entries are explicitly marked approved in their content files so they appear in the local production preview. This does not authorize additional notebook extraction, unpublished research disclosure, push, or deployment. Respect explicit content approval already given in the session rather than asking for it again.

An `approvedForPublication: false` flag does not make a tracked file private. Keep unapproved full text and private editorial notes in ignored references. Populate tracked content only within the owner's approved public scope. If selected copy still needs review, make it available through an explicit local review mode backed by ignored content; do not upload that review copy to the public repository or enable review mode in deployment. A deployable build must exclude every unapproved entry from detail routes, index cards, search data, RSS, sitemap, metadata, and copied assets, not merely hide its navigation link.

If only a collaborator, image, link, or optional field is unresolved, omit that part and continue with the supported page. If an entire entry is not approved for release, exclude it from the release build while completing the rest of the implementation. Keep remaining review items private and summarize them to the owner; do not fill public pages with internal review labels.

## 9. Repository and asset boundaries

All of `reference-private/` is ignored. It contains curated editorial inputs and raw source material, not site-owned downloadable documents. Canonical CV/Resume sources live in tracked `src/documents/cv-resume/`, and `src/documents/downloads.json` selects the files emitted at stable `/documents/*.pdf` URLs. Preserve source pairs and historical provenance when moving them; prior Git paths remain valid for historical recovery. Do not force-add private reference packages.

```gitignore
/reference-private/
/story.md
/development-status.md
.DS_Store
```

Suggested implementation layout:

```text
proj.md
story.md                       # ignored, replaceable owner instructions
reference-private/
  *.md                         # ignored editorial inputs
  profile_photo.jpeg           # ignored portrait source
  아이디어.docx                 # ignored notebook
public/
  images/                      # reviewed website image copies
src/
  documents/
    cv-resume/                 # canonical tracked document pairs and provenance
    downloads.json             # selected public download allowlist
  content/
    research/
      ocdm-cfo-estimation/
        ocdm-cfo-estimation.md
    publications/
    projects/
    coursework/
      ece3011-robachtic-symphony/
        ece3011-robachtic-symphony.md
        *.png                  # selected, colocated project images
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

1. Inspect repository status and this brief, then read the selected source summaries. Preserve unrelated work and existing CV/Resume commits. Do not make another planning-only response a prerequisite.
   Read and maintain `development-status.md`, the Git-ignored **English** development handoff. Keep enough detail for a new LLM to resume immediately: current objective, completed/pending work, exact live preview URLs, how to start or find the server, a working Node path/commands when the shell lacks node/npm, tests and results, and local commit hashes. Update progress there rather than adding running status reports to this tracked brief. Keep it out of Git and deployment output.
2. Maintain the existing Astro project, shared layout/design, profile configuration, content schemas, routes, eleven portfolio entries, and five selected proposal concepts within the authorized review/release scope.
3. Maintain Blog's empty state, the populated Proposals section, document selection on `/cv`, responsive navigation, white-background styling, profile/contact links, accessibility, metadata, and release filtering. Keep source archives and the temporary instruction pad out of site output.
4. Start a local preview and inspect Home, a research detail, When to Eat, all coursework types, CV, and mobile navigation. Resolve layout and route problems before reporting completion.
5. Run the production build, applicable type/schema checks, and focused checks that unapproved content and assets are absent from every release surface. Check stable routes after folder moves, local images/links, document targets, mobile navigation, contact navigation/copy behavior, the inline video, white-background rendering, and root-path hosting. Test behavior that can fail; avoid tests that merely restate static copy.
6. Expand the root README with setup, preview/build commands, adding/editing entries, publication states, changing display order, maintaining DOCX/PDF pairs, asset selection, and the GitHub Pages release procedure.
7. Report what is implemented, validation results, and the few unresolved content/asset choices. The owner's October 28 instruction authorizes periodic local commits of completed work. Commit useful, validated increments as work proceeds. Do not push, configure Pages, or publish yet; the owner plans to publish after the site is complete and will authorize that stage separately.

The build is ready for review when the selected sections work end to end, the eleven portfolio entries retain their correct categories/statuses, the five proposals are clearly concepts, Blog's empty state is intentional, document links are clear and dated, no unsupported achievements or manuscript claims have been introduced, and release output contains only approved material.
