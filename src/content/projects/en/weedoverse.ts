import video from "../../../assets/videos/weedoverse.mp4";
import img0 from "../../../assets/images/projects/weedoverse/weedoverse-0.png";
import img1 from "../../../assets/images/projects/weedoverse/weedoverse-1.png";
import img2 from "../../../assets/images/projects/weedoverse/weedoverse-2.png";
import img3 from "../../../assets/images/projects/weedoverse/weedoverse-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Weedoverse",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "A 3D world you walk — tropical plaza, cannabis shop, crop rows, and a giant bud landmark. Season Harvest is a timed mini-game: drive the harvester, clear as many plants as you can, and bank the score before the clock hits zero.<br/><br/>Open-world stroll plus arcade farming, with in-world ads and a Gamify-the-world layer on top of the map.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Avatar walking the Weedoverse plaza", caption: "Plaza" } },
    { type: "media", props: { type: "image", src: img1, alt: "Cannabis shop and crop rows", caption: "Shop district" } },
    { type: "media", props: { type: "image", src: img2, alt: "Season Harvest mini-game with score and timer", caption: "Harvest mini-game" } },
    { type: "media", props: { type: "image", src: img3, alt: "Harvester in the fenced crop field", caption: "Crop field" } },
  ],
} as const satisfies ProjectContent;
