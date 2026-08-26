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

## Remaining owner steps

- [ ] **DNS at Namecheap** (the domain currently points at Namecheap
      parking). In Advanced DNS for `setlistdesigner.app`, remove the
      parking records and add:
      - `A` host `@` → `185.199.108.153`
      - `A` host `@` → `185.199.109.153`
      - `A` host `@` → `185.199.110.153`
      - `A` host `@` → `185.199.111.153`
      - `CNAME` host `www` → `nbdy-group.github.io.`
- [ ] After DNS propagates, enforce HTTPS (GitHub provisions the
      certificate automatically):
      `gh api -X PUT repos/NBDY-Group/setlistdesigner.app/pages -F https_enforced=true`
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
