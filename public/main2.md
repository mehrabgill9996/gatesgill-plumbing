

Fix the following mobile-only layout bugs. These are bugs, not redesigns — the desktop version of these sections is correct and should not change. Only add/adjust mobile (`sm:` and below / default unprefixed) Tailwind classes; do not touch desktop (`lg:`) classes.

## 1. "How It Works" section — step number circles overlap the headings on mobile

**Bug:** On mobile, the numbered circle (01, 02, 03, 04) is absolutely/oddly positioned so it sits ON TOP OF the step heading text (e.g. the circle overlaps the "R" in "Request a Quote", the "W" in "We Assess"). On desktop this works because there's a separate timeline column to the right of the text — but on mobile the layout collapses to one column and the circle's positioning wasn't adjusted, so it lands on top of the text instead of above it.

**Fix:** On mobile, stack each step as: number circle ABOVE the "Step 0X" eyebrow label, in normal document flow (not absolutely positioned, not overlapping). Specifically:
- Remove any `absolute` positioning on the circle for mobile breakpoints — it should be a normal block/flex element in the vertical stack.
- Order for each step block on mobile: number circle (centered or left-aligned, on its own line) → "Step 0X" label → heading → description.
- Keep the connecting vertical line between circles if it currently exists, but make sure it renders BEHIND or BETWEEN circles, never behind/through text.
- Verify at 375px and 414px viewport widths that no circle overlaps any text in any of the 4 steps.

## 2. Sticky mobile CTA bar overlapping hero content

**Bug:** The fixed/sticky bottom "Call Now / Get Quote" bar is appearing overlapped with mid-page content (visible cutting across the hero image) instead of staying pinned cleanly at the bottom of the viewport with content scrolling underneath it properly.

**Fix:** 
- Confirm the sticky CTA bar uses `fixed bottom-0 left-0 right-0 z-50` (or equivalent) and sits in its own stacking context above all page content.
- Add bottom padding to the `<body>` or main page wrapper equal to the CTA bar's height (e.g. `pb-20`) so page content never renders underneath/behind the bar.
- Verify by scrolling the full page on a 375px-wide viewport that the bar stays pinned at the bottom edge and never visually collides with other content.

## 3. Center the trust badge row in the hero on mobile

**Change:** The 3 trust badges in the hero ("Licensed & Insured," "24/7 Emergency," "5-Star Rated") are currently left-aligned on mobile. Center them.
- On mobile only, change the badge row container to `flex flex-wrap justify-center` (keep left-alignment on desktop via `lg:justify-start`).
- Also center the "4.9 · 210+ reviews" badge row below it the same way, on mobile only.
- Do not change alignment of the headline, subheading, or CTA buttons — only the trust badge rows.

## Constraints

- Do not modify desktop layout/styles for any of the three items above.
- Do not change copy, colors, or component structure beyond what's needed to fix these specific bugs.
- After making changes, check the mobile view at 375px width for all three fixes before considering this done.