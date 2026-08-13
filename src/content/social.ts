export const social = [
  { url: "mailto:nhbarboza24@gmail.com", name: "mail" },
  { url: "https://github.com/marvinbarboza24", name: "github" },
  { url: "https://www.linkedin.com/in/marvin-barboza-9a0225254", name: "linkedin" },
  { url: "https://www.facebook.com/marvinharabarboza", name: "facebook" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x" | "facebook";
}[];
