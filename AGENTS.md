# Repository workflow

Before starting work, read `proj.md` for durable requirements and `development-status.md` for the current handoff. Read the relevant content references before revising factual project descriptions.

Maintain `development-status.md` **in English** after meaningful changes and before ending a task. Record enough for a new LLM to continue without rediscovery: current objective, completed and pending work, working runtime paths, exact preview URLs and startup commands, validation results, and local commit hashes. This file is Git-ignored. If it is absent in a new checkout, create it locally; never force-add it or publish it.

The owner authorizes periodic local commits. **Do not push, deploy, publish, or trigger a release workflow** until the owner explicitly authorizes that stage.

The owner edits Korean content directly in `src/content/<collection>/<slug>/<slug>.ko.md`. English counterparts stay alongside them. Preserve paired slugs, per-language release flags, and existing English URLs. Korean preview starts at `http://127.0.0.1:4321/ko/`; verify the actual server port before sharing a link.

If `node` or `npm` is unavailable in this agent shell, do not reinstall dependencies unnecessarily. Read the known working Node path and direct Astro commands in `development-status.md`. Check for an existing preview server first. Keep a preview server running when sharing its link.

Keep private raw sources and the local handoff out of Git and deployment output. Follow the existing `reference-private/CV-Resume/` tracking exception; the directory name does not make tracked documents private.
