import img0 from "../../../assets/images/projects/labada/labada-0.png";
import img1 from "../../../assets/images/projects/labada/labada-1.png";
import img2 from "../../../assets/images/projects/labada/labada-2.png";
import img3 from "../../../assets/images/projects/labada/labada-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Labada",
  theme: "light",
  tags: ["vue"],
  videoBorder: false,
  live: "https://labada.pages.dev/",
  description:
    "A Barangka laundry rail — drop a bundle, watch it move from wash to dry to fold, claim when the ticket says ready. Starch, suki punches, bike pickup inside Highway Hills.<br/><br/>Vue 3 + Vite + GSAP. Receipt pink and steam, English/Filipino. Demo shop: Labada ni Tessie, 88 A. Bonifacio, Mandaluyong. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Labada hero with neighborhood laundry copy and live ticket ticker", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Labada queue rail with Drop, Wash, Dry, Fold, and Claim columns", caption: "The rail" } },
    { type: "media", props: { type: "image", src: img2, alt: "Labada drop form for name, kilos, add-ons, and a ticket", caption: "Counter" } },
    { type: "media", props: { type: "image", src: img3, alt: "Labada rate cards for wash and fold, hang, express, barong, and bedsheets", caption: "Rates" } },
  ],
} as const satisfies ProjectContent;
