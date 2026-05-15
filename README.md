# My Class XI Chemistry — Sindh Board

Personal chemistry notes site: homepage → chapter list → individual lessons. Plain HTML, CSS, and JavaScript — no build tools. Host free on **GitHub Pages**.

## Folder structure

```
chemistry/
├── index.html                 # Homepage: 8 chapter cards
├── css/style.css              # All styling (light/dark, lessons, tables, MCQs)
├── js/script.js               # Dark mode, interactive MCQs, Show Answer
├── chapters/
│   ├── chapter-1/
│   │   ├── index.html         # List of lessons in Chapter 1
│   │   └── lesson-1.html      # First full lesson
│   ├── chapter-2/ … chapter-8/
│   │   └── index.html         # "Coming soon" placeholders
└── README.md
```

## Run locally

Open `index.html` in your browser (double-click or drag into Chrome/Edge).

Optional local server:

```bash
cd path/to/chemistry
npx serve .
```

## Add a new lesson

1. Copy `chapters/chapter-1/lesson-1.html` → `lesson-2.html`.
2. Edit title, progress text, and section content.
3. In `chapters/chapter-1/index.html`, replace the "Coming soon" row with:
   ```html
   <li><a href="lesson-2.html">Topic 2 — Your title</a></li>
   ```
4. Update the "Next Lesson" link at the bottom of `lesson-1.html`.

## Push to GitHub Pages

### 1. Initialize git and commit

```powershell
cd e:\AI-300\chemistry
git init
git add .
git commit -m "Add Sindh Board Class XI chemistry notes site"
git branch -M main
```

### 2. Create a new repo on GitHub

- Go to [github.com/new](https://github.com/new)
- Name it (e.g. `class11-chemistry`)
- Do **not** add a README if you already have one locally
- Create the repository

### 3. Push your code

Replace `YOUR_USERNAME` and `YOUR_REPO` with your values:

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 4. Enable GitHub Pages

1. Open your repo on GitHub.
2. **Settings** → **Pages** (left sidebar).
3. **Source:** Deploy from a branch.
4. **Branch:** `main` → folder **`/ (root)`** → **Save**.
5. Wait 1–2 minutes. Your site URL will be:
   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

### 5. Update the live site later

```powershell
git add .
git commit -m "Add lesson 2"
git push
```

## Features

- **Dark mode** — toggle top-right; saved in `localStorage` key `chemistry-theme`
- **Interactive MCQs** — click an option for instant ✅/❌; use **Show Answer** for the answer key
- **Readable layout** — max width 800px, Inter font, mobile padding
- **Lesson sections** — Hook, Core Concept, Examples, Confusions, Practice, Summary

## Notes for beginners

- `index.html` = structure; `style.css` = look; `script.js` = behavior.
- Paths like `../../css/style.css` go up two folders from `chapters/chapter-1/`.
- Semantic tags: `<header>`, `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`.

---

© 2026 Usama · Educational use only
