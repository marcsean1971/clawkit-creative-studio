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
    product: "ClawKit Creative Studio",
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
      "ClawKit Creative Studio": [
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
      script: `Show that ClawKit Creative Studio scans more than a landing page: it understands ${productName}'s product journey and turns it into launch assets.`,
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
    product: "ClawKit Creative Studio",
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
      "Lovable builds the app. ClawKit Creative Studio scans the full app and turns it into launch-ready marketing.",
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
  name: "ClawKit Creative Studio",
  description:
    "Helps OpenClaw understand full websites and apps, then create launch-ready promotional images, copy, and video storyboards.",
  register(api) {
    api.registerTool({
      name: "creative_starter_guide",
      label: "Creative Studio Guide",
      description:
        "Explain how ClawKit Creative Studio uses OpenClaw to scan full websites/apps and create promotional asset packs.",
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
        "Create a handoff between ClawKit for Lovable and ClawKit Creative Studio, with next owner, blockers, and division of labor.",
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
        "Create a step-by-step demo script that shows ClawKit Creative Studio from URL to launch pack.",
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
