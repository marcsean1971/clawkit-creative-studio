# ClawHub Listing

## Display Name

ClawKit Creative Studio

## Short Description

Scan full websites and apps with OpenClaw, then create launch-ready promotional images, copy, and video storyboards.

## Long Description

ClawKit Creative Studio is an OpenClaw plugin that turns a real website or app into evidence-based promotional material. Instead of scanning only a landing page, it helps OpenClaw plan a full-site product scan, capture screenshots and approved video evidence, understand pages and user flows, audit whether the product is marketable yet, map claims to evidence, select the best launch shots, flag visual issues, build an asset matrix, and generate launch packs, promotional image prompts, social copy, and video storyboards.

It is especially useful for Lovable apps: Lovable builds the app, ClawKit Creative Studio helps launch it. The Lovable Launch Pack workflow scans the preview or deployed app, identifies the best screens, flags weak or broken launch moments, and creates Product Hunt, LinkedIn, X/Twitter, hero image, feature card, and demo video concepts.

This is an early public release. It is useful now and will be updated continuously. Constructive feedback is welcome, especially examples where full-site scanning should capture better product flows or produce stronger asset prompts.

## Package

```text
@clawkit/clawkit-creative-studio
```

## Publish Command

After logging in with `clawhub login`, publish with:

```bash
clawhub package publish MarcSean1971/clawkit-creative-studio@main \
  --family code-plugin \
  --name @clawkit/clawkit-creative-studio \
  --display-name "ClawKit Creative Studio" \
  --version 0.1.2 \
  --source-repo MarcSean1971/clawkit-creative-studio \
  --source-commit "$(git rev-parse HEAD)" \
  --source-ref main \
  --changelog "Add Capture Pack screenshot inventory and asset matrix"
```

## Keywords

- OpenClaw
- ClawKit
- Creative Studio
- website to marketing
- app promo
- promotional images
- promo video
- Product Hunt
- launch assets
- Lovable
- Lovable launch
- screenshots
- video storyboard
