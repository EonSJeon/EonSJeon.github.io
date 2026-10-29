# Personal Academic Website Implementation Brief

Updated: 2026-10-29. Repository: `EonSJeon/EonSJeon.github.io`.

## 1. Objective and next task

Build a minimal, polished personal academic website on GitHub Pages. Research and academic identity lead the site, followed by independent engineering work, a dedicated Coursework section, writing, and selected proposals.

The initial portfolio contains **two research projects, one independent makerathon project, and four coursework entries**. The owner subsequently selected five notebook ideas for Proposals through the October 29 request described below. Blog remains empty.

The owner has requested implementation, and the Astro website now exists in this repository with the original seven entries, five proposal concepts, and a working local preview. Treat this document as the continuing implementation brief. Extend the existing site instead of restarting a planning-only phase or scaffolding a replacement. Public release follows the owner's publication instructions and the content boundaries below.

Implement in this existing repository. Preserve the CV/Resume history already integrated into it. Do not create another repository or move the build to a hosted website-builder service.

## 2. Sources and authority

Read the relevant references before writing each entry. These are local editorial inputs, not files to copy wholesale into website content.

| Material | Local source | Use |
| --- | --- | --- |
| OCDM research | `reference-private/icassp_2027_ocdm_research_project_summary.md` | High-level research description and disclosure limits |
| TI-ADC / OFDM research | `reference-private/tiadc_ofdm_project_website_reference.md` | Project summary, period, manuscript status, collaborator order and supplied links |
| When to Eat | `reference-private/KAIST_Makerathon_When_to_Eat_Website_Summary.md` | Independent project, Grand Prize, implementation, team and repository |
| Venus Flytrap | `reference-private/Venus_Flytrap_Senior_Design_Website_Reference.md` | ECE 4723 capstone, final digital system, demonstrated outcomes and contribution |
| RoBACHtic Symphony | `reference-private/ECE3011/ECE3011_RoBACHtic_Symphony_Coursework_Website_Reference.md` and the final document package in that folder | ECE 3011 Junior Design, mechanical contribution, limitations, demonstration and lesson-plan details |
| Electronics Design Lab | `reference-private/KAIST_EE305_Coursework_Website_Reference.md` | One consolidated EE305 entry with selected internal highlights |
| Robotic Tic-Tac-Toe | `reference-private/EE405_Coursework_Website_Reference.md` | One EE405 implementation entry, supporting labs and unknown metadata |
| CV/Resume documents | `reference-private/CV-Resume/` | Biography and dated document downloads; see Section 7 |
| Version provenance | `reference-private/CV-Resume/README.md` and `source-inventory.json` | Source dates, pairing decisions and original recovery |
| Portrait candidate | `reference-private/profile_photo.jpeg` | Existing owner-supplied portrait candidate |
| Ideas notebook | `reference-private/아이디어.docx` | Source for the five specifically selected proposal concepts; the remaining notebook stays private |

`reference-private/CV.pdf`, `personal-info.md`, and `research.md` are not currently present. Do not depend on these obsolete paths or invent substitutes.

Resolve conflicts in this order: the owner's latest explicit instructions; project-specific curated references and their disclosure limits; the newer industrial CV for current biography; older CVs for historical context. A broad CV claim does not override a project's narrower public-description limits.

`story.md` is a temporary instruction pad, not a reference article or permanent specification. Read its saved contents when the owner requests it, apply the instructions, and reconcile the durable requirements into the relevant sections of **this file**. The owner may erase or replace `story.md` at any time; site content, builds, and future maintenance must not depend on it. Keep it Git-ignored and out of deployment output. Do not clear or rewrite it on the owner's behalf unless asked.

Examples requiring this rule:

- Use the TI-ADC reference's September 2024–October 2026 project period and manuscript-in-preparation status rather than an older CV's dates or technical claims.
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
| 20 | Joint Channel and TI-ADC Mismatch Estimation for OFDM | `/research/tiadc-ofdm-estimation` | Research project completed; manuscript in preparation, not submitted |

