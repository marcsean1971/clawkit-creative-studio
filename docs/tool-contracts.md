# Tool Contracts

## `creative_starter_guide`

Input: optional user goal and platform.

Output: product promise, best-fit use cases, normal workflow, example requests, guardrails, and suggested first move.

## `creative_scan_plan`

Input: website URL, scan goal, product type, crawl depth, known pages, authentication state, screenshot/video approval hints, and target audience.

Output: approval-gated full-site scan plan with:

- Pages to inspect.
- Browser evidence to capture.
- Optional video capture plan.
- Product signals to extract.
- Stop conditions.
- Expected outputs.

This tool does not browse or crawl. It tells OpenClaw what to inspect with trusted tools.

## `creative_browser_scan_recipe`

Input: website URL, scan mode, product type, and whether to include mobile, authenticated flow, and video notes.

Output: repeatable browser scan recipe with scan passes, viewports, steps, capture points, evidence to record, console checks, stop conditions, and expected outputs.

## `creative_route_discovery_plan`

Input: website URL, known routes, product type, sitemap flag, and authenticated-area flag.

Output: route discovery plan with sources, route candidates, interaction targets, prioritization rules, and blocked-access fallbacks.

## `creative_scan_session_summary`

Input: product name, website URL, visited routes, captures, blocked routes, errors, discovered routes, and expected routes.

Output: session summary with visited/captured/blocked/errors, route coverage, missing access, and next scan actions.

## `creative_site_intelligence`

Input: website URL, product name, page evidence, visible features, CTAs, screenshot references, brand colors, tone, user instructions, known claims, and missing/broken screens.

Output: product intelligence brief with:

- Product summary.
- Audience.
- Positioning.
- Visible features.
- User flows.
- Visual identity.
- Proof gaps.
- Launch angles.
- Asset opportunities.
- Do-not-claim list.
- Recommended next action.

## `creative_marketability_audit`

Input: site intelligence brief, approved screenshot references, inspected pages, weak or broken screens, supported claims, risky claims, missing evidence, and whether mobile evidence, primary CTA, demo data, and video-ready flow are present.

Output: marketability audit with:

- Readiness state.
- Score.
- Strongest screens.
- Weak screens.
- Supported claims.
- Risky claims.
- Missing evidence.
- Recommended fixes.
- Launch asset priority.
- Next action.

Use it before generating final promotional assets.

## `creative_evidence_map`

Input: marketing claims, visible evidence, user-confirmed claims, and do-not-claim rules.

Output: claim-by-claim evidence map with:

- Support status.
- Supporting evidence.
- Risk level.
- Safer rewrite.
- Publishable claims.
- Claims to remove.

Use it before final copy, image prompts, video scripts, or public launch copy.

## `creative_capture_checklist`

Input: product name, website URL, asset goal, target formats, and video preference.

Output: required screenshots, optional shots, video shots, output formats, and quality rules.

## `creative_capture_report`

Input: product name, website URL, capture items, and required shot purposes.

Each capture item may include screenshot reference, URL, viewport, purpose, quality, visible claims, issues, and notes.

Output: capture inventory with:

- Total captures.
- Approved captures.
- Weak captures.
- Coverage.
- Missing shots.
- Recommended recaptures.
- Next action.

## `creative_shot_selection`

Input: product name, capture items, and target assets.

Output: selected primary and backup shots for each target asset, rejected shots, copy angle, selection reason, and required fixes.

## `creative_visual_issue_report`

Input: product name, capture items, console errors, layout issues, copy issues, and mobile issues.

Output: severity, issue list, launch blockers, and screens to recapture after fixes.

## `creative_launch_asset_matrix`

Input: product name, shot selection result, optional evidence map, and target formats.

Output: matrix that maps each asset to screenshot reference, backup screenshot, supported claim, copy angle, design instruction, production status, and approval requirement.

## `creative_launch_pack`

Input: site intelligence brief, launch goal, formats, and tone.

Output: launch theme, campaign promise, proof-based claims, asset concepts, launch copy, and review checklist.

## `creative_image_prompt_pack`

Input: site intelligence brief, approved screenshot references, image formats, and style preference.

Output: image-generation prompts, negative prompts, and human review checks.

## `creative_video_storyboard`

Input: site intelligence brief, duration, orientation, approved screenshot/clip references, and voiceover preference.

Output: video storyboard with timing, scene titles, direction, on-screen text, voiceover notes, and production notes.

## `creative_export_plan`

Input: product name, package name, and whether to include video, client handoff, and CSV shot list.

Output: recommended launch-pack file list, creation order, and approval gates.

## `creative_launch_brief`

Input: site intelligence, optional marketability audit, evidence map, asset matrix, and launch goal.

Output: markdown launch brief with product summary, audience, positioning, marketability, supported claims, risky claims, asset matrix, and fixes.

## `creative_prompt_export`

Input: image prompt pack and optional video storyboard.

Output: markdown document containing image prompts, negative prompts, storyboard prompts, and production notes.

## `creative_social_copy_pack`

Input: product name, website URL, tagline, supported claims, audience, and tone.

Output: markdown copy pack for LinkedIn, X/Twitter, Product Hunt, Indie Hackers, email announcement, and website banner.

## `creative_client_handoff`

Input: product name, website URL, scan summary, capture report, marketability audit, asset matrix, and pending approvals.

Output: agency/client-ready markdown handoff with scan summary, capture status, marketability status, recommended assets, pending approvals, and fixes before launch.

## `creative_lovable_project_context`

Input: product name, Lovable URL, GitHub repo URL, product goal, launch goal, stack, previous ClawKit for Lovable readiness summary, and known risks.

Output: shared Lovable-to-launch context with source of truth, creative priorities, and recommended workflow.

## `creative_lovable_to_launch_workflow`

Input: Lovable project context plus flags for engineering fixes, Lovable polish, and export pack.

Output: phased workflow from live app verification to scan, fixes, rescan, launch pack, and export handoff.

## `creative_lovable_fix_prompt_pack`

Input: weak screens, visual issues, missing screens, missing proof, target launch assets, and preserve instructions.

Output: focused Lovable prompts for screenshot-ready launch polish, proof support, and missing launch screens.

## `creative_cross_plugin_handoff`

Input: product identifiers, build status, readiness status, creative status, next owner, and blockers.

Output: handoff summary, division of labor between ClawKit for Lovable and Creative Studio, blockers, next owner, and next actions.

## `creative_lovable_readiness_feedback`

Input: product name, Lovable URL, weak screens, visual issues, missing proof, missing screens, and target launch assets.

Output: Lovable readiness status, focused Lovable prompts, acceptance criteria, and next action.

## `creative_lovable_launch_pack`

Input: Lovable preview/deployed URL, product name, optional GitHub repo URL, target audience, and launch goal.

Output: Lovable-specific launch workflow, recommended assets, Lovable follow-up prompts, and launch positioning.

## `creative_asset_review`

Input: asset description, claims, evidence, private-data flag, and visual issues.

Output: publish readiness, evidence status, risks, required fixes, and approval checklist.
