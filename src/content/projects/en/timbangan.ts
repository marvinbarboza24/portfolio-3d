import img0 from "../../../assets/images/projects/timbangan/timbangan-0.png";
import img1 from "../../../assets/images/projects/timbangan/timbangan-1.png";
import img2 from "../../../assets/images/projects/timbangan/timbangan-2.png";
import img3 from "../../../assets/images/projects/timbangan/timbangan-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Timbangan",
  theme: "dark",
  tags: ["vue"],
  videoBorder: false,
  live: "https://timbangan.pages.dev/",
  description:
    "A Cubao palengke price board — today’s kilo for bangus, tilapia, gulay, and karne, with suki prices, a bayong list, and ice that melts as the morning goes. Kilos follow DA Bantay Presyo NCR ranges.<br/><br/>Vue 3 + Vite + GSAP. Wet tile and tarp green, English/Filipino. Demo stall: Aling Nida, Stall 12, Bagong Palengke Cubao. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Timbangan hero with Cubao wet market and live price ticker", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Timbangan price board with item photos, kilos, and suki prices", caption: "The board" } },
    { type: "media", props: { type: "image", src: img2, alt: "Timbangan stall map for fish, gulay, karne, and prutas", caption: "Stalls" } },
    { type: "media", props: { type: "image", src: img3, alt: "Timbangan bayong list with totals and share", caption: "Bayong" } },
  ],
} as const satisfies ProjectContent;
