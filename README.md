# Sangeon Jeon's academic website

A static Astro website for research, independent projects, coursework, publications, and writing. It is configured for the user-site root at **https://eonsjeon.github.io/**.

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

Content lives in six distinct collections under `src/content/`:

- `research/`: research project descriptions, including work with manuscripts under review or in preparation.
- `publications/`: verified bibliographic records with accurate publication statuses.
- `projects/`: independent engineering work and makerathon prototypes.
- `coursework/`: course-based projects, including Senior Design, Junior Design, and laboratory work.
- `blog/`: released English or Korean writing.
- `proposals/`: selected, clearly tentative future work, displayed as **Ideas / 아이디어**. Existing URLs are preserved.

The portfolio contains six research projects (wireless communications and Meta Analysis), three published journal articles, When to Eat, four coursework entries, and five selected ideas. Publications separates published articles from the two communications manuscripts under review. Home features communications research; Meta Analysis remains on Research and Publications, and Ideas is accessible through navigation without a Home preview. Ideas have their own summaries, first experiments, and related-work links. Blog remains empty until the owner selects a post. Research projects are not automatically published papers.

## Korean and English authoring

Start the Korean preview at **http://127.0.0.1:4321/ko/** (or the port printed by Astro). English keeps the original root URLs. The language choices at the top of every page link to the corresponding page in the other language. Navigation, contact controls, metadata, collection pages, captions, diagrams, and all nineteen selected articles have Korean versions.

Edit the Korean Markdown directly, beside its English counterpart:

```text
src/content/proposals/example-article/
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

Shared interface/profile translations live in `src/lib/i18n.ts`; Home/About/CV text lives in `src/components/pages/`. Keep factual status, dates, links, and contribution limits aligned when revising translations.

Korean pages retain selected professional labels and proper names in English: CV, CV & Resume, Georgia Institute of Technology / Georgia Tech, and Atlanta, Georgia. Use `코스웍` for the compact menu and `수업 프로젝트` in Korean descriptions; avoid translating every label mechanically.

The site self-hosts Pretendard Variable v1.3.9 under `public/fonts/`; preserve its accompanying OFL license. Korean headings use the same family with heavier weights. No external font service is required at runtime.

## Local development handoff

Maintain **`development-status.md` in English** as a Git-ignored handoff for the next LLM. Record the current task, completed work, pending steps, exact preview URLs and start commands, runtime quirks, validation results, and local commit hashes. Update it after meaningful work and before ending a task. Do not force-add this file or copy it into `public/`. `proj.md` holds durable requirements; this local file holds development progress.

`AGENTS.md` directs future agents to read and maintain that handoff before working, including how to locate the running preview.

Give each entry a folder containing its Markdown/MDX and selected media. For example, `src/content/projects/when-to-eat/when-to-eat.md` becomes `/projects/when-to-eat/`; `when-to-eat/index.md` also resolves to that same URL. Folder wrapping never adds a repeated slug to the URL.

Reference colocated images with a relative Markdown path, such as `![Description](./prototype.png)`. Astro processes referenced images into build assets. `README.md` and everything in `raw/` are excluded from the collection loader; keep private raw material in ignored references instead of tracked content folders.

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

Publication records preserve ordered `authors`, `venue`, `pubDate`, and verified `doi`. `coFirstAuthors` lists only confirmed equal contributors by their exact author names and produces a † mark and legend. Add supplied author profile links through matching names in `collaborators`; organizations in that list appear as collaboration credits. Pair a publication's `relatedResearch` with the research entry's `relatedManuscript` slug to enable links between released pages in the same language.

The profile, education history/GPAs, and collection descriptions are in `src/data/site.ts`. Home displays icon links for school email, GitHub, Google Scholar, ORCID, and LinkedIn. Keep public contact choices there rather than scraping them from older CV documents. **Get in touch** opens About's contact section, which includes a readable email address, a mail link, and clipboard copying. The design uses a consistent white background and a plain-text name in the header.

`proj.md` is the durable implementation brief. `story.md` is an ignored, temporary instruction pad the owner may replace or erase. When its instructions are applied, update the relevant requirements in `proj.md`; do not make the site or build depend on the instruction pad.

The content schema is in `src/content.config.ts`. Query released entries through `getPublicEntries()` in `src/lib/content.ts` so that indexes, detail routes, feeds, and related links all use the same release predicate: `approvedForPublication: true` and `draft` not true. Approval defaults to false. A file's presence in a collection does not grant publication approval. The content loader also prevents unreleased cover, Markdown, and MDX assets from entering the build graph; preserve this protection alongside the query predicate. The publication-gate check includes unreleased media, not just missing routes.

To verify this behavior against a real build after changing routes, feeds, or collection queries:

```sh
node scripts/check-site.mjs --test-publication-gate
```

This temporarily creates unapproved and draft canaries in all six collections, builds the site, verifies their absence from routes and text/metadata output, checks an approved folder-based MDX entry and excluded raw sources, removes the fixtures, and rebuilds clean output.

## Reference material and Git visibility

All of `reference-private/` is Git-ignored. Site-owned CV/Resume source documents are tracked separately in `src/documents/cv-resume/`, preserving their DOCX/PDF pairs and recoverable history. Do not force-add private reference packages.

The tracked CV/Resume documents and their Git history are part of this public repository. Draft flags also do not make tracked source text private: keep unreviewed notebook content, unpublished research details, instructor materials, raw archives, private review notes, and unapproved media outside tracked content.

Use the curated local references to prepare concise approved website copy, while preserving their disclosure limits and attribution. Do not copy an entire reference directory to `public/` or the deploy artifact.

## CV/Resume and assets

The tracked document sources keep the owner's convention: `Resume-Full` for the comprehensive resume and `CV-1Page-*` for targeted one-page versions. DOCX files remain in Git alongside matching PDFs when available. When revising an actual document pair, review both formats and commit them together; do not infer a match from filenames alone.

Website downloads are selected in `src/documents/downloads.json`. The prerendered `/documents/[filename].pdf` route emits only those selected canonical source files, preserving the existing download URLs without duplicate PDF copies in `public/`. Update the manifest and CV page metadata deliberately when choosing a new document. The site checker compares every download byte-for-byte with its selected source. Retaining a DOCX source does not create a public website download button. The current full resume is dated September 2025; it must not be presented as newly updated in 2026.

Keep reviewed shared assets under `public/`, canonical documents under `src/documents/`, and reviewed entry-specific images beside their article. Project repository links can be displayed when supplied, but photos, reports, and videos from those repositories are not automatically cleared for republication. Selected real prototype, interface, assembly, and experiment photos now accompany the engineering articles. Use a `cover` with `src` and localized `alt` in frontmatter for optimized card images. Keep cover images and article figures distinct where possible; retain captions that explain what a photo or diagnostic actually demonstrates. Remove unneeded camera metadata from web copies while preserving image pixels and orientation. Its explicitly selected YouTube demonstration uses a responsive privacy-enhanced embed with a fallback source link. To add a deliberately selected video to another entry, use:

```yaml
video:
  youtubeId: "gud--ybyr-s"
  title: "A descriptive title for the demonstration"
  caption: "Optional context describing what the demonstration shows."
```

The schema validates the video ID. The shared player is lazy-loaded and does not autoplay. Its optional caption appears below the player alongside a YouTube fallback link. Use `<figure>` and `<figcaption>` around Markdown images (with blank lines around the Markdown image) for a caption that stays grouped with the photo. External video links remain the default when embedding has not been selected.

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
