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

## Editing in VS Code

Use the official Astro extension (`astro-build.astro-vscode`) for `.astro` syntax highlighting, completions, diagnostics and formatting. Workspace recommendations are in `.vscode/extensions.json`; text wraps visually without automatically rewriting files on save. This is source editing with a browser preview, not a visual page builder.

- Home introduction: `src/components/pages/HomePage.astro` (paired EN/KO copy).
- Contact, interests and education: `src/data/site.ts`; Korean interface labels: `src/lib/i18n.ts`.
- CV experience/skills: `src/data/cv.ts`.
- Korean articles: `src/content/<collection>/<slug>/<slug>.ko.md`, beside their English counterpart.

Keep the existing preview open at its actual server URL; Korean Home normally uses `http://127.0.0.1:4321/ko/`. Start `npm run dev` only if no preview is already running. Save an edit and the preview refreshes automatically.

Private editable LaTeX CV/Resume drafts and their compiled PDFs live only in ignored `reference-private/latex-cv/`. LaTeX Workshop is configured for the **Tectonic** manual-build recipe and an embedded PDF tab. Open a `.tex`, run **LaTeX Workshop: Build LaTeX project**, then **LaTeX Workshop: View LaTeX PDF**. On this Mac, Tectonic is `/opt/homebrew/bin/tectonic`; other environments must adjust that executable in `.vscode/settings.json`. These tools are for local document editing; the site build has no TeX dependency. Never commit/deploy the new drafts or restore old originals/downloads.

## Content and display order

Content lives in five distinct collections under `src/content/`:

- `publications/`: metadata-only paper records, grouped as Conference then Journal. No individual paper-description pages are generated.
- `projects/`: engineering projects, including When to Eat, Senior Design, Junior Design and Robotic Tic-Tac-Toe. Course context remains in each project's metadata.
- `coursework/`: courses studied, with study notes and laboratory records. The index is a list board; initially only Electronics Design Laboratory is included.
- `blog/`: released English or Korean posts, displayed as **Blog / 블로그**.
- `proposals/`: selected, clearly tentative future work, displayed as **Ideas / 아이디어**. Existing URLs are preserved.

The site contains six paper records (three published journal articles, two conference submissions under review, and a hemophilia manuscript), four engineering projects, one laboratory-course detail, and a full bilingual HTML CV. Publications uses compact title / authors / venue-year citations under **[Conference]** then **[Journal]** (Korean: **출판**, **[학회] → [저널]**); DOI links are on titles and submission status is brief. Preserve full ordered authors, the owner's bold name and co-first marks. Author names on Publications and CV are plain text; retain only the title DOI links. Supplied profile URLs remain stored for provenance. Do not add abstracts, collaboration paragraphs or independent paper pages.

Home retains the continuous profile hero, larger portrait and interests, followed by a **News list board** and contact. It has no Selected research or Engineering projects preview. Edit dated EN/KO news in `src/data/news.ts`; use only confirmed event dates, allowing month precision instead of inventing a day. Per the owner's latest instruction, News currently contains **only the January 2026 Ph.D. start**, with no paper-publication announcements. Add other news only when requested.

Research was retired entirely. Its narratives and model-diagnostic image are archived only in ignored `reference-private/research-page-retirement/2026-10-31/`. All paper facts now live in Publications. Old Research indexes/details and the three former publication-detail URLs redirect to the list or its corresponding paper anchor, with canonical list URLs and no sitemap entry. New paper records do not generate individual pages. Blog and Ideas remain empty pending individual article approval. Coursework remains a one-course list board.

Senior Design, Junior Design and Robotic Tic-Tac-Toe now live under `/projects/`. Their former `/coursework/` URLs in both languages preserve query strings and fragments while redirecting to the new pages. Keep the mappings in `src/lib/redirects.ts`; redirects are excluded from sitemap. Source folders retain paired Markdown and selected media together. Keep project `displayOrder` newest first in both languages: Tic-Tac-Toe, When to Eat, Venus Flytrap, then RoBACHtic; Projects and CV reuse that order. RoBACHtic Symphony is Fall 2023; Robotic Tic-Tac-Toe is Fall 2024, as confirmed by the owner.

