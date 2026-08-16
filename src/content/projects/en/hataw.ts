import img0 from "../../../assets/images/projects/hataw/hataw-0.png";
import img1 from "../../../assets/images/projects/hataw/hataw-1.png";
import img2 from "../../../assets/images/projects/hataw/hataw-2.png";
import img3 from "../../../assets/images/projects/hataw/hataw-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Hataw",
  theme: "dark",
  tags: ["vue"],
  videoBorder: false,
  live: "https://hataw.pages.dev/",
  description:
    "A Valenzuela night court — book 3v3 or full court at Bong’s, watch the board from warmup to on-court, claim the slot when the floods are on. Last game is ten.<br/><br/>Vue 3 + Vite + GSAP. Orange rubber and floodlight, English/Filipino. Demo court: Hataw Court, Barangay Malanday Covered Court. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Hataw hero with night court and live slot ticker", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Hataw board with Warmup, On court, Sideline, Next, and Done columns", caption: "The rubber" } },
    { type: "media", props: { type: "image", src: img2, alt: "Hataw booking form for team name, game, and night slot", caption: "Counter" } },
    { type: "media", props: { type: "image", src: img3, alt: "Hataw rate cards for 3v3, 5v5, shootaround, kids, and night block", caption: "Rates" } },
  ],
} as const satisfies ProjectContent;
