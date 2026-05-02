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

## `creative_launch_pack`

Input: site intelligence brief, launch goal, formats, and tone.

Output: launch theme, campaign promise, proof-based claims, asset concepts, launch copy, and review checklist.

## `creative_image_prompt_pack`

Input: site intelligence brief, approved screenshot references, image formats, and style preference.

Output: image-generation prompts, negative prompts, and human review checks.

## `creative_video_storyboard`

Input: site intelligence brief, duration, orientation, approved screenshot/clip references, and voiceover preference.

Output: video storyboard with timing, scene titles, direction, on-screen text, voiceover notes, and production notes.

## `creative_lovable_launch_pack`

Input: Lovable preview/deployed URL, product name, optional GitHub repo URL, target audience, and launch goal.

Output: Lovable-specific launch workflow, recommended assets, Lovable follow-up prompts, and launch positioning.

## `creative_asset_review`

Input: asset description, claims, evidence, private-data flag, and visual issues.

Output: publish readiness, evidence status, risks, required fixes, and approval checklist.