**OCDM:** Explain wide-range CFO estimation for OCDM using a single pilot block in multipath channels at the level of the supplied summary. Display Xiaoli Ma as a collaborator. Research period and individual contribution are unspecified; do not infer them from another project's dates or a general CV entry. Do not disclose pilot construction, waveform-parameter design, ambiguity conditions, acquisition-range formulas, derivations, detailed estimator procedures, or numerical results. Do not promote the submission to an accepted or published paper.

**TI-ADC / OFDM:** Use the supplied short summary on the index and restrained expanded description on the detail page. Show September 2024–October 2026 as a research period, not a publication date. Preserve the supplied author order: Sangeon Jeon, Jiwon Sung, Xiaoli Ma, Jinseok Choi, with the three supplied collaborator links. The title is descriptive, not a confirmed paper title. Do not add a venue, paper link, DOI, numerical speedup, detailed algorithm, or individual contribution statement.

Keep research prominent on Home. Do not label coursework or the makerathon as research to fill this section.

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
| 30 | Electronics Design Laboratory | `/coursework/ee305-electronics-design-lab` | KAIST EE305 Introduction to Electronics Design Lab; laboratory coursework; Fall 2022; completed |
| 40 | Robotic Tic-Tac-Toe with a Four-Degree-of-Freedom Manipulator | `/coursework/ee405-robotic-tic-tac-toe` | EE405; laboratory coursework / course final project; 2024; implementation available, final demonstration unverified |

These are initial display priorities, editable through content data. Keep Venus Flytrap above EE305 unless the owner changes the order. A compact Home preview may feature Venus Flytrap and EE305 without duplicating all four detail pages on Home.

**Venus Flytrap:** Emphasize successful signal recording and electrically triggered closure. Credit Sangeon Jeon with the complete digital-system design and programming: Seeeduino firmware, MATLAB software, MATLAB App Designer interface, serial communication, recording, and playback. The final stack is Seeeduino, C++/Arduino-style firmware, MATLAB, and direct USB/serial to a laptop. Do not list the abandoned Raspberry Pi/Python approach, ADS1115, or MCP4725 as final components. Exact board model, analog-system ownership, and numerical performance are unconfirmed. Use the five supplied collaborator links without assigning additional roles.

**RoBACHtic Symphony:** Emphasize mechanical design and fabrication using SolidWorks, 3D printing, laser cutting, and integration testing. Attribute overall system development to the team. The final demonstration combined robotic bow/string-position movement with electronically generated micro:bit tones; do not claim acoustic violin performance, recorded violin-sample playback, complete articulation controls, or validated classroom outcomes. The report submission date, December 14, 2023, is not an exact project-completion date. Use the owner-confirmed collaborator names/links and supplied repositories. Do not attribute another author's first-person software-lead statement to Jeon.

The owner supplied and selected two PNGs in `src/content/coursework/ece3011-robachtic-symphony/`: front views of the final build and the labeled CAD/build comparison. Display both with meaningful alt text and captions. Embed the supplied demonstration, `https://youtu.be/gud--ybyr-s`, directly on the page using a responsive, click-to-play YouTube privacy-enhanced player and a normal YouTube fallback link. Link the original team's final design-document/lesson-plan/BOM package. The temporary project `README.md` has been incorporated into `ece3011-robachtic-symphony.md` and removed as instructed; retain the root repository README. Describe the lesson plan's fifth-grade Music/Computer Science curriculum alignment as a design goal, not a measured educational result.

The owner's October 28 ECE3011 update adds local report, photo, README, and video references under `reference-private/ECE3011/`. Supplement the article with the report's final demonstration (12 keys in two octave ranges), mechanical fit and mounting-hole checks, labeled actuation mechanisms, and proposed lesson activities. Present photos and the video with semantic figure captions. Keep the two distinct existing visuals; the additional front-view PNG is near-duplicate imagery. Continue using the selected YouTube embed rather than copying the 250 MB source video into the site. Keep the raw report and original README as local references; the report's contribution section remains authoritative over the README's first-person software attribution.

