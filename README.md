# Stanzin Sangay — Portfolio

A clean, responsive, multi-page personal portfolio. No build tools — pure HTML, CSS, and JavaScript.

## Pages
- `index.html` — Home / hero, intro, featured projects
- `about.html` — Bio, animated skill bars, experience timeline
- `projects.html` — Filterable project gallery
- `contact.html` — Contact form + social links

## Features
- 🌙 Dark / light theme toggle (remembers your choice)
- 📱 Fully responsive with a mobile menu
- ✨ Scroll-reveal animations & animated skill bars
- 🗂️ Project category filtering

## Run it
Just open `index.html` in your browser. Or serve locally:

```bash
# from this folder
python -m http.server 8000
# then open http://localhost:8000
```

## Make it yours
1. **Text** — Replace placeholder copy in each `.html` file (bio, project descriptions, timeline).
2. **Email & socials** — In `contact.html`, update the `mailto:` and social `href="#"` links.
3. **Skills** — In `about.html`, edit the `data-level="80"` values and labels.
4. **Projects** — In `projects.html`, duplicate a `<article class="card" data-category="...">` block. Categories: `web`, `app`, `design`.
5. **Résumé** — Drop a `resume.pdf` into the `assets/` folder (the About page links to it).
6. **Avatar photo** — Replace the `SS` initials in the `.avatar` div with `<img src="assets/photo.jpg" alt="Stanzin Sangay">`.
7. **Colors** — Tweak the CSS variables at the top of `css/style.css`.

## Deploy (free)
- **GitHub Pages**: push this folder to a repo → Settings → Pages.
- **Netlify / Vercel**: drag-and-drop the folder.
