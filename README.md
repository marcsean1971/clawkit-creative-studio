# ClawKit Creative Studio for Lovable

ClawKit Creative Studio for Lovable is an OpenClaw plugin for turning a real website or app into launch-ready promotional material.

The core idea is simple:

> Do not just scan a landing page. Let OpenClaw walk the whole product, understand the screens and flows, then create marketing assets from real evidence.

Most promotional generators start from a homepage, a URL, or a short prompt. ClawKit Creative Studio for Lovable is designed for deeper product understanding: homepage, feature pages, pricing, onboarding, dashboards, mobile views, proof pages, and approved logged-in flows.

This is an early public release. It is useful now, and it will improve continuously. Constructive feedback is welcome, especially examples where a website scan missed an important product flow or where a generated asset needed better evidence.

## Creative Studio Brain

`creative_studio_brain` is the separate brain for this product. It is not the same as the ClawKit for Lovable brain.

- **ClawKit for Lovable** builds, rescues, verifies, refactors, and prepares Lovable.dev apps.
- **ClawKit Creative Studio for Lovable** scans the finished or preview app, understands the product journey, and creates promotional assets from evidence.

The Creative Studio Brain decides whether OpenClaw should orient the user, scan the app, audit marketability, route weak screens back to ClawKit for Lovable, create assets, review claims/privacy, or prepare a client handoff.

To match the guided experience in ClawKit for Lovable, Creative Studio also exposes a simple state-and-next-action loop:

- `creative_launch_command_center` is the launch cockpit: readiness score, workflow state, next action, Product Hunt button, blockers, command buttons, and launch-room export plan.
- `creative_launch_room_export` creates the actual launch room package: command center JSON, Product Hunt draft, social copy, gallery prompts, demo storyboard, evidence map, asset matrix, checklist, client handoff, and Lovable fix prompts.
- `creative_workflow_state` turns scattered launch facts into one plain status object: mode, source of truth, product status, capture status, launch risk, current blocker, and next best action.
- `creative_next_action_plan` chooses the next safe move so the user does not have to know whether to scan, audit, fix screens, create assets, review claims, or prepare handoff files.

Creative Studio can also create a Product Hunt launch button payload. Because Product Hunt write access is restricted and account-gated, the safe default is a one-click handoff that opens Product Hunt's submit flow with a complete launch draft for human review. If a team has approved Product Hunt write scope and server-side OAuth handling, the same payload can be used as an API-ready submission plan with a final approval gate.

Creative Studio now includes Creative Production Mode for actual media production handoff. It can decide whether a launch should stay prompt-only, render social images, render video, or produce a full media pack. The plugin still does not call image/video APIs directly; it creates renderer-ready specs for OpenClaw image-generation, design, screen-recording, FFmpeg/Remotion, or approved external video tools.

## What It Does

- Asks for the app or website URL.
- Plans a full-site scan with approval gates.
- Guides OpenClaw to capture screenshots and optional video clips.
- Builds a product intelligence brief from the captured evidence.
- Scores whether the product is actually marketable yet.
- Runs Creative Audit Mode before asset generation so weak screens, missing trust signals, risky claims, and best promo angles are clear.
- Maps promotional claims back to visible evidence.
- Creates launch packs, promotional image prompts, social copy, and video storyboards.
- Creates renderer-ready social image packs, video render packs, and media asset manifests for actual PNG/JPG/MP4 production by approved tools.
- Creates agency/client-ready launch readiness reports.
- Reviews marketing claims so assets stay honest and safe.
- Includes a special Lovable Launch Pack workflow for Lovable apps.

## Why It Is Different

ClawKit Creative Studio for Lovable is not a simple URL-to-video tool. It is a product-understanding workflow.

OpenClaw can browse through a complete website or app, inspect multiple pages, compare desktop and mobile views, capture evidence, and reason about user journeys. The plugin turns that ability into a repeatable creative process.

The result is a launch pack based on what the product actually shows, not generic marketing language.

## Tools

