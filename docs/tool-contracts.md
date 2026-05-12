# Tool Contracts

## `creative_studio_brain`

Input: product name, website or Lovable.dev URL, user goal, scan/evidence status, asset goals, weak-screen flags, privacy/claim risks, and target launch channel.

Output: Creative Studio workflow decision with:

- Mode: orient, scan, audit, fix-before-launch, create-assets, review-assets, or handoff.
- User-facing summary and next action.
- Embedded workflow state for source of truth, product status, capture status, launch risk, blocker, and missing facts.
- Recommended tool order.
- Minimum facts to ask the user for.
- Clear division between Creative Studio work and ClawKit for Lovable work.
- Evidence needed before producing public assets.
- Stop conditions for private data, unsupported claims, broken screens, and unapproved publishing.

Use it as the default first tool for ClawKit Creative Studio for Lovable. This brain is separate from ClawKit for Lovable's `lovable_brain`: Creative Studio handles product scanning, promotional assets, launch packs, claim review, and handoff; ClawKit for Lovable handles build, rescue, verification, refactoring, GitHub, and code fixes.

## `creative_launch_command_center`

Input: product name, website or Lovable.dev URL, launch goal, target channel, source hints, workflow status flags, Product Hunt fields, capture/assets/audit/evidence flags, strongest and weak screens, missing screens, supported and risky claims, and known facts.

Output: top-level launch cockpit with:

- Launch readiness score and status.
- Workflow state and next action plan.
- Product Hunt button payload.
- Command buttons for scan, Lovable fixes, launch pack creation, Product Hunt handoff, and launch-room export.
- Readiness panels for scan, captures, audit, assets, claim safety, and Product Hunt.
- Best launch assets, blockers, fixes before launch, launch-room files, and recommended tool order.

Use it when the user wants the “wow” experience: one place that explains what is ready, what is blocked, what button to press next, and what files make up the launch room.

## `creative_launch_room_export`

Input: product name, website URL, package name, launch goal, target channel, optional command center, include flags, Product Hunt fields, claims, screen lists, fixes, social copy, gallery prompts, video storyboard scenes, client notes, workflow status flags, and Product Hunt write-access flag.

Output: complete launch-room export with:

- Command center JSON.
- Product Hunt draft.
- Social copy.
- Gallery prompts.
- Demo storyboard.
- Evidence map.
- Asset matrix.
- Launch checklist.
- Client handoff.
- Lovable fix prompts when blockers or weak/missing screens exist.
- Next actions and approval gates.

Use it after `creative_launch_command_center` when the user wants an operational package, not just a plan.

## `creative_workflow_state`

Input: product name, website or Lovable.dev URL, user goal, source hints, scan/capture/audit/asset status, private-data and unsupported-claim risks, weak-screen flags, target launch channel, and known facts.

Output: simple Creative Studio state with:

- Mode: orient, scan, audit, fix-before-launch, create-assets, review-assets, or handoff.
- Source of truth: Lovable preview, deployed app, GitHub, screenshot pack, or unknown.
- Product status, capture status, and launch risk.
- Current blocker and next best action.
- Known facts and missing info.

Use it when a session resumes, facts are scattered, or the user asks where the launch workflow stands.

## `creative_next_action_plan`

Input: requested outcome, optional workflow state, product URL, Lovable/GitHub/source hints, scan/capture/audit/asset status, private-data and unsupported-claim risks, weak-screen flags, and target launch channel.

Output: next safe action plan with:

- Recommended action: ask user, scan product, audit readiness, fix screens, create assets, review assets, or prepare handoff.
- Reason and immediate steps.
- Division between Creative Studio and ClawKit for Lovable.
- Required evidence and stop conditions.

Use it before choosing the next operational tool so users get the same guided “what happens next?” experience as ClawKit for Lovable.

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

## `creative_product_audit`

Input: site intelligence brief, optional marketability audit, optional scan summary, captures, visual issues, user goal, Lovable-app flag, missing trust signals, missing screens, approved screens, and target launch channel.

Output: full Creative Audit Mode report with:

- Overall readiness state and score.
- Product understanding summary, audience, use cases, and positioning.
- Strongest screens, weak or broken screens, missing screens, and screenshot recommendations.
- Strongest selling points, recommended promo angle, supported claims, risky claims, and missing trust signals.
- Fix-before-promotion actions.
- Recommended assets with source screens and readiness state.
- Lovable fix prompts when relevant.
- Next workflow.

Use it after `creative_site_intelligence` and before final asset generation. This is the product-level confidence check that decides whether OpenClaw should create assets now, capture more evidence, or improve the app first.

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

## `creative_media_production_plan`

Input: product name, website URL, launch goal, target channels, rendered-image/video intent, approved screenshot and clip references, supported claims, asset-review status, private-data/unsupported-claim/weak-screen flags, desired image and video formats, and preferred renderer.

