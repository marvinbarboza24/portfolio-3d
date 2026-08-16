import img0 from "../../../assets/images/projects/galon/galon-0.png";
import img1 from "../../../assets/images/projects/galon/galon-1.png";
import img2 from "../../../assets/images/projects/galon/galon-2.png";
import img3 from "../../../assets/images/projects/galon/galon-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Galon",
  theme: "dark",
  tags: ["vue"],
  videoBorder: false,
  live: "https://galon-igk.pages.dev/",
  description:
    "A Malabon night refill — take a number at Rudy’s, watch the crate from line to fill to cap, claim when the tap stops. Slim, alkaline, ice, sidecar to Catmon.<br/><br/>Vue 3 + Vite + GSAP. Stacked jugs under fluoro, English/Filipino. Demo station: Galon ni Rudy, 12 M.H. del Pilar, Tinajeros. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Galon hero with night refill copy and stacked jug crates", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Galon queue board with Line, Fill, Cap, Crate, and Out columns", caption: "The crates" } },
    { type: "media", props: { type: "image", src: img2, alt: "Galon fill form for name, water type, jugs, and add-ons", caption: "Counter" } },
    { type: "media", props: { type: "image", src: img3, alt: "Galon rate cards for mineral, alkaline, distilled, and ice", caption: "Rates" } },
  ],
} as const satisfies ProjectContent;
