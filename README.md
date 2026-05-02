# ClawKit Creative Studio

ClawKit Creative Studio is an OpenClaw plugin for turning a real website or app into launch-ready promotional material.

The core idea is simple:

> Do not just scan a landing page. Let OpenClaw walk the whole product, understand the screens and flows, then create marketing assets from real evidence.

Most promotional generators start from a homepage, a URL, or a short prompt. ClawKit Creative Studio is designed for deeper product understanding: homepage, feature pages, pricing, onboarding, dashboards, mobile views, proof pages, and approved logged-in flows.

This is an early public release. It is useful now, and it will improve continuously. Constructive feedback is welcome, especially examples where a website scan missed an important product flow or where a generated asset needed better evidence.

## What It Does

- Asks for the app or website URL.
- Plans a full-site scan with approval gates.
- Guides OpenClaw to capture screenshots and optional video clips.
- Builds a product intelligence brief from the captured evidence.
- Creates launch packs, promotional image prompts, social copy, and video storyboards.
- Reviews marketing claims so assets stay honest and safe.
- Includes a special Lovable Launch Pack workflow for Lovable apps.

## Why It Is Different

ClawKit Creative Studio is not a simple URL-to-video tool. It is a product-understanding workflow.

OpenClaw can browse through a complete website or app, inspect multiple pages, compare desktop and mobile views, capture evidence, and reason about user journeys. The plugin turns that ability into a repeatable creative process.

The result is a launch pack based on what the product actually shows, not generic marketing language.

## Tools

| Tool | Purpose |
| --- | --- |
| `creative_starter_guide` | Explains the workflow and user options. |
| `creative_scan_plan` | Creates the full-site scan plan, evidence list, approvals, and stop conditions. |
| `creative_site_intelligence` | Turns page observations and screenshots into a product understanding brief. |
| `creative_capture_checklist` | Creates screenshot and optional video shot lists. |
| `creative_launch_pack` | Produces launch copy, asset concepts, and review checklist. |
| `creative_image_prompt_pack` | Creates image-generation prompts for promotional assets. |
| `creative_video_storyboard` | Creates 15- or 30-second promo video storyboards. |
| `creative_lovable_launch_pack` | Turns a Lovable app URL into a launch-ready marketing workflow. |
| `creative_asset_review` | Checks claims, evidence, privacy, and visual readiness before publishing. |

## Suggested Workflow

1. Ask the user for the website, app, preview, or Lovable URL.
2. Ask what they want: launch pack, Product Hunt gallery, social images, video storyboard, or all of the above.
3. Run `creative_scan_plan`.
4. Use OpenClaw browser tools to inspect the site and capture screenshots or approved video clips.
5. Run `creative_site_intelligence` with the page evidence.
6. Run `creative_capture_checklist` if more shots are needed.
7. Run `creative_launch_pack`, `creative_image_prompt_pack`, or `creative_video_storyboard`.
8. Run `creative_asset_review` before publishing or sending assets to a client.

## Lovable Extension

Lovable builds the app. ClawKit Creative Studio launches it.

For Lovable apps, use `creative_lovable_launch_pack` first. It creates a workflow for scanning the Lovable preview or deployed app, capturing the best screens, identifying weak launch moments, and producing:

- Product Hunt gallery concepts.
- LinkedIn and X launch images.
- Feature cards.
- Website hero concepts.
- 15-second demo storyboard.
- 30-second walkthrough storyboard.
- Launch copy.
- Follow-up Lovable prompts if the app is not visually ready.

This pairs naturally with ClawKit for Lovable:

- ClawKit for Lovable: build, rescue, refactor, verify, ship.
- ClawKit Creative Studio: understand, package, promote, launch.

## Important Guardrails

The plugin itself does not crawl websites, read files, record screens, call image/video APIs, or send network requests. It stays marketplace-safe and tells OpenClaw how to use its trusted browser, screenshot, video, and creative-generation tools.

Do not publish generated assets until:

- Claims are visible in the product or confirmed by the user.
- No private data appears in screenshots or video.
- Broken or placeholder screens have been removed.
- The product owner has approved the message.
- Legal, brand, and platform-specific rules have been checked.

## Example Requests

```text
Scan my whole website and create a launch pack.
```

```text
Turn this Lovable app into Product Hunt gallery prompts and a 30-second demo storyboard.
```

```text
Review this app and tell me whether it is marketable before we create promotional assets.
```

```text
Create LinkedIn, X, and website hero image prompts based on the actual app screens.
```

## Package Shape

- `src/index.ts`: OpenClaw plugin entry and registered tools.
- `openclaw.plugin.json`: native OpenClaw manifest.
- `skills/clawkit-creative-studio/SKILL.md`: agent behavior policy.
- `docs/tool-contracts.md`: tool input/output contracts.
- `docs/clawhub-listing.md`: marketplace listing copy.
- `docs/product-strategy.md`: positioning and roadmap.

