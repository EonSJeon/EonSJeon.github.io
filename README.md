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
- `proposals/`: selected, clearly tentative future work.

The initial portfolio contains two research projects, When to Eat, and four coursework entries. Blog and Proposals intentionally start without sample posts. Research projects are not automatically published papers.

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

Use lower `displayOrder` values to show an entry earlier. Blog posts sort newest first by `pubDate`; proposals use `priority` when provided, falling back to `displayOrder`. `featured` controls selections in components that feature entries. Keep unknown optional metadata omitted, especially unverified affiliations, contributions, exact dates, or final demonstration claims. Coursework entries require `courseCode`; use the schema's course type and optional institution/title fields.

The profile, education history/GPAs, and collection descriptions are in `src/data/site.ts`. Home displays icon links for school email, GitHub, Google Scholar, ORCID, and LinkedIn. Keep public contact choices there rather than scraping them from older CV documents. **Get in touch** opens About's contact section, which includes a readable email address, a mail link, and clipboard copying. The design uses a consistent white background and a plain-text name in the header.

`proj.md` is the durable implementation brief. `story.md` is an ignored, temporary instruction pad the owner may replace or erase. When its instructions are applied, update the relevant requirements in `proj.md`; do not make the site or build depend on the instruction pad.

The content schema is in `src/content.config.ts`. Query released entries through `getPublicEntries()` in `src/lib/content.ts` so that indexes, detail routes, feeds, and related links all use the same release predicate: `approvedForPublication: true` and `draft` not true. Approval defaults to false. A file's presence in a collection does not grant publication approval.

To verify this behavior against a real build after changing routes, feeds, or collection queries:

```sh
node scripts/check-site.mjs --test-publication-gate
```

This temporarily creates unapproved and draft canaries in all six collections, builds the site, verifies their absence from routes and text/metadata output, checks an approved folder-based MDX entry and excluded raw sources, removes the fixtures, and rebuilds clean output.

## Reference material and Git visibility

`reference-private/CV-Resume/` is intentionally **tracked in this repository**, including PDF and DOCX source documents and recoverable historical versions. Other files under `reference-private/` remain Git-ignored. Preserve the exception in the root `.gitignore`.

The word `private` in the directory name does not make the tracked CV/Resume files private. This is a public repository. Draft flags also do not make tracked source text private: keep unreviewed notebook content, unpublished research details, instructor materials, raw archives, private review notes, and unapproved media outside tracked content.

Use the curated local references to prepare concise approved website copy, while preserving their disclosure limits and attribution. Do not copy an entire reference directory to `public/` or the deploy artifact.

## CV/Resume and assets

The tracked document sources keep the owner's convention: `Resume-Full` for the comprehensive resume and `CV-1Page-*` for targeted one-page versions. DOCX files remain in Git alongside matching PDFs when available. When revising an actual document pair, review both formats and commit them together; do not infer a match from filenames alone.

Website downloads are selected separately from source tracking. The website initially offers `public/documents/sangeon-jeon-cv-industrial-2026-04.pdf` and `public/documents/sangeon-jeon-resume-full-2025-09.pdf`, with their version dates shown. Update a selected copy deliberately when its source document changes, and update the CV page's date/label and the download allowlist in `scripts/check-site.mjs` when adding or renaming downloads. Retaining a DOCX source does not create a public website download button. The current full resume is dated September 2025; it must not be presented as newly updated in 2026.

Keep only reviewed shared/download assets under `public/` and reviewed entry-specific images beside their article. Project repository links can be displayed when supplied, but photos, reports, and videos from those repositories are not automatically cleared for republication. RoBACHtic's two owner-selected PNGs are displayed in its article. Its explicitly selected YouTube demonstration uses a responsive privacy-enhanced embed with a fallback source link. To add a deliberately selected video to another entry, use:

```yaml
video:
  youtubeId: "gud--ybyr-s"
  title: "A descriptive title for the demonstration"
  caption: "Optional context describing what the demonstration shows."
```

The schema validates the video ID. The shared player is lazy-loaded and does not autoplay. Its optional caption appears below the player alongside a YouTube fallback link. Use `<figure>` and `<figcaption>` around Markdown images (with blank lines around the Markdown image) for a caption that stays grouped with the photo. External video links remain the default when embedding has not been selected.

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