| Tool | Purpose |
| --- | --- |
| `creative_studio_brain` | Chooses the next Creative Studio workflow: orient, scan, audit, fix before launch, create assets, review assets, or hand off. |
| `creative_launch_command_center` | Creates the launch cockpit: readiness score, state, next action, Product Hunt button, blockers, command buttons, and launch-room export plan. |
| `creative_launch_room_export` | Creates the actual launch-room package contents for Product Hunt, social copy, gallery prompts, evidence, assets, checklist, fixes, and handoff. |
| `creative_workflow_state` | Turns messy launch facts into a simple state: mode, source of truth, product status, capture status, launch risk, blocker, and next action. |
| `creative_next_action_plan` | Chooses the next safe action: ask the user, scan, audit, fix screens, create assets, review assets, or prepare handoff. |
| `creative_starter_guide` | Explains the workflow and user options. |
| `creative_scan_plan` | Creates the full-site scan plan, evidence list, approvals, and stop conditions. |
| `creative_browser_scan_recipe` | Creates a repeatable OpenClaw browser inspection protocol. |
| `creative_route_discovery_plan` | Plans route discovery from nav, CTAs, sitemap, menus, and approved app areas. |
| `creative_scan_session_summary` | Summarizes visited routes, captures, blocked areas, errors, coverage, and next scan actions. |
| `creative_site_intelligence` | Turns page observations and screenshots into a product understanding brief. |
| `creative_marketability_audit` | Scores launch readiness and identifies weak screens, missing evidence, risky claims, and next fixes. |
| `creative_product_audit` | Runs Creative Audit Mode across product understanding, screen quality, trust signals, promo angle, and fix-before-promotion actions. |
| `creative_evidence_map` | Maps promotional claims to screenshots, page evidence, or user confirmations. |
| `creative_capture_checklist` | Creates screenshot and optional video shot lists. |
| `creative_capture_report` | Turns screenshot notes into an approved/weak/missing capture inventory. |
| `creative_shot_selection` | Selects the best screenshots for Product Hunt, social, hero, and video assets. |
| `creative_visual_issue_report` | Reports visual, mobile, copy, layout, and runtime issues that weaken launch assets. |
| `creative_launch_asset_matrix` | Maps each asset to the exact screenshot, claim, copy angle, format, and approval status. |
| `creative_launch_pack` | Produces launch copy, asset concepts, and review checklist. |
| `creative_image_prompt_pack` | Creates image-generation prompts for promotional assets. |
| `creative_video_storyboard` | Creates 15- or 30-second promo video storyboards. |
| `creative_media_production_plan` | Chooses prompt-only, rendered social image, rendered video, or full media-pack production from approved product evidence. |
| `creative_social_image_render_pack` | Creates final PNG/JPG social image render specs and prompts for Product Hunt, LinkedIn, X, hero, and campaign formats. |
| `creative_video_render_pack` | Creates MP4 video render specs: timeline, source screenshots/clips, captions, motion notes, export targets, and review checklist. |
| `creative_media_asset_manifest` | Packages media production outputs into renderer handoff files for image/video tools. |
| `creative_export_plan` | Plans the files that should make up a launch handoff pack. |
| `creative_launch_brief` | Creates a markdown launch brief from intelligence, audit, evidence, and asset matrix. |
| `creative_prompt_export` | Formats image prompts and video storyboard scenes into a handoff document. |
| `creative_social_copy_pack` | Creates LinkedIn, X/Twitter, Product Hunt, Indie Hackers, email, and banner copy. |
| `creative_product_hunt_launch_button` | Creates a guarded Product Hunt launch button payload with draft fields, submit URL, blockers, checks, and API-ready requirements. |
| `creative_client_handoff` | Creates an agency/client-ready summary with approvals and fixes. |
| `creative_agency_report` | Creates a polished client-facing launch readiness report with audit findings, fixes, asset recommendations, and launch sequence. |
| `creative_lovable_project_context` | Creates shared context from Lovable, GitHub, readiness, risks, and launch goals. |
| `creative_lovable_to_launch_workflow` | Creates the end-to-end workflow from Lovable app to launch assets. |
| `creative_lovable_fix_prompt_pack` | Converts weak launch screens and marketability issues into Lovable fix prompts. |
| `creative_cross_plugin_handoff` | Creates a handoff between ClawKit for Lovable and Creative Studio. |
| `creative_demo_runbook` | Creates a demo script that shows the product from URL to launch pack. |
| `creative_sample_project_pack` | Creates sample inputs and outputs for a fake SaaS/Lovable app. |
| `creative_quality_scorecard` | Scores a completed Creative Studio run for trust, quality, and launch readiness. |
| `creative_user_onboarding` | Creates a friendly guide with example requests, decision paths, and guardrails. |
| `creative_lovable_readiness_feedback` | Turns scan findings into Lovable prompts for screenshot-ready launch screens. |
| `creative_lovable_launch_pack` | Turns a Lovable app URL into a launch-ready marketing workflow. |
| `creative_asset_review` | Checks claims, evidence, privacy, and visual readiness before publishing. |

## Suggested Workflow

