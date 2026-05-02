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
