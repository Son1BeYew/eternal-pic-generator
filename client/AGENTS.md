# Frontend UI Rules (Aesthetic / Premium)

## Non-negotiables
- DO NOT use purple or purple-ish colors in any form:
  - No: purple, violet, indigo, magenta, fuchsia, #800080, #7c3aed, #8b5cf6, #a855f7, etc.
  - If an existing theme contains purple, replace it with neutral/blue/emerald alternatives that match the current design.
- DO NOT use "AI / machine / robotic" icons or visuals:
  - No: robot heads, chips, circuits, brains, spark holograms, neural nets, mechanical arms, futuristic HUD elements.
  - Avoid “techy” icon packs that look like automation/AI branding.
- Avoid gimmicks:
  - No neon glow, no excessive gradients, no glassmorphism unless already used consistently.
  - No confetti/particles/over-animations unless explicitly requested.

## Visual style target
- Style: clean, modern, premium, calm.
- Primary palette: neutrals (slate/gray/black/white) + ONE accent color (choose from blue/teal/emerald/amber).
- Contrast: readable text, clear hierarchy, no low-contrast gray-on-gray.
- Spacing: generous whitespace; prefer fewer elements per screen.
- Borders: subtle (1px) and consistent; avoid heavy outlines.
- Shadows: soft and minimal; avoid harsh drop shadows.

## Typography & hierarchy
- Use 2–3 font sizes per view max (title, body, small).
- Titles: 18–28px, semibold; body: 14–16px; captions: 12–13px.
- Line-height comfortable (1.4–1.6).
- Avoid all-caps headings unless already in design system.

## Layout & components
- Prefer a 12-col grid or simple two-column layouts.
- Use consistent paddings: 12/16/20/24/32 (multiples of 4/8).
- Cards:
  - Rounded corners: 12–16px
  - Padding: 16–24px
  - Header + body separation via spacing, not heavy dividers.
- Buttons:
  - One primary action per screen.
  - Primary button: solid accent; Secondary: outline/ghost.
  - Hover/focus states required (keyboard accessible).
- Forms:
  - Labels always visible (not placeholder-only).
  - Clear errors below fields; keep messages short.

## Icon policy (important)
- Prefer NO icons unless they add clarity.
- When icons are needed:
  - Use simple, human-friendly icons (e.g., basic UI symbols: chevron, search, plus, x, check, info).
  - Avoid any icon that resembles: robot/chip/circuit/brain/AI/spark.
  - Keep icon size consistent (16–20px) and stroke weight consistent.
- If the project already uses an icon library, use it; do not add a new one.

## Color policy (no purple)
- Do not introduce purple for:
  - buttons, links, badges, charts, gradients, shadows, borders, focus rings.
- Use these safe accents (pick ONE per feature/view):
  - Blue (primary CTAs), Teal (secondary accents), Emerald (success), Amber (warning), Red (danger).
- Links should be blue-ish or neutral underlined, never purple.

## Micro-interactions
- Animations: subtle and fast (150–250ms).
- Prefer small transitions (opacity/transform) and avoid bouncy/springy effects unless already used.

## Content & tone
- Copywriting: short, friendly, confident.
- Avoid buzzwords like “AI-powered”, “smart”, “automated”, “intelligent” unless required.
- Prefer plain labels: “Generate”, “Create”, “Save”, “Preview”, “History”.

## Implementation constraints
- Keep changes minimal and consistent with the existing codebase.
- Do not add dependencies unless explicitly asked.
- Maintain responsive design:
  - Mobile first, then md/lg breakpoints.
- Accessibility:
  - Focus ring visible (use non-purple ring color).
  - Proper button semantics and aria-labels where needed.

## Output requirement
- Provide a short summary:
  - What changed visually
  - Why it looks better
  - How to verify (exact commands + manual steps)
