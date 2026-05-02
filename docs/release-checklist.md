# Release Checklist

## Local Checks

```bash
npm install
npm run check
npm run build
npm pack --dry-run
```

## Safety Scan

```bash
rg "filesystem/network/process APIs" src dist openclaw.plugin.json README.md docs skills
```

Expected result: no matches.

## GitHub

```bash
git init
git add .
git commit -m "Initial ClawKit Creative Studio release"
gh repo create MarcSean1971/clawkit-creative-studio --public --source=. --remote=origin --push
```

## ClawHub

```bash
clawhub package publish MarcSean1971/clawkit-creative-studio@main \
  --family code-plugin \
  --name @clawkit/clawkit-creative-studio \
  --display-name "ClawKit Creative Studio" \
  --version 0.1.3 \
  --source-repo MarcSean1971/clawkit-creative-studio \
  --source-commit "$(git rev-parse HEAD)" \
  --source-ref main \
  --changelog "Add Export Pack launch handoff tools"
```
