# Sangeon Jeon's academic website

A static Astro website for an academic profile, papers, engineering projects, coursework, and writing. It is configured for the user-site root at **https://eonsjeon.github.io/**.

## Local development

Use Node.js 24 LTS or newer compatible with the project's locked dependencies.

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Astro. To validate the production output and inspect it locally:

```sh
npm run check
npm run preview
```

`npm run check` runs Astro's type/schema diagnostics, builds `dist/`, and checks expected routes, local links/anchors, and exclusion of raw reference files. The site has no backend, API credentials, or required external services.

## Content and display order

Content lives in five distinct collections under `src/content/`:

- `publications/`: metadata-only paper records, grouped as Conference then Journal. No individual paper-description pages are generated.
- `projects/`: engineering projects, including When to Eat, Senior Design, Junior Design and Robotic Tic-Tac-Toe. Course context remains in each project's metadata.
- `coursework/`: courses studied, with study notes and laboratory records. The index is a list board; initially only Electronics Design Laboratory is included.
- `blog/`: released English or Korean posts, displayed as **Blog / 블로그**.
- `proposals/`: selected, clearly tentative future work, displayed as **Ideas / 아이디어**. Existing URLs are preserved.

The site contains six paper records (three published journal articles, two conference submissions under review, and a hemophilia manuscript), four engineering projects, one laboratory-course detail, and a full bilingual HTML CV. Publications uses compact title / authors / venue-year citations under **[Conference]** then **[Journal]** (Korean: **출판**, **[학회] → [저널]**); DOI links are on titles and submission status is brief. Preserve full ordered authors, the owner's bold name and co-first marks. Author names on Publications are plain text; retain only the title DOI links. Supplied profile URLs remain stored for CV/provenance. Do not add abstracts, collaboration paragraphs or independent paper pages.

Home retains the continuous profile hero, larger portrait and interests, followed by a **News list board** and contact. It has no Selected research or Engineering projects preview. Edit dated EN/KO news in `src/data/news.ts`; use only confirmed event dates, allowing month precision instead of inventing a day. Per the owner's latest instruction, News currently contains **only the January 2026 Ph.D. start**, with no paper-publication announcements. Add other news only when requested.

Research was retired entirely. Its narratives and model-diagnostic image are archived only in ignored `reference-private/research-page-retirement/2026-10-31/`. All paper facts now live in Publications. Old Research indexes/details and the three former publication-detail URLs redirect to the list or its corresponding paper anchor, with canonical list URLs and no sitemap entry. New paper records do not generate individual pages. Blog and Ideas remain empty pending individual article approval. Coursework remains a one-course list board.

Senior Design, Junior Design and Robotic Tic-Tac-Toe now live under `/projects/`. Their former `/coursework/` URLs in both languages preserve query strings and fragments while redirecting to the new pages. Keep the mappings in `src/lib/redirects.ts`; redirects are excluded from sitemap. Source folders retain paired Markdown and selected media together. Keep project `displayOrder` newest first in both languages: Tic-Tac-Toe, When to Eat, Venus Flytrap, then RoBACHtic; Projects and CV reuse that order. RoBACHtic Symphony is Fall 2023; Robotic Tic-Tac-Toe is Fall 2024, as confirmed by the owner.

Add future course notes as paired entries in `src/content/coursework/`, after owner selection. The board lists only released entries; do not add other CV subjects automatically. Keep course titles, institution and term in each entry's metadata and do not invent grades, course numbers or semesters. The electronics laboratory's internal course number remains hidden.

Home combines the profile introduction, research interests, engineering narrative and contact information. On desktop, align the portrait with the start of the biography and keep a compact gap between them; on mobile, pair the name and portrait above the full-width biography. Keep the research/engineering introduction together, followed by one combined M.S./dual-bachelor background paragraph in the same biography block in both languages. Explicitly name the **KAIST–Georgia Tech Dual B.S. Degree Program** and link it to KAIST's official EN/KO program pages configured in `site.dualDegreeProgram`. Link **Prof. Jinseok Choi** (Korean: Jinseok Choi 교수님) to `https://sic-x.kaist.ac.kr/` through shared `site.kaistAdvisor`, leaving the parenthetical SIC-X Lab label unlinked. Use **Prof. Xiaoli Ma** for English Home mentions, including the introductory advisor link and M.S. sentence; Korean retains 교수님. End the biography with a complete localized referral sentence containing the **Curriculum Vitae** hyperlink to the HTML CV, using the body text size. The four social/academic profile links follow the biography; no standalone CV action or Home profile-row email. Remove the former Get in touch action. The interest line uses an 11px label and 14px topics (13px on mobile), wrapping as needed. Page-title overlines are omitted on Home, collection indexes, detail pages and 404; retain the CV overline. The complete education record remains in CV; Home includes the short academic background requested by the owner. The former `/about/` and `/ko/about/` routes redirect to their localized Home, preserving query strings and contact fragments.

