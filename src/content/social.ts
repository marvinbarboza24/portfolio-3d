export const CONTACT_EMAIL = "nhbarboza24@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`;

export const social = [
  { url: `mailto:${CONTACT_EMAIL}`, name: "mail" },
  { url: "https://github.com/marvinbarboza24", name: "github" },
  { url: "https://www.linkedin.com/in/marvin-barboza-9a0225254", name: "linkedin" },
  { url: "https://www.facebook.com/marvinharabarboza", name: "facebook" },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x" | "facebook";
}[];
