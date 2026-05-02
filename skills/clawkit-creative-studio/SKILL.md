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
5. Run `creative_browser_scan_recipe` and `creative_route_discovery_plan`.
6. Ask for approval before browsing private screens, taking screenshots, or recording video.
7. Use trusted OpenClaw browser/screenshot/video tools to gather evidence.
8. Run `creative_scan_session_summary`.
9. Run `creative_site_intelligence` with page observations and screenshot references.
10. Run `creative_marketability_audit` to decide whether the product is ready for promotion.
11. Run `creative_evidence_map` before using strong promotional claims.
12. Run `creative_capture_checklist` if more shots are needed.
13. Run `creative_capture_report` after screenshots are captured.
14. Run `creative_shot_selection` to choose the best shot for each launch asset.
15. Run `creative_visual_issue_report` when screenshots reveal visual, mobile, copy, or runtime problems.
16. Run `creative_launch_asset_matrix` to map assets to exact shots and supported claims.
17. Run `creative_launch_pack`, `creative_image_prompt_pack`, or `creative_video_storyboard`.
18. Run `creative_export_plan` when the user needs a reusable launch package.
19. Run `creative_launch_brief`, `creative_prompt_export`, `creative_social_copy_pack`, or `creative_client_handoff` as needed.
20. Run `creative_asset_review` before publishing or delivering assets.

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

## Browser Scan

Use Browser Scan v1 to make the full-site scan repeatable.

The normal order is:

1. `creative_browser_scan_recipe`: define desktop, mobile, console, capture, and approved app-flow passes.
2. `creative_route_discovery_plan`: discover routes from nav, footer, CTAs, sitemap, buttons, feature cards, and approved app menus.
3. OpenClaw browses and captures evidence with trusted tools.
4. `creative_scan_session_summary`: record what was visited, captured, blocked, and broken.

If the scan finds a Lovable app that is not launch-ready, use `creative_lovable_readiness_feedback` to create focused Lovable prompts.

## Trust Layer

Before creating final assets, use `creative_marketability_audit`.

It should answer:

- Are the captured screens strong enough to market?
- Which screens should be used first?
- Which screens are weak, broken, unfinished, or placeholder-heavy?
- Which claims are supported?
- Which claims are risky?
- What evidence is still missing?

Then use `creative_evidence_map` to connect every claim to visible evidence or explicit user confirmation. If a claim is unsupported, remove it or rewrite it conservatively.

## Capture Pack

Use Capture Pack after OpenClaw has screenshots or approved video notes.

The normal order is:

1. `creative_capture_report`: inventory the captures and find missing or weak shots.
2. `creative_visual_issue_report`: flag issues that block polished launch assets.
3. `creative_shot_selection`: choose the best screenshot for each target asset.
4. `creative_launch_asset_matrix`: connect each asset to a screenshot, supported claim, copy angle, and approval gate.

This is what turns a full-site scan into a repeatable launch production workflow.

## Export Pack

Use Export Pack when the user wants a concrete handoff for themselves, a designer, a video editor, or a client.

The normal order is:

1. `creative_export_plan`: decide which files belong in the handoff.
2. `creative_launch_brief`: create the main launch strategy document.
3. `creative_prompt_export`: package image prompts and video storyboard prompts.
4. `creative_social_copy_pack`: prepare platform-specific launch copy.
5. `creative_client_handoff`: summarize scan evidence, assets, approvals, and fixes.

The plugin should not write files directly. Return markdown and structured output, then let OpenClaw write files only with user approval.

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
