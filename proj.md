# Personal Academic Website, Project Portfolio, Coursework, Blog, and Proposals

## 1. Objective
Build a minimal, polished personal website hosted on GitHub Pages. The site should function as:

1. An **academic profile** for research, publications, and CV.
2. A **personal and technical blog** for essays, explanations, and research notes.
3. A **curated independent project portfolio** for work actually built or investigated outside assigned coursework (including hackathons and independent engineering projects).
4. A **dedicated Coursework Projects section** for course-based prototypes, laboratories, and senior/capstone design work.
5. A **public proposal collection** for selected ideas worth sharing, discussing, or developing.

These five areas should share a consistent design but remain clearly distinguished. The site should feel like a personal home on the web, not a generic academic template or an indiscriminate dump of notes.

## 2. Source Materials and Editorial Boundaries
Before proposing content, inspect these local references **if present**:

- `reference-private/CV.pdf`
- `reference-private/personal-info.md`
- `reference-private/research.md`
- `reference-private/아이디어(1).docx` (or a similarly named copy of the supplied ideas document)
- `reference-private/Venus_Flytrap_Senior_Design_Website_Reference.md` (approved facts for the course-based capstone; placement updated to Coursework)
- `reference-private/KAIST_EE305_Coursework_Website_Reference.md` (consolidated KAIST course-laboratory reference)

Treat all reference documents as **private, unreviewed source material**, even when they contain seemingly publishable text. They are not website assets.

The ideas document is a heterogeneous notebook: it contains possible software/research projects, technical questions, essays, creative writing, social commentary, personal reflections, and rough or AI-assisted analysis. **Do not assume every entry is a project proposal or should be published.** Preserve the author's intended meaning; do not turn questions into established facts.

- Do not invent biographical facts, affiliations, papers, results, GitHub repositories, prototypes, citations, dates, or collaborators.
- Clearly distinguish verified accomplishments from plans, hypotheses, and speculative proposals.
- Flag uncertain technical claims and cited prior work for verification; do not claim originality or novelty without checking relevant prior art.
- Do not silently convert personal reflections, interpersonal details, private stories, controversial drafts, or third-party information into public posts.
- Do not copy copyrighted passages or substantial third-party writing from the notes into published content.
- If a reference is missing or difficult to parse, report it; do not substitute fabricated information.
- **Every piece of public-facing personal content requires explicit owner approval.**

## 3. Technology and Deployment
- Astro with static site generation (SSG), using TypeScript where useful.
- Markdown/MDX with Astro Content Collections for writing and proposal pages.
- Minimal dependencies; no CMS, database, or backend unless a strong need is demonstrated.
- GitHub Pages hosting for the `EonSJeon/EonSJeon.github.io` repository, with GitHub Actions deployment.
- Responsive design, semantic HTML, keyboard navigation, accessible contrast, and fast loading.
- Light/dark themes, with a working system-preference default and a manual toggle.
- SEO metadata, sitemap, canonical URLs, and social sharing metadata where practical.
- Do not add complex animations, tracking, analytics, comments, or third-party embeds by default.

## 4. Site Information Architecture
Primary navigation:

- **Home** (`/`): short introduction, selected research, publications, independent projects, a discreet Coursework Projects preview, featured proposals, and recent writing.
- **About / Research** (`/about` or `/research`): biography, interests, approach, and carefully selected background.
- **Publications** (`/publications`): published/submitted work, accurately labeled; links to permitted PDFs, preprints, code, and venues.
- **Projects** (`/projects`): independent engineering, research-adjacent implementations, makerathons, and other non-course projects with clear evidence of progress.
- **Coursework Projects** (`/coursework`): **separate, clearly labeled section** for academic course-based work, including ECE 4723 Senior Design (Venus flytrap) and KAIST EE305 laboratory work.
- **Proposals** (`/proposals`): public, explicitly approved ideas, ordered by editorial priority.
- **Blog / Writing** (`/blog`): technical notes, tutorials, research reflections, and optionally personal essays.
- **CV** (`/cv` or an approved PDF link): publish only a redacted/approved public version.
- **Contact**: only owner-approved contact links or addresses.

Avoid an oversized navigation bar: combine About/Research or CV/Contact when useful. But keep **Coursework Projects** accessible as its own named section and URL, rather than treating it as a filter under Projects or publishing it under Research. A responsive or grouped navigation is fine; Proposals must also remain visible.

