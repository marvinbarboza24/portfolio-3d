import video from "../../../assets/videos/disaster-game.mp4";
import img0 from "../../../assets/images/projects/disaster-game/disaster-game-0.png";
import img1 from "../../../assets/images/projects/disaster-game/disaster-game-1.png";
import img2 from "../../../assets/images/projects/disaster-game/disaster-game-2.png";
import img3 from "../../../assets/images/projects/disaster-game/disaster-game-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Disaster Game",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An interactive emergency preparedness game where players navigate real-world hazard scenarios — typhoons, earthquakes, and more — to reach safety. Clear paths, make split-second decisions, and manage supplies while learning survival tactics and evacuation strategies.<br/><br/>Pick a calamity, then platform through damaged interiors, collect first-aid and flashlights, and stay alive.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Calamity select", caption: "Calamities" } },
    { type: "media", props: { type: "image", src: img1, alt: "Flashlight power-up", caption: "Supplies" } },
    { type: "media", props: { type: "image", src: img2, alt: "Damaged interiors", caption: "Earthquake" } },
    { type: "media", props: { type: "image", src: img3, alt: "Debris and hazards", caption: "Hazards" } },
  ],
} as const satisfies ProjectContent;
