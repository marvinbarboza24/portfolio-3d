import video from "../../../assets/videos/pandemia.mp4";
import img0 from "../../../assets/images/projects/pandemia/pandemia-0.png";
import img1 from "../../../assets/images/projects/pandemia/pandemia-1.png";
import img2 from "../../../assets/images/projects/pandemia/pandemia-2.png";
import img3 from "../../../assets/images/projects/pandemia/pandemia-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Pandemia",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "A fast-paced endless runner inspired by games like Subway Surfers, where players outrun a relentless swarm of COVID viruses. Dodge obstacles, collect health boosters, and navigate high-speed hazards to stay safe and post the highest score.<br/><br/>Three-lane running, ramps, barricades, and collectible masks — swipe, dodge, and chase a new high score.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Bridge run in Pandemia", caption: "Bridge run" } },
    { type: "media", props: { type: "image", src: img1, alt: "Endless run", caption: "Runner" } },
    { type: "media", props: { type: "image", src: img2, alt: "Score screen", caption: "Score" } },
    { type: "media", props: { type: "image", src: img3, alt: "Lanes and collectibles", caption: "Lanes" } },
  ],
} as const satisfies ProjectContent;