Add future course notes as paired entries in `src/content/coursework/`, after owner selection. The board lists only released entries; do not add other CV subjects automatically. Keep course titles, institution and term in each entry's metadata and do not invent grades, course numbers or semesters. The electronics laboratory's internal course number remains hidden.

Home combines the academic introduction, current research focus, research experience and contact information. On desktop, align the portrait with the start of the biography and keep a compact gap between them; on mobile, pair the name and portrait above the full-width biography. Preserve the owner-edited welcome and current Ph.D. affiliation/advisor opening. Lead the research paragraph with the current focus: next-generation waveform design and synchronization for wireless communications, especially orthogonal chirp division multiplexing (OCDM). Describe TI-ADC mismatch calibration, medical statistics and Bayesian inference as research experience in a separate following sentence, rather than coequal current research. Omit the former hardware-building/engineering-example sentence. Follow with one combined M.S./dual-bachelor background paragraph, then the CV referral, all within one uninterrupted biography block in both languages. Use the full unchanged English label **KAIST–Georgia Tech Dual B.S. Degree Program** as one hyperlink to KAIST's official language-matched EN/KO program pages from `site.dualDegreeProgram`; omit the parenthetical Korean translation. In both languages, use **Prof. Xiaoli Ma** for the Ph.D. and M.S. advisor and **Prof. Jinseok Choi** for the KAIST undergraduate advisor. Each complete `Prof. English name` belongs inside its hyperlink, with punctuation/Korean particles outside. Keep their shared profile URLs and nearby `번역 금지` comments; omit the parenthetical lab label. End the biography with a complete localized referral sentence containing the **Curriculum Vitae** hyperlink to the HTML CV, using the body text size. Below the portrait, show only the two-line address followed by five icon-only controls in this order: email, GitHub, Google Scholar, ORCID, LinkedIn. There is no visible email string or separate biography profile row; keep accessible labels and the email icon's copy behavior. Remove the former Get in touch action. The interest line uses a 13px label and 16px topics (15px on mobile), wrapping as needed. Page-title overlines are omitted on Home, collection indexes, detail pages and 404; retain the CV overline. The complete education record remains in CV; Home includes the short academic background requested by the owner. The former `/about/` and `/ko/about/` routes redirect to their localized Home, preserving query strings and contact fragments.

The header brand is **Sangeon Jeon** in both languages, preceded by the owner's cleaned hand-drawn portrait mark; localized biography names and page metadata remain separate. The transparent, thicker-line mark is `public/images/sangeon-jeon-mark.png` (46.818px desktop, 29.478–36.414px responsive mobile, after two successive 85% reductions). The name stays on one line as **Sangeon Jeon** in self-hosted **Cormorant Garamond 600**, 25.2px desktop and 18.9–21.6px mobile, vertically centred beside the image. The open font name subset and its OFL license are in `public/fonts/`. Small headers wrap controls onto another row rather than overlap the brand. The same artwork is exported as `public/favicon.ico` (16/32/48px), `public/icons/favicon-16.png`, `favicon-32.png` and `apple-touch-icon.png` (180px), with a white background for tab-theme contrast. Shared `SiteIcons.astro` declares these on both regular pages and legacy redirects; `v=2` refreshes cached thin-stroke exports. Preserve the owner-selected curly-haired/glasses portrait; raw/reference generation files stay ignored. The header keeps the language selector visible and opens navigation through the top-right menu button at every screen width. On screens wider than 740px, the opaque white header stays at the top while scrolling, with only 6px padding above and below its portrait (about 59.8px total height including the border); the menu height, anchor targets and sticky CV contents account for that same height. Narrow screens retain the scrolling header. Menu order is Home, Publications, Projects, Coursework, Ideas, Blog, CV, with corresponding Korean labels.

