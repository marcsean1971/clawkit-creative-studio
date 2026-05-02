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
- Scores whether the product is actually marketable yet.
- Maps promotional claims back to visible evidence.
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
| `creative_browser_scan_recipe` | Creates a repeatable OpenClaw browser inspection protocol. |
| `creative_route_discovery_plan` | Plans route discovery from nav, CTAs, sitemap, menus, and approved app areas. |
| `creative_scan_session_summary` | Summarizes visited routes, captures, blocked areas, errors, coverage, and next scan actions. |
| `creative_site_intelligence` | Turns page observations and screenshots into a product understanding brief. |
| `creative_marketability_audit` | Scores launch readiness and identifies weak screens, missing evidence, risky claims, and next fixes. |
| `creative_evidence_map` | Maps promotional claims to screenshots, page evidence, or user confirmations. |
| `creative_capture_checklist` | Creates screenshot and optional video shot lists. |
| `creative_capture_report` | Turns screenshot notes into an approved/weak/missing capture inventory. |
| `creative_shot_selection` | Selects the best screenshots for Product Hunt, social, hero, and video assets. |
| `creative_visual_issue_report` | Reports visual, mobile, copy, layout, and runtime issues that weaken launch assets. |
| `creative_launch_asset_matrix` | Maps each asset to the exact screenshot, claim, copy angle, format, and approval status. |
| `creative_launch_pack` | Produces launch copy, asset concepts, and review checklist. |
| `creative_image_prompt_pack` | Creates image-generation prompts for promotional assets. |
| `creative_video_storyboard` | Creates 15- or 30-second promo video storyboards. |
| `creative_export_plan` | Plans the files that should make up a launch handoff pack. |
| `creative_launch_brief` | Creates a markdown launch brief from intelligence, audit, evidence, and asset matrix. |
| `creative_prompt_export` | Formats image prompts and video storyboard scenes into a handoff document. |
| `creative_social_copy_pack` | Creates LinkedIn, X/Twitter, Product Hunt, Indie Hackers, email, and banner copy. |
| `creative_client_handoff` | Creates an agency/client-ready summary with approvals and fixes. |
| `creative_lovable_project_context` | Creates shared context from Lovable, GitHub, readiness, risks, and launch goals. |
| `creative_lovable_to_launch_workflow` | Creates the end-to-end workflow from Lovable app to launch assets. |
| `creative_lovable_fix_prompt_pack` | Converts weak launch screens and marketability issues into Lovable fix prompts. |
| `creative_cross_plugin_handoff` | Creates a handoff between ClawKit for Lovable and Creative Studio. |
| `creative_lovable_readiness_feedback` | Turns scan findings into Lovable prompts for screenshot-ready launch screens. |
| `creative_lovable_launch_pack` | Turns a Lovable app URL into a launch-ready marketing workflow. |
| `creative_asset_review` | Checks claims, evidence, privacy, and visual readiness before publishing. |

## Suggested Workflow

1. Ask the user for the website, app, preview, or Lovable URL.
2. Ask what they want: launch pack, Product Hunt gallery, social images, video storyboard, or all of the above.
3. Run `creative_scan_plan`.
4. Run `creative_browser_scan_recipe` and `creative_route_discovery_plan`.
5. Use OpenClaw browser tools to inspect the site and capture screenshots or approved video clips.
6. Run `creative_scan_session_summary`.
7. Run `creative_site_intelligence` with the page evidence.
8. Run `creative_marketability_audit` to decide whether the app is ready for promotion.
9. Run `creative_evidence_map` before writing strong claims.
10. Run `creative_capture_checklist` if more shots are needed.
11. Run `creative_capture_report` to inventory approved, weak, and missing shots.
12. Run `creative_shot_selection` to choose the best screenshots for each launch asset.
13. Run `creative_visual_issue_report` if screenshots reveal broken UI, poor mobile layout, weak copy, or runtime issues.
14. Run `creative_launch_asset_matrix` to map assets to screenshots and supported claims.
15. Run `creative_launch_pack`, `creative_image_prompt_pack`, or `creative_video_storyboard`.
16. Run `creative_export_plan` when the user wants a reusable handoff package.
17. Run `creative_launch_brief`, `creative_prompt_export`, `creative_social_copy_pack`, and `creative_client_handoff` as needed.
18. Run `creative_asset_review` before publishing or sending assets to a client.

## Browser Scan

Browser Scan v1 makes the full-site promise repeatable.

`creative_browser_scan_recipe` gives OpenClaw a desktop/mobile/app-flow inspection protocol with capture points, console checks, stop conditions, and expected outputs.

`creative_route_discovery_plan` tells OpenClaw where to look for meaningful routes: navigation, footer, CTAs, sitemap, feature cards, pricing buttons, app menus, and approved logged-in areas.

`creative_scan_session_summary` records what was actually visited, captured, blocked, or broken so the next creative tools know how complete the scan really is.

## Trust Layer

The first job is not to generate pretty assets. The first job is to know whether the product is ready to market.

`creative_marketability_audit` checks the captured evidence and returns a readiness score, strongest screens, weak screens, supported claims, risky claims, missing evidence, recommended fixes, and asset priorities.

`creative_evidence_map` connects each marketing claim to screenshots, page observations, video notes, or user confirmations. If a claim cannot be supported, the plugin marks it as risky or tells OpenClaw to remove it.

## Capture Pack

Capture Pack v1 turns raw browsing evidence into a production workflow.

`creative_capture_report` creates a screenshot inventory with approved captures, weak captures, missing shots, and recapture recommendations.

`creative_shot_selection` chooses which screenshot should be used for each target asset, including Product Hunt slides, LinkedIn, X/Twitter, hero visuals, and video hooks.

`creative_visual_issue_report` flags visual, copy, mobile, layout, and runtime problems before they become embarrassing launch assets.

`creative_launch_asset_matrix` maps every target asset to the screenshot, supported claim, copy angle, format, and human approval gate.

## Export Pack

Export Pack v1 turns Creative Studio output into handoff-ready content.

`creative_export_plan` recommends the files that should be created for a launch pack, such as `launch-brief.md`, `asset-matrix.json`, `image-prompts.md`, `video-storyboard.md`, `social-copy.md`, and `client-handoff.md`.

The plugin does not write files itself. It returns structured markdown, JSON-style data, and CSV-ready planning so OpenClaw can write files only when the user approves.

## Lovable Bridge

Lovable Bridge v1 makes Creative Studio feel like the natural next step after ClawKit for Lovable.

`creative_lovable_project_context` gathers Lovable URL, GitHub repo, product goal, readiness summary, known stack, risks, and launch goal into a shared context.

`creative_lovable_to_launch_workflow` creates the exact sequence from live Lovable app to scan, fixes, rescan, launch pack, and export handoff.

`creative_lovable_fix_prompt_pack` turns weak screenshots, missing proof, mobile problems, and placeholder screens into focused Lovable prompts.

`creative_cross_plugin_handoff` makes the division of labor explicit: ClawKit for Lovable builds and stabilizes; Creative Studio scans, packages, promotes, and launches.

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
