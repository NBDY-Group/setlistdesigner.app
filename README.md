# setlistdesigner.app — static site

Four static pages, no build step, no cookies, no analytics:

- `index.html` — landing page
- `privacy/index.html` — privacy policy (linked from the app paywall and Settings)
- `terms/index.html` — terms of use (linked from the app paywall and Settings)
- `support/index.html` — support page and FAQ
- `404.html` — not-found page

The publisher brand is **NBDY Software Solutions**. Every page also identifies
Nobody Management Ltd as the legal entity and carries the UK company-number
and registered-office disclosure required by `Docs/publisher-identity.md`.

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
