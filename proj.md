# Public website requirements

Updated: November 6, 2026. Public user-site: https://eonsjeon.github.io/ .
This repository is the English-only source export, not the editing workspace.

Maintain the existing Astro/TypeScript/Markdown site. Home order is About me,
Recent News, Education, Publications, Projects. About contains the current OCDM
focus, identifiable system-design/model-based estimation/MATLAB verification,
two past-topic bullets, direct3pageCVPDF, Research Interests and8TechStack items.
The sentence introducing past topics ends the research paragraph before the bullets.
Copy is plain body text without added bold/italics. Header has Sangeon Jeon/portrait
mark plus Home, Coursework, Blog; no language UI or Korean translation pages.
Home title is Ph.D. Candidate @ Georgia Tech in both profile and related copy/meta
(candidate wording in prose). Profile has the smile portrait, names, Atlanta city
link and five vertical icon-labelled contacts; Email copies and shows Copied for1s.
Korean/Hanja secondary names share the same computed font-size and baseline.

Education groups three Georgia Tech degrees and separately KAIST, retaining
individual periods/advisors and the linked KAIST–Georgia Tech Dual B.S. Degree
Program. Home has no GPA or repeated academic-background paragraph. Publications
lists all6records with full authors, English titles and truthful statuses:
Conference before Journal,2underreviewcommunications/3publishedjournals/1hemophilia
manuscript. No independent Research/paper explanation pages or Selected
Publications duplication. Use publication records and stable Home anchors.

News is Oct2026TIADCsubmission, Sep2026OCDMsubmission, Sep2026AMDpublication,
Jul2026OCDpublication; no invented submission days. Preserve Home's existing
large-screen left profile / central body / right four-link TOC positions. Home PC
header and side panels stick below the actual header height plus 16–24px, through
Projects. Unstick any panel that exceeds available viewport height, so a too-tall
left panel scrolls with the central body on small laptops. No clipped contact
labels, hidden items or independent panel scrollers. Other-page headers unchanged.
Profile display starts around 195px (80% of 244px), same left edge and image bytes.
Keep right TOC at >=1440px; hide it when its rail cannot fit. No alternate TOC below
Tech Stack or contacts, and no new About anchor is required.
Projects uses four vertical rows in central-column width only, with existing
left text/right 128px, 4:3, contain photos. No new crop/enlargement/image swap.
Preserve README-depth details/media, newest first: robotic tic-tac-toe,
When to Eat, Venus Flytrap, RoBACHtic Symphony. Coursework remains the course-list
board; do not expose the electronics lab course number or raw grades/transcripts.
Blog combines released writing/ideas with idea tags. Preserve canonical URLs and
canonical routes, absence of retired aliases, accessibility and 320/390/1440/1920px
layouts plus 200% enlargement without overflow/overlap. Check actual-height fallback
on 1280x720/1024x768 laptop windows and anchor landing below the header. Preserve
current mobile photos/natural wrapping rather than shrinking text.

Use only public English editorial entries (visibility:public; missing/private
excluded) and existing project/paper approval flags. The sole document exception
is files/sangeon-jeon-cv.pdf, the approved3pagePDF linked as CV(as ofNovember2026).
Retain only the used profileWebP; do not add unused portrait/source candidates.
Do not generate old About/Research/CV/section-index/proposals aliases or public
Korean routes/feeds.
No private references, unreviewed drafts, editable CV/Resume, jobs, instruction
pads, original source media or recovery histories may enter this repository.
Keep original public development history. Do not infer results/contributions,
unpublished methods, exact dates or acceptance from vague source language.

Use the existing self-hosted fonts/licenses, portrait/favicons and light design.
Footer remains English and truthfully credits Astro and the last update date.
Run npm run check. Deployment remains a separately authorized manual workflow.
