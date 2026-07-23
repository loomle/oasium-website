# OASIUM Website V1 — Technical and Product Handoff

## 1. Objective

Build a fast, cinematic, easy-to-maintain official website for OASIUM.

The first release should do two things well:

1. Explain OASIUM clearly within one minute.
2. Send interested visitors to the Steam Wishlist page.

The website should remain simple in V1, while supporting future Blog and Guides content without rebuilding the layout.

Primary content reference:

- Steam: https://store.steampowered.com/app/4579430/OASIUM/
- Domain: https://oasium.io

## 2. Technology

Use **Astro** as a static-site framework.

- TypeScript for configuration and components.
- Astro components plus a small custom CSS design system.
- Minimal client-side JavaScript; only use it for the trailer modal, mobile navigation, and gallery behavior.
- Markdown/MDX Content Collections for future Blog and Guides.
- Continue hosting on **GitHub Pages** with the existing `oasium.io` custom domain.
- Use GitHub Actions to build and deploy the generated `dist/` directory.
- Do not add a CMS, account system, database, or large frontend framework in V1.

Do not use an off-the-shelf visual theme. Build reusable OASIUM layouts and components so the brand remains distinctive while future pages stay consistent.

## 3. Homepage V1 Scope

The homepage should be a short four-part experience:

### A. Hero

- One 8–12 second muted looping gameplay video.
- Static poster fallback for mobile, slow connections, and reduced-motion users.
- OASIUM logo.
- Suggested message:
  - `Explore. Play. Connect.`
  - `A free-to-play immersive social world for PCVR and PC.`
- Metadata: `Coming 2026 · PCVR & PC · Free to Play`
- Primary CTA: `Wishlist on Steam`
- Secondary CTA: `Watch Full Trailer`

The full trailer should open in an accessible modal instead of occupying another large page section.

### B. A Universe of Worlds

Use exactly three strong images:

1. Desert and Hoverbike.
2. European-style city.
3. Forest and physical bow interaction.

Add one short paragraph explaining that players enter large, distinct worlds to explore and adventure together.

### C. Three Core Messages

Use text only; do not add another image grid.

- **Explore Vast Worlds** — Discover cities, deserts, and natural environments.
- **Move, Ride & Interact** — Drive vehicles and experience physical PCVR interactions.
- **Meet & Express Yourself** — Choose an avatar, socialize, and explore together.

### D. Final CTA and Social Links

- Repeat `Wishlist on Steam`.
- Add Steam, Discord, YouTube, X, Bilibili, and other confirmed social links.
- Show OASIUM Studio and `support@oasium.io`.
- Add a small `Latest Update` link after the first Blog post is published; do not build a large news wall on the homepage.

## 4. Visual Direction

- Dark black/charcoal base.
- Desert orange as the main cinematic accent.
- Cyan from the futuristic Hub for buttons and interactive states.
- Limited magenta/purple accents for futuristic night scenes.
- Large imagery, strong typography, generous spacing, and very few cards.
- Use subtle fades and slow movement only; avoid excessive parallax or scroll effects.
- The website should feel like entering different worlds through a shared Hub.

## 5. Content and Asset Rules

- Use the Steam page as the factual content baseline, but rewrite copy for the website instead of copying the complete store description.
- Do not hotlink production images or video from Steam CDN. Store optimized website assets in this repository or an approved media host.
- Keep source masters separately; commit only web-ready assets.
- Recommended formats:
  - Hero loop: WebM and MP4.
  - Images: AVIF/WebP with JPG fallback when needed.
  - Logo: existing official SVG/PNG assets.
- Provide descriptive alt text for every image and captions/subtitles for meaningful video audio.

Required assets before implementation:

- Transparent OASIUM logo.
- Full gameplay trailer master.
- Short hero-loop edit or source footage for creating it.
- Three approved homepage screenshots.
- Mobile video poster.
- Final Steam, Discord, YouTube, X, Bilibili, and other social URLs.

## 6. Wishlist and Analytics

Every Steam CTA should link to App ID `4579430` and include UTM parameters.

Use distinct `utm_content` values, for example:

- `hero`
- `navigation`
- `final_cta`

Base campaign:

```text
https://store.steampowered.com/app/4579430/OASIUM/?utm_source=official_site&utm_medium=web&utm_campaign=prelaunch&utm_content=hero
```

Steam UTM reporting should be the only analytics requirement in V1 unless the team separately approves another privacy/analytics tool.

## 7. Suggested Project Structure

```text
src/
  components/
    Header.astro
    Hero.astro
    WorldGallery.astro
    FeatureSummary.astro
    TrailerModal.astro
    SocialLinks.astro
    Footer.astro
  content/
    blog/
    guides/
  layouts/
    BaseLayout.astro
    ArticleLayout.astro
    GuideLayout.astro
  pages/
    index.astro
    blog/
    guides/
  styles/
    global.css
  config/
    site.ts
public/
  images/
  video/
```

Keep the Steam URL, social links, contact information, release label, and navigation in one shared configuration file.

## 8. Future Expansion

Prepare, but do not fully build, these content templates in V1:

- Blog index and Blog article.
- Guides index and Guide article.

Blog and Guide entries should use Markdown/MDX fields such as:

- Title
- Description
- Publish date
- Updated date
- Cover image
- Tags/category
- Draft status

The homepage can automatically display the latest published Blog entry later without manual layout changes.

## 9. Quality Requirements

- Responsive desktop, tablet, and mobile layouts.
- Fast first load despite the cinematic video.
- Lazy-load content below the first viewport.
- Respect `prefers-reduced-motion`.
- Keyboard-accessible navigation and trailer modal.
- Visible focus states and sufficient color contrast.
- SEO title/description, canonical URL, sitemap, Open Graph image, and `VideoGame` structured data.
- Build must pass before deployment and all external links must be checked.

## 10. Pre-launch Checks

- Confirm the Steam store page exposes `https://oasium.io` as the official website.
- Confirm whether the Steam minimum memory requirement should be `16 GB RAM` rather than `16 MB RAM`.
- Confirm the English homepage copy.
- Confirm the exact social channels that should be public.
- Test all Wishlist UTM links.
- Preserve the existing `CNAME` and custom domain during the migration from Jekyll to Astro.

