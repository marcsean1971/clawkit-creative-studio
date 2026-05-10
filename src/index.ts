import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { Type } from "@sinclair/typebox";

type SitePageEvidence = {
  url: string;
  title?: string;
  purpose?: string;
  visibleFeatures?: string[];
  primaryCta?: string;
  screenshotRef?: string;
  notes?: string;
};

type SiteIntelligence = {
  productName: string;
  websiteUrl: string;
  productSummary: string;
  audience: string[];
  positioning: string[];
  visibleFeatures: string[];
  userFlows: string[];
  visualIdentity: {
    colors: string[];
    tone: string;
    styleNotes: string[];
  };
  proofGaps: string[];
  launchAngles: string[];
  assetOpportunities: string[];
  doNotClaim: string[];
  recommendedNextAction: string;
};

type ScanPlan = {
  websiteUrl: string;
  scanGoal: string;
  crawlDepth: "light" | "standard" | "deep";
  requiredApprovals: string[];
  pagesToInspect: string[];
  browserEvidenceToCapture: string[];
  videoCapturePlan: string[];
  productSignalsToExtract: string[];
  stopConditions: string[];
  outputBrief: string[];
};

type BrowserScanRecipe = {
  websiteUrl: string;
  mode: "public-site" | "app-preview" | "authenticated-demo" | "lovable-preview";
  scanPasses: Array<{
    name: string;
    viewport: string;
    steps: string[];
    capturePoints: string[];
    evidenceToRecord: string[];
  }>;
  consoleChecks: string[];
  stopConditions: string[];
  expectedOutputs: string[];
};

type RouteDiscoveryPlan = {
  websiteUrl: string;
  sources: string[];
  routeCandidates: string[];
  interactionTargets: string[];
  prioritizationRules: string[];
  blockedAccessFallbacks: string[];
};

type ScanSessionSummary = {
  productName: string;
  websiteUrl: string;
  visited: string[];
  captured: string[];
  blocked: string[];
  errors: string[];
  routeCoverage: "low" | "medium" | "high";
  missingAccess: string[];
  nextScanActions: string[];
};

type LaunchPack = {
  productName: string;
  launchTheme: string;
  campaignPromise: string;
  proofBasedClaims: string[];
  assets: Array<{
    name: string;
    format: string;
    purpose: string;
    sourceScreens: string[];
    copy: string;
    designDirection: string;
  }>;
  copySet: {
    tagline: string;
    shortDescription: string;
    linkedinPost: string;
    xPost: string;
    productHuntDescription: string;
  };
  reviewChecklist: string[];
};

type EvidenceMapItem = {
  claim: string;
  status: "supported" | "needs-confirmation" | "unsupported" | "do-not-use";
  supportingEvidence: string[];
  risk: "low" | "medium" | "high";
  saferRewrite: string;
};

type MarketabilityAudit = {
  productName: string;
  websiteUrl: string;
  readiness: "not-ready" | "needs-polish" | "marketable" | "launch-ready";
  score: number;
  strongestScreens: string[];
  weakScreens: string[];
  supportedClaims: string[];
  riskyClaims: string[];
  missingEvidence: string[];
  recommendedFixes: string[];
  launchAssetPriority: string[];
  nextAction: string;
};

type ProductAudit = {
  productName: string;
  websiteUrl: string;
  auditMode: "creative-audit";
  overallReadiness: "blocked" | "needs-work" | "promising" | "ready-to-promote";
  score: number;
  productUnderstanding: {
    summary: string;
    audience: string[];
    primaryUseCases: string[];
    positioning: string[];
  };
  screenDiagnosis: {
    strongestScreens: string[];
    weakOrBrokenScreens: string[];
    missingScreens: string[];
    screenshotRecommendations: string[];
  };
  marketingDiagnosis: {
    strongestSellingPoints: string[];
    recommendedPromoAngle: string;
    supportedClaims: string[];
    riskyClaims: string[];
    missingTrustSignals: string[];
  };
  fixBeforePromotion: string[];
  recommendedAssets: Array<{
    asset: string;
    sourceScreens: string[];
    purpose: string;
    readiness: "ready" | "needs-fix" | "needs-evidence";
  }>;
  lovableFixPrompts: string[];
  nextWorkflow: string[];
};

type CaptureItem = {
  ref: string;
  url: string;
  viewport?: string;
  purpose?: string;
  quality?: "excellent" | "good" | "usable" | "weak" | "broken";
  visibleClaims?: string[];
  issues?: string[];
  notes?: string;
};

type CaptureReport = {
  productName: string;
  websiteUrl: string;
  totalCaptures: number;
  approvedCaptures: CaptureItem[];
  weakCaptures: CaptureItem[];
  coverage: string[];
  missingShots: string[];
  recommendedRecaptures: string[];
  nextAction: string;
};

type ShotSelection = {
  productName: string;
  selections: Array<{
    asset: string;
    primaryShot: string;
    backupShot: string | null;
    reason: string;
    copyAngle: string;
    requiredFixes: string[];
  }>;
  rejectedShots: Array<{ ref: string; reason: string }>;
};

type VisualIssueReport = {
  productName: string;
  severity: "low" | "medium" | "high";
  issues: Array<{
    screenRef: string;
    category: string;
    problem: string;
    impact: string;
    recommendedFix: string;
  }>;
  launchBlockers: string[];
  recaptureAfterFix: string[];
};

type ExportPlan = {
  productName: string;
  packageName: string;
  recommendedFiles: Array<{
    path: string;
    purpose: string;
    sourceTools: string[];
    format: "markdown" | "json" | "csv";
  }>;
  creationOrder: string[];
  approvalGates: string[];
};

type LovableProjectContext = {
  productName: string;
  lovableUrl: string;
  githubRepoUrl: string | null;
  productGoal: string;
  launchGoal: string;
  sourceOfTruth: string;
  stack: string[];
  readinessSummary: string | null;
  creativePriorities: string[];
  recommendedWorkflow: string[];
};

type QualityScorecard = {
  productName: string;
  overallScore: number;
  grade: "excellent" | "good" | "needs-work" | "not-ready";
  dimensions: Array<{
    name: string;
    score: number;
    status: "pass" | "watch" | "fail";
    notes: string[];
  }>;
  blockers: string[];
  nextActions: string[];
};

type CreativeStudioBrain = {
  productName: string;
  mode: "orient" | "scan" | "audit" | "fix-before-launch" | "create-assets" | "review-assets" | "handoff";
  confidence: "low" | "medium" | "high";
  userFacingSummary: string;
  nextAction: string;
  why: string;
  recommendedToolOrder: string[];
  askUserFor: string[];
  useCreativeStudioFor: string[];
  useClawKitForLovableFor: string[];
  evidenceNeeded: string[];
  stopConditions: string[];
  workflowState: CreativeWorkflowState;
};

type CreativeWorkflowState = {
  productName: string;
  mode: "orient" | "scan" | "audit" | "fix-before-launch" | "create-assets" | "review-assets" | "handoff";
  sourceOfTruth: "lovable-preview" | "deployed-app" | "github" | "screenshot-pack" | "unknown";
  productStatus: "no-url" | "unscanned" | "scanned" | "audited" | "weak-screens" | "asset-ready" | "review-needed" | "handoff-ready";
  captureStatus: "none" | "needs-approval" | "partial" | "approved" | "unknown";
  launchRisk: "low" | "medium" | "high";
  currentBlocker: string;
  nextBestAction: string;
  knownFacts: string[];
  missingInfo: string[];
};

type CreativeNextActionPlan = {
  productName: string;
  recommendedAction: "ask-user" | "scan-product" | "audit-readiness" | "fix-screens" | "create-assets" | "review-assets" | "prepare-handoff";
  reason: string;
  immediateSteps: string[];
  useCreativeStudioFor: string[];
  useClawKitForLovableFor: string[];
  requiredEvidence: string[];
  stopConditions: string[];
};

type ProductHuntLaunchButton = {
  productName: string;
  mode: "manual-submit" | "api-ready" | "blocked";
  buttonLabel: string;
  submitUrl: string;
  launchDraft: {
    name: string;
    tagline: string;
    productUrl: string;
    description: string;
    topics: string[];
    galleryAssets: string[];
    videoUrl: string | null;
    makerComment: string;
    launchDate: string | null;
  };
  preflightChecks: string[];
  blockers: string[];
  apiRequirements: string[];
  userInstructions: string[];
};

type LaunchCommandCenter = {
  productName: string;
  websiteUrl: string | null;
  launchGoal: string;
  launchReadinessScore: number;
  launchStatus: "blocked" | "needs-polish" | "asset-ready" | "ready-to-submit" | "handoff-ready";
  headline: string;
  workflowState: CreativeWorkflowState;
  nextActionPlan: CreativeNextActionPlan;
  productHunt: ProductHuntLaunchButton;
  commandButtons: Array<{
    label: string;
    action: string;
    enabled: boolean;
    reason: string;
  }>;
  readinessPanels: Array<{
    name: string;
    status: "ready" | "watch" | "blocked";
    score: number;
    notes: string[];
  }>;
  bestLaunchAssets: string[];
  blockers: string[];
  fixesBeforeLaunch: string[];
  launchRoomFiles: Array<{
    path: string;
    purpose: string;
    sourceTools: string[];
  }>;
  recommendedToolOrder: string[];
  userFacingSummary: string;
};

type LaunchRoomExport = {
  productName: string;
  packageName: string;
  launchStatus: LaunchCommandCenter["launchStatus"];
  launchReadinessScore: number;
  files: Array<{
    path: string;
    format: "markdown" | "json" | "csv";
    purpose: string;
    content: string;
  }>;
  nextActions: string[];
  approvalGates: string[];
};

const text = (value: string) => ({
  content: [{ type: "text" as const, text: value }],
  details: {},
});

const jsonText = (value: unknown) => text(JSON.stringify(value, null, 2));

const optionalStringArray = (description: string) =>
  Type.Optional(Type.Array(Type.String(), { description }));

function asList(items: string[] | undefined, fallback: string[]): string[] {
  return items && items.length > 0 ? items : fallback;
}

function clampScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}

