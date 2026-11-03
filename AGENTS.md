# Repository workflow

Before starting work, read `proj.md` for durable requirements and `development-status.md` for the current handoff. Read the relevant content references before revising factual project descriptions.

Maintain `development-status.md` **in English** after meaningful changes and before ending a task. Record enough for a new LLM to continue without rediscovery: current objective, completed and pending work, working runtime paths, exact preview URLs and startup commands, validation results, and local commit hashes. This file is Git-ignored. If it is absent in a new checkout, create it locally; never force-add it or publish it.

The owner authorizes periodic local commits. **Do not push, deploy, publish, or trigger a release workflow** until the owner explicitly authorizes that stage.

The owner edits Korean content directly in `src/content/<collection>/<slug>/<slug>.ko.md`. English counterparts stay alongside them. Preserve paired slugs, per-language release flags, and existing English URLs. Korean preview starts at `http://127.0.0.1:4321/ko/`; verify the actual server port before sharing a link.

If `node` or `npm` is unavailable in this agent shell, do not reinstall dependencies unnecessarily. Read the known working Node path and direct Astro commands in `development-status.md`. Check for an existing preview server first. Keep a preview server running when sharing its link.

Keep private raw sources and the local handoff out of Git and deployment output. All of `reference-private/` is ignored. The owner explicitly withdrew all CV/Resume PDF/DOCX documents and their committed history on November 1 for privacy, superseding the former tracked-source rule. Preserve those withdrawn originals/recovery only in ignored `reference-private/cv-resume-withdrawal/`; never restore them. On November 2 the owner explicitly approved the newly authored three-page CV PDF at `public/files/sangeon-jeon-cv.pdf` for public Git and deployment, linked from both CV pages. This is the sole document-download exception; the one-page Resume, editable `CV-Resume/` workspace, raw examples and archives stay excluded. The academic one-page CV is retired. The full HTML CV remains. `story.md` and `instructions.md` are ignored owner instruction pads; reconcile durable requirements into `proj.md`.

Blog and Ideas require the owner's individual review of each finished article. Keep unreviewed full text in ignored `reference-private/writing-review/`, including Korean drafts the owner is editing. The previous bulk CSV selections do not authorize committing or publishing these articles. Move only explicitly approved articles into `src/content/blog/` or `src/content/proposals/`; retain per-language approval controls. Empty Blog/Ideas indexes and their menu links may remain.
