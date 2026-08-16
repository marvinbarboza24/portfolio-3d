import img0 from "../../../assets/images/projects/hataw/hataw-0.png";
import img1 from "../../../assets/images/projects/hataw/hataw-1.png";
import img2 from "../../../assets/images/projects/hataw/hataw-2.png";
import img3 from "../../../assets/images/projects/hataw/hataw-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Hataw",
  theme: "light",
  tags: ["vue"],
  videoBorder: false,
  live: "https://hataw.pages.dev/",
  description:
    "A Valenzuela covered court — book 3v3 or full court at Bong’s, watch the scoreboard from warmup to on-court, claim the slot on the painted green floor. Last game is ten.<br/><br/>Vue 3 + Vite + GSAP. Jersey green, yellow lines, English/Filipino. Demo court: Hataw Court, Barangay Malanday Covered Court. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Hataw full-bleed court hero", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Hataw scoreboard with on-court panel and roster table", caption: "Scoreboard" } },
    { type: "media", props: { type: "image", src: img2, alt: "Hataw rates list beside the booking sheet", caption: "Book" } },
    { type: "media", props: { type: "image", src: img3, alt: "Hataw court photo bento", caption: "The floor" } },
  ],
} as const satisfies ProjectContent;
