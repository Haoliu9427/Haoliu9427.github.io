# Hao Liu — Academic Website & Research Portfolio

A bilingual, responsive academic homepage built with plain HTML, CSS, and JavaScript. No build step or JavaScript package installation is required.

## Files
- `index.html` — page structure and ocean illustration
- `styles.css` — responsive visual system
- `script.js` — bilingual toggle and project/publication content
- `assets/favicon.svg` — site icon
- `.github/workflows/deploy.yml` — GitHub Pages deployment workflow
- `.nojekyll` — disables unnecessary Jekyll processing

## Publish with GitHub Pages
This repository is `Haoliu9427.github.io`, so the expected site URL is https://Haoliu9427.github.io/.

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` deploys the site after commits to `main`, or through **Actions → Deploy academic website to GitHub Pages → Run workflow**.
4. Check the **Actions** tab for a successful deployment. The first deployment can take a few minutes.

## Before public release
Replace placeholders only with verified information:
- Full publication titles, authors, journal details, and DOI links
- Undergraduate institutions and study dates
- Confirmed doctoral status / graduation dates
- Public email, Google Scholar, and ORCID URLs

The website intentionally does not invent missing citation metadata or contact information. Do not publish private contact details unless you want them publicly accessible.

## Updating
Edit the bilingual content arrays in `script.js`; fixed headings and page copy are in `index.html` and the translation dictionary at the top of `script.js`. The page imports DM Sans, Manrope, and DM Mono from Google Fonts; remove the CSS `@import` if you prefer not to request external fonts.

## Local preview
Open `index.html` in a browser, or run `python -m http.server 8000` in this directory and visit http://localhost:8000/.
