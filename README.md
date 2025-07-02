# Thimbles AI Tool 🎯

An advanced browser-side tool that leverages AI, computer vision, and canvas tracking to reveal the correct cup in the *Thimbles* game on sites like Odds96 or Evoplay.

---

## ✨ Features

- ✅ Tampermonkey integration for real-time overlay and response monitoring
- 🎯 Canvas cup detection using DOM overlay
- 📊 Provably fair data decoding with cup prediction
- 🎥 Experimental frame-by-frame visual tracking (offline mode supported)
- 🧠 TensorFlow.js compatibility for training vision models
- 🔒 Works in local & offline mode (with simulation)
- 🚀 GitHub Pages-ready frontend

---

## 🚀 Quick Setup

### A. 🧠 Tampermonkey Script

1. Install Tampermonkey extension from [tampermonkey.net](https://www.tampermonkey.net).
2. Copy-paste the `Thimbles Cup Highlighter (Sticky)` script from `scripts/tampermonkey-thimbles.user.js`.
3. Open [Odds96 Thimbles](https://odds96.in/en/casino/game/2636-thimbles) — the correct cup will highlight live!

### B. 🖥️ Local Simulation

1. Clone or download the repository.
2. Start a local server:

   ```bash
   cd thimbles-ai-tool
   python -m http.server
