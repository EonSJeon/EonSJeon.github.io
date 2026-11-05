# Sangeon Jeon — public website

Public Astro source for https://eonsjeon.github.io/ . This repository receives
only the approved public snapshot from the owner's private editing workspace.
Do not merge private workspace commits into this history.

```sh
npm ci
npm run dev
npm run check
```

Korean preview: http://127.0.0.1:4321/ko/ . Use the port printed by Astro.
Coursework, Ideas (`proposals`) and Blog Markdown use `visibility: public` or
`visibility: private` per language; only public files and their referenced media
are exported to this repository. A missing setting defaults to private.
Original private drafts, source documents, reference materials and editable
CV/Resume files are never included here. The sole public document download is
the owner-approved three-page CV PDF at public/files/sangeon-jeon-cv.pdf.

Publication remains an explicit manual GitHub Pages workflow. Source pushes do
not automatically deploy. Existing English URLs and paired Korean slugs remain.
