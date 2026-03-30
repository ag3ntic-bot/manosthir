#!/bin/bash
# ManoSthir Project Setup Script
# Run this from your project root: bash setup.sh

set -e

echo "🧠 Setting up ManoSthir counseling website project..."

# Create directory structure
mkdir -p docs/designs/screenshots
mkdir -p .claude/agents
mkdir -p .claude/commands
mkdir -p public/images

# Copy design screenshots (you should have these in the same folder as this script)
echo "📸 Place your design screenshots in docs/designs/screenshots/"
echo "   Expected files: homepage.png, about.png, services.png, resources.png, booking.png"

# Copy docs
echo "📄 Copying documentation files..."
cp DESIGN-SPEC.md docs/
cp counselor-profile.md docs/
cp content-brief.md docs/
cp sitemap.md docs/
cp asset-manifest.md docs/

# Copy CLAUDE.md to project root (skip if already in place)
cp -n CLAUDE.md ./CLAUDE.md 2>/dev/null || true

# Copy agent definitions
echo "🤖 Copying agent definitions..."
cp claude-agents/architect.md .claude/agents/
cp claude-agents/designer.md .claude/agents/
cp claude-agents/content-writer.md .claude/agents/
cp claude-agents/test-engineer.md .claude/agents/
cp claude-agents/review-lead.md .claude/agents/

# Copy settings
echo "⚙️  Copying Claude Code settings..."
cp settings.json .claude/settings.json

# Initialize git if not already
if [ ! -d ".git" ]; then
  git init
  echo "📦 Git repository initialized"
fi

echo ""
echo "✅ Setup complete! Your project structure:"
echo ""
echo "  📁 your-project/"
echo "  ├── CLAUDE.md                    ← Agents read this first"
echo "  ├── docs/"
echo "  │   ├── DESIGN-SPEC.md          ← Colors, fonts, spacing"
echo "  │   ├── counselor-profile.md    ← Moumita's info"
echo "  │   ├── content-brief.md        ← Voice and tone"
echo "  │   ├── sitemap.md              ← 5 pages"
echo "  │   ├── asset-manifest.md       ← Images and placeholders"
echo "  │   └── designs/screenshots/    ← Put your 5 PNGs here"
echo "  ├── .claude/"
echo "  │   ├── agents/                 ← 5 agent definitions"
echo "  │   └── settings.json           ← Agent Teams enabled"
echo "  └── MASTER-PROMPT.md            ← The prompt to paste"
echo ""
echo "📋 NEXT STEPS:"
echo "  1. Copy your 5 design PNGs into docs/designs/screenshots/"
echo "  2. Fill in the ⚠️ sections in docs/counselor-profile.md"
echo "  3. Install tmux if you haven't: brew install tmux"
echo "  4. Start tmux: tmux new-session -s manosthir"
echo "  5. Launch Claude Code: claude --model opus"
echo "  6. Paste the contents of MASTER-PROMPT.md"
echo ""
echo "🚀 Let's build ManoSthir!"