The header keeps the language selector visible and opens navigation through the top-right menu button at every screen width. Menu order is Home, Publications, Projects, Coursework, Ideas, Blog, CV, with corresponding Korean labels.

Blog and Ideas drafts live only in ignored `reference-private/writing-review/`. Previous CSV selections do not grant publication approval. Commit an article only after the owner explicitly approves that finished text; unapproved full text does not belong in tracked content even with a false release flag.

The CV pages render education, publications, experience, teaching, awards, selected projects and skills directly. Edit bilingual experience copy in `src/data/cv.ts`; education/profile data and approved content collections supply shared facts. Existing dated PDF downloads and all CV/Resume source documents remain unchanged.

## Korean and English authoring

Treat the owner's manual edits as the source of truth when reconciling translations. `src/data/site.ts` sets the research-interest selection/order; `src/lib/i18n.ts` maps Korean labels from that shared list. Keep both Home versions aligned, and preserve the CV's manually edited content.

Start the Korean preview at **http://127.0.0.1:4321/ko/** (or the port printed by Astro). English keeps the original root URLs. The language choices at the top of every page link to the corresponding page in the other language. Navigation, contact controls, metadata, collection pages, captions, diagrams, and all selected articles have Korean versions.

For approved public content, edit the Korean Markdown directly beside its English counterpart:

```text
src/content/research/example-article/
  example-article.md       # English
  example-article.ko.md    # Korean editing source
```

For a new Korean article, create `src/content/<collection>/<slug>/<slug>.ko.md` with translated metadata and body. For example:

```yaml
---
title: 새 아이디어
summary: 문제와 가능한 접근 방법을 간단히 설명합니다.
categoryLabel: 프로젝트 구상
status: 구상 단계
language: ko
translationKey: my-new-idea
priority: 60
approvedForPublication: true
---
```

Use the same `translationKey` in the English translation when adding it. Existing English entries use their folder slug by default. Each language has its own approval/draft flags; only released translations appear in its lists, routes, and RSS. A Korean-only article is supported, and its English language choice goes to the English collection index until a released translation exists. Editing Korean does not silently rewrite the English text. Use `/ko/rss.xml` for Korean writing and `/rss.xml` for English writing.

Shared interface/profile translations live in `src/lib/i18n.ts`; Home/CV text lives in `src/components/pages/`. Keep factual status, dates, links, and contribution limits aligned when revising translations.

Korean pages retain selected professional labels and proper names in English: CV, CV & Resume, Georgia Institute of Technology / Georgia Tech, and Atlanta, Georgia. Use `코스웍` for the compact menu and `수업 프로젝트` in Korean descriptions; avoid translating every label mechanically.

The site self-hosts Pretendard Variable v1.3.9 under `public/fonts/`; preserve its accompanying OFL license. Korean headings use the same family with heavier weights. No external font service is required at runtime.

## Local development handoff

Maintain **`development-status.md` in English** as a Git-ignored handoff for the next LLM. Record the current task, completed work, pending steps, exact preview URLs and start commands, runtime quirks, validation results, and local commit hashes. Update it after meaningful work and before ending a task. Do not force-add this file or copy it into `public/`. `proj.md` holds durable requirements; this local file holds development progress.

`AGENTS.md` directs future agents to read and maintain that handoff before working, including how to locate the running preview.

Give each entry a folder containing its Markdown/MDX and selected media. For example, `src/content/projects/when-to-eat/when-to-eat.md` becomes `/projects/when-to-eat/`; `when-to-eat/index.md` also resolves to that same URL. Folder wrapping never adds a repeated slug to the URL.