**EE305:** Publish one course entry. Feature the MATLAB PCM/QPSK/convolutional-coding/Viterbi simulation and breadboard ALU calculator as its two primary internal highlights. Summarize the ATmega128A stopwatch, analog audio filtering, and foundational labs more briefly. Distinguish simulated communication from physical hardware experiments. Do not present the specific four-state decoder as general-purpose, the calculator as a CPU, or group participation as sole authorship. Collaborator names/spellings and public reuse of report figures still need confirmation.

**EE405:** Center the page on the C++ robotic tic-tac-toe implementation with DYNAMIXEL control, stored joint configurations, and Jacobian-based adjustment. Briefly summarize supporting embedded-control, communication, and motor-control labs within the same page. Institution, official course title, term, collaborators, individual contribution, and final hardware demonstration are unspecified: omit those optional fields. Do not infer KAIST solely from the course number, describe the rule-based opponent as machine learning, or claim force-controlled contact, measured accuracy, or a verified final demo.

## 4. Publications, writing, and proposals

**Publications:** Provide a publication page capable of separating Published/Accepted work from Under Review manuscripts. OCDM can appear in an explicitly labeled Under Review subsection with a link to its research page. The TI-ADC manuscript remains in preparation on its research page. Do not fabricate bibliographic fields, dates, acceptance, DOI, or paper links to fill a publication card.

The older full resume and newer industrial CV contain disease-modeling manuscript entries with different dated statuses. Do not automatically turn these into current peer-reviewed publication records or additional research pages. Include them only after their current titles, authorship, venue/status, public links, and suitable summary are confirmed. Missing publication records must not block the rest of the build.

**Blog / Ideas — individual review required:** Keep unpublished writing in ignored `reference-private/writing-review/`. Do not commit notebook-derived articles until the owner explicitly approves each finished article. Earlier bulk selections do not authorize publication. Preserve the empty collection indexes and per-language release controls.

## 5. Information architecture and Home

| Route | Purpose |
| --- | --- |
| `/` | Academic introduction, selected research, selected independent work, restrained coursework preview, and released writing/proposals when available |
| `/about` | Short biography, education, research interests, and selected experience |
| `/research` and `/research/[slug]` | The two initial research entries and later verified research projects |
| `/publications` | Accurate bibliographic records with clear publication-status groupings |
| `/projects` and `/projects/[slug]` | Independent engineering work, initially When to Eat |
| `/coursework` and `/coursework/[slug]` | The four course-based entries |
| `/blog` and `/blog/[slug]` | Released writing |
| `/proposals` and `/proposals/[slug]` | Selected forward-looking proposals |
| `/cv` | Clearly dated CV/Resume document choices |

Navigation should stay compact. Use a grouped menu where necessary; Research, Coursework, and Proposals must remain clearly named and reachable. Contact can be a small About/footer section rather than another top-level route.

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
| Full resume | `reference-private/CV-Resume/Sangeon-Jeon-Resume-Full.pdf` and `.docx` | 2025-09-08; three-page PDF |
| Industrial/general one-page CV | `reference-private/CV-Resume/Sangeon-Jeon-CV-1Page-Industrial.pdf` | Filename dated 2026-04-11; internal creation date unavailable |
| ML one-page CV | `reference-private/CV-Resume/Sangeon-Jeon-CV-1Page-ML.pdf` and `.docx` | 2025-09-09 |
| Software one-page CV | `reference-private/CV-Resume/Sangeon-Jeon-CV-1Page-Software.pdf` and `.docx` | 2025-09-09 |
| Telecom one-page CV | `reference-private/CV-Resume/Sangeon-Jeon-CV-1Page-Telecom.pdf` and `.docx` | 2025-09-09 |
| Neuroscience one-page CV | `reference-private/CV-Resume/Sangeon-Jeon-CV-1Page-Neuroscience.pdf` | Filename dated 2024-01-05; PDF exported 2024-01-10 |

