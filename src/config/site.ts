const steamBase = 'https://store.steampowered.com/app/4579430/OASIUM/';

export const site = {
  title: 'OASIUM | Immersive Social World',
  description:
    'OASIUM is a free-to-play immersive social world for PCVR and PC. Explore new worlds and wishlist OASIUM on Steam.',
  release: {
    label: 'Coming Soon',
    date: 'November, 2026',
    datetime: '2026-11',
  },
  links: {
    wishlist: `${steamBase}?utm_source=official_site&utm_medium=web&utm_campaign=prelaunch&utm_content=hero`,
    navigationWishlist: `${steamBase}?utm_source=official_site&utm_medium=web&utm_campaign=prelaunch&utm_content=navigation`,
    trailer: steamBase,
    social: 'https://steamcommunity.com/app/4579430',
    news: 'https://store.steampowered.com/news/app/4579430',
    community: 'https://steamcommunity.com/app/4579430/discussions/',
  },
} as const;