## 5. Visual Design
- Minimal, editorial, typography-led, professional but personal.
- Restrained colors, generous whitespace, excellent reading experience, and consistent spacing.
- Accessible layout on desktop, tablet, and mobile.
- Strong hierarchy for publication lists, proposal cards, long-form posts, independent project pages, and a compact coursework index.
- Discreet labels distinguishing **Published Work**, **Independent Project**, **Coursework**, **Senior Design**, **In Progress**, **Proposal**, and **Essay**.
- No decorative dashboards, meaningless statistics, inflated claims, excessive gradients, or unnecessary animation.
- Use placeholders for missing photos/assets instead of generating or inventing identities and achievements.

## 6. Blog / Writing
- Index at `/blog`, with article pages at stable, human-readable URLs.
- Author posts in Markdown/MDX, supporting math (LaTeX via KaTeX or equivalent), code highlighting, figures, tables, citations, footnotes, and an optional table of contents.
- Tags and lightweight categories such as `Research Notes`, `Engineering`, `Explanations`, `Essays`, and `Personal`, subject to owner approval.
- Dates, optional revision history, reading time, RSS, and simple discoverability.
- Korean and English content should both render correctly. Do not automatically translate the author's prose or imply translations were author-written.
- Separate personal writing from research publications; drafts should not be mistaken for peer-reviewed results.
- **A draft flag only hides a page from the built site; it does not make a file private in a public Git repository.** Sensitive drafts must stay outside tracked files.

## 7. Independent Projects, Coursework Projects, and Proposals
These categories describe different contexts and maturity levels; do not conflate them.

### Projects (`/projects`)
For independent or non-course work with an actual artifact, implementation, study, demo, or reproducible result. Award-winning Makerathon prototypes belong here, **not** under Coursework solely because students built them. Each entry may include title, concise summary, actual status, technologies, author contributions, verified evidence, screenshots, repository/demo links, and related publications/posts. Never claim a prototype, benchmark, result, or open-source release exists unless supported by the materials.

### Coursework Projects (`/coursework`)
For instructor-supervised course assignments, substantial laboratory exercises, and senior/capstone design projects. Use a **dedicated index and route**, distinguish completed demos from simulations, and make the course-based context obvious. A project completed for credit can be highly technical, but must not be represented as independent research or a peer-reviewed publication.

**Initial entries (separate cards on the Coursework Projects index):**

1. **Venus Flytrap Bioelectrical Signal Recording and Playback** — Georgia Tech ECE 4723 Senior Design, 2024. Use the accompanying `Venus_Flytrap_Senior_Design_Website_Reference.md`. Display the verified **Seeeduino–MATLAB final implementation**, success in both bioelectrical recording and electrically induced trap closure, and **Sangeon Jeon's complete digital-system design/programming contribution**. The discarded Raspberry Pi/Python prototype is not part of the final tech stack. Place this entry first by default.
2. **Electronics Design Laboratory** — KAIST EE305, Fall 2022. Use `KAIST_EE305_Coursework_Website_Reference.md`. Present **one consolidated EE305 card/detail page**, with the MATLAB PCM/QPSK/convolutional coding/Viterbi work (Experiments 7–8) and breadboard ALU calculator (Experiments 4–5) as internal highlights. Additional experiments may appear as concise supporting material; do not generate numerous equally prominent project cards for one course.

**Coursework page design and editorial rules:**
- Make `/coursework` a first-class named section, linked from the site navigation or an unambiguous grouped navigation entry. On the Home page, a small `Selected Coursework` preview is optional; it must never displace the principal research/publication content.
- For each coursework entry show the **institution, course code, course title if confirmed, year/term if confirmed, assignment type, status, team/individual contribution only when verified, and concise technical keywords**.
- Use `Senior Design / Capstone` and `Laboratory Coursework` as clear sublabels. Do not imply that a laboratory exercise is a published paper, independent invention, or awarded project.
- Prefer two strong coursework entries over a long list of minor assignments. Inside a multi-experiment course detail page, elevate the best-supported highlights and summarize introductory labs briefly.
- Show working demo photos, team-generated figures, measured results, or code links only after verifying ownership, permissions, and public suitability; never publish instructor handouts, solutions, raw source archives, private IDs, or other students' personal information.
- An author's contribution statement must follow the source: **full digital-system ownership is verified for Venus Flytrap**, whereas EE305 reports establish team participation but not a reliable individual task breakdown.
- Keep Coursework separate from the `/projects`, `/research`, `/publications`, and `/proposals` collections and sorting. Optional contextual cross-links are fine.

