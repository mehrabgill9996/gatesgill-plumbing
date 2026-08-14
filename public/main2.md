
Improve the hero section of the homepage. Keep the existing copy, colors, and overall two-column concept, but make the following changes:

## 1. Break the "template" feel with layering and bleed
- Let the plumber photo extend to the right edge of the viewport with no visible margin/gutter — it should feel like a full-height image panel, not a floating cutout box.
- Instead of a flat solid-color hero background, add a subtle background element behind the photo: a soft radial glow (copper or navy, low opacity) positioned behind the subject, and/or a large, faint outlined icon (wrench, pipe, or droplet) bleeding off the edge of the section at low opacity. This should read as texture, not as a competing graphic.
- Let the headline's last word or the "500+" stat card slightly overlap the photo edge (a few pixels of intentional overlap) rather than sitting in strictly separate columns, to make the two halves feel connected instead of split down the middle.

## 2. Add depth to the floating stat card
- Give the "500+ Installs completed..." card a soft drop shadow and a subtle upward float animation on load (Framer Motion, fade + slight translateY) so it visually sits above the photo rather than looking stuck to it.
- Add a thin colored left border or small icon inside the card to tie it to the copper accent color.

## 3. Fix CTA hierarchy
- Make "Get Install Quote" the clearly dominant action: increase its size slightly relative to "Call Now," and add a subtle on-load pulse/glow animation (Framer Motion — animate a soft box-shadow loop once or twice, then settle) so it draws the eye first.
- Let "Call Now — (905) 555-0187" recede slightly: lighter border weight, no fill, smaller phone icon.
- Keep both buttons in the same row on desktop, but ensure clear visual priority between them.

## 4. Improve vertical rhythm in the copy block
- Increase spacing between the "BRAMPTON & GTA" eyebrow tag and the main headline.
- Increase spacing between the subheading paragraph and the CTA button row.
- Ensure consistent, generous line-height on the headline so the three lines don't feel cramped.

## 5. Add a stronger trust signal near the CTAs
- Below the existing "Licensed & Insured · 24/7 Emergency · 5-Star Rated" line, add a compact trust row with a 5-star icon rating and a realistic review count (e.g. "4.9 ★ · 210+ reviews"), styled as a small pill or inline badge group — this should sit close to the CTAs since it reduces hesitation right at the decision point.

## 6. Animate the section on load
- Stagger the entrance animation with Framer Motion: eyebrow tag fades in first, then headline (word-by-word or line-by-line fade/slide up), then subheading, then CTA row, then the photo/stat card — each offset by ~100-150ms so the hero feels choreographed rather than appearing all at once.

Keep everything else on the page (nav, sections below the hero) unchanged. Only modify the hero section component and any shared animation variants it needs.