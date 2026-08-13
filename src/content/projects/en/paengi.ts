import video from "../../../assets/videos/paengi.mp4";
import img0 from "../../../assets/images/projects/paengi/paengi-0.png";
import img1 from "../../../assets/images/projects/paengi/paengi-1.png";
import img2 from "../../../assets/images/projects/paengi/paengi-2.png";
import img3 from "../../../assets/images/projects/paengi/paengi-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Paengi",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "A vibrant 2D educational game that turns healthy eating into a culinary adventure. Forage for local fruits, vegetables, and traditional sangkap to craft iconic Filipino dishes, unlocking recipes while discovering health benefits and cultural heritage.<br/><br/>Platform through islands and grottos as a tiny chef, collect ingredients, and cook your way through Filipino cuisine.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Ingredient hunt", caption: "Forage" } },
    { type: "media", props: { type: "image", src: img1, alt: "Chef platforming", caption: "Platforming" } },
    { type: "media", props: { type: "image", src: img2, alt: "Collect sangkap", caption: "Sangkap" } },
    { type: "media", props: { type: "image", src: img3, alt: "Food collectibles", caption: "Recipes" } },
  ],
} as const satisfies ProjectContent;
