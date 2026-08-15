import img0 from "../../../assets/images/projects/timpla-cafe/timpla-cafe-0.png";
import img1 from "../../../assets/images/projects/timpla-cafe/timpla-cafe-1.png";
import img2 from "../../../assets/images/projects/timpla-cafe/timpla-cafe-2.png";
import img3 from "../../../assets/images/projects/timpla-cafe/timpla-cafe-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Timplá Café",
  theme: "light",
  tags: ["vue"],
  videoBorder: false,
  live: "https://timpla-cafe.pages.dev/",
  description:
    "A digital QR menu for a Filipino café on Maginhawa Street — kape, silog, merienda, and panghimagas, with photos, cart checkout, and Mesa, a café assistant you can ask for recos or to add items to your order.<br/><br/>Vue 3 + Vite. Table-side ordering (dine-in or pickup), GCash or cash, and a grounded menu assistant. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Timplá Café interior hero", caption: "Café" } },
    { type: "media", props: { type: "image", src: img1, alt: "Tapsilog on the digital menu", caption: "Almusal" } },
    { type: "media", props: { type: "image", src: img2, alt: "Halo-halo from the dessert menu", caption: "Panghimagas" } },
    { type: "media", props: { type: "image", src: img3, alt: "Barako brew on the coffee menu", caption: "Kape" } },
  ],
} as const satisfies ProjectContent;
