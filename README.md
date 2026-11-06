# TALSUUDUS CHAPTER — Official Website
An official website of the Tangaza Local Government Students Union Association (UDUS).

## Updating members
Open `js/members.js` — the top of the file explains how to add 100 Level and Graduated members
(`level: "100"` or `level: "Graduated"`).

## PWA
`manifest.json` + `sw.js` + `js/pwa.js`. After changing any file, bump `CACHE_VERSION` in `sw.js`
so installed users receive the update.

## Contact / corrections
Member corrections and general enquiries go to talsuudus@gmail.com.

## Menus (top bar, bottom menu, slide-out menu)
All menus share ONE stylesheet: `styles/nav.css` (loaded last on every page). Change colours there.
To add/rename/reorder a menu item on every page at once, edit the lists at the top of
`tools/sync-nav.py` and run `python3 tools/sync-nav.py`.

## Leadership page
- Executive photos: paste the Cloudinary link as the `src` of `<img class="exec-photo">`; `js/faces.js` crops it to the face automatically.
- Past Presidents (bottom of the page): edit the list at the top of `js/past-presidents.js` (name, years, photo link).

## Study Vault (Supabase)
Setup guide: `SUPABASE-SETUP.md`. Database/storage rules: `supabase/setup.sql`. Keys: `js/supabase-config.js`.

## Online voting portal (nomination.html)
Members verify with their ID-card code, vote, and see live results. Files: `nomination.html`, `styles/vote.css`, `js/vote.js`, `js/vote-config.js`.
It uses its OWN Supabase project (not Study Vault): run `voting-database/schema.sql` there, then paste that project's URL and anon key into `js/vote-config.js`.
The admin panel is hosted separately and is not part of this site.

## Running locally
Use a local server (VS Code Live Server, `python -m http.server`), not a double-clicked file.
The service worker (offline cache) only runs on the live site; on localhost it is switched off and any old one is removed, so you always see your latest edits.
After changing files on the live site, raise `CACHE_VERSION` in `sw.js` so visitors get the update.