Reference colocated images with a relative Markdown path, such as `![Description](./prototype.png)`. Astro processes referenced images into build assets. `README.md` and everything in `raw/` are excluded from the collection loader; keep private raw material in ignored references instead of tracked content folders.

The three expanded coursework articles include repository-level technical explanations and selected original media. A primary YouTube walkthrough uses `video`; native demonstrations use `clips` with colocated web MP4s and actual-frame posters:

```yaml
clips:
  - src: device-demo.mp4
    poster: device-demo-poster.jpg
    title: Device demonstration
    caption: Describe what this recording actually demonstrates.
    width: 720
    height: 1280
```

Use filename-only paths and the video's actual display dimensions. Each released translation selects its clips separately; `/media/<collection>/<slug>/<filename>` emits only assets selected by at least one released translation and shares identical files between languages. Keep large raw videos in ignored references. Native players use controls, posters and `preload="none"`, with no autoplay. The article's contents navigation includes the native demonstration section. The release gate checks that unreleased native clips and posters stay out of the build.

```yaml
---
title: Example title
summary: A short, factual description.
categoryLabel: Independent project
status: Completed prototype
displayOrder: 100
featured: false
approvedForPublication: false
draft: true
tags: []
links: []
collaborators: []
---
```

Use lower `displayOrder` values to show an entry earlier. Blog posts and publications sort newest first by `pubDate`; Ideas uses `priority` when provided, falling back to `displayOrder`. `featured` controls selections in components that feature entries. Keep unknown optional metadata omitted, especially unverified affiliations, contributions, exact dates, or final demonstration claims. Coursework entries require `courseCode`; use the schema's course type and optional institution/title fields.

Publication records preserve ordered `authors`, `publicationType` (`conference` or `journal`), verified `title`, optional `venue`, `pubDate` and `doi`. Keep English paper titles and author names in both languages, including Korean Publications and CV citations. `coFirstAuthors` produces †; other confirmed `equalContributionAuthors` receive ‡, with one compact shared legend. Author profiles match names in `collaborators`, but are not linked on the Publications list per owner preference; CV may retain those links. Organization/Project Manager metadata remains stored for provenance but is not expanded into the compact list. HEM uses the owner-confirmed title **Global disparities and unmet treatment needs in hemophilia toward 2030**; until its venue/status is supplied, show only Manuscript / 원고, without a publication date or acceptance claim. Communications titles and ICASSP 2027/ICC 2027 under-review status remain exact. Bibliographic links from CV use `/publications/#<slug>` (or `/ko/publications/#<slug>`).

The profile, contact address, education history/GPAs, and collection descriptions are in `src/data/site.ts`. Home displays four icon links: GitHub, Google Scholar, ORCID and LinkedIn. Its email copy control appears only under the portrait. The shared `ProfileLinks` supports `includeEmail={false}` for Home; CV retains its email/profile links. Keep public contact choices there rather than scraping them from older CV documents. Home's email and two-line address sit under the portrait without a visible Contact heading or institution caption. There is no separate bottom Contact block. On mobile the contact values span the width directly below the name/portrait pair, before the biography. The footer still links to `#contact`. The email copy control uses link color/underlining at 16px; address text is 14px. Clicking the email copies it with live feedback (manual-selection fallback if clipboard access fails); clicking the address opens Google Maps in a new tab. Display `site.address` (**Rm 5263, Centergy One**) as the plain first address line, with linked `site.mapAddress` (**75 5th St NW, Atlanta, GA 30308**) on the second line. Use `site.mapPlaceName` (**Centergy One**) plus that street address for Google Maps, without the room number. Do not restore ADDRESS labels or separate Write/Copy/CV buttons in this block. The design uses a consistent white background and a plain-text name in the header.

`proj.md` is the durable implementation brief. `story.md` is an ignored, temporary instruction pad the owner may replace or erase. When its instructions are applied, update the relevant requirements in `proj.md`; do not make the site or build depend on the instruction pad.

The content schema is in `src/content.config.ts`. Query released entries through `getPublicEntries()` in `src/lib/content.ts` so that indexes, detail routes, feeds, and related links all use the same release predicate: `approvedForPublication: true` and `draft` not true. Approval defaults to false. A file's presence in a collection does not grant publication approval. The content loader also prevents unreleased cover, Markdown, and MDX assets from entering the build graph; preserve this protection alongside the query predicate. The publication-gate check includes unreleased media, not just missing routes.