The newer industrial CV supports this biography baseline: Georgia Tech ECE Ph.D. study beginning January 2026 with Xiaoli Ma; Georgia Tech ECE M.S. in 2025 and B.S. in 2023–2024; KAIST Electrical Engineering B.S. in 2018–February 2025. Do not describe the owner as still awaiting the M.S. solely because older documents use expected-graduation wording. Recheck time-sensitive current-role wording before public release.

The owner explicitly confirmed the GPAs for the website: **KAIST 3.95/4.3** and **all Georgia Tech education entries 4.00/4.0**. Show these on About alongside the corresponding degrees. These values override older CV GPA values for the website; do not rewrite the dated source documents.

The owner confirmed on October 29 that **Jinseok Choi (최진석)** was their advisor at KAIST. Show `Advisor: Jinseok Choi` with the KAIST education entry on About.

The owner also confirmed that **Xiaoli Ma** was their Georgia Tech M.S. advisor. Show `Advisor: Xiaoli Ma` with the M.S. education entry as well as the existing Ph.D. entry on About.

Use the industrial one-page PDF as the most recent available document candidate and the full resume as a separately dated comprehensive document. Do not call the 2025 full resume current as of 2026, silently merge incompatible claims, or rewrite source documents as part of the website build. Targeted older CVs need not all be prominent site downloads; the CV page should offer a clear primary choice and dates, with additional versions only where useful.

Repository tracking and website presentation are separate decisions. **PDF and DOCX files are both intentionally committed to the main website repository**, including recoverable old versions. Do not ignore, untrack, delete, or move DOCX files to a separate repository. For a future document revision, review matching DOCX/PDF together and commit the matching pair when both exist.

Publish website downloads only through an explicit asset list under `public/`, using reviewed copies and metadata. Git tracking alone does not select a document as a site download. DOCX website-download buttons are optional and should follow the owner's preference; retaining DOCX in Git is required. Do not automatically expose addresses or phone numbers from the documents on Home or About. Use only selected public contact details and links.

## 8. Content model and release boundaries

Use distinct collections for `research`, `publications`, `projects`, `coursework`, `blog`, and `proposals`, plus one profile/site configuration. Keep slugs, navigation, display order, and featured selections in maintainable data.

Give **every content entry its own folder**, with its Markdown/MDX and selected local images together: `src/content/<collection>/<slug>/<slug>.md` (or `.mdx`). `index.md`/`index.mdx` in the same folder is also supported. All seven initial entries use this structure. Folder wrapping must preserve the public URL `/<collection>/<slug>/` without repeating the slug. Reference images relatively from the article, such as `./prototype.png`; Astro emits referenced images as website assets. Do not treat `README.md` or files under `raw/` as content entries. Temporary sources are not published article bodies; integrate only the selected facts and remove a source when the owner requests its removal.

Shared fields as applicable: `title`, `summary`, `slug`, `status`, `period`, `tags`, `displayOrder`, `featured`, `links`, `collaborators`, and `approvedForPublication`. Status should have collection-specific values rather than treating a course prototype like a paper submission. Research dates, submission dates, publication dates, and report dates must remain separate.

- Research: topics, public-safe description, optional contribution, and optional related manuscript identifier.
- Publications: publication status, ordered authors, verified title, optional venue/year/DOI/public links, and related research identifier.
- Projects: context/event, implementation status, supported stack, optional verified contribution/award, and evidence links.
- Coursework: optional institution/course title, `courseCode`, year/term, type (`senior-design`, `junior-design`, `laboratory`, or `course-final-project`), implementation/demonstration status, optional contribution/collaborators, and internal highlights. Unknown EE405 fields must be valid omissions.
- Blog: language, release date, draft state, tags, optional revision date, and author-written body.
- Proposals: tentative status, owner-controlled priority, optional milestones/related work, and unresolved questions.