### Proposals (`/proposals`)
For forward-looking research questions, software concepts, product concepts, and experiments worth inviting discussion about. A proposal is not a completed project or a validated research contribution.

Each approved proposal should have a dedicated page with:
1. **Title and one-sentence thesis**
2. **Problem / observation / motivation**
3. **Proposed approach** (clearly tentative)
4. **Who might benefit / why it matters**
5. **Relevant existing work** (only when verified; otherwise `Prior-art review pending`)
6. **Feasibility and major technical obstacles**
7. **Smallest useful prototype or experiment**
8. **Milestones / potential next steps**
9. **Open questions, limitations, and risks**
10. **Status, last substantive update, and optional collaboration/contact links**

Use short, readable proposals; longer technical proposals may include equations, diagrams, references, or appendices. Do not pad sparse ideas with fabricated details. Mark unresolved fields as open questions.

## 8. Curation and Publication Priority
The ideas document is a *candidate pool*, not a publication queue. First build a **private editorial inventory** of extracted entries, preserving the original Korean title or wording and traceable source location where possible. Classify each item as:

- `proposal-candidate`: actionable research/software/product concept.
- `blog-candidate`: explanatory writing, philosophical question, personal essay, or reflection.
- `project-existing`: an independently evidenced non-course implementation (not merely an idea).
- `coursework-existing`: a documented course assignment, lab, capstone, or senior design project (route to Coursework, not independent Projects).
- `not-for-publication`: private, overly personal, unfinished, sensitive, copyrighted, or unclear material.
- `needs-clarification`: insufficient information to classify reliably.

For proposal candidates, recommend—not finalize—a priority using a transparent rubric:

| Criterion | Weight |
| --- | ---: |
| Clarity and importance of the problem | 25% |
| Feasibility of an initial experiment/prototype | 20% |
| Fit with the author's research and technical interests | 20% |
| Potential originality, subject to prior-art review | 15% |
| Value to readers / potential collaborators | 10% |
| Readiness and suitability for public release | 10% |

Score conservatively; document the reasoning, missing evidence, dependencies, and reasons to withhold publication. Rankings are editorial suggestions, not statements of proven novelty or expected impact. **The owner sets the final featured order.**

Possible entries to inspect first (examples found in the ideas notebook; **NOT approved for publication or a final ranking**):
- Chart/image-to-CSV data extraction and visual verification.
- Proof-assistant-connected dynamic geometry software (Coq / AlphaGeometry).
- Shaded pedestrian route planning in hot weather.
- A reading interface for novels with character, relationship, place, and timeline aids.
- Phonetic/linguistic input assistance and East Asian-language learning tools.
- Historically layered visualization of places or cultural artifacts.
- Multisensory reading interfaces for accessibility research.

Do not add all examples automatically. Review feasibility, prior work, alignment, and publication sensitivity with the owner.

On the public Proposals index:
- Show an **owner-selected Featured** group first (preferably 3–5 proposals).
- Follow with a compact **Other Proposals** collection, if any.
- Support topic filters or tags only if the number of approved proposals justifies them.
- Provide simple statuses such as `Concept`, `Investigating`, `Seeking collaborators`, or `Archived`; never auto-claim active development.
- Sort by explicit `displayOrder`/`priority`, then by the stated editorial rule; not by autogenerated model scores alone.
- Cross-link a proposal to a Project or Blog post only when there is a real associated artifact.

## 9. Content Model and Publication Gate
Use structured content schemas with validation.

Suggested proposal frontmatter:

```yaml
title: "Example proposal"
summary: "One-sentence description"
status: "concept"                # concept | investigating | collaborators | archived
priority: 2                     # owner-controlled order; lower is higher priority
featured: false
approvedForPublication: false   # MUST explicitly be set to true
publishedAt: null
tags: []
relatedProjects: []
relatedPosts: []
```