Output: Creative Production Mode decision with:

- Production mode: prompt-only, render-social-images, render-video, render-full-media-pack, or blocked.
- Source readiness for screenshots, video clips, claims, and screen quality.
- Recommended outputs with owner and status.
- Render pipeline, blockers, approval gates, and next tools.

Use this when the user wants actual social media images or video as part of the product offering.

## `creative_social_image_render_pack`

Input: product name, approved screenshot references, supported claims, target formats, brand colors, style direction, and renderer mode.

Output: final social image render specs with:

- Platform formats and dimensions.
- Source screenshots.
- Headlines and supporting copy.
- Image-generation/design prompts and negative prompts.
- Export filenames, shared style rules, and review checklist.

Use it after screenshots and claims are approved, before OpenClaw or a design/image-generation tool renders PNG/JPG assets.

## `creative_video_render_pack`

Input: product name, approved screenshot references, approved video clip references, supported claims, duration, orientation, voiceover preference, and renderer mode.

Output: video render pack with:

- Renderer mode: storyboard-only, screen-recording-edit, remotion-ffmpeg, or video-provider.
- Timeline with time ranges, scenes, source assets, motion notes, captions, and optional voiceover.
- Assets needed, render notes, export targets, and review checklist.

Use it before rendering MP4 launch videos, Product Hunt demos, or short-form social videos.

## `creative_media_asset_manifest`

Input: product name, package name, optional media production plan, optional social image render pack, and optional video render pack.

Output: renderer handoff package with JSON and markdown files for the production plan, social image prompts/specs, video render specs, video timeline, and next actions.

Use it when the user wants an operational media package that can be sent to OpenClaw image/video tools, a designer, a video editor, or an external renderer.

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

## `creative_agency_report`

Input: client name, agency name, prepared-by name, report date, product name, website URL, scan summary, site intelligence, marketability audit, product audit, capture report, asset matrix, launch window, recommended launch sequence, Lovable prompt preference, and next commercial step.

Output: polished client-facing markdown report with:

- Executive summary.
- Product explanation.
- Audience and positioning.
- Launch readiness state and score.
- Scan evidence.
- Strongest screens.
- Weak or broken screens.
- Trust and evidence gaps.
- Recommended promotional assets.
- Suggested launch sequence.
- Fix-before-publishing checklist.
- Optional Lovable fix prompts.

Use it when the user needs a deliverable for a client, sales call, agency handoff, or paid launch-readiness review.

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

## `creative_demo_runbook`

Input: product name, website URL, target audience, demo length, and whether to include Lovable Bridge.

Output: timed demo runbook with script beats, tools to show, proof moments, and presenter notes.

## `creative_sample_project_pack`

Input: product name, product type, and whether to include a Lovable example.

Output: sample website URL, launch goal, route list, fake scan evidence, sample claims, sample asset matrix row, sample social post, and optional Lovable fix example.

## `creative_quality_scorecard`

Input: route coverage, capture counts, claim counts, asset matrix status, export pack status, privacy review status, and human approval status.

Output: overall score, grade, dimension scores, blockers, and next actions.

## `creative_user_onboarding`

Input: user goal, experience level, and whether the user has a Lovable app.

Output: friendly onboarding guide with intro, example requests, decision paths, guardrails, and recommended next action.

## `creative_product_hunt_launch_button`

Input: product name, product URL, optional tagline, description, maker comment, topics, gallery assets, video URL, launch date, approval flags, evidence flags, visual-risk flags, and whether approved Product Hunt write access exists.

Output: guarded Product Hunt launch-button payload with:

- Mode: manual-submit, api-ready, or blocked.
- Button label and Product Hunt submit URL.
- Product Hunt launch draft fields.
- Preflight checks, blockers, API requirements, and user instructions.

Use this after `creative_asset_review` and `creative_launch_asset_matrix`. The safe default is a one-click human-reviewed Product Hunt submit handoff. API-ready mode requires Product Hunt write scope, user OAuth, secure server-side token handling, and a final approval gate.

## `creative_lovable_readiness_feedback`

Input: product name, Lovable URL, weak screens, visual issues, missing proof, missing screens, and target launch assets.

Output: Lovable readiness status, focused Lovable prompts, acceptance criteria, and next action.

## `creative_lovable_launch_pack`

Input: Lovable preview/deployed URL, product name, optional GitHub repo URL, target audience, and launch goal.

Output: Lovable-specific launch workflow, recommended assets, Lovable follow-up prompts, and launch positioning.

## `creative_asset_review`

Input: asset description, claims, evidence, private-data flag, and visual issues.

Output: publish readiness, evidence status, risks, required fixes, and approval checklist.
