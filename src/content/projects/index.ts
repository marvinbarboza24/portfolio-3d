import type { Locale } from "../../i18n/types";
import type { TagVariant } from "../../components/tagVariants";

export type ProjectCategory = "ar" | "vr" | "lms" | "self-service" | "other";

export const projectIds = [
  "ar-pc",
  "ar-space-shooter",
  "ar-science",
  "volcanic-simulation",
  "mega-sardines",
  "physicraft",
  "vr-dentist",
  "vr-guns",
  "vr-automotive",
  "vr-autopsy",
  "vr-anatomy",
  "vr-therapy",
  "vr-kitchen",
  "vr-church",
  "vr-folk-dance",
  "vr-plane-tech",
  "vr-emergency",
  "vr-world-war-2",
  "vr-caregiver",
  "vr-motor-technician",
  "vr-human-anatomy",
  "vr-technicity",
  "cmu-portal",
  "cmu-lms",
  "diliman-lms",
  "timpla-cafe",
  "salo-rsvp",
  "sakay",
  "gupit",
  "videoke",
  "laot",
  "timbangan",
  "labada",
  "last-light-kingdom",
  "project-post",
  "going-up",
  "meca-chammelion",
  "themepark-games",
  "aswang",
  "pandemia",
  "disaster-game",
  "dyslexia",
  "paengi",
  "tala-katala",
  "urban-doctor",
  "tourist-spot",
  "peak-quest",
  "sorpresa",
  "playtime-guard",
  "marbles-on-chain",
  "ifrit",
  "weedoverse",
];

export const projectCategories: Record<(typeof projectIds)[number], ProjectCategory> = {
  "ar-pc": "ar",
  "ar-space-shooter": "ar",
  "ar-science": "ar",
  "volcanic-simulation": "ar",
  "mega-sardines": "ar",
  physicraft: "ar",
  "vr-dentist": "vr",
  "vr-guns": "vr",
  "vr-automotive": "vr",
  "vr-autopsy": "vr",
  "vr-anatomy": "vr",
  "vr-therapy": "vr",
  "vr-kitchen": "vr",
  "vr-church": "vr",
  "vr-folk-dance": "vr",
  "vr-plane-tech": "vr",
  "vr-emergency": "vr",
  "vr-world-war-2": "vr",
  "vr-caregiver": "vr",
  "vr-motor-technician": "vr",
  "vr-human-anatomy": "vr",
  "vr-technicity": "vr",
  "cmu-portal": "lms",
  "cmu-lms": "lms",
  "diliman-lms": "lms",
  "timpla-cafe": "self-service",
  "salo-rsvp": "self-service",
  sakay: "self-service",
  gupit: "self-service",
  videoke: "self-service",
  laot: "self-service",
  timbangan: "self-service",
  labada: "self-service",
  "last-light-kingdom": "other",
  "project-post": "self-service",
  "going-up": "other",
  "meca-chammelion": "other",
  "themepark-games": "other",
  aswang: "other",
  pandemia: "other",
  "disaster-game": "other",
  dyslexia: "other",
  paengi: "other",
  "tala-katala": "other",
  "urban-doctor": "other",
  "tourist-spot": "other",
  "peak-quest": "other",
  sorpresa: "other",
  "playtime-guard": "other",
  "marbles-on-chain": "other",
  ifrit: "other",
  weedoverse: "other",
};

export const platformTags = ["web", "pc", "mobile"] as const satisfies TagVariant[];

export const categoryOrder = ["vr", "lms", "self-service", "other", "ar"] as const satisfies ProjectCategory[];

export function getDisplayTags(slug: string, tags: TagVariant[]): TagVariant[] {
  const category = projectCategories[slug as keyof typeof projectCategories];
  const result: TagVariant[] = [];
  const push = (tag: TagVariant) => {
    if (!result.includes(tag)) result.push(tag);
  };

  if (category === "ar") push("ar");
  if (category === "vr") push("vr");
  for (const tag of tags) {
    if (tag !== "web" && tag !== "pc" && tag !== "mobile") push(tag);
  }
  for (const tag of platformTags) push(tag);
  return result;
}
//export const projectIds = ["streakon", "cubewar", "quibbo", "sharkie", "pokedex"];

function simplifyModules(glob: Record<string, any>) {
  const result: Record<string, any> = {};
  for (const [path, mod] of Object.entries(glob)) {
    const match = path.match(/\/([a-z0-9_-]+)\.ts$/i);
    if (match) result[match[1] as string] = mod;
  }
  return result;
}

export const projectModules = {
  tl: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
  en: simplifyModules(import.meta.glob("./en/*.ts", { eager: true })),
} as const satisfies Record<Locale, Record<string, any>>;
