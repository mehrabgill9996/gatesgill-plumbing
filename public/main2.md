
Fix two mobile-specific issues in the hero section. Do not touch the desktop version of the hero, the photo, the stat card, or any section below the hero.

## 1. Sticky CTA bar appears immediately below the in-hero CTA buttons (looks duplicated)

**Bug:** On mobile, the hero already contains its own "Get Install Quote" / "Call Now" buttons in normal document flow. The fixed/sticky bottom CTA bar (also "Call Now" / "Get Quote") is currently visible immediately below them with no scrolling required, so the user sees two nearly identical CTA button pairs stacked back to back on first load. It should only make sense to show the sticky bar once the user has scrolled past the hero's own CTA buttons.

**Fix:**
- Add scroll-based visibility to the sticky mobile CTA bar: it should be hidden (e.g. `translate-y-full` or `opacity-0 pointer-events-none`, transitioning smoothly) until the user has scrolled past the hero section's own CTA button row, then it should appear.
- Implement this with a scroll listener or intersection observer watching the hero's CTA button row (or hero section bottom) — when that element is still in view, the sticky bar is hidden; once it scrolls out of view, the sticky bar fades/slides in.
- Use a CSS transition (200-300ms) for the show/hide so it doesn't pop in abruptly.
- This behavior applies to mobile viewports only (below `lg:` breakpoint) — the sticky bar likely doesn't render on desktop at all already; don't change that.

## 2. Hero section is too tall on mobile with too much empty space before content

**Bug:** On mobile, there's a large amount of vertical navy background space between the trust badge rows and where the photo/next section begins, making users scroll a long distance through mostly empty background before reaching more content.

**Fix:**
- Reduce vertical padding/margin on mobile specifically between the trust badge row and the photo section below it. Target roughly half the current gap — adjust the mobile-specific spacing utility (e.g. reduce a `py-24` or `mb-20` to something like `py-10`/`mb-8` on mobile only, keeping desktop spacing unchanged via `lg:py-24` etc.).
- If the hero section has a fixed/min height set (e.g. `min-h-screen`) that's forcing extra empty space on mobile regardless of content length, remove or reduce that min-height specifically on mobile (e.g. `min-h-fit` or no min-height below `lg:`, keeping `lg:min-h-screen` for desktop).
- Goal: on a 375px-wide mobile viewport, there should be no more than one section-worth of empty navy background visible between the trust badges and the photo/stat card starting — not a long empty scroll.

## Constraints

- Only modify: (a) the sticky CTA bar's visibility logic/transition, and (b) mobile-specific vertical spacing/min-height in the hero section.
- Do not change desktop styles, breakpoints `lg:` and above, copy, colors, or the photo/stat card layout itself.
- After implementing, verify on a 375px viewport: the sticky bar stays hidden until scrolling past the hero's own CTA row, and the hero's vertical empty space before the photo is noticeably reduced.