Blog and Ideas drafts live only in ignored `reference-private/writing-review/`. Previous CSV selections do not grant publication approval. Commit an article only after the owner explicitly approves that finished text; unapproved full text does not belong in tracked content even with a false release flag.

The CV pages render education, publications, experience, teaching, awards, selected projects and skills directly. Edit bilingual experience copy in `src/data/cv.ts`; education/profile data and approved content collections supply shared facts. CV publications follow **[Conference] → [Journal]** (Korean **[학회] → [저널]**), with inline status labels. The CV is HTML-only; all PDF/DOCX source documents and downloads are withdrawn for privacy. Desktop CV text and metadata are larger, with mobile/print layouts retained.

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

Source comments marked `번역 금지` identify the owner's fixed-language choices near their data or rendering code, including the header brand, English paper titles/author names/venue names, footer paragraph, institutional/contact names and CV labels. Keep these comments out of rendered copy. Research interests are shared by Home and CV in this order: Wireless communications, Waveform design, Synchronization, TI-ADC, Bayesian statistics; localize descriptive labels, retaining the TI-ADC abbreviation.

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

Publication records preserve ordered `authors`, `publicationType` (`conference` or `journal`), verified `title`, optional `venue`, `pubDate` and `doi`. Keep English paper titles and author names in both languages, including Korean Publications and CV citations. `coFirstAuthors` produces †; other confirmed `equalContributionAuthors` receive ‡, with one compact shared legend. Author profiles match names in `collaborators`, but are not linked on either Publications or CV per owner preference. Organization/Project Manager metadata remains stored for provenance but is not expanded into the compact list. HEM uses the owner-confirmed title **Global disparities and unmet treatment needs in hemophilia toward 2030**; until its venue/status is supplied, show only Manuscript / 원고, without a publication date or acceptance claim. Communications titles and ICASSP 2027/ICC 2027 under-review status remain exact. Bibliographic links from CV use `/publications/#<slug>` (or `/ko/publications/#<slug>`).

The profile, contact address, education history/GPAs, and collection descriptions are in `src/data/site.ts`. Home's portrait-side contact region shows only the two-line address followed by five icon-only controls: **email, GitHub, Google Scholar, ORCID, LinkedIn**. There is no visible email string, Contact heading, institution caption, separate bottom contact block or biography profile row. `ProfileLinks` uses `iconsOnly` and `copyEmail` on Home; its default text-labelled links remain on CV. Each Home icon has an accessible name, tooltip and keyboard focus. Clicking the email icon copies the public university email with localized feedback that clears after three seconds; repeated clicks restart the timer. If clipboard access fails, show/select the email temporarily for manual copying. On mobile, the address and icon group span the width below the name/portrait pair and before the biography. Address text is14px. Display `site.address` (**Rm 5263, Centergy One**) as the plain first line and linked `site.mapAddress` (**75 5th St NW, Atlanta, GA 30308**) on the second. The street opens Google Maps using `site.mapPlaceName` (**Centergy One**) plus the street address, without the room number. Do not restore ADDRESS labels or separate Write/Copy/CV buttons. The footer remains one compact English paragraph in both languages with actual owner/year, **Powered by Astro**, and last-updated date; no footer links/address/email. The design remains white with the portrait mark and English name in the header.

`proj.md` is the durable implementation brief. `story.md` and `instructions.md` are ignored temporary instruction pads the owner may replace or erase. When its instructions are applied, update the relevant requirements in `proj.md`; do not make the site or build depend on the instruction pad.

The content schema is in `src/content.config.ts`. Query released entries through `getPublicEntries()` in `src/lib/content.ts` so that indexes, detail routes, feeds, and related links all use the same release predicate: `approvedForPublication: true` and `draft` not true. Approval defaults to false. A file's presence in a collection does not grant publication approval. The content loader also prevents unreleased cover, Markdown, and MDX assets from entering the build graph; preserve this protection alongside the query predicate. The publication-gate check includes unreleased media, not just missing routes.

To verify this behavior against a real build after changing routes, feeds, or collection queries:

