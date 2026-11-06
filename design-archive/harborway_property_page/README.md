# 1120 Harborway Place — property page

Static site. No build step.

```
index.html
css/style.css
js/main.js        gallery lightbox + header scroll state
assets/           logo and listing photos
```

## Deploy to Netlify
1. Push this folder to a GitHub repo.
2. Netlify → Add new site → Import from Git → pick the repo.
3. Build command: leave blank. Publish directory: `.`
4. Forms → Enable form detection, then trigger a redeploy. Submissions from the "Request more information" form appear under Forms as `property-1120-harborway`.
5. Forms → Form notifications → add an email notification so leads reach brett@DRGpremier.com.

## Notes
- Fonts load from Google Fonts (Cormorant Garamond, Archivo, JetBrains Mono).
- The agent headshot loads from an external URL. Download it into `assets/` and update the `src` in index.html before launch so it can't break.
- The map is a Google Maps embed; no API key needed.