function normalizeUrl(url: string): string {
  const trimmed = url.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

function starterGuide(params: { userGoal?: string; platform?: string }) {
  return {
    product: "ClawKit Creative Studio for Lovable",
    promise:
      "OpenClaw can walk a complete website or app like a user, capture the important screens, understand the product, and turn that evidence into launch-ready promotional assets.",
    bestFor: [
      "SaaS apps, Lovable apps, directories, marketplaces, dashboards, portals, AI tools, mobile-web products, and founder launches.",
      "Users who need Product Hunt galleries, social launch images, app screenshots, demo scripts, short video storyboards, and campaign copy.",
      "Apps where a single landing-page scan is not enough because the value is spread across multiple pages or logged-in flows.",
    ],
    normalWorkflow: [
      "Ask the user for the public website, preview URL, or app URL.",
      "Confirm whether OpenClaw may browse, capture screenshots, and record short clips.",
      "Run `creative_scan_plan` to decide pages, flows, evidence, and stop conditions.",
      "Use OpenClaw browser tools to inspect pages and collect screenshot/video evidence.",
      "Run `creative_site_intelligence` with the collected evidence.",
      "Run `creative_launch_pack`, `creative_image_prompt_pack`, or `creative_video_storyboard` depending on the requested outputs.",
      "Review all claims with `creative_asset_review` before publishing.",
    ],
    userCanAskFor: [
      "Scan this whole app and create a launch pack.",
      "Create Product Hunt gallery image prompts from this website.",
      "Turn this Lovable app into promo images and a 30-second demo storyboard.",
      "Tell me whether the app is marketable yet before we make assets.",
      "Create LinkedIn, X, and website hero creative based on the real screens.",
    ],
    guardrails: [
      "Do not claim features, integrations, prices, customers, compliance, or results unless they are visible in evidence or confirmed by the user.",
      "Do not capture private dashboards, customer data, secrets, admin panels, or logged-in screens without explicit approval.",
      "If the app is visually broken or incomplete, say so and recommend fixes before launch assets.",
    ],
    suggestedFirstMove:
      params.userGoal ?? "Ask for the app or website URL, then run `creative_scan_plan`.",
    platformHint: params.platform
      ? `Optimize the workflow for ${params.platform}.`
      : "If the app was built in Lovable, use the Lovable Launch Pack workflow.",
  };
}

function makeCreativeWorkflowState(params: {
  productName?: string;
  websiteUrl?: string;
  userGoal?: string;
  isLovableApp?: boolean;
  hasGithubRepo?: boolean;
  hasScanEvidence?: boolean;
  hasScreenshots?: boolean;
  hasApprovedCaptures?: boolean;
  hasProductAudit?: boolean;
  hasAssetMatrix?: boolean;
  hasLaunchPack?: boolean;
  hasUnsupportedClaims?: boolean;
  hasPrivateDataRisk?: boolean;
  hasWeakScreens?: boolean;
  needsLovableFixes?: boolean;
  targetChannel?: string;
  knownFacts?: string[];
}): CreativeWorkflowState {
  const productName = params.productName ?? "Lovable app";
  const goal = (params.userGoal ?? "").toLowerCase();
  const hasUrl = Boolean(params.websiteUrl);
  const hasApprovedCaptures = Boolean(params.hasApprovedCaptures || (params.hasScreenshots && !params.hasPrivateDataRisk));
  const mode: CreativeWorkflowState["mode"] =
    !hasUrl
      ? "orient"
      : params.hasPrivateDataRisk || params.hasUnsupportedClaims
        ? "review-assets"
        : params.needsLovableFixes || params.hasWeakScreens
          ? "fix-before-launch"
          : !params.hasScanEvidence || !params.hasScreenshots
            ? "scan"
            : !params.hasProductAudit
              ? "audit"
              : params.hasLaunchPack
                ? "handoff"
                : params.hasAssetMatrix || goal.includes("asset") || goal.includes("launch") || goal.includes("image") || goal.includes("video")
                  ? "create-assets"
                  : "audit";
  const sourceOfTruth: CreativeWorkflowState["sourceOfTruth"] =
    params.hasGithubRepo
      ? "github"
      : params.isLovableApp
        ? "lovable-preview"
        : hasUrl
          ? "deployed-app"
          : params.hasScreenshots
            ? "screenshot-pack"
            : "unknown";
  const productStatus: CreativeWorkflowState["productStatus"] =
    !hasUrl
      ? "no-url"
      : params.hasPrivateDataRisk || params.hasUnsupportedClaims
        ? "review-needed"
        : params.hasWeakScreens || params.needsLovableFixes
          ? "weak-screens"
          : params.hasLaunchPack
            ? "handoff-ready"
            : params.hasAssetMatrix
              ? "asset-ready"
              : params.hasProductAudit
                ? "audited"
                : params.hasScanEvidence
                  ? "scanned"
                  : "unscanned";
  const captureStatus: CreativeWorkflowState["captureStatus"] =
    !hasUrl && !params.hasScreenshots
      ? "none"
      : params.hasPrivateDataRisk
        ? "needs-approval"
        : hasApprovedCaptures
          ? "approved"
          : params.hasScreenshots
            ? "partial"
            : "unknown";
  const launchRisk: CreativeWorkflowState["launchRisk"] =
    params.hasPrivateDataRisk || params.hasUnsupportedClaims || params.hasWeakScreens || params.needsLovableFixes
      ? "high"
      : !params.hasProductAudit || !hasApprovedCaptures || !params.targetChannel
        ? "medium"
        : "low";
  const missingInfo = [
    ...(!hasUrl ? ["Website, deployed app, preview, or Lovable.dev URL."] : []),
    ...(!params.targetChannel ? ["Target launch channel or deliverable."] : []),
    ...(!params.hasScanEvidence && hasUrl ? ["Scan evidence from visited routes and product flows."] : []),
    ...(!params.hasScreenshots && hasUrl ? ["Approved screenshot or video capture evidence."] : []),
    ...(!params.hasProductAudit && params.hasScanEvidence ? ["Marketability/product audit result."] : []),
  ];

  return {
    productName,
    mode,
    sourceOfTruth,
    productStatus,
    captureStatus,
    launchRisk,
    currentBlocker:
      !hasUrl
        ? "The app or website URL is missing."
        : params.hasPrivateDataRisk
          ? "Private data risk must be cleared before assets can be used."
          : params.hasUnsupportedClaims
            ? "Unsupported marketing claims need evidence or safer rewrites."
            : params.hasWeakScreens || params.needsLovableFixes
              ? "Screens are not launch-ready yet."
              : !params.hasScreenshots
                ? "Approved captures are missing."
                : "No hard blocker recorded yet.",
    nextBestAction:
      mode === "orient"
        ? "Ask for the product URL and target launch deliverable."
        : mode === "scan"
          ? "Run scan planning, browser recipe, route discovery, and capture approved evidence."
          : mode === "audit"
            ? "Run marketability and product audits before generating public assets."
            : mode === "fix-before-launch"
              ? "Turn weak screens into focused Lovable fix prompts, then rescan."
              : mode === "review-assets"
                ? "Review claims, private-data risk, and visual readiness before publishing."
                : mode === "handoff"
                  ? "Prepare launch brief, prompt export, social copy, and client handoff."
                  : "Create the asset matrix and requested launch assets from approved evidence.",
    knownFacts: asList(params.knownFacts, [
      `Mode: ${mode}.`,
      `Source of truth: ${sourceOfTruth}.`,
      `Product status: ${productStatus}.`,
      `Capture status: ${captureStatus}.`,
      `Launch risk: ${launchRisk}.`,
    ]),
    missingInfo,
  };
}

function makeCreativeNextActionPlan(params: {
  productName?: string;
  requestedOutcome: string;
  workflowState?: CreativeWorkflowState;
  websiteUrl?: string;
  isLovableApp?: boolean;
  hasScanEvidence?: boolean;
  hasScreenshots?: boolean;
  hasApprovedCaptures?: boolean;
  hasProductAudit?: boolean;
  hasAssetMatrix?: boolean;
  hasLaunchPack?: boolean;
  hasUnsupportedClaims?: boolean;
  hasPrivateDataRisk?: boolean;
  hasWeakScreens?: boolean;
  needsLovableFixes?: boolean;
  targetChannel?: string;
}): CreativeNextActionPlan {
  const state = params.workflowState ?? makeCreativeWorkflowState(params);
  const productName = params.productName ?? state.productName;
  const requestedOutcome = params.requestedOutcome.toLowerCase();
  const recommendedAction: CreativeNextActionPlan["recommendedAction"] =
    state.mode === "orient"
      ? "ask-user"
      : state.mode === "scan"
        ? "scan-product"
        : state.mode === "audit"
          ? "audit-readiness"
          : state.mode === "fix-before-launch"
            ? "fix-screens"
            : state.mode === "review-assets"
              ? "review-assets"
              : state.mode === "handoff"
                ? "prepare-handoff"
                : requestedOutcome.includes("handoff") || params.hasLaunchPack
                  ? "prepare-handoff"
                  : "create-assets";

  return {
    productName,
    recommendedAction,
    reason:
      recommendedAction === "ask-user"
        ? "Creative Studio needs the product URL and desired launch output before it can choose the right workflow."
        : recommendedAction === "scan-product"
          ? "The product needs evidence from real screens before marketing claims, images, or storyboards are created."
          : recommendedAction === "audit-readiness"
            ? "The scan exists, but launch readiness and supported claims have not been judged yet."
            : recommendedAction === "fix-screens"
              ? "The app has weak or unfinished launch screens, so fixes should happen before final promotional assets."
              : recommendedAction === "review-assets"
                ? "Claims, privacy, or visual risks must be cleared before anything is published or sent to a client."
                : recommendedAction === "prepare-handoff"
                  ? "The launch materials are ready to package into reusable files and client-facing notes."
                  : "The product has enough evidence to build an asset matrix and create the requested launch assets.",
    immediateSteps: [
      "Restate the current Creative Studio workflow state.",
      ...(recommendedAction === "ask-user"
        ? ["Ask for the URL and target deliverable: Product Hunt, LinkedIn, X, website hero, video storyboard, client report, or all."]
        : recommendedAction === "scan-product"
          ? ["Run `creative_scan_plan`.", "Run `creative_browser_scan_recipe` and `creative_route_discovery_plan`.", "Capture approved desktop/mobile screenshots, then summarize the scan."]
          : recommendedAction === "audit-readiness"
            ? ["Run `creative_site_intelligence` if needed.", "Run `creative_marketability_audit` and `creative_product_audit`.", "Map claims with `creative_evidence_map`."]
            : recommendedAction === "fix-screens"
              ? ["Run `creative_visual_issue_report`.", "Create `creative_lovable_fix_prompt_pack`.", "Hand repair work to ClawKit for Lovable, then rescan."]
              : recommendedAction === "review-assets"
                ? ["Run `creative_evidence_map`.", "Run `creative_asset_review`.", "Remove or rewrite unsupported claims."]
                : recommendedAction === "prepare-handoff"
                  ? ["Run `creative_export_plan`.", "Create `creative_launch_brief`, `creative_prompt_export`, and `creative_client_handoff`.", "Use `creative_agency_report` when the user needs a client-ready deliverable."]
                  : ["Run `creative_capture_report` and `creative_shot_selection`.", "Create `creative_launch_asset_matrix`.", "Generate the requested launch pack, image prompts, storyboard, or social copy."]),
      "Record any remaining risks and approval gates before publishing.",
    ],
    useCreativeStudioFor: [
      "Workflow state, scan planning, product intelligence, marketability audit, evidence mapping, asset matrix, launch assets, and handoff.",
      "Turning real product screens into honest copy, image prompts, storyboards, and client-ready launch notes.",
    ],
    useClawKitForLovableFor: [
      "Fixing weak Lovable screens, broken routes, missing UI states, mobile layout problems, and screenshot-readiness issues.",
      "Build rescue, GitHub/source-of-truth handoff, code repair, verification, refactoring, and PR work.",
    ],
    requiredEvidence: [
      "Product URL or Lovable preview/deployed URL.",
      "Approved capture evidence for each screen used in public assets.",
      "Product audit or marketability audit before final launch assets.",
      "Evidence map for every strong claim.",
      "Human approval before publishing, client delivery, or paid campaign use.",
    ],
    stopConditions: [
      "Stop if private data or admin/customer screens appear without approval.",
      "Stop if claims are unsupported by product evidence or user confirmation.",
      "Stop if the featured screens are broken, placeholder-heavy, or visually weak.",
      "Stop before publishing or sending client assets without final review.",
    ],
  };
}

function makeProductHuntLaunchButton(params: {
  productName: string;
  productUrl: string;
  tagline?: string;
  description?: string;
  makerComment?: string;
  topics?: string[];
  galleryAssets?: string[];
  videoUrl?: string;
  launchDate?: string;
  hasApprovedCaptures?: boolean;
  hasEvidenceMap?: boolean;
  hasAssetReview?: boolean;
  hasPrivateDataRisk?: boolean;
  hasUnsupportedClaims?: boolean;
  hasWeakScreens?: boolean;
  hasProductHuntWriteAccess?: boolean;
}): ProductHuntLaunchButton {
  const productUrl = normalizeUrl(params.productUrl);
  const topics = asList(params.topics, ["Productivity", "SaaS", "Artificial Intelligence"]);
  const galleryAssets = asList(params.galleryAssets, []);
  const blockers = [
    ...(params.hasPrivateDataRisk ? ["Private data risk is still unresolved."] : []),
    ...(params.hasUnsupportedClaims ? ["Launch copy includes unsupported claims."] : []),
    ...(params.hasWeakScreens ? ["Featured screens are weak, broken, or placeholder-heavy."] : []),
    ...(!params.hasApprovedCaptures ? ["Approved Product Hunt gallery captures are missing."] : []),
    ...(!params.hasEvidenceMap ? ["Evidence map is missing for Product Hunt claims."] : []),
    ...(!params.hasAssetReview ? ["Final asset review has not been completed."] : []),
  ];
  const mode: ProductHuntLaunchButton["mode"] =
    blockers.length > 0 ? "blocked" : params.hasProductHuntWriteAccess ? "api-ready" : "manual-submit";

  return {
    productName: params.productName,
    mode,
    buttonLabel:
      mode === "blocked"
        ? "Fix Product Hunt Launch Blockers"
        : mode === "api-ready"
          ? "Review and Submit to Product Hunt"
          : "Open Product Hunt Submit Flow",
    submitUrl: "https://www.producthunt.com/posts/new",
    launchDraft: {
      name: params.productName,
      tagline: params.tagline ?? `${params.productName} turns a real product workflow into a launch-ready experience.`,
      productUrl,
      description:
        params.description ??
        `${params.productName} helps users move from product idea to a polished, evidence-backed launch with real screens, clear workflows, and ready-to-use promotional assets.`,
      topics,
      galleryAssets,
      videoUrl: params.videoUrl ?? null,
      makerComment:
        params.makerComment ??
        `Hey Product Hunt! We built ${params.productName} to make product launches feel less manual and more evidence-based. We would love your feedback on the workflow, launch assets, and what you would want automated next.`,
      launchDate: params.launchDate ?? null,
    },
    preflightChecks: [
      "Product Hunt posting must use an eligible personal account, not a company account.",
      "Product URL should point directly to the product, not a press page or blog post.",
      "Gallery images and video should contain no private data, secrets, customer data, or broken UI.",
      "Claims in the tagline, description, and maker comment must be visible in the product or confirmed by the maker.",
      "A human should review the final Product Hunt preview before scheduling or publishing.",
    ],
    blockers,
    apiRequirements: [
      "Product Hunt OAuth access token for the posting user.",
      "Approved Product Hunt write scope for the app/use case.",
      "Server-side secret handling; never expose OAuth tokens in browser assets or generated launch files.",
      "A final human approval gate before any write mutation or browser submit action.",
    ],
    userInstructions:
      mode === "blocked"
        ? ["Resolve blockers, rerun `creative_asset_review`, then regenerate the Product Hunt launch button payload."]
        : mode === "api-ready"
          ? ["Use the launch draft as the Product Hunt mutation/browser-submit payload after final human approval.", "Log the submitted Product Hunt URL back into the launch handoff."]
          : ["Press the button to open Product Hunt's submit flow, then paste the launch draft fields into the Product Hunt form.", "After creating a draft or scheduled launch, save the Product Hunt URL in the client handoff."],
  };
}

function makeLaunchCommandCenter(params: {
  productName: string;
  websiteUrl?: string;
  launchGoal?: string;
  targetChannel?: string;
  isLovableApp?: boolean;
  hasGithubRepo?: boolean;
  hasScanEvidence?: boolean;
  hasScreenshots?: boolean;
  hasApprovedCaptures?: boolean;
  hasProductAudit?: boolean;
  hasAssetMatrix?: boolean;
  hasLaunchPack?: boolean;
  hasEvidenceMap?: boolean;
  hasAssetReview?: boolean;
  hasPrivateDataRisk?: boolean;
  hasUnsupportedClaims?: boolean;
  hasWeakScreens?: boolean;
  needsLovableFixes?: boolean;
  wantsProductHunt?: boolean;
  hasProductHuntWriteAccess?: boolean;
  productHuntTagline?: string;
  productHuntDescription?: string;
  productHuntMakerComment?: string;
  productHuntTopics?: string[];
  galleryAssets?: string[];
  videoUrl?: string;
  launchDate?: string;
  strongestScreens?: string[];
  weakScreens?: string[];
  missingScreens?: string[];
  supportedClaims?: string[];
  riskyClaims?: string[];
  knownFacts?: string[];
}): LaunchCommandCenter {
  const websiteUrl = params.websiteUrl ? normalizeUrl(params.websiteUrl) : null;
  const launchGoal = params.launchGoal ?? params.targetChannel ?? "Create an evidence-backed launch pack.";
  const workflowState = makeCreativeWorkflowState({
    productName: params.productName,
    websiteUrl: params.websiteUrl,
    userGoal: launchGoal,
    isLovableApp: params.isLovableApp,
    hasGithubRepo: params.hasGithubRepo,
    hasScanEvidence: params.hasScanEvidence,
    hasScreenshots: params.hasScreenshots,
    hasApprovedCaptures: params.hasApprovedCaptures,
    hasProductAudit: params.hasProductAudit,
    hasAssetMatrix: params.hasAssetMatrix,
    hasLaunchPack: params.hasLaunchPack,
    hasUnsupportedClaims: params.hasUnsupportedClaims,
    hasPrivateDataRisk: params.hasPrivateDataRisk,
    hasWeakScreens: params.hasWeakScreens,
    needsLovableFixes: params.needsLovableFixes,
    targetChannel: params.targetChannel,
    knownFacts: params.knownFacts,
  });
  const nextActionPlan = makeCreativeNextActionPlan({
    productName: params.productName,
    requestedOutcome: launchGoal,
    workflowState,
    websiteUrl: params.websiteUrl,
    isLovableApp: params.isLovableApp,
    hasScanEvidence: params.hasScanEvidence,
    hasScreenshots: params.hasScreenshots,
    hasApprovedCaptures: params.hasApprovedCaptures,
    hasProductAudit: params.hasProductAudit,
    hasAssetMatrix: params.hasAssetMatrix,
    hasLaunchPack: params.hasLaunchPack,
    hasUnsupportedClaims: params.hasUnsupportedClaims,
    hasPrivateDataRisk: params.hasPrivateDataRisk,
    hasWeakScreens: params.hasWeakScreens,
    needsLovableFixes: params.needsLovableFixes,
    targetChannel: params.targetChannel,
  });
  const productHunt = makeProductHuntLaunchButton({
    productName: params.productName,
    productUrl: websiteUrl ?? "https://example.com",
    tagline: params.productHuntTagline,
    description: params.productHuntDescription,
    makerComment: params.productHuntMakerComment,
    topics: params.productHuntTopics,
    galleryAssets: params.galleryAssets,
    videoUrl: params.videoUrl,
    launchDate: params.launchDate,
    hasApprovedCaptures: params.hasApprovedCaptures,
    hasEvidenceMap: params.hasEvidenceMap,
    hasAssetReview: params.hasAssetReview,
    hasPrivateDataRisk: params.hasPrivateDataRisk,
    hasUnsupportedClaims: params.hasUnsupportedClaims,
    hasWeakScreens: params.hasWeakScreens,
    hasProductHuntWriteAccess: params.hasProductHuntWriteAccess,
  });
  const blockers = [
    ...workflowState.missingInfo,
    ...productHunt.blockers,
    ...(params.riskyClaims && params.riskyClaims.length > 0 ? [`Risky claims need review: ${params.riskyClaims.join(", ")}.`] : []),
    ...(params.missingScreens && params.missingScreens.length > 0 ? [`Missing launch screens: ${params.missingScreens.join(", ")}.`] : []),
  ];
  const scanScore = params.hasScanEvidence ? 100 : websiteUrl ? 45 : 0;
  const captureScore = params.hasApprovedCaptures ? 100 : params.hasScreenshots ? 65 : 0;
  const auditScore = params.hasProductAudit ? 100 : params.hasScanEvidence ? 50 : 0;
  const assetScore = params.hasAssetMatrix ? 90 : params.hasLaunchPack ? 100 : params.hasApprovedCaptures ? 50 : 0;
  const safetyScore = params.hasPrivateDataRisk || params.hasUnsupportedClaims || (params.riskyClaims?.length ?? 0) > 0 ? 35 : params.hasEvidenceMap && params.hasAssetReview ? 100 : 65;
  const productHuntScore = productHunt.mode === "api-ready" || productHunt.mode === "manual-submit" ? 90 : 30;
  const launchReadinessScore = clampScore((scanScore + captureScore + auditScore + assetScore + safetyScore + productHuntScore) / 6);
  const launchStatus: LaunchCommandCenter["launchStatus"] =
    blockers.length > 0 || workflowState.launchRisk === "high"
      ? "blocked"
      : params.hasLaunchPack
        ? "handoff-ready"
        : params.hasAssetMatrix && productHunt.mode !== "blocked"
          ? "ready-to-submit"
          : params.hasApprovedCaptures && params.hasProductAudit
            ? "asset-ready"
            : "needs-polish";
  const fixesBeforeLaunch = [
    ...(params.weakScreens ?? []).map((screen) => `Polish weak screen: ${screen}.`),
    ...(params.missingScreens ?? []).map((screen) => `Capture or build missing launch screen: ${screen}.`),
    ...(params.riskyClaims ?? []).map((claim) => `Rewrite or prove risky claim: ${claim}.`),
    ...(params.hasPrivateDataRisk ? ["Remove or mask private data before using screenshots."] : []),
    ...(params.hasUnsupportedClaims ? ["Remove unsupported claims from Product Hunt and social copy."] : []),
  ];
  const bestLaunchAssets = asList(params.galleryAssets, [
    ...(params.strongestScreens ?? []).map((screen) => `Use ${screen} as a primary launch gallery candidate.`),
    "Hero/product value slide.",
    "Main workflow screenshot.",
    "Proof or outcome slide.",
    "Mobile/responsive screenshot.",
  ]);

  return {
    productName: params.productName,
    websiteUrl,
    launchGoal,
    launchReadinessScore,
    launchStatus,
    headline:
      launchStatus === "blocked"
        ? `${params.productName} is not launch-ready yet. Fix the blockers, then rescan.`
        : launchStatus === "ready-to-submit"
          ? `${params.productName} is ready for a Product Hunt handoff after final human review.`
          : launchStatus === "handoff-ready"
            ? `${params.productName} has a complete launch handoff package.`
            : `${params.productName} is close. Finish the evidence and asset pass before launch.`,
    workflowState,
    nextActionPlan,
    productHunt,
    commandButtons: [
      {
        label: "Scan Product",
        action: "creative_scan_plan -> creative_browser_scan_recipe -> creative_route_discovery_plan",
        enabled: Boolean(websiteUrl),
        reason: websiteUrl ? "A product URL is available." : "Add a website, preview, or Lovable.dev URL first.",
      },
      {
        label: "Fix In Lovable",
        action: "creative_lovable_fix_prompt_pack -> ClawKit for Lovable",
        enabled: Boolean(params.hasWeakScreens || params.needsLovableFixes || (params.missingScreens?.length ?? 0) > 0),
        reason: "Use when launch screens are weak, missing, or not screenshot-ready.",
      },
      {
        label: "Create Launch Pack",
        action: "creative_launch_asset_matrix -> creative_launch_pack -> creative_social_copy_pack",
        enabled: Boolean(params.hasApprovedCaptures && params.hasProductAudit && !params.hasPrivateDataRisk),
        reason: "Requires approved captures, product audit, and cleared privacy risk.",
      },
      {
        label: productHunt.buttonLabel,
        action: "creative_product_hunt_launch_button",
        enabled: productHunt.mode !== "blocked",
        reason: productHunt.mode === "blocked" ? productHunt.blockers.join(" ") : "Product Hunt draft is ready for review.",
      },
      {
        label: "Export Launch Room",
        action: "creative_export_plan -> creative_launch_brief -> creative_prompt_export -> creative_client_handoff",
        enabled: Boolean(params.hasAssetMatrix || params.hasLaunchPack),
        reason: "Requires at least an asset matrix or launch pack.",
      },
    ],
    readinessPanels: [
      { name: "Product Scan", status: scanScore >= 90 ? "ready" : scanScore > 0 ? "watch" : "blocked", score: scanScore, notes: params.hasScanEvidence ? ["Scan evidence exists."] : ["Run a full product scan."] },
      { name: "Captures", status: captureScore >= 90 ? "ready" : captureScore > 0 ? "watch" : "blocked", score: captureScore, notes: params.hasApprovedCaptures ? ["Approved captures are ready."] : ["Capture and approve launch screenshots."] },
      { name: "Launch Audit", status: auditScore >= 90 ? "ready" : auditScore > 0 ? "watch" : "blocked", score: auditScore, notes: params.hasProductAudit ? ["Product audit complete."] : ["Run marketability and product audits."] },
      { name: "Assets", status: assetScore >= 90 ? "ready" : assetScore > 0 ? "watch" : "blocked", score: assetScore, notes: params.hasAssetMatrix || params.hasLaunchPack ? ["Asset planning is ready."] : ["Create asset matrix and launch pack."] },
      { name: "Claim Safety", status: safetyScore >= 90 ? "ready" : safetyScore > 50 ? "watch" : "blocked", score: safetyScore, notes: safetyScore >= 90 ? ["Claims and privacy have been reviewed."] : ["Finish evidence map and asset review."] },
      { name: "Product Hunt", status: productHunt.mode === "blocked" ? "blocked" : "ready", score: productHuntScore, notes: productHunt.mode === "blocked" ? productHunt.blockers : [productHunt.buttonLabel] },
    ],
    bestLaunchAssets,
    blockers,
    fixesBeforeLaunch,
    launchRoomFiles: [
      { path: "launch-room/command-center.json", purpose: "Single source of truth for launch state and buttons.", sourceTools: ["creative_launch_command_center"] },
      { path: "launch-room/product-hunt.md", purpose: "Product Hunt launch draft, maker comment, topics, gallery plan, and submit notes.", sourceTools: ["creative_product_hunt_launch_button", "creative_social_copy_pack"] },
      { path: "launch-room/asset-matrix.json", purpose: "Asset-to-screenshot and claim mapping.", sourceTools: ["creative_launch_asset_matrix"] },
      { path: "launch-room/gallery-prompts.md", purpose: "Product Hunt and social image prompts.", sourceTools: ["creative_image_prompt_pack", "creative_prompt_export"] },
      { path: "launch-room/demo-storyboard.md", purpose: "15- and 30-second launch video storyboards.", sourceTools: ["creative_video_storyboard"] },
      { path: "launch-room/client-handoff.md", purpose: "Approvals, blockers, fixes, assets, and launch sequence.", sourceTools: ["creative_client_handoff", "creative_agency_report"] },
    ],
    recommendedToolOrder: [
      "creative_launch_command_center",
      ...nextActionPlan.immediateSteps,
      ...(productHunt.mode === "blocked" ? ["creative_asset_review", "creative_product_hunt_launch_button"] : ["creative_product_hunt_launch_button"]),
    ],
    userFacingSummary:
      launchStatus === "blocked"
        ? `Launch readiness is ${launchReadinessScore}/100. Fix blockers before creating or submitting public launch assets.`
        : `Launch readiness is ${launchReadinessScore}/100. The next best move is: ${workflowState.nextBestAction}`,
  };
}

function makeLaunchRoomExport(params: {
  productName: string;
  websiteUrl?: string;
  packageName?: string;
  launchGoal?: string;
  targetChannel?: string;
  commandCenter?: LaunchCommandCenter;
  includeProductHunt?: boolean;
  includeSocialCopy?: boolean;
  includeGalleryPrompts?: boolean;
  includeVideoStoryboard?: boolean;
  includeClientHandoff?: boolean;
  includeLovableFixPrompts?: boolean;
  productHuntTagline?: string;
  productHuntDescription?: string;
  productHuntMakerComment?: string;
  productHuntTopics?: string[];
  galleryAssets?: string[];
  videoUrl?: string;
  launchDate?: string;
  supportedClaims?: string[];
  riskyClaims?: string[];
  strongestScreens?: string[];
  weakScreens?: string[];
  missingScreens?: string[];
  fixesBeforeLaunch?: string[];
  socialCopy?: {
    linkedin?: string;
    x?: string;
    productHunt?: string;
    indieHackers?: string;
    email?: string;
    websiteBanner?: string;
  };
  galleryPrompts?: string[];
  videoStoryboardScenes?: string[];
  clientNotes?: string[];
  knownFacts?: string[];
  hasScanEvidence?: boolean;
  hasScreenshots?: boolean;
  hasApprovedCaptures?: boolean;
  hasProductAudit?: boolean;
  hasAssetMatrix?: boolean;
  hasLaunchPack?: boolean;
  hasEvidenceMap?: boolean;
  hasAssetReview?: boolean;
  hasPrivateDataRisk?: boolean;
  hasUnsupportedClaims?: boolean;
  hasWeakScreens?: boolean;
  needsLovableFixes?: boolean;
  hasProductHuntWriteAccess?: boolean;
}): LaunchRoomExport {
  const packageName = params.packageName ?? "launch-room";
  const commandCenter = params.commandCenter ?? makeLaunchCommandCenter({
    productName: params.productName,
    websiteUrl: params.websiteUrl,
    launchGoal: params.launchGoal,
    targetChannel: params.targetChannel,
    hasScanEvidence: params.hasScanEvidence,
    hasScreenshots: params.hasScreenshots,
    hasApprovedCaptures: params.hasApprovedCaptures,
    hasProductAudit: params.hasProductAudit,
    hasAssetMatrix: params.hasAssetMatrix,
    hasLaunchPack: params.hasLaunchPack,
    hasEvidenceMap: params.hasEvidenceMap,
    hasAssetReview: params.hasAssetReview,
    hasPrivateDataRisk: params.hasPrivateDataRisk,
    hasUnsupportedClaims: params.hasUnsupportedClaims,
    hasWeakScreens: params.hasWeakScreens,
    needsLovableFixes: params.needsLovableFixes,
    hasProductHuntWriteAccess: params.hasProductHuntWriteAccess,
    productHuntTagline: params.productHuntTagline,
    productHuntDescription: params.productHuntDescription,
    productHuntMakerComment: params.productHuntMakerComment,
    productHuntTopics: params.productHuntTopics,
    galleryAssets: params.galleryAssets,
    videoUrl: params.videoUrl,
    launchDate: params.launchDate,
    strongestScreens: params.strongestScreens,
    weakScreens: params.weakScreens,
    missingScreens: params.missingScreens,
    supportedClaims: params.supportedClaims,
    riskyClaims: params.riskyClaims,
    knownFacts: params.knownFacts,
  });
  const supportedClaims = asList(params.supportedClaims, ["Add supported claims from `creative_evidence_map` before public launch."]);
  const riskyClaims = asList(params.riskyClaims, []);
  const strongestScreens = asList(params.strongestScreens, commandCenter.bestLaunchAssets);
  const weakScreens = asList(params.weakScreens, []);
  const missingScreens = asList(params.missingScreens, []);
  const fixesBeforeLaunch = asList(params.fixesBeforeLaunch, commandCenter.fixesBeforeLaunch.length > 0 ? commandCenter.fixesBeforeLaunch : ["Complete final human review before publishing."]);
  const productHunt = commandCenter.productHunt;
  const files: LaunchRoomExport["files"] = [];

  files.push({
    path: `${packageName}/command-center.json`,
    format: "json",
    purpose: "Single source of truth for launch readiness, blockers, command buttons, and next action.",
    content: JSON.stringify(commandCenter, null, 2),
  });

  files.push({
    path: `${packageName}/launch-checklist.md`,
    format: "markdown",
    purpose: "Operational launch checklist and approval gates.",
    content: [
      `# ${params.productName} Launch Checklist`,
      "",
      `Launch status: ${commandCenter.launchStatus}`,
      `Launch readiness: ${commandCenter.launchReadinessScore}/100`,
      `Launch goal: ${commandCenter.launchGoal}`,
      "",
      "## Next Button",
      commandCenter.nextActionPlan.immediateSteps[0] ?? commandCenter.workflowState.nextBestAction,
      "",
      "## Blockers",
      ...(commandCenter.blockers.length > 0 ? commandCenter.blockers.map((item) => `- ${item}`) : ["- No blockers recorded."]),
      "",
      "## Approval Gates",
      "- Screenshots and video clips approved for public use.",
      "- No private data, secrets, customer data, or admin content visible.",
      "- Every strong claim is evidence-backed or user-confirmed.",
      "- Product Hunt preview reviewed by a human before submit/schedule.",
      "- Client or maker approval recorded before public publishing.",
    ].join("\n"),
  });

  files.push({
    path: `${packageName}/evidence-map.md`,
    format: "markdown",
    purpose: "Claim safety and proof map for launch copy.",
    content: [
      `# ${params.productName} Evidence Map`,
      "",
      "## Supported Claims",
      ...supportedClaims.map((claim) => `- ${claim}`),
      "",
      "## Risky Or Unsupported Claims",
      ...(riskyClaims.length > 0 ? riskyClaims.map((claim) => `- ${claim}`) : ["- None supplied."]),
      "",
      "## Source Screens",
      ...strongestScreens.map((screen) => `- ${screen}`),
      "",
      "## Rule",
      "Do not publish claims that are not visible in product evidence or explicitly confirmed by the maker.",
    ].join("\n"),
  });

  files.push({
    path: `${packageName}/asset-matrix.json`,
    format: "json",
    purpose: "Structured map of launch assets to screens and claims.",
    content: JSON.stringify({
      productName: params.productName,
      assets: commandCenter.bestLaunchAssets.map((asset, index) => ({
        asset,
        sourceScreen: strongestScreens[index] ?? strongestScreens[0] ?? "missing-shot",
        claim: supportedClaims[index] ?? supportedClaims[0],
        status: commandCenter.launchStatus === "blocked" ? "needs-review" : "ready-for-production",
      })),
      weakScreens,
      missingScreens,
    }, null, 2),
  });

  if (params.includeProductHunt ?? true) {
    files.push({
      path: `${packageName}/product-hunt.md`,
      format: "markdown",
      purpose: "Product Hunt submission draft and launch-button handoff.",
      content: [
        `# ${params.productName} Product Hunt Draft`,
        "",
        `Mode: ${productHunt.mode}`,
        `Button: ${productHunt.buttonLabel}`,
        `Submit URL: ${productHunt.submitUrl}`,
        "",
        "## Fields",
        `Name: ${productHunt.launchDraft.name}`,
        `Tagline: ${productHunt.launchDraft.tagline}`,
        `Product URL: ${productHunt.launchDraft.productUrl}`,
        `Launch date: ${productHunt.launchDraft.launchDate ?? "not scheduled"}`,
        "",
        "## Description",
        productHunt.launchDraft.description,
        "",
        "## Topics",
        ...productHunt.launchDraft.topics.map((topic) => `- ${topic}`),
        "",
        "## Gallery Assets",
        ...(productHunt.launchDraft.galleryAssets.length > 0 ? productHunt.launchDraft.galleryAssets.map((asset) => `- ${asset}`) : ["- Add 4-6 approved gallery assets."]),
        "",
        "## Maker Comment",
        productHunt.launchDraft.makerComment,
        "",
        "## Blockers",
        ...(productHunt.blockers.length > 0 ? productHunt.blockers.map((item) => `- ${item}`) : ["- None."]),
      ].join("\n"),
    });
  }

  if (params.includeSocialCopy ?? true) {
    const social = params.socialCopy ?? {};
    files.push({
      path: `${packageName}/social-copy.md`,
      format: "markdown",
      purpose: "Platform-specific launch copy.",
      content: [
        `# ${params.productName} Social Copy`,
        "",
        "## LinkedIn",
        social.linkedin ?? `We are launching ${params.productName}: ${productHunt.launchDraft.tagline}\n\n${supportedClaims.slice(0, 3).map((claim) => `- ${claim}`).join("\n")}\n\n${productHunt.launchDraft.productUrl}`,
        "",
        "## X",
        social.x ?? `${params.productName} is launching: ${productHunt.launchDraft.tagline} ${productHunt.launchDraft.productUrl}`,
        "",
        "## Product Hunt Teaser",
        social.productHunt ?? productHunt.launchDraft.makerComment,
        "",
        "## Indie Hackers",
        social.indieHackers ?? `We are preparing ${params.productName} for launch and would love feedback on the workflow, screenshots, and positioning.`,
        "",
        "## Email",
        social.email ?? `Subject: ${params.productName} is launching\n\n${productHunt.launchDraft.description}\n\n${productHunt.launchDraft.productUrl}`,
        "",
        "## Website Banner",
        social.websiteBanner ?? `${params.productName} is live. ${productHunt.launchDraft.tagline}`,
      ].join("\n"),
    });
  }

  if (params.includeGalleryPrompts ?? true) {
    const prompts = asList(params.galleryPrompts, [
      `Create a Product Hunt gallery slide for ${params.productName} using the strongest product screenshot. Headline: ${productHunt.launchDraft.tagline}. Keep the product UI recognizable and the copy short.`,
      `Create a workflow slide showing how a user moves from problem to successful outcome in ${params.productName}. Use real captured screens and avoid unsupported claims.`,
      `Create a proof/value slide using supported claims only: ${supportedClaims.join("; ")}.`,
    ]);
    files.push({
      path: `${packageName}/gallery-prompts.md`,
      format: "markdown",
      purpose: "Design and image-generation prompts for Product Hunt/social gallery assets.",
      content: [`# ${params.productName} Gallery Prompts`, "", ...prompts.map((prompt, index) => `## Slide ${index + 1}\n${prompt}`)].join("\n\n"),
    });
  }

  if (params.includeVideoStoryboard ?? true) {
    const scenes = asList(params.videoStoryboardScenes, [
      "0-3s: Show the product name and core launch promise.",
      "3-9s: Show the main workflow using approved product captures.",
      "9-15s: Show the strongest feature or proof screen.",
      "15-25s: Show outcome, supported claims, and mobile/desktop polish.",
      "25-30s: End with Product Hunt/community call to action.",
    ]);
    files.push({
      path: `${packageName}/demo-storyboard.md`,
      format: "markdown",
      purpose: "Short demo video storyboard for launch assets.",
      content: [`# ${params.productName} Demo Storyboard`, "", ...scenes.map((scene) => `- ${scene}`)].join("\n"),
    });
  }

  if ((params.includeLovableFixPrompts ?? true) && (weakScreens.length > 0 || missingScreens.length > 0 || commandCenter.launchStatus === "blocked")) {
    files.push({
      path: `${packageName}/lovable-fix-prompts.md`,
      format: "markdown",
      purpose: "Focused Lovable prompts for fixing launch blockers before recapture.",
      content: [
        `# ${params.productName} Lovable Fix Prompts`,
        "",
        "## Fix Prompt",
        `Improve ${params.productName} for launch readiness. Preserve approved behavior and visual direction. Fix weak or missing screens, remove placeholder content, clarify CTAs, and make desktop/mobile screenshots Product Hunt-ready.`,
        "",
        "## Weak Screens",
        ...(weakScreens.length > 0 ? weakScreens.map((screen) => `- ${screen}`) : ["- No weak screens supplied."]),
        "",
        "## Missing Screens",
        ...(missingScreens.length > 0 ? missingScreens.map((screen) => `- ${screen}`) : ["- No missing screens supplied."]),
        "",
        "## Acceptance Criteria",
        "- Main workflow is visible and screenshot-ready.",
        "- Mobile layout is clean.",
        "- No private data or placeholder content appears.",
        "- Product Hunt gallery captures can be retaken after fixes.",
      ].join("\n"),
    });
  }

  if (params.includeClientHandoff ?? true) {
    const clientNotes = asList(params.clientNotes, ["Review blockers, approve public assets, then submit or schedule the Product Hunt launch."]);
    files.push({
      path: `${packageName}/client-handoff.md`,
      format: "markdown",
      purpose: "Client or maker handoff for launch state, assets, blockers, and approvals.",
      content: [
        `# ${params.productName} Launch Room Handoff`,
        "",
        commandCenter.headline,
        "",
        `Readiness: ${commandCenter.launchReadinessScore}/100`,
        `Status: ${commandCenter.launchStatus}`,
        "",
        "## Best Assets",
        ...commandCenter.bestLaunchAssets.map((asset) => `- ${asset}`),
        "",
        "## Fix Before Launch",
        ...fixesBeforeLaunch.map((fix) => `- ${fix}`),
        "",
        "## Notes",
        ...clientNotes.map((note) => `- ${note}`),
      ].join("\n"),
    });
  }

  return {
    productName: params.productName,
    packageName,
    launchStatus: commandCenter.launchStatus,
    launchReadinessScore: commandCenter.launchReadinessScore,
    files,
    nextActions: [
      commandCenter.workflowState.nextBestAction,
      ...commandCenter.nextActionPlan.immediateSteps,
      "Save the launch-room files into the project handoff location.",
      "Run final human review before publishing or client delivery.",
    ],
    approvalGates: [
      "Human review of Product Hunt draft.",
      "Approved public screenshots and video clips.",
      "No private data or secrets in assets.",
      "Supported claims only.",
      "Maker/client approval before submission.",
    ],
  };
}

function makeCreativeStudioBrain(params: {
  productName?: string;
  websiteUrl?: string;
  userGoal?: string;
  isLovableApp?: boolean;
  hasScanEvidence?: boolean;
  hasScreenshots?: boolean;
  hasVideoEvidence?: boolean;
  hasProductAudit?: boolean;
  hasAssetMatrix?: boolean;
  hasLaunchPack?: boolean;
  hasUnsupportedClaims?: boolean;
  hasPrivateDataRisk?: boolean;
  hasWeakScreens?: boolean;
  wantsImages?: boolean;
  wantsVideo?: boolean;
  wantsSocialCopy?: boolean;
  wantsClientReport?: boolean;
  needsLovableFixes?: boolean;
  targetChannel?: string;
}): CreativeStudioBrain {
  const workflowState = makeCreativeWorkflowState(params);
  const productName = params.productName ?? "Lovable app";
  const goal = (params.userGoal ?? "").toLowerCase();
  const hasUrl = Boolean(params.websiteUrl);
  const wantsAssets = Boolean(params.wantsImages || params.wantsVideo || params.wantsSocialCopy || goal.includes("image") || goal.includes("video") || goal.includes("launch"));
  const mode: CreativeStudioBrain["mode"] =
    !hasUrl
      ? "orient"
      : params.hasPrivateDataRisk || params.hasUnsupportedClaims
        ? "review-assets"
        : params.needsLovableFixes || params.hasWeakScreens
          ? "fix-before-launch"
          : !params.hasScanEvidence || !params.hasScreenshots
            ? "scan"
            : !params.hasProductAudit
              ? "audit"
              : wantsAssets && !params.hasAssetMatrix
                ? "create-assets"
                : params.hasLaunchPack || params.wantsClientReport
                  ? "handoff"
                  : "create-assets";
  const recommendedToolOrder = [
    "creative_studio_brain",
    ...(mode === "orient" ? ["creative_user_onboarding", "creative_starter_guide"] : []),
    ...(mode === "scan" ? ["creative_scan_plan", "creative_browser_scan_recipe", "creative_route_discovery_plan", "OpenClaw browser/screenshot tools", "creative_scan_session_summary", "creative_site_intelligence"] : []),
    ...(mode === "audit" ? ["creative_marketability_audit", "creative_product_audit", "creative_evidence_map"] : []),
    ...(mode === "fix-before-launch" ? ["creative_visual_issue_report", "creative_lovable_readiness_feedback", "creative_lovable_fix_prompt_pack", "ClawKit for Lovable handoff"] : []),
    ...(mode === "create-assets" ? ["creative_capture_report", "creative_shot_selection", "creative_launch_asset_matrix", "creative_launch_pack", ...(params.wantsImages ? ["creative_image_prompt_pack"] : []), ...(params.wantsVideo ? ["creative_video_storyboard"] : []), ...(params.wantsSocialCopy ? ["creative_social_copy_pack"] : [])] : []),
    ...(mode === "review-assets" ? ["creative_evidence_map", "creative_asset_review"] : []),
    ...(mode === "handoff" ? ["creative_launch_brief", "creative_prompt_export", "creative_client_handoff", ...(params.wantsClientReport ? ["creative_agency_report"] : [])] : []),
  ];

  return {
    productName,
    mode,
    confidence: hasUrl && (params.hasScanEvidence || mode === "scan") ? "high" : hasUrl ? "medium" : "low",
    userFacingSummary:
      mode === "orient"
        ? "I need the Lovable.dev app, website, preview, or deployed URL first. Then I can plan the scan and launch asset workflow."
        : mode === "scan"
          ? "I will scan the full product, not just the landing page, and gather screenshot/video evidence before creating promotional material."
          : mode === "audit"
            ? "I will decide whether the product is actually marketable yet before creating public launch assets."
            : mode === "fix-before-launch"
              ? "The app needs screenshot-ready fixes before promotion. I will turn weak screens into Lovable.dev fix prompts and hand them to ClawKit for Lovable."
              : mode === "review-assets"
                ? "I will review claims, privacy risk, and visual readiness before anything is published."
                : mode === "handoff"
                  ? "I will package the launch brief, prompts, copy, approvals, and client-ready handoff."
                  : "I will create evidence-based launch assets from the approved product screenshots and scan findings.",
    nextAction:
      mode === "orient"
        ? "Ask for the app URL and desired asset type."
        : mode === "scan"
          ? "Run the scan plan and browser recipe, then capture approved screenshots."
          : mode === "audit"
            ? "Run marketability and product audits before generating assets."
            : mode === "fix-before-launch"
              ? "Create Lovable.dev fix prompts and route build/repair work to ClawKit for Lovable."
              : mode === "review-assets"
                ? "Run claim and privacy review before public use."
                : mode === "handoff"
                  ? "Create the launch brief and client handoff."
                  : "Build the asset matrix, image prompt pack, video storyboard, and social copy as requested.",
    why:
      "ClawKit Creative Studio for Lovable is the promotion brain. It should understand the product from evidence before producing images, videos, copy, or client reports.",
    recommendedToolOrder,
    askUserFor: [
      ...(!hasUrl ? ["Website, deployed app, preview, or Lovable.dev URL."] : []),
      ...(!params.targetChannel ? ["Target launch channel: Product Hunt, LinkedIn, X, website hero, ads, client report, or all."] : []),
      ...(!params.hasScreenshots && mode !== "orient" ? ["Approval to browse and capture screenshots or short clips."] : []),
      ...(params.hasPrivateDataRisk ? ["Confirmation that private data has been removed or approved for capture."] : []),
    ],
    useCreativeStudioFor: [
      "Full-site/app scan planning, route discovery, capture strategy, product understanding, marketability audit, asset matrix, image prompts, video storyboard, social copy, and client handoff.",
      "Evidence-backed marketing claims based on what is visible in the app.",
    ],
    useClawKitForLovableFor: [
      "Building, rescuing, refactoring, debugging, GitHub handoff, and making Lovable.dev screens screenshot-ready before promotion.",
      "Fixing weak or broken launch screens before Creative Studio creates public assets.",
    ],
    evidenceNeeded: [
      "App or website URL.",
      "Approved screenshots or video notes.",
      "Product intelligence from visited pages and flows.",
      "Evidence map for claims.",
      "Human approval before public publishing.",
    ],
    stopConditions: [
      "Stop if private data, secrets, customer data, or admin screens appear without approval.",
      "Stop if claims are unsupported by evidence.",
      "Stop if the app is visually broken or placeholder-heavy; route fixes to ClawKit for Lovable first.",
      "Stop before publishing or sending client assets without review.",
    ],
    workflowState,
  };
}

function makeScanPlan(params: {
  websiteUrl: string;
  scanGoal?: string;
  productType?: string;
  crawlDepth?: "light" | "standard" | "deep";
  knownPages?: string[];
  authenticated?: boolean;
  allowScreenshots?: boolean;
  allowVideoCapture?: boolean;
  targetAudience?: string;
}): ScanPlan {
  const websiteUrl = normalizeUrl(params.websiteUrl);
  const crawlDepth = params.crawlDepth ?? "standard";
  const knownPages = asList(params.knownPages, []);
  const scanGoal =
    params.scanGoal ??
    "Understand the product well enough to create honest promotional images, video storyboards, and launch copy.";

  const basePages = [
    websiteUrl,
    `${websiteUrl.replace(/\/$/, "")}/pricing`,
    `${websiteUrl.replace(/\/$/, "")}/features`,
    `${websiteUrl.replace(/\/$/, "")}/about`,
    `${websiteUrl.replace(/\/$/, "")}/contact`,
  ];
  const deepPages = [
    "onboarding/start or sign-up flow when approved",
    "dashboard or main product surface when approved",
    "settings, reports, projects, billing, integrations, or other app-specific feature screens when approved",
    "mobile viewport checks for the most important screens",
  ];

  return {
    websiteUrl,
    scanGoal,
    crawlDepth,
    requiredApprovals: [
      "Approval before browsing logged-in or non-public screens.",
      "Approval before taking screenshots that may contain private data.",
      "Approval before recording video clips.",
      "Approval before using generated promotional assets publicly.",
    ],
    pagesToInspect: [
      ...knownPages,
      ...basePages,
      ...(crawlDepth === "deep" ? deepPages : []),
    ],
    browserEvidenceToCapture: [
      "Desktop screenshot of homepage or main app shell.",
      "Mobile screenshot of homepage or main app shell.",
      "Screenshots of each important feature page or product flow.",
      "CTA, pricing, onboarding, dashboard, empty state, and success state where available.",
      "Console or visible error notes when screens are broken.",
    ],
    videoCapturePlan: params.allowVideoCapture
      ? [
          "Record a short navigation pass from entry page to primary CTA.",
          "Record one feature flow with no private data visible.",
          "Capture only stable, polished screens suitable for promo editing.",
        ]
      : [
          "Do not record yet. Prepare a storyboard and ask for approval before capture.",
        ],
    productSignalsToExtract: [
      "Product category and one-sentence value proposition.",
      "Target audience and jobs-to-be-done.",
      "Feature inventory based on visible evidence.",
      "Main user journeys and conversion paths.",
      "Brand colors, typography feel, tone, imagery style, and UI personality.",
      "Proof points, testimonials, integrations, pricing, and limits.",
      "Missing or weak screens that should be fixed before marketing.",
    ],
    stopConditions: [
      "Stop if a login wall blocks progress and ask for approved access or screenshots.",
      "Stop if private user data, secrets, financial data, or admin data is visible.",
      "Stop if the site is broken enough that promotional assets would mislead users.",
    ],
    outputBrief: [
      "Product understanding report.",
      "Marketability assessment.",
      "Screenshot and video shot inventory.",
      "Launch asset recommendations.",
      "Promotional image prompts and video storyboard.",
    ],
  };
}

function makeBrowserScanRecipe(params: {
  websiteUrl: string;
  mode?: "public-site" | "app-preview" | "authenticated-demo" | "lovable-preview";
  productType?: string;
  includeMobile?: boolean;
  includeAuthenticatedFlow?: boolean;
  includeVideoNotes?: boolean;
}): BrowserScanRecipe {
  const websiteUrl = normalizeUrl(params.websiteUrl);
  const mode = params.mode ?? "public-site";
  const desktopPass = {
    name: "Desktop product scan",
    viewport: "desktop 1440x900",
    steps: [
      "Open the entry URL and wait for the page to settle.",
      "Record page title, headline, primary CTA, visible product category, and first-screen value proposition.",
      "Follow top navigation links, footer links, and visible primary CTAs.",
      "Inspect feature, pricing, proof, docs, about, contact, and demo pages when available.",
      "For each meaningful page, record purpose, visible features, claims, CTA, visual quality, and screenshot reference.",
    ],
    capturePoints: [
      "Homepage or app entry first viewport.",
      "Primary feature page or workflow.",
      "Pricing/CTA page.",
      "Proof, testimonial, integration, or trust page.",
      "Any screen that clearly explains the product better than the homepage.",
    ],
    evidenceToRecord: [
      "URL, title, page purpose, screenshot ref, visible features, visible claims, CTA, and issues.",
      "Brand colors, tone, UI density, product category, and target audience signals.",
    ],
  };
  const mobilePass = {
    name: "Mobile readiness scan",
    viewport: "mobile 390x844",
    steps: [
      "Open the entry URL on mobile viewport.",
      "Check navigation, hero, CTA visibility, text wrapping, and horizontal overflow.",
      "Capture the most important public screen and one primary feature/CTA screen.",
    ],
    capturePoints: [
      "Mobile homepage or app entry.",
      "Mobile CTA or primary workflow.",
    ],
    evidenceToRecord: [
      "Mobile layout quality, clipped text, overlapping UI, CTA visibility, and launch-blocking issues.",
    ],
  };
  const authPass = {
    name: "Approved app/demo flow scan",
    viewport: "desktop 1440x900",
    steps: [
      "Confirm explicit user approval before opening authenticated or non-public screens.",
      "Use only demo data or user-approved safe content.",
      "Inspect onboarding, dashboard, primary workflow, settings/integrations, reports, and success states when available.",
      "Stop immediately if private data, secrets, billing, admin-only, or customer data appears.",
    ],
    capturePoints: [
      "Dashboard or main app surface with safe demo data.",
      "Primary workflow start, middle, and success state.",
      "Settings/integrations only if safe and useful for marketing.",
    ],
    evidenceToRecord: [
      "Workflow steps, feature proof, data safety, private-data risk, and screenshot refs.",
    ],
  };

  return {
    websiteUrl,
    mode,
    scanPasses: [
      desktopPass,
      ...(params.includeMobile ?? true ? [mobilePass] : []),
      ...(params.includeAuthenticatedFlow ? [authPass] : []),
    ],
    consoleChecks: [
      "Check browser console after initial load.",
      "Check console after navigation to the primary feature or app screen.",
      "Record runtime, network, hydration, route, and asset-loading errors.",
    ],
    stopConditions: [
      "Login blocks progress and the user has not approved access.",
      "Private customer, billing, secret, admin, or production data is visible.",
      "The app is broken enough that promotional capture would mislead users.",
      "The site blocks automated browsing or capture.",
    ],
    expectedOutputs: [
      "Route list and page purposes.",
      "Screenshot/capture report.",
      "Visual issue report.",
      "Site intelligence brief.",
      "Marketability audit.",
      ...(params.includeVideoNotes ? ["Video shot notes for storyboard creation."] : []),
    ],
  };
}

function makeRouteDiscoveryPlan(params: {
  websiteUrl: string;
  knownRoutes?: string[];
  productType?: string;
  hasSitemap?: boolean;
  hasAuthenticatedArea?: boolean;
}): RouteDiscoveryPlan {
  const websiteUrl = normalizeUrl(params.websiteUrl);
  const base = websiteUrl.replace(/\/$/, "");
  const commonRoutes = [
    base,
    `${base}/features`,
    `${base}/pricing`,
    `${base}/about`,
    `${base}/contact`,
    `${base}/blog`,
    `${base}/docs`,
    `${base}/login`,
    `${base}/signup`,
    `${base}/demo`,
  ];

  return {
    websiteUrl,
    sources: [
      "Top navigation links.",
      "Footer links.",
      "Homepage CTAs and secondary buttons.",
      "Feature cards and product section links.",
      "Pricing CTAs.",
      "Docs/blog links when product education matters.",
      ...(params.hasSitemap ? [`${base}/sitemap.xml or linked sitemap.`] : []),
      ...(params.hasAuthenticatedArea ? ["Approved app menus after login/demo access."] : []),
    ],
    routeCandidates: [...asList(params.knownRoutes, []), ...commonRoutes],
    interactionTargets: [
      "Primary CTA buttons.",
      "Sign up / Get started / Try demo.",
      "Product tour, video, or demo links.",
      "Feature cards that reveal detail pages.",
      "Tabs, accordions, filters, or app menus that change visible product evidence.",
    ],
    prioritizationRules: [
      "Prioritize routes that show real product value over generic company pages.",
      "Prioritize screens that can support public claims.",
      "Prioritize desktop plus mobile for the main conversion path.",
      "Avoid low-value blog/legal pages unless they support trust or proof.",
      "Stop before private data unless the user approved safe demo access.",
    ],
    blockedAccessFallbacks: [
      "Ask the user for a demo login or approved screenshots.",
      "Ask the user to create screenshot-safe demo data.",
      "Use public pages only and mark authenticated product claims as unverified.",
      "Generate Lovable or product prompts to create public proof screens.",
    ],
  };
}

function makeScanSessionSummary(params: {
  productName?: string;
  websiteUrl: string;
  visited?: string[];
  captured?: string[];
  blocked?: string[];
  errors?: string[];
  discoveredRoutes?: string[];
  expectedRoutes?: string[];
}): ScanSessionSummary {
  const visited = asList(params.visited, []);
  const captured = asList(params.captured, []);
  const blocked = asList(params.blocked, []);
  const errors = asList(params.errors, []);
  const discovered = asList(params.discoveredRoutes, []);
  const expected = asList(params.expectedRoutes, []);
  const coveredCount = expected.filter((route) => visited.includes(route) || discovered.includes(route)).length;
  const coverageRatio = expected.length > 0 ? coveredCount / expected.length : visited.length >= 5 ? 0.75 : visited.length >= 3 ? 0.5 : 0.25;
  const routeCoverage: ScanSessionSummary["routeCoverage"] =
    coverageRatio >= 0.7 ? "high" : coverageRatio >= 0.4 ? "medium" : "low";

  return {
    productName: params.productName ?? "Website product",
    websiteUrl: normalizeUrl(params.websiteUrl),
    visited,
    captured,
    blocked,
    errors,
    routeCoverage,
    missingAccess: [
      ...(blocked.length > 0 ? blocked.map((item) => `Blocked: ${item}`) : []),
      ...(expected.length > 0
        ? expected.filter((route) => !visited.includes(route) && !discovered.includes(route)).map((route) => `Not visited: ${route}`)
        : []),
    ],
    nextScanActions: [
      ...(routeCoverage === "low" ? ["Discover and inspect more routes before creating final assets."] : []),
      ...(captured.length === 0 ? ["Capture screenshots for the strongest product screens."] : []),
      ...(errors.length > 0 ? ["Fix or document browser/runtime errors before launch capture."] : []),
      ...(blocked.length > 0 ? ["Ask the user for approved access, demo data, or screenshots for blocked flows."] : []),
      "Run site intelligence, marketability audit, capture report, and asset matrix after scan evidence is complete.",
    ],
  };
}

function makeSiteIntelligence(params: {
  productName?: string;
  websiteUrl: string;
  pages: SitePageEvidence[];
  targetAudience?: string;
  observedBrandColors?: string[];
  observedTone?: string;
  userInstruction?: string;
  knownClaims?: string[];
  missingOrBroken?: string[];
}): SiteIntelligence {
  const websiteUrl = normalizeUrl(params.websiteUrl);
  const productName = params.productName ?? "Website product";
  const features = params.pages.flatMap((page) => page.visibleFeatures ?? []);
  const ctas = params.pages.map((page) => page.primaryCta).filter((cta): cta is string => Boolean(cta));
  const broken = asList(params.missingOrBroken, []);
  const audience = asList(
    params.targetAudience ? [params.targetAudience] : undefined,
    ["Primary audience must be confirmed from product copy, page evidence, or user input."],
  );

  return {
    productName,
    websiteUrl,
    productSummary:
      params.userInstruction ??
      `${productName} should be marketed only from visible site evidence and confirmed user claims.`,
    audience,
    positioning: [
      "Lead with the clearest visible user outcome, not generic AI/productivity language.",
      "Use full-site evidence: homepage, feature pages, pricing, onboarding, dashboard, and proof pages where available.",
      "Separate confirmed claims from inferred marketing angles.",
    ],
    visibleFeatures: asList(features, [
      "Feature inventory is incomplete until OpenClaw captures page evidence.",
    ]),
    userFlows: asList(
      params.pages.map((page) => page.purpose).filter((purpose): purpose is string => Boolean(purpose)),
      ["Entry page to primary CTA", "Feature discovery", "Conversion or sign-up path"],
    ),
    visualIdentity: {
      colors: asList(params.observedBrandColors, [
        "Extract from screenshots or CSS observations before final image generation.",
      ]),
      tone: params.observedTone ?? "Unknown until copy and UI are inspected.",
      styleNotes: [
        "Reuse real product screenshots as the visual anchor.",
        "Do not invent UI that changes the product promise.",
        "Use clean promotional framing around real screens.",
      ],
    },
    proofGaps: [
      ...(ctas.length === 0 ? ["No primary CTA was supplied in page evidence."] : []),
      ...broken,
      ...(params.knownClaims && params.knownClaims.length > 0
        ? []
        : ["No user-confirmed proof claims supplied yet."]),
    ],
    launchAngles: [
      "Whole-product walkthrough: show the product journey, not only the homepage.",
      "Feature-led campaign: turn each real feature screen into one benefit card.",
      "Problem-to-solution campaign: pair user pain with the exact screen that solves it.",
      "Lovable launch campaign when the app was built in Lovable.",
    ],
    assetOpportunities: [
      "Product Hunt gallery",
      "LinkedIn launch image",
      "X/Twitter announcement image",
      "Website hero visual",
      "15-second vertical demo storyboard",
      "30-second horizontal walkthrough storyboard",
      "Feature cards from captured screenshots",
    ],
    doNotClaim: [
      "Revenue, customer counts, speed improvements, compliance, integrations, pricing, or AI capabilities unless visible or confirmed.",
      "Private or logged-in functionality that was not approved for capture.",
      "Screens that are broken, placeholder-heavy, or not representative of the current app.",
    ],
    recommendedNextAction:
      broken.length > 0
        ? "Fix or recapture weak screens before generating final promotional assets."
        : "Create a launch pack and image prompt pack from the strongest captured screens.",
  };
}

function makeCaptureChecklist(params: {
  productName?: string;
  websiteUrl: string;
  assetGoal?: string;
  formats?: string[];
  includeVideo?: boolean;
}) {
  const formats = asList(params.formats, [
    "Product Hunt gallery",
    "LinkedIn image",
    "X/Twitter image",
    "website hero visual",
  ]);
  return {
    productName: params.productName ?? "Website product",
    websiteUrl: normalizeUrl(params.websiteUrl),
    assetGoal: params.assetGoal ?? "Create launch-ready promotional assets from real product screens.",
    requiredShots: [
      "Homepage or app entry screen, desktop.",
      "Homepage or app entry screen, mobile.",
      "Primary feature screen.",
      "Second feature or workflow screen.",
      "Pricing, plan, or CTA screen if public.",
      "Proof, testimonial, integration, or results screen if public.",
      "Empty state or onboarding screen if visually strong.",
    ],
    optionalShots: [
      "Before/after state.",
      "Dashboard with safe demo data.",
      "Settings or integrations screen.",
      "Success state after completing a workflow.",
    ],
    videoShots: params.includeVideo
      ? [
          "3-second homepage/app reveal.",
          "5-second primary workflow navigation.",
          "5-second feature close-up.",
          "3-second CTA/end card.",
        ]
      : ["Prepare storyboard only; capture video after explicit approval."],
    outputFormats: formats,
    qualityRules: [
      "Use demo data only.",
      "Hide private user information.",
      "Prefer screens with real UI state, not skeletons or placeholders.",
      "Capture both desktop and mobile when assets will be public.",
      "Do not generate final marketing if the app has obvious visual or runtime errors.",
    ],
  };
}

function makeEvidenceMap(params: {
  claims: string[];
  evidence?: string[];
  confirmedByUser?: string[];
  doNotClaim?: string[];
}): { items: EvidenceMapItem[]; summary: string; publishableClaims: string[]; claimsToRemove: string[] } {
  const evidence = asList(params.evidence, []);
  const confirmedByUser = asList(params.confirmedByUser, []);
  const doNotClaim = asList(params.doNotClaim, []);

  const items = params.claims.map((claim) => {
    const lowerClaim = claim.toLowerCase();
    const blocked = doNotClaim.find((blockedClaim) =>
      lowerClaim.includes(blockedClaim.toLowerCase()) || blockedClaim.toLowerCase().includes(lowerClaim),
    );
    const directEvidence = evidence.filter((item) =>
      item.toLowerCase().includes(lowerClaim) || lowerClaim.includes(item.toLowerCase()),
    );
    const confirmation = confirmedByUser.filter((item) =>
      item.toLowerCase().includes(lowerClaim) || lowerClaim.includes(item.toLowerCase()),
    );
    const supportingEvidence = [...directEvidence, ...confirmation.map((item) => `User confirmed: ${item}`)];

    if (blocked) {
      return {
        claim,
        status: "do-not-use" as const,
        supportingEvidence: [],
        risk: "high" as const,
        saferRewrite: "Remove this claim or ask the user for explicit evidence and permission.",
      };
    }
    if (supportingEvidence.length > 0) {
      return {
        claim,
        status: "supported" as const,
        supportingEvidence,
        risk: "low" as const,
        saferRewrite: claim,
      };
    }
    const riskyWords = ["best", "only", "guaranteed", "secure", "compliant", "revenue", "customers", "fastest", "ai-powered"];
    const hasRiskyWord = riskyWords.some((word) => lowerClaim.includes(word));
    return {
      claim,
      status: hasRiskyWord ? "unsupported" as const : "needs-confirmation" as const,
      supportingEvidence: [],
      risk: hasRiskyWord ? "high" as const : "medium" as const,
      saferRewrite: `Based on visible product screens, ${claim.replace(/\.$/, "")}.`,
    };
  });

  const publishableClaims = items
    .filter((item) => item.status === "supported")
    .map((item) => item.claim);
  const claimsToRemove = items
    .filter((item) => item.status === "unsupported" || item.status === "do-not-use")
    .map((item) => item.claim);

  return {
    items,
    summary:
      claimsToRemove.length > 0
        ? "Some claims are unsupported or blocked. Remove or verify them before creating public assets."
        : publishableClaims.length > 0
          ? "Supported claims are ready for human brand/legal review."
          : "No claims are fully supported yet. Capture more evidence or ask the user to confirm claims.",
    publishableClaims,
    claimsToRemove,
  };
}

function makeMarketabilityAudit(params: {
  intelligence: SiteIntelligence;
  screenshotRefs?: string[];
  inspectedPages?: string[];
  brokenOrWeakScreens?: string[];
  supportedClaims?: string[];
  riskyClaims?: string[];
  missingEvidence?: string[];
  hasMobileEvidence?: boolean;
  hasPrimaryCta?: boolean;
  hasDemoData?: boolean;
  hasVideoReadyFlow?: boolean;
}): MarketabilityAudit {
  const intelligence = params.intelligence;
  const screenshots = asList(params.screenshotRefs, []);
  const inspectedPages = asList(params.inspectedPages, []);
  const weakScreens = [
    ...asList(params.brokenOrWeakScreens, []),
    ...intelligence.proofGaps.filter((gap) => !gap.toLowerCase().includes("confirmed proof claims")),
  ];
  const supportedClaims = asList(params.supportedClaims, intelligence.visibleFeatures.slice(0, 5));
  const riskyClaims = [
    ...asList(params.riskyClaims, []),
    ...intelligence.doNotClaim.slice(0, 3),
  ];
  const missingEvidence = [
    ...asList(params.missingEvidence, []),
    ...(screenshots.length === 0 ? ["No approved screenshots supplied."] : []),
    ...(inspectedPages.length < 3 ? ["Fewer than three pages or flows inspected."] : []),
    ...(params.hasMobileEvidence ? [] : ["No mobile screenshot evidence supplied."]),
    ...(params.hasPrimaryCta ? [] : ["Primary CTA has not been confirmed."]),
    ...(params.hasDemoData ? [] : ["Safe demo data has not been confirmed for screenshots."]),
  ];

  const score = clampScore(
    35 +
      Math.min(20, screenshots.length * 4) +
      Math.min(15, inspectedPages.length * 3) +
      (params.hasMobileEvidence ? 10 : 0) +
      (params.hasPrimaryCta ? 10 : 0) +
      (params.hasDemoData ? 5 : 0) +
      (params.hasVideoReadyFlow ? 5 : 0) -
      Math.min(30, weakScreens.length * 6) -
      Math.min(20, missingEvidence.length * 4),
  );
  const readiness: MarketabilityAudit["readiness"] =
    score >= 85 ? "launch-ready" : score >= 70 ? "marketable" : score >= 45 ? "needs-polish" : "not-ready";

  return {
    productName: intelligence.productName,
    websiteUrl: intelligence.websiteUrl,
    readiness,
    score,
    strongestScreens: screenshots.length > 0
      ? screenshots.slice(0, 6)
      : ["Capture homepage/app shell, primary workflow, feature screen, CTA, proof page, and mobile view."],
    weakScreens,
    supportedClaims,
    riskyClaims,
    missingEvidence,
    recommendedFixes: [
      ...(weakScreens.length > 0 ? ["Fix or exclude weak/broken screens before final assets."] : []),
      ...(missingEvidence.includes("No approved screenshots supplied.") ? ["Capture approved screenshots before image generation."] : []),
      ...(params.hasMobileEvidence ? [] : ["Capture mobile views for social and launch gallery confidence."]),
      ...(params.hasPrimaryCta ? [] : ["Clarify and capture the primary CTA."]),
      ...(params.hasDemoData ? [] : ["Create safe demo data for dashboard or workflow screenshots."]),
      "Run `creative_evidence_map` before final copy or image prompts.",
    ],
    launchAssetPriority: [
      "Product Hunt gallery from strongest full-product flow.",
      "LinkedIn launch image with one proof-based claim.",
      "X/Twitter visual with short hook and real screen.",
      "Feature-card carousel from captured screens.",
      ...(params.hasVideoReadyFlow ? ["15-second demo clip storyboard."] : ["Storyboard video first; record only after flow is clean."]),
    ],
    nextAction:
      readiness === "launch-ready"
        ? "Create final launch pack, image prompts, and video storyboard, then run asset review."
        : readiness === "marketable"
          ? "Create launch assets, but fix listed weak spots before public launch."
          : "Improve evidence and screens before generating final promotional assets.",
  };
}

function makeProductAudit(params: {
  intelligence: SiteIntelligence;
  marketabilityAudit?: MarketabilityAudit;
  scanSummary?: ScanSessionSummary;
  captures?: CaptureItem[];
  visualIssues?: VisualIssueReport["issues"];
  userGoal?: string;
  isLovableApp?: boolean;
  missingTrustSignals?: string[];
  missingScreens?: string[];
  approvedScreens?: string[];
  targetLaunchChannel?: string;
}): ProductAudit {
  const intelligence = params.intelligence;
  const marketability = params.marketabilityAudit;
  const captures = params.captures ?? [];
  const approvedScreens = asList(params.approvedScreens, [
    ...captures
      .filter((capture) => ["excellent", "good", "usable"].includes(capture.quality ?? "usable"))
      .map((capture) => capture.ref),
    ...(marketability?.strongestScreens ?? []),
  ]).filter(Boolean);
  const visualIssues = params.visualIssues ?? [];
  const weakFromCaptures = captures
    .filter((capture) =>
      ["weak", "broken"].includes(capture.quality ?? "usable") ||
      asList(capture.issues, []).length > 0,
    )
    .map((capture) => `${capture.ref} (${capture.url})`);
  const weakScreens = [
    ...asList(marketability?.weakScreens, []),
    ...weakFromCaptures,
    ...visualIssues.map((issue) => `${issue.screenRef}: ${issue.problem}`),
  ];
  const missingScreens = asList(params.missingScreens, [
    ...(params.scanSummary?.routeCoverage === "low" ? ["Core product route coverage is still low."] : []),
    ...(approvedScreens.some((screen) => screen.toLowerCase().includes("mobile"))
      ? []
      : ["Mobile screenshot for the primary conversion path."]),
    "Clean primary workflow from entry point to success state.",
    "Trust/proof screen with visible evidence, testimonial, integration, pricing, or guarantees.",
  ]);
  const missingTrustSignals = asList(params.missingTrustSignals, [
    ...(intelligence.proofGaps.length > 0 ? intelligence.proofGaps : []),
    "Visible proof that supports the strongest promotional claim.",
    "Clear privacy, support, pricing, or contact signal where relevant.",
  ]);
  const riskyClaims = asList(marketability?.riskyClaims, intelligence.doNotClaim);
  const supportedClaims = asList(marketability?.supportedClaims, intelligence.visibleFeatures.slice(0, 5));
  const baseScore =
    marketability?.score ??
    clampScore(
      40 +
        Math.min(20, approvedScreens.length * 4) +
        Math.min(15, intelligence.visibleFeatures.length * 2) -
        Math.min(25, weakScreens.length * 5) -
        Math.min(20, missingScreens.length * 4),
    );
  const score = clampScore(
    baseScore +
      (params.scanSummary?.routeCoverage === "high" ? 8 : params.scanSummary?.routeCoverage === "medium" ? 4 : 0) -
      Math.min(15, missingTrustSignals.length * 2) -
      Math.min(10, riskyClaims.length * 2),
  );
  const overallReadiness: ProductAudit["overallReadiness"] =
    score >= 85
      ? "ready-to-promote"
      : score >= 70
        ? "promising"
        : score >= 45
          ? "needs-work"
          : "blocked";
  const strongestScreens =
    approvedScreens.length > 0
      ? approvedScreens.slice(0, 6)
      : ["No approved screen is strong enough yet. Capture the product entry, main workflow, proof screen, and mobile path."];
  const recommendedPromoAngle =
    intelligence.launchAngles[0] ??
    `Show how ${intelligence.productName} helps ${intelligence.audience[0] ?? "its target users"} complete the main workflow with less friction.`;

  return {
    productName: intelligence.productName,
    websiteUrl: intelligence.websiteUrl,
    auditMode: "creative-audit",
    overallReadiness,
    score,
    productUnderstanding: {
      summary: intelligence.productSummary,
      audience: intelligence.audience,
      primaryUseCases: intelligence.userFlows,
      positioning: intelligence.positioning,
    },
    screenDiagnosis: {
      strongestScreens,
      weakOrBrokenScreens: weakScreens,
      missingScreens,
      screenshotRecommendations: [
        "Use real app screens before abstract promotional imagery.",
        "Capture desktop and mobile versions of the main conversion path.",
        "Prefer screens that show the product doing useful work, not generic landing-page claims.",
        "Exclude screens with console errors, placeholder content, private data, clipped text, or unclear CTAs.",
      ],
    },
    marketingDiagnosis: {
      strongestSellingPoints: intelligence.visibleFeatures.slice(0, 6),
      recommendedPromoAngle,
      supportedClaims,
      riskyClaims,
      missingTrustSignals,
    },
    fixBeforePromotion: [
      ...(weakScreens.length > 0 ? ["Fix or remove weak, broken, placeholder-heavy, or confusing screens."] : []),
      ...(missingTrustSignals.length > 0 ? ["Add or confirm trust signals before using strong marketing claims."] : []),
      ...(missingScreens.length > 0 ? ["Capture missing screens before generating final assets."] : []),
      ...(riskyClaims.length > 0 ? ["Rewrite risky claims into evidence-backed language."] : []),
      "Run a final screenshot and claim review before publishing generated assets.",
    ],
    recommendedAssets: [
      {
        asset: `${params.targetLaunchChannel ?? "Launch"} hero image`,
        sourceScreens: strongestScreens.slice(0, 2),
        purpose: "Make the product understandable in one glance.",
        readiness: weakScreens.length === 0 && strongestScreens.length > 0 ? "ready" : "needs-fix",
      },
      {
        asset: "Feature carousel",
        sourceScreens: strongestScreens.slice(0, 5),
        purpose: "Show the product journey across multiple screens.",
        readiness: strongestScreens.length >= 3 ? "ready" : "needs-evidence",
      },
      {
        asset: "30-second demo storyboard",
        sourceScreens: strongestScreens.slice(0, 4),
        purpose: "Turn the best route through the app into a short launch video.",
        readiness: params.scanSummary?.routeCoverage === "high" ? "ready" : "needs-evidence",
      },
      {
        asset: "Social launch copy",
        sourceScreens: strongestScreens.slice(0, 1),
        purpose: "Create proof-backed copy for LinkedIn, X/Twitter, and founder launch channels.",
        readiness: supportedClaims.length > 0 && riskyClaims.length === 0 ? "ready" : "needs-evidence",
      },
    ],
    lovableFixPrompts: params.isLovableApp
      ? [
          `Improve ${intelligence.productName} for launch marketing: fix weak screens, clarify the primary CTA, remove placeholder content, and ensure the main workflow is visually polished on desktop and mobile.`,
          `Create screenshot-ready demo data for ${intelligence.productName}. Avoid private data. Make the main workflow, success state, and proof/trust screen visually clear.`,
          `Refactor confusing UI sections in ${intelligence.productName} so the value proposition, feature proof, and next action are visible without relying on marketing text alone.`,
        ]
      : [],
    nextWorkflow:
      overallReadiness === "ready-to-promote"
        ? [
            "Run `creative_launch_asset_matrix`.",
            "Run `creative_image_prompt_pack` or `creative_video_storyboard`.",
            "Run `creative_asset_review` before publishing.",
          ]
        : params.isLovableApp
          ? [
              "Use the Lovable fix prompts to improve weak screens.",
              "Rescan the app after fixes.",
              "Run `creative_product_audit` again before generating public assets.",
            ]
          : [
              "Fix the listed product, trust, or screen issues.",
              "Capture missing evidence.",
              "Run `creative_product_audit` again before generating public assets.",
            ],
  };
}

function makeCaptureReport(params: {
  productName?: string;
  websiteUrl: string;
  captures: CaptureItem[];
  requiredPurposes?: string[];
}): CaptureReport {
  const captures = params.captures;
  const approvedCaptures = captures.filter((capture) =>
    ["excellent", "good", "usable"].includes(capture.quality ?? "usable") &&
    asList(capture.issues, []).length === 0,
  );
  const weakCaptures = captures.filter((capture) =>
    ["weak", "broken"].includes(capture.quality ?? "usable") ||
    asList(capture.issues, []).length > 0,
  );
  const purposes = new Set(captures.map((capture) => capture.purpose).filter(Boolean));
  const requiredPurposes = asList(params.requiredPurposes, [
    "homepage/app entry",
    "primary feature",
    "secondary feature",
    "CTA/pricing",
    "mobile view",
    "proof or trust screen",
  ]);
  const missingShots = requiredPurposes.filter((purpose) => !purposes.has(purpose));

  return {
    productName: params.productName ?? "Website product",
    websiteUrl: normalizeUrl(params.websiteUrl),
    totalCaptures: captures.length,
    approvedCaptures,
    weakCaptures,
    coverage: Array.from(purposes).map((purpose) => `Captured: ${purpose}`),
    missingShots,
    recommendedRecaptures: weakCaptures.map((capture) =>
      `Recapture ${capture.ref} (${capture.purpose ?? capture.url}) after fixing: ${asList(capture.issues, ["quality issue"]).join("; ")}`,
    ),
    nextAction:
      missingShots.length > 0 || weakCaptures.length > 0
        ? "Capture missing shots and recapture weak screens before final asset generation."
        : "Proceed to shot selection and launch asset matrix.",
  };
}

function makeShotSelection(params: {
  productName?: string;
  captures: CaptureItem[];
  targetAssets?: string[];
}): ShotSelection {
  const targetAssets = asList(params.targetAssets, [
    "Product Hunt slide 1",
    "Product Hunt feature slide",
    "LinkedIn launch image",
    "X/Twitter launch image",
    "website hero visual",
    "15-second video hook",
  ]);
  const usable = params.captures.filter((capture) =>
    ["excellent", "good", "usable"].includes(capture.quality ?? "usable") &&
    asList(capture.issues, []).length === 0,
  );
  const rejectedShots = params.captures
    .filter((capture) => !usable.includes(capture))
    .map((capture) => ({
      ref: capture.ref,
      reason: asList(capture.issues, [`Quality marked as ${capture.quality ?? "unknown"}.`]).join("; "),
    }));

  const pick = (asset: string, index: number) => {
    const lowerAsset = asset.toLowerCase();
    const preferred = usable.find((capture) =>
      lowerAsset.includes("mobile")
        ? (capture.viewport ?? "").toLowerCase().includes("mobile")
        : lowerAsset.includes("hero") || lowerAsset.includes("slide 1") || lowerAsset.includes("hook")
          ? (capture.purpose ?? "").toLowerCase().includes("homepage") || (capture.purpose ?? "").toLowerCase().includes("entry")
          : lowerAsset.includes("feature")
            ? (capture.purpose ?? "").toLowerCase().includes("feature")
            : true,
    ) ?? usable[index % Math.max(usable.length, 1)];
    const backup = usable.find((capture) => capture.ref !== preferred?.ref);
    return {
      asset,
      primaryShot: preferred?.ref ?? "missing-shot",
      backupShot: backup?.ref ?? null,
      reason: preferred
        ? `Best available ${preferred.purpose ?? "product"} shot for ${asset}.`
        : "No usable shot available. Capture or recapture before generating this asset.",
      copyAngle: asList(preferred?.visibleClaims, [
        "Use a conservative product benefit supported by this screen.",
      ])[0],
      requiredFixes: preferred ? [] : ["Capture a usable approved screenshot for this asset."],
    };
  };

  return {
    productName: params.productName ?? "Website product",
    selections: targetAssets.map(pick),
    rejectedShots,
  };
}

function makeVisualIssueReport(params: {
  productName?: string;
  captures: CaptureItem[];
  consoleErrors?: string[];
  layoutIssues?: string[];
  copyIssues?: string[];
  mobileIssues?: string[];
}): VisualIssueReport {
  const issues = [
    ...params.captures.flatMap((capture) =>
      asList(capture.issues, []).map((issue) => ({
        screenRef: capture.ref,
        category: capture.quality === "broken" ? "broken-screen" : "visual-quality",
        problem: issue,
        impact: "May weaken launch assets or mislead viewers if used in public creative.",
        recommendedFix: "Fix the screen, then recapture before asset generation.",
      })),
    ),
    ...asList(params.consoleErrors, []).map((error) => ({
      screenRef: "browser-console",
      category: "runtime",
      problem: error,
      impact: "The app may not behave correctly during capture or video recording.",
      recommendedFix: "Fix runtime error and repeat the capture pass.",
    })),
    ...asList(params.layoutIssues, []).map((issue) => ({
      screenRef: "layout",
      category: "layout",
      problem: issue,
      impact: "The product may look unpolished in screenshots.",
      recommendedFix: "Adjust layout and recapture affected viewports.",
    })),
    ...asList(params.copyIssues, []).map((issue) => ({
      screenRef: "copy",
      category: "copy",
      problem: issue,
      impact: "Weak or unclear copy reduces launch conversion.",
      recommendedFix: "Rewrite the on-screen copy before final screenshots.",
    })),
    ...asList(params.mobileIssues, []).map((issue) => ({
      screenRef: "mobile",
      category: "mobile",
      problem: issue,
      impact: "Social traffic is often mobile; weak mobile screens reduce trust.",
      recommendedFix: "Fix mobile layout and capture mobile proof.",
    })),
  ];
  const launchBlockers = issues
    .filter((issue) => ["broken-screen", "runtime", "mobile"].includes(issue.category))
    .map((issue) => `${issue.screenRef}: ${issue.problem}`);
  const severity: VisualIssueReport["severity"] =
    launchBlockers.length > 0 ? "high" : issues.length > 3 ? "medium" : "low";

  return {
    productName: params.productName ?? "Website product",
    severity,
    issues,
    launchBlockers,
    recaptureAfterFix: Array.from(new Set(issues.map((issue) => issue.screenRef))),
  };
}

function makeLaunchAssetMatrix(params: {
  productName?: string;
  selections: ShotSelection;
  evidenceMap?: { items?: EvidenceMapItem[] };
  formats?: string[];
}) {
  const formats = asList(params.formats, params.selections.selections.map((selection) => selection.asset));
  const supportedClaims = asList(
    params.evidenceMap?.items
      ?.filter((item) => item.status === "supported")
      .map((item) => item.claim),
    [],
  );

  return {
    productName: params.productName ?? params.selections.productName,
    matrix: formats.map((format, index) => {
      const selection = params.selections.selections[index] ?? params.selections.selections[0];
      const claim = supportedClaims[index] ?? selection?.copyAngle ?? "Use a conservative evidence-based product claim.";
      return {
        asset: format,
        screenshotRef: selection?.primaryShot ?? "missing-shot",
        backupScreenshotRef: selection?.backupShot ?? null,
        claim,
        copyAngle: selection?.copyAngle ?? claim,
        designInstruction:
          "Use the selected real screenshot as the hero visual, keep text short, avoid unsupported claims, and preserve product recognizability.",
        productionStatus: selection && selection.primaryShot !== "missing-shot" ? "ready-for-prompting" : "needs-capture",
        requiredApproval: "Human review required before public use.",
      };
    }),
    nextAction: "Use this matrix to generate image prompts, video storyboard scenes, or an exportable launch pack.",
  };
}

function makeExportPlan(params: {
  productName?: string;
  packageName?: string;
  includeVideo?: boolean;
  includeClientHandoff?: boolean;
  includeCsv?: boolean;
}): ExportPlan {
  const packageName = params.packageName ?? "launch-pack";
  const files: ExportPlan["recommendedFiles"] = [
    {
      path: `${packageName}/launch-brief.md`,
      purpose: "Human-readable launch strategy and product summary.",
      sourceTools: ["creative_site_intelligence", "creative_marketability_audit", "creative_launch_brief"],
      format: "markdown",
    },
    {
      path: `${packageName}/asset-matrix.json`,
      purpose: "Structured asset-to-shot-to-claim production map.",
      sourceTools: ["creative_launch_asset_matrix"],
      format: "json",
    },
    {
      path: `${packageName}/image-prompts.md`,
      purpose: "Image prompt handoff for designers or image-generation tools.",
      sourceTools: ["creative_image_prompt_pack", "creative_prompt_export"],
      format: "markdown",
    },
    {
      path: `${packageName}/social-copy.md`,
      purpose: "Platform-specific launch copy.",
      sourceTools: ["creative_social_copy_pack"],
      format: "markdown",
    },
    {
      path: `${packageName}/review-checklist.md`,
      purpose: "Final evidence, privacy, brand, and approval checklist.",
      sourceTools: ["creative_asset_review", "creative_client_handoff"],
      format: "markdown",
    },
  ];
  if (params.includeVideo) {
    files.push({
      path: `${packageName}/video-storyboard.md`,
      purpose: "Scene-by-scene video storyboard and production notes.",
      sourceTools: ["creative_video_storyboard", "creative_prompt_export"],
      format: "markdown",
    });
  }
  if (params.includeClientHandoff) {
    files.push({
      path: `${packageName}/client-handoff.md`,
      purpose: "Agency/client-ready summary of scan, assets, claims, approvals, and fixes.",
      sourceTools: ["creative_client_handoff"],
      format: "markdown",
    });
  }
  if (params.includeCsv) {
    files.push({
      path: `${packageName}/shot-list.csv`,
      purpose: "Spreadsheet-friendly shot list for production tracking.",
      sourceTools: ["creative_capture_report", "creative_shot_selection"],
      format: "csv",
    });
  }

  return {
    productName: params.productName ?? "Website product",
    packageName,
    recommendedFiles: files,
    creationOrder: [
      "Confirm scan evidence and approvals.",
      "Create launch brief.",
      "Export asset matrix.",
      "Export image/video prompts.",
      "Export social copy.",
      "Export client handoff if needed.",
      "Run final human review before publishing.",
    ],
    approvalGates: [
      "User approves use of screenshots and video clips.",
      "Claims are evidence-backed or user-confirmed.",
      "No private data is present.",
      "Brand/legal/platform review completed before public use.",
    ],
  };
}

function makeLaunchBrief(params: {
  intelligence: SiteIntelligence;
  audit?: MarketabilityAudit;
  evidenceMap?: { items?: EvidenceMapItem[]; summary?: string };
  assetMatrix?: { matrix?: Array<Record<string, unknown>> };
  launchGoal?: string;
}) {
  const intelligence = params.intelligence;
  const supportedClaims = params.evidenceMap?.items
    ?.filter((item) => item.status === "supported")
    .map((item) => item.claim) ?? [];
  const riskyClaims = params.evidenceMap?.items
    ?.filter((item) => item.status !== "supported")
    .map((item) => `${item.claim} (${item.status})`) ?? [];
  const matrixRows = params.assetMatrix?.matrix
    ?.map((item) => `- ${String(item.asset ?? "Asset")}: ${String(item.screenshotRef ?? "missing-shot")} - ${String(item.claim ?? "claim pending")}`)
    .join("\n") ?? "- Asset matrix not supplied.";

  const markdown = [
    `# ${intelligence.productName} Launch Brief`,
    "",
    `Website: ${intelligence.websiteUrl}`,
    `Launch goal: ${params.launchGoal ?? "Create evidence-based launch assets from the real product."}`,
    "",
    "## Product Summary",
    intelligence.productSummary,
    "",
    "## Audience",
    ...intelligence.audience.map((item) => `- ${item}`),
    "",
    "## Positioning",
    ...intelligence.positioning.map((item) => `- ${item}`),
    "",
    "## Marketability",
    `Readiness: ${params.audit?.readiness ?? "not audited"}`,
    `Score: ${params.audit?.score ?? "not scored"}`,
    `Next action: ${params.audit?.nextAction ?? intelligence.recommendedNextAction}`,
    "",
    "## Supported Claims",
    ...(supportedClaims.length > 0 ? supportedClaims.map((claim) => `- ${claim}`) : ["- No supported claims supplied yet."]),
    "",
    "## Risky Or Unverified Claims",
    ...(riskyClaims.length > 0 ? riskyClaims.map((claim) => `- ${claim}`) : ["- None supplied."]),
    "",
    "## Asset Matrix",
    matrixRows,
    "",
    "## Fix Before Launch",
    ...(params.audit?.recommendedFixes ?? ["Run marketability audit and asset review before public launch."]).map((fix) => `- ${fix}`),
  ].join("\n");

  return {
    productName: intelligence.productName,
    fileName: "launch-brief.md",
    markdown,
  };
}

function makePromptExport(params: {
  productName?: string;
  imagePromptPack?: { prompts?: Array<{ format?: string; prompt?: string; negativePrompt?: string }> };
  videoStoryboard?: { storyboard?: Array<Record<string, unknown>>; productionNotes?: string[] };
}) {
  const imagePrompts = params.imagePromptPack?.prompts ?? [];
  const videoScenes = params.videoStoryboard?.storyboard ?? [];
  const markdown = [
    `# ${params.productName ?? "Product"} Prompt Export`,
    "",
    "## Image Prompts",
    ...(imagePrompts.length > 0
      ? imagePrompts.flatMap((item, index) => [
          `### ${index + 1}. ${item.format ?? "Image"}`,
          item.prompt ?? "Prompt missing.",
          "",
          `Negative prompt: ${item.negativePrompt ?? "None supplied."}`,
          "",
        ])
      : ["No image prompts supplied.", ""]),
    "## Video Storyboard Prompts",
    ...(videoScenes.length > 0
      ? videoScenes.map((scene, index) =>
          `${index + 1}. ${String(scene.time ?? "")} ${String(scene.title ?? "Scene")}: ${String(scene.direction ?? "")}`,
        )
      : ["No video storyboard supplied."]),
    "",
    "## Production Notes",
    ...(params.videoStoryboard?.productionNotes ?? ["Human review required before generation or publication."]).map((note) => `- ${note}`),
  ].join("\n");

  return {
    productName: params.productName ?? "Product",
    fileName: "image-and-video-prompts.md",
    markdown,
  };
}

function makeSocialCopyPack(params: {
  productName: string;
  websiteUrl?: string;
  tagline?: string;
  supportedClaims?: string[];
  audience?: string;
  tone?: string;
}) {
  const claims = asList(params.supportedClaims, ["a real product workflow visible in the captured app screens"]);
  const tagline = params.tagline ?? `${params.productName} turns a real product journey into a clear launch.`;
  const url = params.websiteUrl ?? "Add launch URL";
  return {
    productName: params.productName,
    markdown: [
      `# ${params.productName} Social Copy`,
      "",
      "## LinkedIn",
      `${tagline}\n\nWe are launching ${params.productName} for ${params.audience ?? "teams that need a clearer product workflow"}.\n\nWhat stood out in the product:\n${claims.map((claim) => `- ${claim}`).join("\n")}\n\n${url}`,
      "",
      "## X / Twitter",
      `Launching ${params.productName}: ${claims[0]}.\n\n${url}`,
      "",
      "## Product Hunt",
      `${params.productName} helps ${params.audience ?? "users"} with ${claims[0]}. Built from real product screens and ready for human review before launch.`,
      "",
      "## Indie Hackers",
      `I am launching ${params.productName}. The current launch angle is simple: ${claims[0]}.\n\nI would love feedback on the product flow and positioning.\n\n${url}`,
      "",
      "## Email Announcement",
      `Subject: Introducing ${params.productName}\n\nHi,\n\n${tagline}\n\nThe product focuses on ${claims.slice(0, 3).join(", ")}.\n\nTake a look here: ${url}\n\nThanks`,
      "",
      "## Website Banner",
      `${tagline}`,
    ].join("\n"),
    platforms: ["LinkedIn", "X/Twitter", "Product Hunt", "Indie Hackers", "Email", "Website banner"],
  };
}

function makeClientHandoff(params: {
  productName: string;
  websiteUrl?: string;
  scanSummary?: string;
  captureReport?: CaptureReport;
  audit?: MarketabilityAudit;
  assetMatrix?: { matrix?: Array<Record<string, unknown>> };
  pendingApprovals?: string[];
}) {
  const pendingApprovals = asList(params.pendingApprovals, [
    "Approve screenshots and video clips for external use.",
    "Approve all public claims.",
    "Confirm no private data is visible.",
  ]);
  const assets = params.assetMatrix?.matrix
    ?.map((item) => `- ${String(item.asset ?? "Asset")}: ${String(item.productionStatus ?? "status unknown")}`)
    ?? ["- Asset matrix not supplied."];

  return {
    productName: params.productName,
    fileName: "client-handoff.md",
    markdown: [
      `# ${params.productName} Creative Handoff`,
      "",
      `Website: ${params.websiteUrl ?? "not supplied"}`,
      "",
      "## Scan Summary",
      params.scanSummary ?? "Full-site scan summary not supplied.",
      "",
      "## Capture Summary",
      `Total captures: ${params.captureReport?.totalCaptures ?? "not supplied"}`,
      `Approved captures: ${params.captureReport?.approvedCaptures.length ?? "not supplied"}`,
      `Weak captures: ${params.captureReport?.weakCaptures.length ?? "not supplied"}`,
      "",
      "## Marketability",
      `Readiness: ${params.audit?.readiness ?? "not audited"}`,
      `Score: ${params.audit?.score ?? "not scored"}`,
      `Next action: ${params.audit?.nextAction ?? "Run marketability audit before public launch."}`,
      "",
      "## Recommended Assets",
      ...assets,
      "",
      "## Pending Approvals",
      ...pendingApprovals.map((item) => `- ${item}`),
      "",
      "## Fix Before Launch",
      ...(params.audit?.recommendedFixes ?? ["Complete final human review."]).map((item) => `- ${item}`),
    ].join("\n"),
  };
}

function makeAgencyReport(params: {
  clientName?: string;
  agencyName?: string;
  preparedBy?: string;
  reportDate?: string;
  productName: string;
  websiteUrl?: string;
  scanSummary?: ScanSessionSummary | string;
  intelligence?: SiteIntelligence;
  marketabilityAudit?: MarketabilityAudit;
  productAudit?: ProductAudit;
  captureReport?: CaptureReport;
  assetMatrix?: { matrix?: Array<Record<string, unknown>> };
  launchWindow?: string;
  recommendedLaunchSequence?: string[];
  includeLovablePrompts?: boolean;
  nextCommercialStep?: string;
}) {
  const productName = params.productName;
  const websiteUrl = params.websiteUrl ?? params.intelligence?.websiteUrl ?? params.productAudit?.websiteUrl ?? "not supplied";
  const productSummary =
    params.productAudit?.productUnderstanding.summary ??
    params.intelligence?.productSummary ??
    "Product summary not supplied. Run `creative_site_intelligence` before final delivery.";
  const readiness =
    params.productAudit?.overallReadiness ??
    params.marketabilityAudit?.readiness ??
    "not audited";
  const score =
    params.productAudit?.score ??
    params.marketabilityAudit?.score ??
    "not scored";
  const strongestScreens =
    params.productAudit?.screenDiagnosis.strongestScreens ??
    params.marketabilityAudit?.strongestScreens ??
    params.captureReport?.approvedCaptures.map((capture) => capture.ref) ??
    [];
  const weakScreens =
    params.productAudit?.screenDiagnosis.weakOrBrokenScreens ??
    params.marketabilityAudit?.weakScreens ??
    params.captureReport?.weakCaptures.map((capture) => `${capture.ref} (${capture.url})`) ??
    [];
  const trustGaps =
    params.productAudit?.marketingDiagnosis.missingTrustSignals ??
    params.intelligence?.proofGaps ??
    params.marketabilityAudit?.missingEvidence ??
    [];
  const fixes =
    params.productAudit?.fixBeforePromotion ??
    params.marketabilityAudit?.recommendedFixes ??
    ["Complete Creative Audit Mode before sending a final client report."];
  const recommendedAssets =
    params.productAudit?.recommendedAssets.map((asset) =>
      `- ${asset.asset}: ${asset.readiness}. Source screens: ${asset.sourceScreens.join(", ") || "not selected"}. ${asset.purpose}`,
    ) ??
    params.assetMatrix?.matrix?.map((item) =>
      `- ${String(item.asset ?? "Asset")}: ${String(item.productionStatus ?? "status unknown")}. Source: ${String(item.screenshotRef ?? "not selected")}`,
    ) ??
    ["- Asset plan not supplied. Run `creative_launch_asset_matrix` before delivery."];
  const launchSequence = asList(params.recommendedLaunchSequence, [
    "Fix launch-blocking screen, trust, and claim issues.",
    "Rescan the improved product and approve screenshots.",
    "Create Product Hunt, social, website, and demo-video assets from approved screens.",
    "Run final claim, privacy, and brand review.",
    "Publish in the agreed launch window.",
  ]);
  const scanSummary =
    typeof params.scanSummary === "string"
      ? params.scanSummary
      : params.scanSummary
        ? [
            `Visited routes: ${params.scanSummary.visited.length}`,
            `Captured evidence: ${params.scanSummary.captured.length}`,
            `Blocked routes: ${params.scanSummary.blocked.length}`,
            `Errors seen: ${params.scanSummary.errors.length}`,
            `Route coverage: ${params.scanSummary.routeCoverage}`,
          ].join("\n")
        : "Scan summary not supplied.";
  const lovablePrompts =
    params.includeLovablePrompts
      ? asList(params.productAudit?.lovableFixPrompts, [
          `Improve ${productName} for launch: remove placeholder content, polish weak screens, clarify CTAs, and make the main workflow screenshot-ready on desktop and mobile.`,
        ])
      : [];

  return {
    productName,
    fileName: `${productName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-agency-report.md`,
    reportType: "agency-report",
    markdown: [
      `# ${productName} Launch Readiness Report`,
      "",
      `Client: ${params.clientName ?? "not supplied"}`,
      `Prepared by: ${params.preparedBy ?? params.agencyName ?? "ClawKit Creative Studio for Lovable"}`,
      `Date: ${params.reportDate ?? "not supplied"}`,
      `Website: ${websiteUrl}`,
      `Launch window: ${params.launchWindow ?? "not supplied"}`,
      "",
      "## Executive Summary",
      `${productName} was reviewed for product clarity, screen quality, evidence strength, launch asset readiness, and claim safety.`,
      "",
      `Readiness: ${readiness}`,
      `Score: ${score}`,
      `Recommended next commercial step: ${params.nextCommercialStep ?? "Fix the listed blockers, rescan, and then produce final launch assets."}`,
      "",
      "## What The Product Does",
      productSummary,
      "",
      "## Audience And Positioning",
      ...(params.productAudit?.productUnderstanding.audience ?? params.intelligence?.audience ?? ["Audience not supplied."]).map((item) => `- ${item}`),
      "",
      ...(params.productAudit?.productUnderstanding.positioning ?? params.intelligence?.positioning ?? ["Positioning not supplied."]).map((item) => `- ${item}`),
      "",
      "## Scan Evidence",
      scanSummary,
      "",
      "## Strongest Screens",
      ...(strongestScreens.length > 0 ? strongestScreens.map((item) => `- ${item}`) : ["- No approved strongest screens supplied."]),
      "",
      "## Weak Or Broken Screens",
      ...(weakScreens.length > 0 ? weakScreens.map((item) => `- ${item}`) : ["- No weak screens supplied. Confirm with final visual review."]),
      "",
      "## Trust And Evidence Gaps",
      ...(trustGaps.length > 0 ? trustGaps.map((item) => `- ${item}`) : ["- No trust gaps supplied. Confirm claims before publishing."]),
      "",
      "## Recommended Promotional Assets",
      ...recommendedAssets,
      "",
      "## Suggested Launch Sequence",
      ...launchSequence.map((item, index) => `${index + 1}. ${item}`),
      "",
      "## Fix Before Publishing",
      ...fixes.map((item) => `- ${item}`),
      "",
      "## Before We Publish Checklist",
      "- Screenshots and video clips approved for public use.",
      "- No private customer data, secrets, or admin content visible.",
      "- Claims are visible in the product or confirmed by the client.",
      "- Mobile and desktop versions of the main flow have been checked.",
      "- Final assets have been reviewed by the client.",
      ...(lovablePrompts.length > 0
        ? [
            "",
            "## Optional Lovable Fix Prompts",
            ...lovablePrompts.map((prompt) => `- ${prompt}`),
          ]
        : []),
    ].join("\n"),
  };
}

function makeLovableReadinessFeedback(params: {
  productName?: string;
  lovableUrl?: string;
  weakScreens?: string[];
  visualIssues?: string[];
  missingProof?: string[];
  missingScreens?: string[];
  targetLaunchAssets?: string[];
}) {
  const weakScreens = asList(params.weakScreens, []);
  const visualIssues = asList(params.visualIssues, []);
  const missingProof = asList(params.missingProof, []);
  const missingScreens = asList(params.missingScreens, []);
  const targetAssets = asList(params.targetLaunchAssets, [
    "Product Hunt gallery",
    "LinkedIn launch image",
    "X/Twitter launch visual",
    "30-second demo storyboard",
  ]);
  const prompts = [
    ...(weakScreens.length > 0
      ? [`Improve these launch-critical screens so they are screenshot-ready: ${weakScreens.join("; ")}. Remove placeholders, align spacing, clarify hierarchy, and use safe demo data.`]
      : []),
    ...(visualIssues.length > 0
      ? [`Fix these visual issues before launch capture: ${visualIssues.join("; ")}. Verify desktop and mobile layouts after changes.`]
      : []),
    ...(missingProof.length > 0
      ? [`Add or improve proof sections that support marketing claims: ${missingProof.join("; ")}. Keep claims factual and visible on screen.`]
      : []),
    ...(missingScreens.length > 0
      ? [`Create screenshot-ready screens for: ${missingScreens.join("; ")}. Each screen should have a clear headline, realistic demo state, and obvious CTA or product value.`]
      : []),
    `Prepare the app for these launch assets: ${targetAssets.join(", ")}. Prioritize screens that show real product value, not generic landing-page copy.`,
  ];

  return {
    productName: params.productName ?? "Lovable app",
    lovableUrl: params.lovableUrl ?? null,
    readiness:
      weakScreens.length + visualIssues.length + missingProof.length + missingScreens.length > 0
        ? "needs-lovable-polish"
        : "ready-for-creative-capture",
    lovablePrompts: prompts,
    acceptanceCriteria: [
      "No placeholder data appears in launch screenshots.",
      "Mobile layout is clean for the main conversion path.",
      "Primary CTA is visible and understandable.",
      "At least one product screen supports each major marketing claim.",
      "Screens are ready for Product Hunt/social/video capture.",
    ],
    nextAction:
      prompts.length > 1
        ? "Send the focused prompt to Lovable, then rerun browser scan and capture report."
        : "Proceed to capture report, shot selection, and export pack.",
  };
}

function makeLovableProjectContext(params: {
  productName?: string;
  lovableUrl: string;
  githubRepoUrl?: string;
  productGoal: string;
  launchGoal?: string;
  stack?: string[];
  lastClawKitReadinessSummary?: string;
  knownRisks?: string[];
}): LovableProjectContext {
  const productName = params.productName ?? "Lovable app";
  const stack = asList(params.stack, ["Lovable-generated app; inspect GitHub/package evidence if available."]);
  const launchGoal = params.launchGoal ?? "Turn the Lovable app into launch-ready promotional assets.";
  return {
    productName,
    lovableUrl: normalizeUrl(params.lovableUrl),
    githubRepoUrl: params.githubRepoUrl ?? null,
    productGoal: params.productGoal,
    launchGoal,
    sourceOfTruth: params.githubRepoUrl
      ? "Use GitHub/OpenClaw evidence for engineering truth, and Lovable preview/deployed URL for visual launch readiness."
      : "Use Lovable preview/deployed URL for visual launch readiness; ask for GitHub repo when engineering fixes are needed.",
    stack,
    readinessSummary: params.lastClawKitReadinessSummary ?? null,
    creativePriorities: [
      "Verify the app is live and visually stable.",
      "Scan full product journey, not only the homepage.",
      "Identify weak launch screens before generating assets.",
      "Capture screenshot-safe demo states.",
      "Create Product Hunt, social, video, and client handoff assets only from supported evidence.",
      ...asList(params.knownRisks, []).map((risk) => `Risk to manage: ${risk}`),
    ],
    recommendedWorkflow: [
      "creative_lovable_project_context",
      "creative_lovable_to_launch_workflow",
      "creative_browser_scan_recipe",
      "creative_route_discovery_plan",
      "creative_scan_session_summary",
      "creative_lovable_readiness_feedback",
      "creative_capture_report",
      "creative_launch_asset_matrix",
      "creative_export_plan",
    ],
  };
}

function makeLovableToLaunchWorkflow(params: {
  context: LovableProjectContext;
  needsEngineeringFixes?: boolean;
  needsLovablePolish?: boolean;
  includeExportPack?: boolean;
}) {
  const context = params.context;
  return {
    productName: context.productName,
    workflowName: "Lovable app to launch assets",
    phases: [
      {
        phase: "1. Verify app source",
        steps: [
          `Open Lovable/deployed URL: ${context.lovableUrl}`,
          ...(context.githubRepoUrl ? [`Confirm GitHub repo context: ${context.githubRepoUrl}`] : ["Ask for GitHub repo if code fixes may be needed."]),
          "Confirm the user approves browsing, screenshots, and optional video notes.",
        ],
      },
      {
        phase: "2. Scan product journey",
        steps: [
          "Run Browser Scan recipe in Lovable preview mode.",
          "Discover routes from nav, CTAs, app menus, and public proof pages.",
          "Capture desktop and mobile evidence.",
          "Summarize visited, captured, blocked, and broken routes.",
        ],
      },
      {
        phase: "3. Fix before launch",
        steps: [
          ...(params.needsLovablePolish ? ["Use Lovable readiness feedback to create focused Lovable polish prompts."] : ["Use Lovable polish only if scan finds weak visual screens."]),
          ...(params.needsEngineeringFixes ? ["Hand engineering bugs to ClawKit for Lovable / OpenClaw code tools."] : ["Keep engineering changes out unless scan evidence shows build/runtime issues."]),
          "Rescan after fixes before generating final assets.",
        ],
      },
      {
        phase: "4. Produce launch pack",
        steps: [
          "Create site intelligence and marketability audit.",
          "Map claims to evidence.",
          "Create capture report, shot selection, and asset matrix.",
          "Generate launch pack, image prompts, video storyboard, and social copy.",
          ...(params.includeExportPack ? ["Create Export Pack handoff files with user approval."] : ["Offer Export Pack if user wants reusable files."]),
        ],
      },
    ],
    approvalGates: [
      "Approval before browsing private/app screens.",
      "Approval before screenshots or video capture.",
      "Approval before sending fixes back to Lovable.",
      "Approval before publishing or delivering final assets.",
    ],
    successCriteria: [
      "The app has screenshot-ready desktop and mobile screens.",
      "Every major launch claim is supported by visible evidence or user confirmation.",
      "Weak Lovable screens have focused fix prompts.",
      "Final assets are mapped to exact screenshots and approval gates.",
    ],
  };
}

function makeLovableFixPromptPack(params: {
  productName?: string;
  weakScreens?: string[];
  visualIssues?: string[];
  missingScreens?: string[];
  missingProof?: string[];
  targetAssets?: string[];
  preserve?: string[];
}) {
  const productName = params.productName ?? "the app";
  const preserve = asList(params.preserve, [
    "Preserve the current product concept, main navigation, and working functionality.",
  ]);
  const targetAssets = asList(params.targetAssets, [
    "Product Hunt gallery",
    "LinkedIn launch visual",
    "X/Twitter image",
    "30-second demo storyboard",
  ]);
  const prompts = [
    {
      name: "Screenshot-ready launch polish",
      prompt: [
        `Improve ${productName} so it is ready for public launch screenshots.`,
        `Target assets: ${targetAssets.join(", ")}.`,
        `Preserve: ${preserve.join(" ")}`,
        `Fix weak screens: ${asList(params.weakScreens, ["none supplied"]).join("; ")}.`,
        `Fix visual issues: ${asList(params.visualIssues, ["none supplied"]).join("; ")}.`,
        "Use realistic demo data, clear headings, visible CTAs, and polished desktop/mobile layouts.",
      ].join(" "),
    },
    {
      name: "Proof and claim support",
      prompt: [
        `Add or improve visible proof for ${productName}.`,
        `Missing proof: ${asList(params.missingProof, ["confirm the strongest public claims"]).join("; ")}.`,
        "Make claims visible, specific, and conservative. Do not invent metrics, customers, integrations, or compliance.",
      ].join(" "),
    },
    {
      name: "Missing launch screens",
      prompt: [
        `Create or improve these screenshot-critical screens for ${productName}: ${asList(params.missingScreens, ["homepage hero, primary feature, mobile view, CTA/proof screen"]).join("; ")}.`,
        "Each screen should be clean, responsive, and useful as a standalone marketing screenshot.",
      ].join(" "),
    },
  ];
  return {
    productName,
    prompts,
    usage: [
      "Send one focused prompt at a time to Lovable.",
      "Rescan after each Lovable pass.",
      "Do not generate final launch assets until the capture report is clean.",
    ],
  };
}

function makeCrossPluginHandoff(params: {
  productName?: string;
  lovableUrl?: string;
  githubRepoUrl?: string;
  buildStatus?: string;
  readinessStatus?: string;
  creativeStatus?: string;
  nextOwner?: "clawkit-for-lovable" | "clawkit-creative-studio" | "user";
  blockers?: string[];
}) {
  const nextOwner = params.nextOwner ?? "clawkit-creative-studio";
  return {
    productName: params.productName ?? "Lovable app",
    lovableUrl: params.lovableUrl ?? null,
    githubRepoUrl: params.githubRepoUrl ?? null,
    handoffSummary: [
      `Build/stability: ${params.buildStatus ?? "not supplied"}`,
      `Lovable readiness: ${params.readinessStatus ?? "not supplied"}`,
      `Creative readiness: ${params.creativeStatus ?? "not supplied"}`,
    ],
    divisionOfLabor: {
      "ClawKit for Lovable": [
        "Build, rescue, refactor, verify, GitHub handoff, code fixes, and visible result checks.",
        "Fix runtime/build problems and structural app issues before launch capture.",
      ],
      "ClawKit Creative Studio for Lovable": [
        "Full-site scan, screenshot inventory, marketability audit, claim evidence, creative prompts, export pack, and launch handoff.",
        "Turn stable app screens into promotional assets.",
      ],
    },
    blockers: asList(params.blockers, []),
    nextOwner,
    nextActions: nextOwner === "clawkit-for-lovable"
      ? [
          "Fix build/runtime/visual readiness issues.",
          "Verify the app with browser and screenshot evidence.",
          "Return to Creative Studio after the app is screenshot-ready.",
        ]
      : nextOwner === "clawkit-creative-studio"
        ? [
            "Run Lovable project context.",
            "Run Browser Scan and route discovery.",
            "Create capture report, marketability audit, and launch assets.",
          ]
        : ["Ask the user to approve the next scan, fix, or publication step."],
  };
}

function makeDemoRunbook(params: {
  productName?: string;
  websiteUrl?: string;
  audience?: string;
  demoLengthMinutes?: number;
  includeLovableBridge?: boolean;
}) {
  const productName = params.productName ?? "Demo product";
  const websiteUrl = params.websiteUrl ?? "https://example.com";
  const minutes = params.demoLengthMinutes ?? 12;
  const steps = [
    {
      minute: "0-1",
      title: "Set the promise",
      script: `Show that ClawKit Creative Studio for Lovable scans more than a landing page: it understands ${productName}'s product journey and turns it into launch assets.`,
      tool: "creative_user_onboarding",
    },
    {
      minute: "1-3",
      title: "Plan the scan",
      script: `Use ${websiteUrl}, create the browser scan recipe, discover routes, and explain approval gates before capture.`,
      tool: "creative_browser_scan_recipe + creative_route_discovery_plan",
    },
    {
      minute: "3-5",
      title: "Summarize evidence",
      script: "Show visited routes, screenshots, blocked areas, and coverage. Emphasize that the workflow is evidence-based.",
      tool: "creative_scan_session_summary",
    },
    {
      minute: "5-7",
      title: "Audit launch readiness",
      script: "Run marketability audit and evidence map. Show supported claims versus risky claims.",
      tool: "creative_marketability_audit + creative_evidence_map",
    },
    {
      minute: "7-9",
      title: "Choose assets",
      script: "Create capture report, shot selection, visual issue report, and asset matrix.",
      tool: "creative_capture_report + creative_shot_selection + creative_launch_asset_matrix",
    },
    {
      minute: "9-11",
      title: "Export the launch pack",
      script: "Generate launch brief, prompt export, social copy, and client handoff.",
      tool: "creative_export_plan + creative_launch_brief + creative_client_handoff",
    },
    {
      minute: `${Math.max(11, minutes - 1)}-${minutes}`,
      title: "Close with QA",
      script: "Run the quality scorecard and show the next action.",
      tool: "creative_quality_scorecard",
    },
  ];
  if (params.includeLovableBridge) {
    steps.splice(2, 0, {
      minute: "2-4",
      title: "Lovable bridge moment",
      script: "Show how weak launch screens become focused Lovable prompts, then hand back to Creative Studio after rescan.",
      tool: "creative_lovable_project_context + creative_lovable_fix_prompt_pack",
    });
  }
  return {
    productName,
    audience: params.audience ?? "founders, Lovable users, agencies, and product marketers",
    demoLengthMinutes: minutes,
    runbook: steps,
    proofMoments: [
      "Whole-site scan plan, not homepage-only.",
      "Evidence-backed claims.",
      "Exact screenshot-to-asset mapping.",
      "Exportable launch handoff.",
      "Lovable app polish loop when needed.",
    ],
    presenterNotes: [
      "Keep the demo concrete: URL in, launch pack out.",
      "Do not overpromise automated video generation; show storyboard and prompt handoff.",
      "Emphasize that trust is the differentiator: no unsupported claims, no private data.",
    ],
  };
}

function makeSampleProjectPack(params: {
  productName?: string;
  productType?: string;
  includeLovableExample?: boolean;
}) {
  const productName = params.productName ?? "Northstar CRM";
  const productType = params.productType ?? "AI-assisted CRM for small agencies";
  const websiteUrl = `https://example.com/${productName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return {
    productName,
    productType,
    sampleInputs: {
      websiteUrl,
      goal: "Create a launch pack for Product Hunt, LinkedIn, X/Twitter, and a 30-second demo storyboard.",
      knownRoutes: ["/", "/features", "/pricing", "/demo", "/dashboard"],
      targetAudience: "small agency owners who need client follow-up discipline",
    },
    sampleScanEvidence: [
      {
        url: `${websiteUrl}/`,
        purpose: "homepage/app entry",
        visibleFeatures: ["pipeline overview", "AI follow-up suggestions"],
        primaryCta: "Start free trial",
        screenshotRef: "screenshots/01-home-desktop.png",
      },
      {
        url: `${websiteUrl}/dashboard`,
        purpose: "primary feature",
        visibleFeatures: ["client pipeline", "next-best-action panel", "weekly revenue forecast"],
        primaryCta: "Review next action",
        screenshotRef: "screenshots/02-dashboard-demo.png",
      },
    ],
    sampleOutputs: {
      supportedClaim: "Shows a client pipeline with AI follow-up suggestions.",
      riskyClaim: "Doubles agency revenue in 30 days.",
      assetMatrixRow: {
        asset: "Product Hunt slide 1",
        screenshotRef: "screenshots/02-dashboard-demo.png",
        claim: "Keep agency follow-ups moving from one dashboard.",
      },
      socialPost:
        "Launching Northstar CRM: a simple agency pipeline with AI follow-up suggestions, built from real product screens.",
    },
    lovableExample: params.includeLovableExample
      ? {
          weakScreen: "Mobile dashboard cards overlap at 390px width.",
          fixPrompt:
            "Fix the mobile dashboard layout for launch screenshots. Keep the same content, but make cards stack cleanly, keep the CTA visible, and use realistic demo data.",
        }
      : null,
  };
}

function makeQualityScorecard(params: {
  productName?: string;
  routeCoverage?: "low" | "medium" | "high";
  approvedCaptureCount?: number;
  weakCaptureCount?: number;
  supportedClaimCount?: number;
  riskyClaimCount?: number;
  assetMatrixComplete?: boolean;
  exportPackComplete?: boolean;
  privacyReviewed?: boolean;
  humanApproved?: boolean;
}): QualityScorecard {
  const routeScore = params.routeCoverage === "high" ? 100 : params.routeCoverage === "medium" ? 70 : 35;
  const captureScore = clampScore((params.approvedCaptureCount ?? 0) * 15 - (params.weakCaptureCount ?? 0) * 15);
  const claimScore = clampScore((params.supportedClaimCount ?? 0) * 20 - (params.riskyClaimCount ?? 0) * 25);
  const matrixScore = params.assetMatrixComplete ? 100 : 35;
  const exportScore = params.exportPackComplete ? 100 : 40;
  const safetyScore = params.privacyReviewed && params.humanApproved ? 100 : params.privacyReviewed ? 75 : 25;
  const dimensions = [
    {
      name: "Scan coverage",
      score: routeScore,
      status: routeScore >= 80 ? "pass" as const : routeScore >= 60 ? "watch" as const : "fail" as const,
      notes: [`Route coverage is ${params.routeCoverage ?? "not supplied"}.`],
    },
    {
      name: "Screenshot quality",
      score: captureScore,
      status: captureScore >= 80 ? "pass" as const : captureScore >= 50 ? "watch" as const : "fail" as const,
      notes: [`Approved captures: ${params.approvedCaptureCount ?? 0}. Weak captures: ${params.weakCaptureCount ?? 0}.`],
    },
    {
      name: "Claim support",
      score: claimScore,
      status: claimScore >= 80 ? "pass" as const : claimScore >= 50 ? "watch" as const : "fail" as const,
      notes: [`Supported claims: ${params.supportedClaimCount ?? 0}. Risky claims: ${params.riskyClaimCount ?? 0}.`],
    },
    {
      name: "Asset matrix",
      score: matrixScore,
      status: matrixScore >= 80 ? "pass" as const : "fail" as const,
      notes: [params.assetMatrixComplete ? "Asset matrix is complete." : "Asset matrix is missing or incomplete."],
    },
    {
      name: "Export readiness",
      score: exportScore,
      status: exportScore >= 80 ? "pass" as const : "watch" as const,
      notes: [params.exportPackComplete ? "Export pack is complete." : "Export pack still needs handoff files."],
    },
    {
      name: "Launch safety",
      score: safetyScore,
      status: safetyScore >= 80 ? "pass" as const : safetyScore >= 60 ? "watch" as const : "fail" as const,
      notes: [
        params.privacyReviewed ? "Privacy review completed." : "Privacy review missing.",
        params.humanApproved ? "Human approval completed." : "Human approval missing.",
      ],
    },
  ];
  const overallScore = clampScore(dimensions.reduce((sum, item) => sum + item.score, 0) / dimensions.length);
  const grade: QualityScorecard["grade"] =
    overallScore >= 85 ? "excellent" : overallScore >= 70 ? "good" : overallScore >= 50 ? "needs-work" : "not-ready";
  const blockers = dimensions
    .filter((item) => item.status === "fail")
    .map((item) => `${item.name}: ${item.notes.join(" ")}`);
  return {
    productName: params.productName ?? "Website product",
    overallScore,
    grade,
    dimensions,
    blockers,
    nextActions: blockers.length > 0
      ? [
          "Fix failed scorecard dimensions before launch.",
          "Rerun scan/capture/evidence/export steps after fixes.",
        ]
      : [
          "Run final asset review.",
          "Get user approval before publishing or client delivery.",
        ],
  };
}

function makeUserOnboarding(params: {
  userGoal?: string;
  experienceLevel?: "beginner" | "builder" | "agency" | "marketer";
  hasLovableApp?: boolean;
}) {
  const hasLovableApp = params.hasLovableApp ?? false;
  return {
    product: "ClawKit Creative Studio for Lovable",
    intro:
      "Give me a website or app URL. I can help OpenClaw scan the product journey, understand what is real, choose screenshots, verify claims, and create launch-ready handoff content.",
    bestFirstRequests: [
      "Scan this app and tell me if it is ready to market.",
      "Create a Product Hunt and social launch pack from this website.",
      "Map my marketing claims to real screenshots and page evidence.",
      "Turn these screenshots into a launch asset matrix.",
      ...(hasLovableApp ? ["Turn my Lovable app into a screenshot-ready launch pack."] : []),
    ],
    decisionPaths: [
      {
        goal: "I do not know what I need.",
        firstTool: "creative_starter_guide",
        next: "Use onboarding, then scan plan.",
      },
      {
        goal: "I need to scan a full site.",
        firstTool: "creative_browser_scan_recipe",
        next: "Run route discovery and scan session summary.",
      },
      {
        goal: "I need better Lovable screens.",
        firstTool: "creative_lovable_project_context",
        next: "Run Lovable fix prompt pack.",
      },
      {
        goal: "I need assets for launch.",
        firstTool: "creative_launch_asset_matrix",
        next: "Run export plan and social copy pack.",
      },
    ],
    guardrails: [
      "I will not treat unsupported claims as facts.",
      "I will ask before private screenshots or video capture.",
      "I will flag weak screens before making polished assets.",
      "I will keep Lovable app fixes focused and rescan after changes.",
    ],
    recommendedNextAction:
      params.userGoal ?? "Share the app or website URL and the launch goal.",
    modeHint: params.experienceLevel
      ? `Use ${params.experienceLevel} language and examples.`
      : "Keep the first run guided and practical.",
  };
}

function makeLaunchPack(params: {
  intelligence: SiteIntelligence;
  launchGoal?: string;
  formats?: string[];
  tone?: string;
}): LaunchPack {
  const intelligence = params.intelligence;
  const firstFeature = intelligence.visibleFeatures[0] ?? "the product's main workflow";
  const formats = asList(params.formats, [
    "Product Hunt gallery",
    "LinkedIn launch image",
    "X/Twitter image",
    "website hero visual",
    "feature card carousel",
  ]);
  const tagline = `${intelligence.productName}: turn the full product story into a clear launch.`;

  return {
    productName: intelligence.productName,
    launchTheme: params.launchGoal ?? "Whole-site product launch based on real screens.",
    campaignPromise: `Show how ${intelligence.productName} helps its audience through ${firstFeature}, using captured product evidence.`,
    proofBasedClaims: [
      ...intelligence.visibleFeatures.slice(0, 5).map((feature) => `Visible feature: ${feature}`),
      ...intelligence.positioning.slice(0, 2),
    ],
    assets: formats.map((format) => ({
      name: `${intelligence.productName} ${format}`,
      format,
      purpose: `Promote ${intelligence.productName} with real product evidence.`,
      sourceScreens: ["Use the strongest approved screenshots from the capture checklist."],
      copy: tagline,
      designDirection:
        "Clean product-led layout, real screenshot as hero object, short benefit headline, one proof detail, and strong contrast for social feeds.",
    })),
    copySet: {
      tagline,
      shortDescription: `${intelligence.productName} is presented through real website/app evidence, with claims limited to confirmed visible features.`,
      linkedinPost: `We are launching ${intelligence.productName}.\n\nInstead of showing only a homepage, this launch highlights the real product journey: ${intelligence.visibleFeatures.slice(0, 3).join(", ") || "key product screens"}.\n\nBuilt from full-site understanding, not a single screenshot.`,
      xPost: `Launching ${intelligence.productName}: a product story built from the actual app, not just the landing page. ${intelligence.launchAngles[0] ?? ""}`,
      productHuntDescription: `${intelligence.productName} helps users through ${firstFeature}. This launch pack should be reviewed against captured screenshots before publishing.`,
    },
    reviewChecklist: [
      "Every claim appears in visible evidence or was confirmed by the user.",
      "No private data appears in screenshots or video.",
      "The most important user flow is represented.",
      "Mobile and desktop visuals are not misleading.",
      "Broken or placeholder screens are excluded.",
    ],
  };
}

function makeImagePromptPack(params: {
  intelligence: SiteIntelligence;
  screenshotRefs?: string[];
  formats?: string[];
  stylePreference?: string;
}) {
  const intelligence = params.intelligence;
  const formats = asList(params.formats, [
    "LinkedIn launch image 1200x627",
    "X/Twitter image 1600x900",
    "Product Hunt gallery 1270x760",
    "Website hero image 16:9",
  ]);
  const screenshots = asList(params.screenshotRefs, [
    "Use approved screenshot references collected by OpenClaw.",
  ]);

  return {
    productName: intelligence.productName,
    imagePrinciples: [
      "Use real product screenshots as the anchor.",
      "Do not invent unsupported UI or features.",
      "Keep text short and legible.",
      "Make the product recognizable in the first glance.",
    ],
    prompts: formats.map((format) => ({
      format,
      prompt: [
        `Create a polished promotional image for ${intelligence.productName}.`,
        `Format: ${format}.`,
        `Use these approved product screenshots: ${screenshots.join(", ")}.`,
        `Audience: ${intelligence.audience.join(", ")}.`,
        `Core message: ${intelligence.launchAngles[0] ?? intelligence.productSummary}.`,
        `Visual direction: ${params.stylePreference ?? intelligence.visualIdentity.styleNotes.join(" ")}`,
        `Brand colors to respect: ${intelligence.visualIdentity.colors.join(", ")}.`,
        "Do not add unsupported product claims, fake logos, fake customer names, or fabricated app screens.",
      ].join(" "),
      negativePrompt:
        "No fake UI, no unreadable text, no private data, no unsupported claims, no distorted screenshots, no excessive decorative clutter.",
    })),
    humanReview: [
      "Check that generated text is spelled correctly.",
      "Check that screenshots are not distorted.",
      "Check that the product promise remains evidence-based.",
    ],
  };
}

function makeVideoStoryboard(params: {
  intelligence: SiteIntelligence;
  durationSeconds?: number;
  orientation?: "horizontal" | "vertical" | "square";
  screenshotRefs?: string[];
  includeVoiceover?: boolean;
}) {
  const intelligence = params.intelligence;
  const duration = params.durationSeconds ?? 30;
  const scenes = duration <= 15
    ? [
        ["0-3s", "Product reveal", `Show ${intelligence.productName} homepage or main app screen.`],
        ["3-9s", "Core workflow", `Show ${intelligence.visibleFeatures[0] ?? "the primary feature"} in action.`],
        ["9-13s", "Benefit proof", "Show one supporting feature or result screen."],
        ["13-15s", "CTA", "End with product name, URL, and short call to action."],
      ]
    : [
        ["0-4s", "Hook", `Open with the problem ${intelligence.productName} solves.`],
        ["4-9s", "Product reveal", "Show the homepage or main app shell."],
        ["9-16s", "Workflow", `Walk through ${intelligence.visibleFeatures[0] ?? "the primary product flow"}.`],
        ["16-23s", "Feature proof", `Show ${intelligence.visibleFeatures.slice(1, 3).join(" and ") || "supporting feature screens"}.`],
        ["23-27s", "Trust/fit", "Show pricing, proof, integration, or audience-specific screen if available."],
        ["27-30s", "CTA", "End with product name, URL, and action."],
      ];

  return {
    productName: intelligence.productName,
    durationSeconds: duration,
    orientation: params.orientation ?? "horizontal",
    screenshotRefs: asList(params.screenshotRefs, [
      "Use approved screenshots and short clips captured by OpenClaw.",
    ]),
    storyboard: scenes.map(([time, title, direction]) => ({
      time,
      title,
      direction,
      onScreenText: title,
      voiceover: params.includeVoiceover
        ? `${title}: ${direction}`
        : "No voiceover requested; use captions or music-led pacing.",
    })),
    productionNotes: [
      "Use real captured screens or approved demo recordings.",
      "Keep scene transitions simple.",
      "Avoid claims not visible in the product evidence.",
      "Use captions large enough for mobile social feeds.",
      "End with a clear CTA.",
    ],
  };
}

function makeLovableLaunchPack(params: {
  lovableUrl: string;
  productName?: string;
  githubRepoUrl?: string;
  targetAudience?: string;
  launchGoal?: string;
}) {
  const url = normalizeUrl(params.lovableUrl);
  return {
    productName: params.productName ?? "Lovable app",
    lovableUrl: url,
    githubRepoUrl: params.githubRepoUrl ?? null,
    positioning:
      "Lovable builds the app. ClawKit Creative Studio for Lovable scans the full app and turns it into launch-ready marketing.",
    workflow: [
      "Open the Lovable preview or deployed URL.",
      "Capture homepage/app shell, mobile view, primary feature screens, onboarding, pricing/CTA, and any proof pages.",
      "Run `creative_site_intelligence` with the captured evidence.",
      "Create Product Hunt gallery prompts, social launch images, demo storyboard, and launch copy.",
      "If the app is incomplete, send the issues back to ClawKit for Lovable or Lovable before launch.",
    ],
    lovableFollowUpPrompts: [
      "Improve the product screens that will appear in launch assets. Remove placeholders, clarify CTAs, and make mobile layout polished.",
      "Create a clean demo-data state for screenshots. Do not include private information.",
      "Add a concise feature section and proof section that support the launch claims.",
    ],
    recommendedAssets: [
      "Product Hunt gallery",
      "LinkedIn launch visual",
      "X/Twitter announcement image",
      "15-second vertical demo storyboard",
      "30-second walkthrough storyboard",
      "Feature card carousel",
    ],
    targetAudience: params.targetAudience ?? "Confirm target audience before final copy.",
    launchGoal: params.launchGoal ?? "Turn the Lovable app into a credible public launch.",
  };
}

function reviewAsset(params: {
  productName?: string;
  assetDescription: string;
  claims?: string[];
  evidence?: string[];
  containsPrivateData?: boolean;
  visualIssues?: string[];
}) {
  const claims = asList(params.claims, []);
  const evidence = asList(params.evidence, []);
  const visualIssues = asList(params.visualIssues, []);
  const risks = [
    ...(params.containsPrivateData ? ["Asset may contain private data. Do not publish."] : []),
    ...(claims.length > evidence.length
      ? ["Some claims may not have enough visible evidence. Confirm before publishing."]
      : []),
    ...visualIssues,
  ];

  return {
    productName: params.productName ?? "Product",
    assetDescription: params.assetDescription,
    publishReadiness: risks.length === 0 ? "ready-for-human-review" : "needs-fix",
    evidenceStatus:
      evidence.length > 0 ? "Evidence supplied for review." : "No evidence supplied. Treat claims as unverified.",
    risks,
    requiredFixes: risks.length > 0
      ? risks
      : ["Human review still required for brand, legal, spelling, and visual accuracy."],
    approvalChecklist: [
      "Claims are visible or user-confirmed.",
      "No private data is visible.",
      "No broken or placeholder UI is featured.",
      "Text is legible in target format.",
      "The asset reflects the real product.",
    ],
  };
}

export default definePluginEntry({
  id: "clawkit-creative-studio",
  name: "ClawKit Creative Studio for Lovable",
  description:
    "Helps OpenClaw understand full websites and apps, then create launch-ready promotional images, copy, and video storyboards.",
  register(api) {
    api.registerTool({
      name: "creative_studio_brain",
      label: "Run Creative Studio Brain",
      description:
        "Choose the next ClawKit Creative Studio for Lovable workflow: orient user, scan, audit, fix before launch, create assets, review assets, or hand off.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.Optional(Type.String()),
        userGoal: Type.Optional(Type.String()),
        isLovableApp: Type.Optional(Type.Boolean()),
        hasScanEvidence: Type.Optional(Type.Boolean()),
        hasScreenshots: Type.Optional(Type.Boolean()),
        hasVideoEvidence: Type.Optional(Type.Boolean()),
        hasProductAudit: Type.Optional(Type.Boolean()),
        hasAssetMatrix: Type.Optional(Type.Boolean()),
        hasLaunchPack: Type.Optional(Type.Boolean()),
        hasUnsupportedClaims: Type.Optional(Type.Boolean()),
        hasPrivateDataRisk: Type.Optional(Type.Boolean()),
        hasWeakScreens: Type.Optional(Type.Boolean()),
        wantsImages: Type.Optional(Type.Boolean()),
        wantsVideo: Type.Optional(Type.Boolean()),
        wantsSocialCopy: Type.Optional(Type.Boolean()),
        wantsClientReport: Type.Optional(Type.Boolean()),
        needsLovableFixes: Type.Optional(Type.Boolean()),
        targetChannel: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeCreativeStudioBrain(params));
      },
    });

    api.registerTool({
      name: "creative_launch_command_center",
      label: "Open Launch Command Center",
      description:
        "Create the top-level launch cockpit: readiness score, workflow state, next action, Product Hunt button, launch blockers, command buttons, and launch-room export plan.",
      parameters: Type.Object({
        productName: Type.String(),
        websiteUrl: Type.Optional(Type.String()),
        launchGoal: Type.Optional(Type.String()),
        targetChannel: Type.Optional(Type.String()),
        isLovableApp: Type.Optional(Type.Boolean()),
        hasGithubRepo: Type.Optional(Type.Boolean()),
        hasScanEvidence: Type.Optional(Type.Boolean()),
        hasScreenshots: Type.Optional(Type.Boolean()),
        hasApprovedCaptures: Type.Optional(Type.Boolean()),
        hasProductAudit: Type.Optional(Type.Boolean()),
        hasAssetMatrix: Type.Optional(Type.Boolean()),
        hasLaunchPack: Type.Optional(Type.Boolean()),
        hasEvidenceMap: Type.Optional(Type.Boolean()),
        hasAssetReview: Type.Optional(Type.Boolean()),
        hasPrivateDataRisk: Type.Optional(Type.Boolean()),
        hasUnsupportedClaims: Type.Optional(Type.Boolean()),
        hasWeakScreens: Type.Optional(Type.Boolean()),
        needsLovableFixes: Type.Optional(Type.Boolean()),
        wantsProductHunt: Type.Optional(Type.Boolean()),
        hasProductHuntWriteAccess: Type.Optional(Type.Boolean()),
        productHuntTagline: Type.Optional(Type.String()),
        productHuntDescription: Type.Optional(Type.String()),
        productHuntMakerComment: Type.Optional(Type.String()),
        productHuntTopics: optionalStringArray("Product Hunt topics or categories."),
        galleryAssets: optionalStringArray("Best approved launch asset references."),
        videoUrl: Type.Optional(Type.String()),
        launchDate: Type.Optional(Type.String()),
        strongestScreens: optionalStringArray("Strongest captured screens."),
        weakScreens: optionalStringArray("Weak or unfinished screens."),
        missingScreens: optionalStringArray("Missing launch screens."),
        supportedClaims: optionalStringArray("Supported launch claims."),
        riskyClaims: optionalStringArray("Risky or unsupported claims."),
        knownFacts: optionalStringArray("Known launch facts already gathered."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLaunchCommandCenter(params));
      },
    });

    api.registerTool({
      name: "creative_launch_room_export",
      label: "Export Launch Room",
      description:
        "Create the actual launch-room package contents: command center JSON, Product Hunt draft, social copy, gallery prompts, demo storyboard, evidence map, asset matrix, checklist, client handoff, and Lovable fix prompts.",
      parameters: Type.Object({
        productName: Type.String(),
        websiteUrl: Type.Optional(Type.String()),
        packageName: Type.Optional(Type.String()),
        launchGoal: Type.Optional(Type.String()),
        targetChannel: Type.Optional(Type.String()),
        commandCenter: Type.Optional(Type.Any()),
        includeProductHunt: Type.Optional(Type.Boolean()),
        includeSocialCopy: Type.Optional(Type.Boolean()),
        includeGalleryPrompts: Type.Optional(Type.Boolean()),
        includeVideoStoryboard: Type.Optional(Type.Boolean()),
        includeClientHandoff: Type.Optional(Type.Boolean()),
        includeLovableFixPrompts: Type.Optional(Type.Boolean()),
        productHuntTagline: Type.Optional(Type.String()),
        productHuntDescription: Type.Optional(Type.String()),
        productHuntMakerComment: Type.Optional(Type.String()),
        productHuntTopics: optionalStringArray("Product Hunt topics or categories."),
        galleryAssets: optionalStringArray("Approved gallery asset references."),
        videoUrl: Type.Optional(Type.String()),
        launchDate: Type.Optional(Type.String()),
        supportedClaims: optionalStringArray("Evidence-backed claims."),
        riskyClaims: optionalStringArray("Risky or unsupported claims."),
        strongestScreens: optionalStringArray("Strongest captured screens."),
        weakScreens: optionalStringArray("Weak or unfinished screens."),
        missingScreens: optionalStringArray("Missing launch screens."),
        fixesBeforeLaunch: optionalStringArray("Fixes required before launch."),
        socialCopy: Type.Optional(Type.Any()),
        galleryPrompts: optionalStringArray("Product Hunt gallery or social image prompts."),
        videoStoryboardScenes: optionalStringArray("Video storyboard scene notes."),
        clientNotes: optionalStringArray("Client or maker handoff notes."),
        knownFacts: optionalStringArray("Known launch facts already gathered."),
        hasScanEvidence: Type.Optional(Type.Boolean()),
        hasScreenshots: Type.Optional(Type.Boolean()),
        hasApprovedCaptures: Type.Optional(Type.Boolean()),
        hasProductAudit: Type.Optional(Type.Boolean()),
        hasAssetMatrix: Type.Optional(Type.Boolean()),
        hasLaunchPack: Type.Optional(Type.Boolean()),
        hasEvidenceMap: Type.Optional(Type.Boolean()),
        hasAssetReview: Type.Optional(Type.Boolean()),
        hasPrivateDataRisk: Type.Optional(Type.Boolean()),
        hasUnsupportedClaims: Type.Optional(Type.Boolean()),
        hasWeakScreens: Type.Optional(Type.Boolean()),
        needsLovableFixes: Type.Optional(Type.Boolean()),
        hasProductHuntWriteAccess: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLaunchRoomExport(params));
      },
    });

    api.registerTool({
      name: "creative_workflow_state",
      label: "Create Creative Workflow State",
      description:
        "Summarize a Creative Studio for Lovable launch situation into a simple state: mode, source of truth, product status, capture status, launch risk, blocker, and next action.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.Optional(Type.String()),
        userGoal: Type.Optional(Type.String()),
        isLovableApp: Type.Optional(Type.Boolean()),
        hasGithubRepo: Type.Optional(Type.Boolean()),
        hasScanEvidence: Type.Optional(Type.Boolean()),
        hasScreenshots: Type.Optional(Type.Boolean()),
        hasApprovedCaptures: Type.Optional(Type.Boolean()),
        hasProductAudit: Type.Optional(Type.Boolean()),
        hasAssetMatrix: Type.Optional(Type.Boolean()),
        hasLaunchPack: Type.Optional(Type.Boolean()),
        hasUnsupportedClaims: Type.Optional(Type.Boolean()),
        hasPrivateDataRisk: Type.Optional(Type.Boolean()),
        hasWeakScreens: Type.Optional(Type.Boolean()),
        needsLovableFixes: Type.Optional(Type.Boolean()),
        targetChannel: Type.Optional(Type.String()),
        knownFacts: optionalStringArray("Creative Studio facts already known to OpenClaw."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeCreativeWorkflowState(params));
      },
    });

    api.registerTool({
      name: "creative_next_action_plan",
      label: "Plan Creative Next Action",
      description:
        "Choose the next safe Creative Studio action so the user does not need to pick between scanning, auditing, fixing screens, creating assets, reviewing, or handoff.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        requestedOutcome: Type.String(),
        workflowState: Type.Optional(Type.Any()),
        websiteUrl: Type.Optional(Type.String()),
        isLovableApp: Type.Optional(Type.Boolean()),
        hasScanEvidence: Type.Optional(Type.Boolean()),
        hasScreenshots: Type.Optional(Type.Boolean()),
        hasApprovedCaptures: Type.Optional(Type.Boolean()),
        hasProductAudit: Type.Optional(Type.Boolean()),
        hasAssetMatrix: Type.Optional(Type.Boolean()),
        hasLaunchPack: Type.Optional(Type.Boolean()),
        hasUnsupportedClaims: Type.Optional(Type.Boolean()),
        hasPrivateDataRisk: Type.Optional(Type.Boolean()),
        hasWeakScreens: Type.Optional(Type.Boolean()),
        needsLovableFixes: Type.Optional(Type.Boolean()),
        targetChannel: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeCreativeNextActionPlan(params));
      },
    });

    api.registerTool({
      name: "creative_starter_guide",
      label: "Creative Studio Guide",
      description:
        "Explain how ClawKit Creative Studio for Lovable uses OpenClaw to scan full websites/apps and create promotional asset packs.",
      parameters: Type.Object({
        userGoal: Type.Optional(Type.String()),
        platform: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(starterGuide(params));
      },
    });

    api.registerTool({
      name: "creative_scan_plan",
      label: "Plan Full-Site Scan",
      description:
        "Create an approval-gated plan for OpenClaw to crawl a website/app, capture screenshots or video evidence, and understand the product.",
      parameters: Type.Object({
        websiteUrl: Type.String(),
        scanGoal: Type.Optional(Type.String()),
        productType: Type.Optional(Type.String()),
        crawlDepth: Type.Optional(Type.Union([
          Type.Literal("light"),
          Type.Literal("standard"),
          Type.Literal("deep"),
        ])),
        knownPages: optionalStringArray("Known pages or app routes the user wants included."),
        authenticated: Type.Optional(Type.Boolean()),
        allowScreenshots: Type.Optional(Type.Boolean()),
        allowVideoCapture: Type.Optional(Type.Boolean()),
        targetAudience: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeScanPlan(params));
      },
    });

    api.registerTool({
      name: "creative_browser_scan_recipe",
      label: "Create Browser Scan Recipe",
      description:
        "Create a repeatable OpenClaw browser inspection protocol for desktop, mobile, console checks, captures, and approved app flows.",
      parameters: Type.Object({
        websiteUrl: Type.String(),
        mode: Type.Optional(Type.Union([
          Type.Literal("public-site"),
          Type.Literal("app-preview"),
          Type.Literal("authenticated-demo"),
          Type.Literal("lovable-preview"),
        ])),
        productType: Type.Optional(Type.String()),
        includeMobile: Type.Optional(Type.Boolean()),
        includeAuthenticatedFlow: Type.Optional(Type.Boolean()),
        includeVideoNotes: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeBrowserScanRecipe(params));
      },
    });

    api.registerTool({
      name: "creative_route_discovery_plan",
      label: "Plan Route Discovery",
      description:
        "Plan how OpenClaw should discover important website/app routes from nav, CTAs, sitemap, menus, links, and approved logged-in areas.",
      parameters: Type.Object({
        websiteUrl: Type.String(),
        knownRoutes: optionalStringArray("Known routes or URLs to include."),
        productType: Type.Optional(Type.String()),
        hasSitemap: Type.Optional(Type.Boolean()),
        hasAuthenticatedArea: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeRouteDiscoveryPlan(params));
      },
    });

    api.registerTool({
      name: "creative_scan_session_summary",
      label: "Summarize Scan Session",
      description:
        "Summarize what OpenClaw visited, captured, could not access, errors seen, route coverage, and next scan actions.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.String(),
        visited: optionalStringArray("Visited URLs or routes."),
        captured: optionalStringArray("Screenshot or capture references."),
        blocked: optionalStringArray("Blocked routes or flows."),
        errors: optionalStringArray("Browser, console, route, or capture errors."),
        discoveredRoutes: optionalStringArray("Routes discovered during browsing."),
        expectedRoutes: optionalStringArray("Expected routes for coverage scoring."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeScanSessionSummary(params));
      },
    });

    api.registerTool({
      name: "creative_site_intelligence",
      label: "Create Site Intelligence",
      description:
        "Turn caller-supplied full-site observations, screenshots, and page notes into a product understanding brief for marketing.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.String(),
        pages: Type.Array(Type.Object({
          url: Type.String(),
          title: Type.Optional(Type.String()),
          purpose: Type.Optional(Type.String()),
          visibleFeatures: optionalStringArray("Features visible on this page."),
          primaryCta: Type.Optional(Type.String()),
          screenshotRef: Type.Optional(Type.String()),
          notes: Type.Optional(Type.String()),
        })),
        targetAudience: Type.Optional(Type.String()),
        observedBrandColors: optionalStringArray("Brand colors observed by OpenClaw."),
        observedTone: Type.Optional(Type.String()),
        userInstruction: Type.Optional(Type.String()),
        knownClaims: optionalStringArray("Claims confirmed by the user or visible in evidence."),
        missingOrBroken: optionalStringArray("Screens, flows, or UI states that are missing or broken."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeSiteIntelligence(params));
      },
    });

    api.registerTool({
      name: "creative_marketability_audit",
      label: "Audit Marketability",
      description:
        "Score whether a scanned website or app is ready for promotional assets, and identify weak screens, missing evidence, risky claims, and next fixes.",
      parameters: Type.Object({
        intelligence: Type.Any(),
        screenshotRefs: optionalStringArray("Approved screenshots or capture references."),
        inspectedPages: optionalStringArray("Pages or flows OpenClaw inspected."),
        brokenOrWeakScreens: optionalStringArray("Screens that are broken, unfinished, placeholder-heavy, or visually weak."),
        supportedClaims: optionalStringArray("Claims already visible in evidence or confirmed by the user."),
        riskyClaims: optionalStringArray("Claims that may be unsupported or too strong."),
        missingEvidence: optionalStringArray("Evidence still needed before final assets."),
        hasMobileEvidence: Type.Optional(Type.Boolean()),
        hasPrimaryCta: Type.Optional(Type.Boolean()),
        hasDemoData: Type.Optional(Type.Boolean()),
        hasVideoReadyFlow: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeMarketabilityAudit(params));
      },
    });

    api.registerTool({
      name: "creative_product_audit",
      label: "Run Creative Audit Mode",
      description:
        "Inspect a scanned app like a product marketer, designer, and QA reviewer before generating promotional images, video storyboards, or launch copy.",
      parameters: Type.Object({
        intelligence: Type.Any(),
        marketabilityAudit: Type.Optional(Type.Any()),
        scanSummary: Type.Optional(Type.Any()),
        captures: Type.Optional(Type.Array(Type.Object({
          ref: Type.String(),
          url: Type.String(),
          viewport: Type.Optional(Type.String()),
          purpose: Type.Optional(Type.String()),
          quality: Type.Optional(Type.Union([
            Type.Literal("excellent"),
            Type.Literal("good"),
            Type.Literal("usable"),
            Type.Literal("weak"),
            Type.Literal("broken"),
          ])),
          visibleClaims: optionalStringArray("Claims visible in this capture."),
          issues: optionalStringArray("Problems visible in this capture."),
          notes: Type.Optional(Type.String()),
        }))),
        visualIssues: Type.Optional(Type.Array(Type.Object({
          screenRef: Type.String(),
          category: Type.String(),
          problem: Type.String(),
          impact: Type.String(),
          recommendedFix: Type.String(),
        }))),
        userGoal: Type.Optional(Type.String()),
        isLovableApp: Type.Optional(Type.Boolean()),
        missingTrustSignals: optionalStringArray("Missing proof, privacy, pricing, support, contact, compliance, or credibility signals."),
        missingScreens: optionalStringArray("Screens still needed before marketing assets."),
        approvedScreens: optionalStringArray("Screen or capture references approved for marketing use."),
        targetLaunchChannel: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeProductAudit(params));
      },
    });

    api.registerTool({
      name: "creative_evidence_map",
      label: "Map Claims To Evidence",
      description:
        "Map promotional claims to visible evidence or user confirmations so OpenClaw avoids unsupported marketing copy.",
      parameters: Type.Object({
        claims: Type.Array(Type.String(), { description: "Marketing claims to verify." }),
        evidence: optionalStringArray("Visible evidence from pages, screenshots, videos, or product copy."),
        confirmedByUser: optionalStringArray("Claims explicitly confirmed by the product owner."),
        doNotClaim: optionalStringArray("Claims or claim categories to avoid."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeEvidenceMap(params));
      },
    });

    api.registerTool({
      name: "creative_capture_checklist",
      label: "Create Capture Checklist",
      description:
        "Create the screenshot and optional video shot list OpenClaw should capture for promotional assets.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.String(),
        assetGoal: Type.Optional(Type.String()),
        formats: optionalStringArray("Target asset formats."),
        includeVideo: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeCaptureChecklist(params));
      },
    });

    api.registerTool({
      name: "creative_capture_report",
      label: "Create Capture Report",
      description:
        "Turn screenshot and capture notes into a reusable inventory of approved shots, weak shots, coverage, missing shots, and recapture needs.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.String(),
        captures: Type.Array(Type.Object({
          ref: Type.String(),
          url: Type.String(),
          viewport: Type.Optional(Type.String()),
          purpose: Type.Optional(Type.String()),
          quality: Type.Optional(Type.Union([
            Type.Literal("excellent"),
            Type.Literal("good"),
            Type.Literal("usable"),
            Type.Literal("weak"),
            Type.Literal("broken"),
          ])),
          visibleClaims: optionalStringArray("Claims visibly supported by this capture."),
          issues: optionalStringArray("Visual, copy, layout, data, or runtime issues in this capture."),
          notes: Type.Optional(Type.String()),
        })),
        requiredPurposes: optionalStringArray("Required shot purposes for the launch pack."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeCaptureReport(params));
      },
    });

    api.registerTool({
      name: "creative_shot_selection",
      label: "Select Launch Shots",
      description:
        "Choose the best screenshots for Product Hunt, social images, hero visuals, and video hooks, while rejecting weak shots.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        captures: Type.Array(Type.Any()),
        targetAssets: optionalStringArray("Target assets that need screenshots."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeShotSelection(params));
      },
    });

    api.registerTool({
      name: "creative_visual_issue_report",
      label: "Report Visual Issues",
      description:
        "Flag visual, copy, mobile, console, and layout issues that could make launch assets look weak or misleading.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        captures: Type.Array(Type.Any()),
        consoleErrors: optionalStringArray("Browser console/runtime errors."),
        layoutIssues: optionalStringArray("General layout issues."),
        copyIssues: optionalStringArray("On-screen copy issues."),
        mobileIssues: optionalStringArray("Mobile-specific issues."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeVisualIssueReport(params));
      },
    });

    api.registerTool({
      name: "creative_launch_asset_matrix",
      label: "Create Asset Matrix",
      description:
        "Map each launch asset to the exact screenshot, backed claim, copy angle, format, and approval status.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        selections: Type.Any(),
        evidenceMap: Type.Optional(Type.Any()),
        formats: optionalStringArray("Asset formats to include."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLaunchAssetMatrix(params));
      },
    });

    api.registerTool({
      name: "creative_launch_pack",
      label: "Create Launch Pack",
      description:
        "Create launch copy, asset concepts, and a review checklist from a product intelligence brief.",
      parameters: Type.Object({
        intelligence: Type.Any(),
        launchGoal: Type.Optional(Type.String()),
        formats: optionalStringArray("Asset formats to include."),
        tone: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLaunchPack(params));
      },
    });

    api.registerTool({
      name: "creative_image_prompt_pack",
      label: "Create Image Prompts",
      description:
        "Create promotional image-generation prompts from real product evidence and approved screenshots.",
      parameters: Type.Object({
        intelligence: Type.Any(),
        screenshotRefs: optionalStringArray("Approved screenshot references or filenames."),
        formats: optionalStringArray("Image formats to generate prompts for."),
        stylePreference: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeImagePromptPack(params));
      },
    });

    api.registerTool({
      name: "creative_video_storyboard",
      label: "Create Video Storyboard",
      description:
        "Create a 15- or 30-second promotional video storyboard based on real product screens.",
      parameters: Type.Object({
        intelligence: Type.Any(),
        durationSeconds: Type.Optional(Type.Number()),
        orientation: Type.Optional(Type.Union([
          Type.Literal("horizontal"),
          Type.Literal("vertical"),
          Type.Literal("square"),
        ])),
        screenshotRefs: optionalStringArray("Approved screenshots or short clips."),
        includeVoiceover: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeVideoStoryboard(params));
      },
    });

    api.registerTool({
      name: "creative_export_plan",
      label: "Plan Export Pack",
      description:
        "Decide which markdown, JSON, and CSV handoff files should be created for a launch pack.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        packageName: Type.Optional(Type.String()),
        includeVideo: Type.Optional(Type.Boolean()),
        includeClientHandoff: Type.Optional(Type.Boolean()),
        includeCsv: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeExportPlan(params));
      },
    });

    api.registerTool({
      name: "creative_launch_brief",
      label: "Create Launch Brief",
      description:
        "Create a markdown launch brief from site intelligence, marketability audit, evidence map, and asset matrix.",
      parameters: Type.Object({
        intelligence: Type.Any(),
        audit: Type.Optional(Type.Any()),
        evidenceMap: Type.Optional(Type.Any()),
        assetMatrix: Type.Optional(Type.Any()),
        launchGoal: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLaunchBrief(params));
      },
    });

    api.registerTool({
      name: "creative_prompt_export",
      label: "Export Prompts",
      description:
        "Format image prompts and video storyboard scenes into a handoff-ready markdown document.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        imagePromptPack: Type.Optional(Type.Any()),
        videoStoryboard: Type.Optional(Type.Any()),
      }),
      async execute(_id, params: any) {
        return jsonText(makePromptExport(params));
      },
    });

    api.registerTool({
      name: "creative_social_copy_pack",
      label: "Create Social Copy Pack",
      description:
        "Create platform-specific launch copy for LinkedIn, X/Twitter, Product Hunt, Indie Hackers, email, and website banners.",
      parameters: Type.Object({
        productName: Type.String(),
        websiteUrl: Type.Optional(Type.String()),
        tagline: Type.Optional(Type.String()),
        supportedClaims: optionalStringArray("Evidence-backed claims to use in copy."),
        audience: Type.Optional(Type.String()),
        tone: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeSocialCopyPack(params));
      },
    });

    api.registerTool({
      name: "creative_product_hunt_launch_button",
      label: "Create Product Hunt Launch Button",
      description:
        "Create a guarded Product Hunt launch-button payload: prefilled launch draft, preflight checks, blockers, submit URL, and API-ready requirements when Product Hunt write access exists.",
      parameters: Type.Object({
        productName: Type.String(),
        productUrl: Type.String(),
        tagline: Type.Optional(Type.String()),
        description: Type.Optional(Type.String()),
        makerComment: Type.Optional(Type.String()),
        topics: optionalStringArray("Product Hunt topics or categories."),
        galleryAssets: optionalStringArray("Approved Product Hunt gallery image/video asset references."),
        videoUrl: Type.Optional(Type.String()),
        launchDate: Type.Optional(Type.String()),
        hasApprovedCaptures: Type.Optional(Type.Boolean()),
        hasEvidenceMap: Type.Optional(Type.Boolean()),
        hasAssetReview: Type.Optional(Type.Boolean()),
        hasPrivateDataRisk: Type.Optional(Type.Boolean()),
        hasUnsupportedClaims: Type.Optional(Type.Boolean()),
        hasWeakScreens: Type.Optional(Type.Boolean()),
        hasProductHuntWriteAccess: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeProductHuntLaunchButton(params));
      },
    });

    api.registerTool({
      name: "creative_client_handoff",
      label: "Create Client Handoff",
      description:
        "Create an agency/client-ready markdown handoff with scan summary, capture status, marketability, assets, approvals, and fixes.",
      parameters: Type.Object({
        productName: Type.String(),
        websiteUrl: Type.Optional(Type.String()),
        scanSummary: Type.Optional(Type.String()),
        captureReport: Type.Optional(Type.Any()),
        audit: Type.Optional(Type.Any()),
        assetMatrix: Type.Optional(Type.Any()),
        pendingApprovals: optionalStringArray("Approvals still required before launch."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeClientHandoff(params));
      },
    });

    api.registerTool({
      name: "creative_agency_report",
      label: "Create Agency Report",
      description:
        "Create a polished client-facing launch readiness report from scan evidence, product audit, marketability audit, captures, assets, fixes, and optional Lovable prompts.",
      parameters: Type.Object({
        clientName: Type.Optional(Type.String()),
        agencyName: Type.Optional(Type.String()),
        preparedBy: Type.Optional(Type.String()),
        reportDate: Type.Optional(Type.String()),
        productName: Type.String(),
        websiteUrl: Type.Optional(Type.String()),
        scanSummary: Type.Optional(Type.Any()),
        intelligence: Type.Optional(Type.Any()),
        marketabilityAudit: Type.Optional(Type.Any()),
        productAudit: Type.Optional(Type.Any()),
        captureReport: Type.Optional(Type.Any()),
        assetMatrix: Type.Optional(Type.Any()),
        launchWindow: Type.Optional(Type.String()),
        recommendedLaunchSequence: optionalStringArray("Client-facing launch sequence steps."),
        includeLovablePrompts: Type.Optional(Type.Boolean()),
        nextCommercialStep: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeAgencyReport(params));
      },
    });

    api.registerTool({
      name: "creative_lovable_project_context",
      label: "Create Lovable Project Context",
      description:
        "Create shared Lovable-to-launch context from Lovable URL, GitHub repo, product goal, stack, readiness summary, risks, and launch goal.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        lovableUrl: Type.String(),
        githubRepoUrl: Type.Optional(Type.String()),
        productGoal: Type.String(),
        launchGoal: Type.Optional(Type.String()),
        stack: optionalStringArray("Known app stack or framework signals."),
        lastClawKitReadinessSummary: Type.Optional(Type.String()),
        knownRisks: optionalStringArray("Known build, visual, product, or launch risks."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLovableProjectContext(params));
      },
    });

    api.registerTool({
      name: "creative_lovable_to_launch_workflow",
      label: "Create Lovable Launch Workflow",
      description:
        "Create the end-to-end workflow from a Lovable app to scanned, fixed, evidence-backed, exportable launch assets.",
      parameters: Type.Object({
        context: Type.Any(),
        needsEngineeringFixes: Type.Optional(Type.Boolean()),
        needsLovablePolish: Type.Optional(Type.Boolean()),
        includeExportPack: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLovableToLaunchWorkflow(params));
      },
    });

    api.registerTool({
      name: "creative_lovable_fix_prompt_pack",
      label: "Create Lovable Fix Prompts",
      description:
        "Convert visual, marketability, proof, and missing-screen issues into focused Lovable prompts for launch readiness.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        weakScreens: optionalStringArray("Weak or unfinished screens."),
        visualIssues: optionalStringArray("Visual issues to fix."),
        missingScreens: optionalStringArray("Screens needed for launch assets."),
        missingProof: optionalStringArray("Missing proof or claim-support sections."),
        targetAssets: optionalStringArray("Launch assets the app should support."),
        preserve: optionalStringArray("What Lovable should preserve while fixing."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLovableFixPromptPack(params));
      },
    });

    api.registerTool({
      name: "creative_cross_plugin_handoff",
      label: "Create Cross-Plugin Handoff",
      description:
        "Create a handoff between ClawKit for Lovable and ClawKit Creative Studio for Lovable, with next owner, blockers, and division of labor.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        lovableUrl: Type.Optional(Type.String()),
        githubRepoUrl: Type.Optional(Type.String()),
        buildStatus: Type.Optional(Type.String()),
        readinessStatus: Type.Optional(Type.String()),
        creativeStatus: Type.Optional(Type.String()),
        nextOwner: Type.Optional(Type.Union([
          Type.Literal("clawkit-for-lovable"),
          Type.Literal("clawkit-creative-studio"),
          Type.Literal("user"),
        ])),
        blockers: optionalStringArray("Current blockers."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeCrossPluginHandoff(params));
      },
    });

    api.registerTool({
      name: "creative_demo_runbook",
      label: "Create Demo Runbook",
      description:
        "Create a step-by-step demo script that shows ClawKit Creative Studio for Lovable from URL to launch pack.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        websiteUrl: Type.Optional(Type.String()),
        audience: Type.Optional(Type.String()),
        demoLengthMinutes: Type.Optional(Type.Number()),
        includeLovableBridge: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeDemoRunbook(params));
      },
    });

    api.registerTool({
      name: "creative_sample_project_pack",
      label: "Create Sample Project Pack",
      description:
        "Create a sample input/output pack for demonstrating Creative Studio before users scan their own app.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        productType: Type.Optional(Type.String()),
        includeLovableExample: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeSampleProjectPack(params));
      },
    });

    api.registerTool({
      name: "creative_quality_scorecard",
      label: "Score Creative Studio Run",
      description:
        "Score a completed Creative Studio workflow for scan coverage, screenshot quality, claim support, asset matrix completeness, export readiness, and launch safety.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        routeCoverage: Type.Optional(Type.Union([
          Type.Literal("low"),
          Type.Literal("medium"),
          Type.Literal("high"),
        ])),
        approvedCaptureCount: Type.Optional(Type.Number()),
        weakCaptureCount: Type.Optional(Type.Number()),
        supportedClaimCount: Type.Optional(Type.Number()),
        riskyClaimCount: Type.Optional(Type.Number()),
        assetMatrixComplete: Type.Optional(Type.Boolean()),
        exportPackComplete: Type.Optional(Type.Boolean()),
        privacyReviewed: Type.Optional(Type.Boolean()),
        humanApproved: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeQualityScorecard(params));
      },
    });

    api.registerTool({
      name: "creative_user_onboarding",
      label: "Create User Onboarding",
      description:
        "Create a friendly guide explaining what Creative Studio can do, example requests, decision paths, and guardrails.",
      parameters: Type.Object({
        userGoal: Type.Optional(Type.String()),
        experienceLevel: Type.Optional(Type.Union([
          Type.Literal("beginner"),
          Type.Literal("builder"),
          Type.Literal("agency"),
          Type.Literal("marketer"),
        ])),
        hasLovableApp: Type.Optional(Type.Boolean()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeUserOnboarding(params));
      },
    });

    api.registerTool({
      name: "creative_lovable_readiness_feedback",
      label: "Create Lovable Readiness Feedback",
      description:
        "Turn scan problems into focused Lovable prompts that make the app screenshot-ready for launch assets.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        lovableUrl: Type.Optional(Type.String()),
        weakScreens: optionalStringArray("Weak or unfinished Lovable screens."),
        visualIssues: optionalStringArray("Visual issues found during scan."),
        missingProof: optionalStringArray("Claims or proof sections missing from the app."),
        missingScreens: optionalStringArray("Screens needed for launch assets."),
        targetLaunchAssets: optionalStringArray("Launch assets the app should support."),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLovableReadinessFeedback(params));
      },
    });

    api.registerTool({
      name: "creative_lovable_launch_pack",
      label: "Lovable Launch Pack",
      description:
        "Create the special workflow for turning a Lovable app into launch-ready promotional assets.",
      parameters: Type.Object({
        lovableUrl: Type.String(),
        productName: Type.Optional(Type.String()),
        githubRepoUrl: Type.Optional(Type.String()),
        targetAudience: Type.Optional(Type.String()),
        launchGoal: Type.Optional(Type.String()),
      }),
      async execute(_id, params: any) {
        return jsonText(makeLovableLaunchPack(params));
      },
    });

    api.registerTool({
      name: "creative_asset_review",
      label: "Review Marketing Asset",
      description:
        "Review whether a promotional asset is evidence-based, safe, and ready for human approval.",
      parameters: Type.Object({
        productName: Type.Optional(Type.String()),
        assetDescription: Type.String(),
        claims: optionalStringArray("Marketing claims made by the asset."),
        evidence: optionalStringArray("Visible evidence or user confirmations supporting the claims."),
        containsPrivateData: Type.Optional(Type.Boolean()),
        visualIssues: optionalStringArray("Known visual or factual issues."),
      }),
      async execute(_id, params: any) {
        return jsonText(reviewAsset(params));
      },
    });
  },
});