1. OpenClaw calls `creative_launch_command_center` when the user wants the full launch cockpit or Product Hunt-ready launch flow.
2. OpenClaw calls `creative_studio_brain` to choose the mode and next action.
3. OpenClaw calls `creative_workflow_state` when the facts are scattered or a session is resuming.
4. Ask the user for the website, app, preview, or Lovable URL.
5. Ask what they want: launch pack, Product Hunt gallery, social images, video storyboard, or all of the above.
6. Run `creative_next_action_plan` before choosing the next operational step.
7. Run `creative_scan_plan`.
8. Run `creative_browser_scan_recipe` and `creative_route_discovery_plan`.
9. Use OpenClaw browser tools to inspect the site and capture screenshots or approved video clips.
10. Run `creative_scan_session_summary`.
11. Run `creative_site_intelligence` with the page evidence.
12. Run `creative_marketability_audit` to decide whether the app is ready for promotion.
13. Run `creative_product_audit` to understand the product, diagnose screens, choose the promo angle, and list fixes before asset generation.
14. Run `creative_evidence_map` before writing strong claims.
15. Run `creative_capture_checklist` if more shots are needed.
16. Run `creative_capture_report` to inventory approved, weak, and missing shots.
17. Run `creative_shot_selection` to choose the best screenshots for each launch asset.
18. Run `creative_visual_issue_report` if screenshots reveal broken UI, poor mobile layout, weak copy, or runtime issues.
19. Run `creative_launch_asset_matrix` to map assets to screenshots and supported claims.
20. Run `creative_launch_pack`, `creative_image_prompt_pack`, or `creative_video_storyboard`.
21. Run `creative_media_production_plan` when the user wants actual social images or video produced.
22. Run `creative_social_image_render_pack`, `creative_video_render_pack`, and `creative_media_asset_manifest` for renderer-ready media production.
23. Run `creative_export_plan` when the user wants a reusable handoff package.
24. Run `creative_launch_room_export` when the user wants the complete launch-room contents.
25. Run `creative_launch_brief`, `creative_prompt_export`, `creative_social_copy_pack`, and `creative_client_handoff` as needed.
26. Run `creative_agency_report` when the user needs a client-ready deliverable.
27. Run `creative_asset_review` before publishing or sending assets to a client.

## Browser Scan

Browser Scan v1 makes the full-site promise repeatable.

`creative_browser_scan_recipe` gives OpenClaw a desktop/mobile/app-flow inspection protocol with capture points, console checks, stop conditions, and expected outputs.

`creative_route_discovery_plan` tells OpenClaw where to look for meaningful routes: navigation, footer, CTAs, sitemap, feature cards, pricing buttons, app menus, and approved logged-in areas.

`creative_scan_session_summary` records what was actually visited, captured, blocked, or broken so the next creative tools know how complete the scan really is.

## Trust Layer

The first job is not to generate pretty assets. The first job is to know whether the product is ready to market.

`creative_marketability_audit` checks the captured evidence and returns a readiness score, strongest screens, weak screens, supported claims, risky claims, missing evidence, recommended fixes, and asset priorities.

`creative_product_audit` is the full Creative Audit Mode. It combines product intelligence, scan summary, screenshots, visual issues, and marketability findings into one decision report: what the app does, who it is for, the strongest selling points, weak or broken screens, missing trust signals, best screenshots, recommended promo angle, Lovable fix prompts when relevant, and the next workflow.

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

## QA Demo Pack

QA Demo Pack v1 makes the plugin easier to trust, explain, and sell.

`creative_demo_runbook` creates a step-by-step demo script for showing the whole workflow from URL to launch pack.

`creative_sample_project_pack` creates sample input and output data so users can understand the product before scanning their own app.

`creative_quality_scorecard` scores a completed run across scan coverage, screenshot quality, claim support, asset matrix completeness, export readiness, and launch safety.

`creative_user_onboarding` explains what the plugin can do and gives users practical first requests.

## Agency Report Mode

Agency Report Mode v1 turns a scan and audit into something a freelancer, consultant, or agency can send to a client.

`creative_agency_report` creates a polished markdown report with executive summary, product explanation, readiness score, scan evidence, strongest screens, weak or broken screens, trust gaps, recommended assets, suggested launch sequence, fix-before-publishing checklist, and optional Lovable fix prompts.

Use this after `creative_product_audit`, `creative_capture_report`, and `creative_launch_asset_matrix` when the user wants a commercial deliverable rather than only internal workflow output.

## Lovable Extension

Lovable builds the app. ClawKit Creative Studio for Lovable launches it.

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
- ClawKit Creative Studio for Lovable: understand, package, promote, launch.

## Important Guardrails

The plugin itself does not crawl websites, read files, record screens, call image/video APIs, render MP4 files, or send network requests. It stays marketplace-safe and tells OpenClaw how to use its trusted browser, screenshot, video, image-generation, design, and renderer tools.

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
