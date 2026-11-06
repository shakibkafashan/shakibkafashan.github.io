# Publish this website on GitHub Pages

## Recommended: your main personal website

1. Sign in to GitHub and create a **public** repository named exactly
   `shakibkafashan.github.io` for your GitHub account `shakibkafashan`.
2. Extract the supplied website ZIP on your computer.
3. Open the extracted folder. Upload **the files inside it** to the repository
   root using **Add file → Upload files**. `index.html` must appear directly at
   the repository root, next to `app.js`, `style.css`, and the other assets.
4. Commit the upload to the `main` branch.
5. Open **Settings → Pages**. Under **Build and deployment**, choose
   **Deploy from a branch**, then branch **main** and folder **/(root)**. Save.
6. GitHub Pages will show the public website address after deployment finishes:
   `https://shakibkafashan.github.io/`. Use the status and URL shown on that page.

The current ChatGPT-hosted preview is separate. Creating the GitHub Pages site
will not change that preview or its private access.

## If you already have a username.github.io repository

Do not replace an existing website unintentionally. You can instead create a
public repository named `portfolio`, upload the same files, and enable Pages
from `main` / `/(root)`. The address will be
`https://shakibkafashan.github.io/portfolio/`.
The website uses relative local asset URLs and supports this subdirectory.

## Updating the website

Upload changed files and commit them to the same publishing branch. Keep the
street-data file, route-motion code, VTM worker/model, portrait, and résumé with
the website. The night-mode setting is stored in each visitor's browser.

The ZIP is a complete static site: no package install, compilation, API key,
map-service subscription, or server setup is needed. A local double-click can
preview most of the page, but the VTM worker should be checked through a web
server or GitHub Pages rather than a file:// page.

## Official instructions

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
