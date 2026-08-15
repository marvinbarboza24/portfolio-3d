import img0 from "../../../assets/images/projects/sakay/sakay-0.png";
import img1 from "../../../assets/images/projects/sakay/sakay-1.png";
import img2 from "../../../assets/images/projects/sakay/sakay-2.png";
import img3 from "../../../assets/images/projects/sakay/sakay-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Sakay",
  theme: "dark",
  tags: ["vue"],
  videoBorder: false,
  live: "https://sakay.pages.dev/",
  description:
    "A jeepney fare guide for Metro Manila campuses — pick where you board and which university you’re going to, then see the bayad, transfers, and landmarks along the way.<br/><br/>Vue 3 + Vite + GSAP. 19 schools across Quezon City, the University Belt, Taft, Ermita, Intramuros, and Sta. Mesa. Student and senior discounts, walk-when-close, and a note when MRT is faster. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Filipino jeepney on a Quezon City street", caption: "Jeepney" } },
    { type: "media", props: { type: "image", src: img1, alt: "UP Diliman academic oval", caption: "UP Diliman" } },
    { type: "media", props: { type: "image", src: img2, alt: "UST España Boulevard", caption: "UST" } },
    { type: "media", props: { type: "image", src: img3, alt: "Taft Avenue near DLSU", caption: "Taft" } },
  ],
} as const satisfies ProjectContent;
