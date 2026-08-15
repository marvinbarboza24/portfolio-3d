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
    { type: "media", props: { type: "image", src: img0, alt: "Timplá Café digital menu hero with Ask Mesa, Cart, and QR dock", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Timplá merienda menu cards with add to order", caption: "Menu" } },
    { type: "media", props: { type: "image", src: img2, alt: "Timplá cart drawer with Barako Brew checkout", caption: "Cart" } },
    { type: "media", props: { type: "image", src: img3, alt: "Mesa café assistant chat on Timplá", caption: "Mesa" } },
  ],
} as const satisfies ProjectContent;
