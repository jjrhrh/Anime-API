type WebsiteConfig = {
  BASE: string;
};

export type AnimeWebsiteConfig = WebsiteConfig & {
  CLONES?: Record<string, string[]>;
};

type Websites = Record<string, AnimeWebsiteConfig>;

export const websites_collection: Websites = {
  AniWatch: {
    BASE: "https://hianime.to",
    CLONES: {
      HiAnime: [
        "https://hianime.sx",
        "https://aniwatchtv.to",
        "https://hianimez.is",
        "https://hianimez.to",
        "https://hianime.nz",
      ],
    },
  },
  GogoAnime: {
    BASE: "https://anitaku.pe",
  },
  KickAssAnime: {
    BASE: "https://kickass-anime.ro",
  },
};
