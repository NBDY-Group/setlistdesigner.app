# setlistdesigner.app - static site

Four static pages, no build step, no cookies, no analytics:

- `index.html` - landing page
- `privacy/index.html` - privacy policy (linked from the app paywall and Settings)
- `terms/index.html` - terms of use (linked from the app paywall and Settings)
- `support/index.html` - support page and FAQ
- `404.html` - not-found page

The publisher brand is **NBDY Software Solutions**. Every page also identifies
Nobody Management Ltd as the legal entity and carries the UK company-number
and registered-office disclosure required by `Docs/publisher-identity.md`.

## Deployment (live)

Deployed with GitHub Pages from
[NBDY-Group/setlistdesigner.app](https://github.com/NBDY-Group/setlistdesigner.app)
(main branch, root). The Pages custom domain is set to
`setlistdesigner.app`. This folder is the source of truth - to update the
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

- [x] Reconciled source published through
      [website PR #8](https://github.com/NBDY-Group/setlistdesigner.app/pull/8)
      on 15 September 2026. The live home, support, privacy, and terms pages
      were verified at desktop and 390-point mobile widths with no missing
      images or horizontal overflow.
- [x] Owner accepted the version 1.0 privacy policy, App Store privacy
      declarations, subscription terms, content/performance liability terms,
      publisher identity, and England-and-Wales governing-law choice on
      15 September 2026.
- [x] `support@setlistdesigner.app` forwards to the owner business inbox.
      Delivery from an unrelated account and the reply identity were both
      verified on 15 September 2026.
- [ ] Replace the App Store link on `index.html` with the real product URL
      once the app is listed.
- [x] App Store Connect Privacy, Support, and Marketing URLs are set on the
      accepted app information plus both iOS and Mac 1.0 drafts. Verified
      idempotently on 15 September 2026 without submitting either version.
