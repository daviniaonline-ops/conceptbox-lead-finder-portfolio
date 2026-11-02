# Conceptbox Lead Finder

An interactive portfolio demonstration of evidence-led lead review, built by Davinia Edafioka through AI-assisted development.

The original private PHP/MySQL application was built to discover relevant companies, verify records, research websites, prioritise potential opportunities and prepare outreach for human review. This independently adapted static edition demonstrates selected workflows using fictional records.

**[Try the live demo](https://daviniaonline-ops.github.io/conceptbox-lead-finder-portfolio/)**

## Try the workflow

1. Open the public demo or serve `docs/` locally with `python3 -m http.server 8000 --directory docs`.
2. Review **Example Ledger Ltd**. Inspect its sample findings and separate opportunity, fit and confidence scores.
3. Approve the lead. Prepare an editable sample draft and simulate CRM synchronisation.
4. Review **Sample Design Practice** to see unresolved contact checks block approval.
5. Try the Campaigns page to add three fictional records, filter the queue, or export sample data.
6. Reset demo restores the starting examples. Changes stay in the same browser where local storage is available.

## What is real and what is simulated

| Feature | Public portfolio edition |
|---|---|
| Navigation, queue filtering and separate scoring | Working browser interactions |
| Approve, defer, reject and do-not-contact workflow | Working local state with guards |
| Search campaign | Adds fixed fictional examples; no web research |
| Website findings and company verification | Fictional fixtures, not live checks |
| Outreach writing | Deterministic simulated draft; no AI API |
| CRM sync | Local simulation after approval; no CRM request |
| CSV export | Downloads fictional demo data only |
| Sending messages | Not implemented |

Scores illustrate review rules and do not establish actual sales opportunity, legal permission to contact anyone, or expected results. Approval in this demo is not legal clearance.

## Relationship to the private build

The original private build includes campaigns, Companies House and postcode research, website discovery and auditing, an evidence register, scoring, a review queue, draft-only outreach support, approval-gated HubSpot synchronisation and a do-not-contact register. Those provider integrations require separate setup and have not been independently retested as part of this portfolio edition.

This public project is a static adaptation of that workflow. Its JavaScript scoring uses a simplified subset of the private PHP rules. It excludes authentication, server logic, private records, API clients, credentials and the private application's Git history. It is not a deployment package for the production service.

## Development

No dependencies, installation or build step. Node.js 18+ is required only for checks:

```sh
npm run check
npm test
```

`docs/index.html`, `styles.css`, `app.js` and `domain.js` are the complete public demo. `tests/domain.test.js` checks the decision boundaries. There are no external runtime assets, analytics, AI calls, tracking pixels or automatic message-sending functions.

GitHub Pages can serve `docs/` from the `main` branch. Browser storage may be unavailable in restricted environments; the workflow still runs in memory.

## Business context

Conceptbox Consulting Limited and Build From Abroad can scope websites, practical enquiry workflows and operating tools around a business need. This demonstration is evidence of a designed workflow, not a claim about client revenue or completed client results.

## Rights

Copyright 2026 Davinia Edafioka. All rights reserved. Shared publicly for portfolio review. No open-source licence is granted. Contact the owner before reusing the code or branding beyond rights granted by the hosting platform and applicable law.
