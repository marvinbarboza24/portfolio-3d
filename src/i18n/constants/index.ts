export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  tl: {
    iso: "tl-PH",
    name: "Tagalog",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
