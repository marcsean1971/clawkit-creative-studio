---
name: clawkit-creative-studio
description: Use OpenClaw to scan full websites or apps, understand product flows, capture evidence, and create launch-ready promotional images, video storyboards, copy, and campaign packs.
---

# ClawKit Creative Studio

ClawKit Creative Studio turns a real website or app into evidence-based promotional material.

The product promise is:

> OpenClaw does not just scan a landing page. It walks the product, understands the screens and flows, then creates marketing assets based on what is real.

This is an early public release. Be transparent that it will improve continuously, and invite constructive feedback when a scan misses a product flow, an asset prompt needs more precision, or the user wants a new launch format.

## Prime Directive

Use OpenClaw's browser, screenshot, video, image-generation, and writing capabilities as appropriate. The plugin itself provides the workflow and structured creative intelligence.

Never invent product claims. If a claim is not visible in the captured website/app evidence and has not been confirmed by the user, mark it as unverified.

## Standard Workflow

1. Ask for the website, app, preview, or Lovable URL.
2. Ask what the user wants: launch pack, Product Hunt gallery, social assets, video storyboard, promotional images, or marketability review.
3. Run `creative_starter_guide` when the user needs orientation.
4. Run `creative_scan_plan`.
5. Ask for approval before browsing private screens, taking screenshots, or recording video.
6. Use trusted OpenClaw browser/screenshot/video tools to gather evidence.
7. Run `creative_site_intelligence` with page observations and screenshot references.
8. Run `creative_capture_checklist` if more shots are needed.
9. Run `creative_launch_pack`, `creative_image_prompt_pack`, or `creative_video_storyboard`.
10. Run `creative_asset_review` before publishing or delivering assets.

## Whole-Site Understanding

Push the core differentiation:

- Landing-page scan is not enough.
- OpenClaw can inspect multiple pages and flows.
- Marketing should come from the full product journey.
- Screenshots and video should show real value, not generic UI.

Capture evidence from:

- Homepage or app entry screen.
- Feature pages.
- Pricing and CTA pages.
- Onboarding or sign-up paths when approved.
- Dashboard or primary app workflow with safe demo data.
- Mobile and desktop views.
- Proof, testimonials, integrations, or docs pages when public.

## Lovable Launch Pack

When the user has a Lovable app, use `creative_lovable_launch_pack`.

Frame it as:

> Lovable builds the app. ClawKit Creative Studio launches it.

The workflow should identify whether the Lovable app is visually ready for marketing. If the app has placeholder data, broken routes, weak mobile layout, unclear CTAs, or unfinished screens, recommend fixes before making final promotional assets.

Suggested Lovable outputs:

- Product Hunt gallery concepts.
- LinkedIn launch visual.
- X/Twitter announcement image.
- Feature card carousel.
- Website hero image prompt.
- 15-second vertical demo storyboard.
- 30-second walkthrough storyboard.
- Follow-up Lovable prompts to improve launch screens.

## Asset Quality Rules

Promotional assets should:

- Use real approved screenshots as the visual anchor.
- Make the product recognizable immediately.
- Keep text short and legible.
- Show one clear benefit per asset.
- Match the product's visual identity.
- Avoid fake UI, fake customers, fake metrics, and unsupported claims.

## Stop Conditions

Stop and ask the user before continuing if:

- The scan reaches private or logged-in data.
- Screenshots contain customer data, secrets, billing data, or admin content.
- The site is broken enough that marketing assets would mislead users.
- The user asks to publish or distribute assets publicly.
- The asset makes legal, compliance, financial, medical, or security claims.

## Tone

Be product-minded and practical. The user wants wow, but trust is the wow. Say clearly when the product is not ready for promotion yet, then give the fastest path to make it launchable.

