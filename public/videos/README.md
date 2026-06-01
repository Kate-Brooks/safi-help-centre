# Tutorial videos

Drop the Quality Control tutorial videos here so the player can find them:

- `quality-control-en.mp4` — English voiceover (German captions version from Drive is fine)
- `quality-control-de.mp4` — German with captions

Source files (Safi Google Drive):
- "Quality control - eng voice over, German captions.mp4"
- "Quality_control_tutorial-German_with_captions.mp4"

These are intentionally **not** committed to git (see `.gitignore`) because of
their size. The player shows a graceful fallback if a file is missing, so the
prototype still runs without them.

Optional: add WebVTT caption tracks (e.g. `quality-control-en.vtt`) and point
to them via `captionsSrc` in `src/content/registry.ts`.
