import img0 from "../../../assets/images/projects/gupit/gupit-0.png";
import img1 from "../../../assets/images/projects/gupit/gupit-1.png";
import img2 from "../../../assets/images/projects/gupit/gupit-2.png";
import img3 from "../../../assets/images/projects/gupit/gupit-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Gupit",
  theme: "dark",
  tags: ["vue"],
  videoBorder: false,
  live: "https://gupit.pages.dev/",
  description:
    "A neighborhood barbershop walk-in queue — pick a barber, see the wait, take a number or book a slot. Suki card, lookbook, and a live board so you are not stuck on the neighbor’s chair.<br/><br/>Vue 3 + Vite + GSAP. Dark wood and neon, English/Filipino, student and senior rates. Demo shop: Tito Jun on España, Manila. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Gupit hero with neon sign and Take a number", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Gupit live queue board with barbers and wait times", caption: "Queue" } },
    { type: "media", props: { type: "image", src: img2, alt: "Gupit lookbook of fade, classic, buzz, and beard", caption: "Lookbook" } },
    { type: "media", props: { type: "image", src: img3, alt: "Gupit walk-in ticket form with add-ons and total", caption: "Ticket" } },
  ],
} as const satisfies ProjectContent;
