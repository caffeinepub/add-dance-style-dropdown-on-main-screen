# Specification

## Summary
**Goal:** Add a subtle dance-themed background to the main page that blends Bollywood and Bharatanatyam visual cues without changing any existing app functionality.

**Planned changes:**
- Add a new static background image asset under `frontend/public/assets/generated/` and reference it from main page styling.
- Apply the background behind existing header/main/footer content with an opacity/overlay treatment to preserve foreground readability.
- Ensure the background scales responsively across common viewport sizes without visible seams or distortion.

**User-visible outcome:** On load, the main page displays a full-page Bollywood + Bharatanatyam themed background behind the existing UI while keeping all content readable and behavior unchanged.
