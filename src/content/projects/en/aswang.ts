import video from "../../../assets/videos/aswang.mp4";
import img0 from "../../../assets/images/projects/aswang/aswang-0.png";
import img1 from "../../../assets/images/projects/aswang/aswang-1.png";
import img2 from "../../../assets/images/projects/aswang/aswang-2.png";
import img3 from "../../../assets/images/projects/aswang/aswang-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Aswang",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An action-packed survival game rooted in Philippine folklore, where players face terrifying mythological creatures. Armed to defeat the shapeshifting beasts of the night, the objective is simple: track down and eliminate every Aswang before they consume the town.<br/><br/>Explore dark villages, study a folklore bestiary, and hunt creatures like the Syokoy with flashlight, melee, and traditional weapons.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Jungle ritual site", caption: "Ritual site" } },
    { type: "media", props: { type: "image", src: img1, alt: "Flashlight exploration", caption: "Night hunt" } },
    { type: "media", props: { type: "image", src: img2, alt: "Night exploration", caption: "Wilderness" } },
    { type: "media", props: { type: "image", src: img3, alt: "Creature lore", caption: "Bestiary" } },
  ],
} as const satisfies ProjectContent;
