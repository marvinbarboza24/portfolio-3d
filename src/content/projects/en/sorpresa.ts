import video from "../../../assets/videos/sorpresa.mp4";
import img0 from "../../../assets/images/projects/sorpresa/sorpresa-0.png";
import img1 from "../../../assets/images/projects/sorpresa/sorpresa-1.png";
import img2 from "../../../assets/images/projects/sorpresa/sorpresa-2.png";
import img3 from "../../../assets/images/projects/sorpresa/sorpresa-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Sorpresa",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An interactive cake customization game and digital ordering tool. Design cakes layer by layer — flavors, frostings, and toppings in real time — then connect online so participating local shops can bake your creation.<br/><br/>Live 3D preview, peso pricing summary, and options like Midnight Chocolate Cake, almonds, and choco swirl borders.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Cake workshop", caption: "Workshop" } },
    { type: "media", props: { type: "image", src: img1, alt: "Flavor and toppings", caption: "Customize" } },
    { type: "media", props: { type: "image", src: img2, alt: "Finished decoration", caption: "Decorations" } },
    { type: "media", props: { type: "image", src: img3, alt: "Order summary", caption: "Order" } },
  ],
} as const satisfies ProjectContent;
