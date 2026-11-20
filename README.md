# irisjong.com — Hugo source

A static rebuild of the Squarespace site: homepage illustration gallery,
plus Zines and Comics sections where each entry is a scrollable multi-page
reader. No database, no server — just folders of images and Markdown files.

## Adding a new illustration to the homepage

Drop an image into the `content/` folder (next to `_index.md`), named
anything — e.g. `content/new-piece.jpg`. Rebuild and it appears in the grid.
Order follows filename, so prefix with numbers (`01-`, `02-`...) if you
want a specific order.

## Adding a new zine or comic

1. Make a folder under `content/zines/` or `content/comics/`, e.g.
   `content/zines/my-new-zine/`.
2. Inside it, add an `index.md` with front matter:
   ```
   ---
   title: "My New Zine (2026)"
   date: 2026-10-06
   ---
   ```
3. Drop the page images into that same folder, named so they sort in
   reading order: `page-01.jpg`, `page-02.jpg`, etc.
4. That's it — the series list and the reader page build automatically.
   The first image alphabetically becomes the cover thumbnail.

## Running it locally to preview changes

```
hugo server
```
Then open http://localhost:1313. Changes to content or templates reload
live.

## Deploying

Every push to `main` on GitHub rebuilds and publishes the site
automatically via `.github/workflows/deploy.yml` — no manual build step.

### One-time setup (see the chat for the full walkthrough)

1. Create a GitHub repo and push this folder to it.
2. In the repo's Settings → Pages, set Source to "GitHub Actions".
3. In your domain registrar, point `irisjong.com` at GitHub Pages
   (the exact DNS records are in the chat).
4. In Settings → Pages, add `irisjong.com` as the custom domain and
   enable "Enforce HTTPS" once it's verified.

The `static/CNAME` file already contains `irisjong.com` so GitHub Pages
recognizes the custom domain on every deploy.

## Notes

- Images are never automatically resized/compressed by this setup.
  Export web-sized images (under ~500KB each) from your art program
  before dropping them in, the same way you would for Squarespace.
- The "Essays" nav link points straight to the Medium profile, same as
  the current site — no local Essays section needed.
- Placeholder images and the placeholder blog post are safe to delete
  once real content replaces them.
