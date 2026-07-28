# AI Strategy Studio — GTM Showcase Site

A clean, fast, no-build website that showcases an AI Strategy Consulting
go-to-market (GTM). It presents four **capability pillars** and a growing
library of **accelerators** (reusable assets that get built over time).

> Built with plain HTML, CSS, and JavaScript — **no frameworks, no build step**.
> That means it just works, is easy to edit, and hosts free on GitHub Pages.

---

## 🗺️ What's in the site

| Page | File | What it does |
| --- | --- | --- |
| **Landing / Home** | `index.html` | Hero banner + the four capability pillars |
| **Capabilities** | `capabilities.html` | All pillars + their accelerators in one view |
| **Pillar detail** | `pillar.html?slug=…` | One pillar: description, approach, accelerators |
| **Accelerator library** | `accelerators.html` | Every accelerator with a status badge |
| **Accelerator detail** | `accelerator.html?slug=…` | One accelerator: overview, deliverables, roadmap |
| **Methodology** | `methodology.html` | How the four pillars connect end to end |
| **About** | `about.html` | About the practice / this showcase |
| **Contact** | `contact.html` | Placeholder contact form |

### The four capability pillars
1. **Business Value Discovery** — find where AI creates measurable value
2. **Technology Value Delivery** — turn opportunities into working, scalable AI
3. **Governance & AICC** — program governance + an AI Center of Competence
4. **Value-Based Prioritization** — sequence the portfolio for maximum impact

---

## 📂 Folder structure

```
.
├── index.html            ← landing page
├── capabilities.html     ← all capabilities
├── accelerators.html     ← accelerator library
├── pillar.html           ← template that renders ANY pillar
├── accelerator.html      ← template that renders ANY accelerator
├── methodology.html
├── about.html
├── contact.html
├── css/
│   └── styles.css        ← all the styling (colors, layout, fonts)
└── js/
    ├── data.js           ← ⭐ ALL your content lives here (edit this!)
    └── site.js           ← the engine (builds nav/footer & pages)
```

The site is **data-driven**: pillars and accelerators are defined once in
`js/data.js`, and the pages build themselves from it. Add an accelerator to
`data.js` and a new page appears automatically — no HTML copy-pasting.

---

## ✏️ How to edit content (no coding needed)

Almost everything you'll want to change is in **`js/data.js`**. It's heavily
commented. Common edits:

- **Change the company name / tagline** → edit the `brand` block at the top.
- **Edit a pillar's words** → change its `summary`, `description`, or `approach`.
- **Add an accelerator** → copy an existing `{ … }` block inside a pillar's
  `accelerators` list and change the values. Give it a **unique `slug`**
  (lowercase-with-dashes).
- **Update an accelerator's status** → set `status` to one of:
  - `"available"` → green **Available** badge
  - `"progress"` → amber **In Development** badge
  - `"planned"` → grey **Planned** badge

To change **colors or fonts** for the whole site, edit the variables at the top
of `css/styles.css` (the `:root { … }` block).

After editing, **save the file and refresh your browser.**

---

## 👀 How to preview it on your computer

Because the site loads content with JavaScript, open it through a tiny local
web server (not by double-clicking the file). Pick whichever you have:

**Option A — Python (already installed on most machines):**
```bash
# from inside this folder
python3 -m http.server 8000
```
Then open <http://localhost:8000> in your browser.

**Option B — Node.js:**
```bash
npx serve .
```

Press `Ctrl + C` in the terminal to stop the server when you're done.

---

## 🚀 How to publish it for free (GitHub Pages)

Once your changes are pushed to GitHub:

1. Go to your repository on **github.com**.
2. Click **Settings** (top menu of the repo).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to the branch you want to publish (e.g. `main`), folder
   `/ (root)`, and click **Save**.
6. Wait ~1 minute. GitHub shows a public URL like
   `https://<your-username>.github.io/AI-Strategy-Consulting/`.

That URL is your live website. Every time you push changes, it updates
automatically.

> Tip: while this project is on a feature branch, you can either merge it into
> `main` first, or point GitHub Pages at the feature branch to preview it.

---

## 🧭 New to Git & GitHub? The 3 commands you'll use most

```bash
git add .                        # stage your changes
git commit -m "Describe change"  # save a snapshot with a message
git push                         # upload it to GitHub
```

That's the whole loop: **edit → add → commit → push**. Your live site (if
GitHub Pages is on) updates a minute after each push.

---

## 🔌 Optional next steps (for later)
- Connect the contact form to a real service (e.g. Formspree) by setting the
  form's `action` — see the note inside `contact.html`.
- Add your own logo/brand colors in `css/styles.css`.
- Build out each accelerator page into a real working asset over time, flipping
  its `status` from `planned` → `progress` → `available` as it ships.
- Add a custom domain in the GitHub Pages settings.