**Default deny:** Unapproved proposals and blog drafts must never be included in the public build. Implement and test this filtering. Even approved=false files in a public repository are still publicly readable as source: keep all unapproved full-text drafts and candidate inventories only in `reference-private/`, which is Git-ignored. Move only approved, public-safe content to tracked website content files. Do not place private text in comments, build output, preview assets, Git history, or logs.

**Coursework content model:** Maintain a distinct `coursework` Astro Content Collection with fields such as `title`, `summary`, `institution`, `courseCode`, `courseTitle`, `period`, `type` (`senior-design` or `laboratory`), `status`, `technologies`, `contribution` (optional), `collaborators` (optional, approved only), `highlights` (optional), `displayOrder`, and `approvedForPublication`. Do not reuse proposal-status or publication-venue fields to describe coursework. Both initial coursework entries need stable slugs and an explicitly controlled display order.

For all collections, maintain stable slugs and avoid broken links. Use a simple workflow to add/reorder proposals without editing layout components. Separate editorial priority from research/project status.

## 10. Local File Organization and Privacy
Proposed layout (adjust based on actual Astro conventions):

```text
EonSJeon.github.io/
  proj.md
  AGENTS.md                         # optional permanent instructions
  .gitignore
  reference-private/                # NEVER tracked or deployed
    CV.pdf
    personal-info.md
    research.md
    아이디어(1).docx
    idea-inventory.md               # private extraction/classification
    publication-review.md           # private shortlist, scores, approval notes
    Venus_Flytrap_Senior_Design_Website_Reference.md  # coursework reference
    KAIST_EE305_Coursework_Website_Reference.md        # coursework reference
    EE305_original_archive.zip        # optional private course archive; NEVER publish
  public/                            # approved public assets only
  src/
    content/
      blog/                          # approved public posts only
      proposals/                     # approved public proposals only
      projects/                      # independent projects
      coursework/                    # approved course-based work; own schema
      publications/
    pages/
    components/
    layouts/
  .github/workflows/
```

Add `reference-private/` to `.gitignore` **before** placing source files there. Never force-add ignored files. Check staged file names and diffs before every commit. Do not store passwords, private addresses, phone numbers, unpublished results, confidential collaborator information, or the complete raw ideas document in the repository. Publishing a CV requires an explicit review of the public PDF and its metadata.

## 11. Implementation Quality
- Modular Astro components and validated content collections.
- Maintainable, easy-to-edit data; no hardcoded publication, proposal, or coursework lists in layout components.
- Ensure `/coursework` and its detail pages build successfully and that course type, term, and verified individual contributions render accurately.
- Fast static pages, sensible image optimization, accessible focus states, meaningful alt text.
- Handle missing links/metadata without empty buttons or fabricated placeholders.
- Correct sitemap and URL behavior on the GitHub Pages user-site root.
- Automated build plus checks for content schema, approved-content filters, and internal links where feasible.
- A README explaining how to preview, update, rank, approve, and publish a proposal, coursework entry, or blog post.

## 12. Collaboration and Execution Workflow
**Phase A — Inspect and plan (do not implement yet):**
1. Inspect repository, `proj.md`, CV, and available private references, **including the Venus Flytrap and KAIST EE305 coursework reference files**.
2. Produce a proposed information architecture and a lightweight visual design direction.
3. Create a private, reviewable classification of ideas; propose a SHORT preliminary shortlist with reasoning and uncertainty. Do not publish any of it.
4. Show which facts from CV/research/coursework references could appear publicly and flag unclear or sensitive items. Propose `/coursework` with two initial entries, and clearly distinguish course assignments from independent Projects.
5. Ask for approval of the design, content selections, and publication scope.

**Phase B — Implement only after approval:**
6. Build the Astro site, distinct `projects` and `coursework` collections/pages, and the proposal/blog system.
7. Populate only approved content and explicit placeholders; implement default-deny publication controls for independent projects, coursework, blog posts, and proposals.
8. Run build, automated checks, and a local preview; verify privacy exclusions and basic mobile accessibility.
9. Present results and unresolved decisions for owner review.

**Phase C — Publish only after explicit approval:**
10. Inspect `git status`, staged changes, generated assets, and public-facing text for privacy leaks.
11. Only with permission, commit and push; configure GitHub Actions/Pages and verify the deployment.

Never commit, push, deploy, or publish without explicit approval. Avoid unnecessary changes outside this repository. Prioritize accuracy, privacy, editorial quality, and long-term maintainability over generating many pages quickly.
