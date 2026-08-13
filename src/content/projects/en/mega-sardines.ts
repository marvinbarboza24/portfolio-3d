import video from "../../../assets/videos/mega-sardines.mp4";
import img0 from "../../../assets/images/projects/mega-sardines/mega-sardines-0.png";
import img1 from "../../../assets/images/projects/mega-sardines/mega-sardines-1.png";
import img2 from "../../../assets/images/projects/mega-sardines/mega-sardines-2.png";
import img3 from "../../../assets/images/projects/mega-sardines/mega-sardines-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Mega Sardines",
  theme: "light",
  tags: ["unity", "ar", "android"],
  videoBorder: true,
  description:
    "An AR promo for Mega Sardines. Point a phone at the can and the pack comes alive — 3D MEGA lettering, a fishing boat, swimming sardines, and a #1 badge sitting on the real label.<br/><br/>Image tracking on the product art, a fish-flock around the tin, and a mascot on the packaging so the brand can demo on shelf instead of on a slide.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "AR sardine swimming over the Mega can", caption: "Product AR" } },
    { type: "media", props: { type: "image", src: img1, alt: "Fish flock anchored to the Mega Sardines pack", caption: "Fish flock" } },
    { type: "media", props: { type: "image", src: img2, alt: "Mascot standing on the product label", caption: "Pack mascot" } },
    { type: "media", props: { type: "image", src: img3, alt: "MEGA 3D logo, boat, and sardines on the tin", caption: "On-pack overlay" } },
  ],
} as const satisfies ProjectContent;
