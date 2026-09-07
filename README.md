# setlistdesigner.app — static site

This repository is only the public marketing and legal static site for
Setlist Designer, served by GitHub Pages at <https://setlistdesigner.app>; it
is public by design. The app's source lives in the private
`NBDY-Group/setlist-designer` repository, whose `Website/` folder is the source
of truth for these pages — changes are published from there to here by the
owner.

Related NBDY-Group repositories:

- `setlist-designer` — private; the Setlist Designer iOS app
- `ios-app-factory` — private; harness that generates and works on the apps
- `20.005` — private; the other iOS app (codename `liminal-fm`)
- `Tourganise` — private; unrelated tour-management web SaaS

Four static pages, no build step, no cookies, no analytics:

- `index.html` — landing page
- `privacy/index.html` — privacy policy (linked from the app paywall and Settings)
- `terms/index.html` — terms of use (linked from the app paywall and Settings)
- `support/index.html` — support page and FAQ
- `404.html` — not-found page

The publisher brand is **NBDY Software Solutions**. Every page also identifies
Nobody Management Ltd as the legal entity and carries the UK company-number
and registered-office disclosure required by `Docs/publisher-identity.md`.

## Working on a new machine

Prerequisites (no Node, no package manager, no build step):

- `git`
- Python 3.9+ (only for the local preview server and the publisher-identity
  test; any static file server works for preview). Verified with Python 3.14.

```bash
git clone https://github.com/NBDY-Group/setlistdesigner.app.git
cd setlistdesigner.app

# Run the only automated check (every public page must carry the legal disclosure)
python3 scripts/test_publisher_identity.py

# Preview locally, then open http://localhost:8000
python3 -m http.server 8000
```

Environment variables, config files, and secrets: none. Everything the site
needs is committed. The only out-of-band items are GitHub access to
`NBDY-Group/setlistdesigner.app` (Pages deploys from `main`) and the Namecheap
DNS login for `setlistdesigner.app`.

Note on visibility: GitHub Pages on the NBDY-Group **Free** plan only serves
public repositories. Making this repository private would take
`https://setlistdesigner.app` offline unless the organisation is first upgraded
to GitHub Team or the site is moved to another host. The source of these pages
is also tracked privately in `NBDY-Group/setlist-designer` under `Website/`.

## Deployment (live)

Deployed with GitHub Pages from
[NBDY-Group/setlistdesigner.app](https://github.com/NBDY-Group/setlistdesigner.app)
(main branch, root). The Pages custom domain is set to
`setlistdesigner.app`. This folder is the source of truth — to update the
site, copy changed files to that repo on a branch and merge via PR.

The app links to these exact URLs (see `App/AppLinks.swift`):

- `https://setlistdesigner.app/privacy`
- `https://setlistdesigner.app/terms`
- `https://setlistdesigner.app/support`

## Live infrastructure

- [x] Namecheap DNS points the apex at the four GitHub Pages addresses.
- [x] `www` points to `nbdy-group.github.io.` and redirects to the apex.
- [x] GitHub Pages serves `https://setlistdesigner.app` with HTTPS enforced.

## Remaining owner steps

- [ ] Review the privacy policy and terms — legal acceptance is an owner
      gate. The operator is Nobody Management Ltd, trading as NBDY Software
      Solutions; confirm the governing-law choice (England and Wales).
- [ ] Create the `support@setlistdesigner.app` mailbox (Namecheap offers
      free email forwarding under Domain → Redirect Email).
- [ ] Replace the App Store link on `index.html` with the real product URL
      once the app is listed.
- [ ] In App Store Connect, set the Privacy Policy URL to
      `https://setlistdesigner.app/privacy` and the Support URL to
      `https://setlistdesigner.app/support`.