```sh
node scripts/check-site.mjs --test-publication-gate
```

This temporarily creates unapproved and draft canaries in all five collections, builds the site, verifies their absence from routes and text/metadata output, checks an approved folder-based MDX entry and excluded raw sources, removes the fixtures, and rebuilds clean output.

## Reference material and document privacy

All of `reference-private/` is Git-ignored, including the withdrawn CV/Resume PDF/DOCX originals and private recovery history. On November 1 the owner explicitly requested removal of those documents from both the website and committed history because they contain private contact information. Do not restore the old `src/documents/`, `public/documents/`, download manifest or PDF endpoint. These paths are ignored and the output checker rejects PDF/DOCX artifacts. `/cv/` and `/ko/cv/` continue to provide the full bilingual HTML CV without file downloads.

Draft flags do not make tracked text private. Keep unreviewed writing, unpublished research details, instructor materials, raw archives, private notes and unapproved media outside tracked content. Never force-add private source packages or recovery bundles. A remote history cleanup/redeployment needs explicit owner authorization; local preparation does not make existing remote copies disappear.

## Assets

Keep reviewed shared assets under `public/`, reviewed entry-specific images beside their article. Project repository links can be displayed when supplied, but photos, reports, and videos from those repositories are not automatically cleared for republication. Selected real prototype, interface, assembly, and experiment photos now accompany the engineering articles. Use a `cover` with `src` and localized `alt` in frontmatter for optimized card images. Keep cover images and article figures distinct where possible; retain captions that explain what a photo or diagnostic actually demonstrates. Remove unneeded camera metadata from web copies while preserving image pixels and orientation. Selected YouTube videos use responsive privacy-enhanced embeds. To add a deliberately selected video to another entry, use:

```yaml
video:
  youtubeId: "gud--ybyr-s"
  title: "A descriptive title for the demonstration"
```

The schema validates the video ID. The shared player is lazy-loaded and does not autoplay. Set optional `video.heading` for event footage or another section label; otherwise the localized Demonstration heading is used. The owner-selected shared layout shows the heading and player without a separate caption/link footer; caption metadata may remain in source references. Use `<figure>` and `<figcaption>` around Markdown images (with blank lines around the Markdown image) for a caption that stays grouped with the photo. External video links remain the default when embedding has not been selected.

The electronics laboratory entry is public at `/coursework/electronics-design-lab/` (and `/ko/coursework/electronics-design-lab/`). Its source folder retains the internal course identifier, but `translationKey` sets the clean public slug and `showCourseCode: false` keeps the number out of rendered metadata. Labs 4–5 lead the article; digital communication, embedded control, and analog work remain supporting sections.

## GitHub Pages release

The site uses the repository root URL, with no `/EonSJeon.github.io/` base path. Only `dist/` is uploaded to GitHub Pages; repository history and ignored references are not deployment artifacts.

The owner requested recreating the canonical remote while preserving separate development commits in the cleaned history. CV/Resume document changes are excluded throughout that history; document-only commits are omitted and unrelated changes in mixed commits are retained. Continue from the recreated `main`; the original document-containing recovery references and bundles are private archives and must never be merged or pushed. Do not squash the development history into one snapshot. Use explicit `main` pushes, never `--all` or `--mirror`.

The workflow at `.github/workflows/deploy.yml` is **manual-only** (`workflow_dispatch`). A commit or push by itself does not run this workflow or publish the site.

For an authorized release:

1. Review public copy, images and the scope of what is already tracked.
2. Run `npm run check` and inspect `npm run preview` on desktop and mobile.
3. Commit and push the approved website changes.
4. In the repository's **Settings → Pages**, select **GitHub Actions** as the source.
5. In **Actions**, run **Deploy academic website** on the intended branch. The workflow installs locked dependencies, validates/builds the site, uploads `dist/`, and deploys through the `github-pages` environment.

The workflow uses GitHub's built-in token with narrowly scoped Pages/OIDC permissions. No personal access token is required. Deployment should be triggered only within the owner's authorized release scope.