To verify this behavior against a real build after changing routes, feeds, or collection queries:

```sh
node scripts/check-site.mjs --test-publication-gate
```

This temporarily creates unapproved and draft canaries in all five collections, builds the site, verifies their absence from routes and text/metadata output, checks an approved folder-based MDX entry and excluded raw sources, removes the fixtures, and rebuilds clean output.

## Reference material and Git visibility

All of `reference-private/` is Git-ignored. Site-owned CV/Resume source documents are tracked separately in `src/documents/cv-resume/`, preserving their DOCX/PDF pairs and recoverable history. Do not force-add private reference packages.

The tracked CV/Resume documents and their Git history are part of this public repository. Draft flags also do not make tracked source text private: keep unreviewed notebook content, unpublished research details, instructor materials, raw archives, private review notes, and unapproved media outside tracked content.

Use the curated local references to prepare concise approved website copy, while preserving their disclosure limits and attribution. Do not copy an entire reference directory to `public/` or the deploy artifact.

## CV/Resume and assets

The tracked document sources keep the owner's convention: `Resume-Full` for the comprehensive resume and `CV-1Page-*` for targeted one-page versions. DOCX files remain in Git alongside matching PDFs when available. When revising an actual document pair, review both formats and commit them together; do not infer a match from filenames alone.

Website downloads are selected in `src/documents/downloads.json`. The prerendered `/documents/[filename].pdf` route emits only those selected canonical source files, preserving the existing download URLs without duplicate PDF copies in `public/`. Update the manifest and CV page metadata deliberately when choosing a new document. The site checker compares every download byte-for-byte with its selected source. Retaining a DOCX source does not create a public website download button. The current full resume is dated September 2025; it must not be presented as newly updated in 2026.

Keep reviewed shared assets under `public/`, canonical documents under `src/documents/`, and reviewed entry-specific images beside their article. Project repository links can be displayed when supplied, but photos, reports, and videos from those repositories are not automatically cleared for republication. Selected real prototype, interface, assembly, and experiment photos now accompany the engineering articles. Use a `cover` with `src` and localized `alt` in frontmatter for optimized card images. Keep cover images and article figures distinct where possible; retain captions that explain what a photo or diagnostic actually demonstrates. Remove unneeded camera metadata from web copies while preserving image pixels and orientation. Selected YouTube videos use responsive privacy-enhanced embeds. To add a deliberately selected video to another entry, use:

```yaml
video:
  youtubeId: "gud--ybyr-s"
  title: "A descriptive title for the demonstration"
```

The schema validates the video ID. The shared player is lazy-loaded and does not autoplay. Set optional `video.heading` for event footage or another section label; otherwise the localized Demonstration heading is used. The owner-selected shared layout shows the heading and player without a separate caption/link footer; caption metadata may remain in source references. Use `<figure>` and `<figcaption>` around Markdown images (with blank lines around the Markdown image) for a caption that stays grouped with the photo. External video links remain the default when embedding has not been selected.

The electronics laboratory entry is public at `/coursework/electronics-design-lab/` (and `/ko/coursework/electronics-design-lab/`). Its source folder retains the internal course identifier, but `translationKey` sets the clean public slug and `showCourseCode: false` keeps the number out of rendered metadata. Labs 4–5 lead the article; digital communication, embedded control, and analog work remain supporting sections.

## GitHub Pages release

The site uses the repository root URL, with no `/EonSJeon.github.io/` base path. Only `dist/` is uploaded to GitHub Pages; repository history and ignored references are not deployment artifacts.

The workflow at `.github/workflows/deploy.yml` is **manual-only** (`workflow_dispatch`). A commit or push by itself does not run this workflow or publish the site.

For an authorized release:

1. Review public copy, document choices, images, and the scope of what is already tracked.
2. Run `npm run check` and inspect `npm run preview` on desktop and mobile.
3. Commit and push the approved website changes.
4. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
5. In **Actions**, run **Deploy academic website** on the intended branch. The workflow installs locked dependencies, validates/builds the site, uploads `dist/`, and deploys through the `github-pages` environment.

The workflow uses GitHub's built-in token with narrowly scoped Pages/OIDC permissions. No personal access token is required. Deployment should be triggered only within the owner's authorized release scope.
