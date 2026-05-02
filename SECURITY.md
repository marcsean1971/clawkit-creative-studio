# Security

ClawKit Creative Studio is designed as a marketplace-safe orchestration plugin.

It does not:

- Crawl websites directly.
- Read local files.
- Write local files.
- Record the screen.
- Call image, video, browser, GitHub, or network APIs.
- Store credentials or screenshots.

Instead, it produces structured plans, briefs, prompts, storyboards, and review checklists. OpenClaw should use its own trusted browser, screenshot, video, and creative-generation tools after the user approves the action.

## Private Data

Do not capture or publish:

- Customer data.
- Secrets, tokens, API keys, or environment variables.
- Billing, payment, or admin screens.
- Private dashboards without approved demo data.
- Screens containing personal, medical, legal, financial, or confidential information.

## Marketing Claims

Generated assets must not claim:

- Revenue or customer numbers.
- Performance improvements.
- Security or compliance status.
- Integrations.
- Pricing.
- AI capabilities.
- User outcomes.

unless those claims are visible in the product evidence or explicitly confirmed by the product owner.

## Responsible Workflow

Before publication, run `creative_asset_review` and complete a human review for:

- Brand fit.
- Spelling and text accuracy.
- Claim support.
- Screenshot privacy.
- Platform rules.
- Legal/compliance risk.

