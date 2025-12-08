# Personal Site – vladi.no

This repository contains the code for my personal website at **<https://vladi.no>**.

It’s a small, hand-written site focused on clarity, calm design, and a light technical footprint.

## Tech stack

- **HTML** – simple static pages (`index.html`, `cv.html`, `portfolio.html`, `contact.html`)
- **CSS** – custom styles in `assets/css/styles.css`
- **JavaScript** – a tiny script for theme toggling in `assets/js/theme.js`
- **Hosting** – GitHub Pages, with a custom domain: `vladi.no`

No build tools, no frameworks – just static files.

## Features

- **Light / dark mode**
  - Stored in `localStorage` and applied before first paint to avoid flicker.
  - Toggle button (sun/moon) in the top navigation.
- **Responsive layout**
  - Single centered card (`.container`) with a max width of 680px.
  - Mobile-friendly layout via a small set of media queries.
- **Soft visual style**
  - Gentle petrol accent color.
  - Subtle section highlighting for CV and portfolio entries.
  - Background illustration (lake/hill) behind the main container.

## Pages

### Home (`index.html`)

- Short introduction: who I am and what I do.
- Quick summary of skills and values.
- Direct links to email, GitHub, and Instagram.

### CV (`cv.html`)

- A structured HTML version of my CV: profile, work experience, education, skills, languages, and references.
- Download button for a **print-friendly PDF** version of the CV.

### Portfolio (`portfolio.html`)

- Selected projects and work highlights, including:
  - Atlassian Jira feature work (issue assignment intelligence).
  - Company-specific RAG / LLM assistants.
  - ERP and operations tooling (Bizboard, Sunvigo, SpotmyEnergy, etc.).
  - Native mobile apps (Android/iOS).
  - Solar monitoring app for Sunvigo.
  - Low-resource speech technology projects.
  - Medical imaging ML pipelines.
  - Personal and client web projects (author and coaching sites).

Each project section briefly describes the context, goals, and tech used.

### Contact (`contact.html`)

- Simple contact page with buttons for:
  - Email (`mailto:`)
  - GitHub profile
  - Instagram

## Project structure

```text
personal-site/
  index.html
  cv.html
  portfolio.html
  contact.html
  CNAME
  apple-touch-icon.png
  favicon-16x16.png
  favicon-32x32.png
  favicon.ico
  site.webmanifest
  assets/
    css/
      styles.css
    js/
      theme.js
    img/
      lake.png
```

## Running locally

Because this is a static site, you can open the files directly in your browser, but it’s nicer to use a simple local server (avoids some path / caching quirks):

```bash
# From the project root
python -m http.server 8000
```

Then open:

- `http://localhost:8000/index.html`

Any other simple static server will work just as well.

## Deployment

The site is deployed via **GitHub Pages**:

- Branch: `main`
- Source: `/ (root)`
- Custom domain: `vladi.no` (mirrored in the `CNAME` file)

Pushes to `main` are deployed automatically by GitHub Pages.

## License

This is my personal site. Please don’t reuse the text, design, or images as-is for your own portfolio, but feel free to peek at the structure and CSS for inspiration.