Default release approval to false for new entries. The owner's website-build request selects the conservative public-safe copy for the seven initial entries, and the October 29 instruction selects the five curated proposals above. These entries are explicitly marked approved in their content files so they appear in the local production preview. This does not authorize additional notebook extraction, unpublished research disclosure, push, or deployment. Respect explicit content approval already given in the session rather than asking for it again.

An `approvedForPublication: false` flag does not make a tracked file private. Keep unapproved full text and private editorial notes in ignored references. Populate tracked content only within the owner's approved public scope. If selected copy still needs review, make it available through an explicit local review mode backed by ignored content; do not upload that review copy to the public repository or enable review mode in deployment. A deployable build must exclude every unapproved entry from detail routes, index cards, search data, RSS, sitemap, metadata, and copied assets, not merely hide its navigation link.

If only a collaborator, image, link, or optional field is unresolved, omit that part and continue with the supported page. If an entire entry is not approved for release, exclude it from the release build while completing the rest of the implementation. Keep remaining review items private and summarize them to the owner; do not fill public pages with internal review labels.

## 9. Repository and asset boundaries

The repository already contains and has pushed the curated CV/Resume history. The name `reference-private` does **not** mean that everything beneath it is private. Existing root ignore rules intentionally allow only the CV/Resume subtree:

```gitignore
/reference-private/*
!/reference-private/CV-Resume/
/story.md
.DS_Store
```

Preserve this exception. Other reference summaries, the portrait source, the ideas notebook, raw coursework material, and private editorial inventories remain ignored unless the owner changes their scope. Do not force-add the rest of `reference-private/` or automatically copy it into build output.

Suggested implementation layout:

```text
proj.md
story.md                       # ignored, replaceable owner instructions
reference-private/
  CV-Resume/                   # tracked source documents and history in this repository
  *.md                         # ignored editorial inputs outside CV-Resume
  profile_photo.jpeg           # ignored portrait source
  아이디어.docx                 # ignored notebook
public/
  documents/                   # explicitly selected website download copies
  images/                      # reviewed website image copies
src/
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
2. Maintain the existing Astro project, shared layout/design, profile configuration, content schemas, routes, seven portfolio entries, and five selected proposal concepts within the authorized review/release scope.
3. Maintain Blog's empty state, the populated Proposals section, document selection on `/cv`, responsive navigation, white-background styling, profile/contact links, accessibility, metadata, and release filtering. Keep source archives and the temporary instruction pad out of site output.
4. Start a local preview and inspect Home, a research detail, When to Eat, all coursework types, CV, and mobile navigation. Resolve layout and route problems before reporting completion.
5. Run the production build, applicable type/schema checks, and focused checks that unapproved content and assets are absent from every release surface. Check stable routes after folder moves, local images/links, document targets, mobile navigation, contact navigation/copy behavior, the inline video, white-background rendering, and root-path hosting. Test behavior that can fail; avoid tests that merely restate static copy.
6. Expand the root README with setup, preview/build commands, adding/editing entries, publication states, changing display order, maintaining DOCX/PDF pairs, asset selection, and the GitHub Pages release procedure.
7. Report what is implemented, validation results, and the few unresolved content/asset choices. The owner's October 28 instruction authorizes periodic local commits of completed work. Commit useful, validated increments as work proceeds. Do not push, configure Pages, or publish yet; the owner plans to publish after the site is complete and will authorize that stage separately.

The build is ready for review when the selected sections work end to end, the seven portfolio entries retain their correct categories/statuses, the five proposals are clearly concepts, Blog's empty state is intentional, document links are clear and dated, no unsupported achievements or manuscript claims have been introduced, and release output contains only approved material.
