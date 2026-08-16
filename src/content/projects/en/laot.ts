import img0 from "../../../assets/images/projects/laot/laot-0.png";
import img1 from "../../../assets/images/projects/laot/laot-1.png";
import img2 from "../../../assets/images/projects/laot/laot-2.png";
import img3 from "../../../assets/images/projects/laot/laot-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Laot",
  theme: "light",
  tags: ["vue"],
  videoBorder: false,
  live: "https://laot.pages.dev/",
  description:
    "An El Nido island-hopping desk — pick Tour A to D or a sunset cruise, check wind, swell, and tide, then hold a seat on the bangka. Kayak, snorkel, pickup from Lio, and a waitlist when the joiners boat is full.<br/><br/>Vue 3 + Vite + GSAP. Turquoise and sand, English/Filipino. Demo pier: Laot ni Enteng, Corong-Corong Beach, Palawan. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Laot hero with lagoon photo and Hold a seat", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Laot sea strip with wind, swell, UV, and tide", caption: "The laot today" } },
    { type: "media", props: { type: "image", src: img2, alt: "Laot tour cards A through D and sunset cruise", caption: "Tours" } },
    { type: "media", props: { type: "image", src: img3, alt: "Laot booking sheet with dates, pax, and add-ons", caption: "Hold a seat" } },
  ],
} as const satisfies ProjectContent;
