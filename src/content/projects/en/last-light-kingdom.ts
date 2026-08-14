import video from "../../../assets/videos/last-light-kingdom.mp4";
import img0 from "../../../assets/images/projects/last-light-kingdom/last-light-kingdom-0.png";
import img1 from "../../../assets/images/projects/last-light-kingdom/last-light-kingdom-1.png";
import img2 from "../../../assets/images/projects/last-light-kingdom/last-light-kingdom-2.png";
import img3 from "../../../assets/images/projects/last-light-kingdom/last-light-kingdom-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Last Light Kingdom",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "In a land torn apart by a devastating scourge, survival isn't just about fighting—it's about building a future.<br/><br/>As nightfall approaches, the dead rise to claim what is left of living land. By daylight, you must scout the territory, forage for crucial food supplies, and mine the gold required to reinforce your position. Lay out your settlement block by block, ensuring every building plays its part in your survival ecosystem.<br/><br/>Train your archers, ready your vanguard, and expand your walls. When darkness falls and the horde arrives at your gates, will your kingdom hold the line?",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "King at the settlement tent on Day 1", caption: "Settlement" } },
    { type: "media", props: { type: "image", src: img1, alt: "King in town as night falls", caption: "Nightfall" } },
    { type: "media", props: { type: "image", src: img2, alt: "Scouting the settlement at dusk", caption: "Dusk scout" } },
    { type: "media", props: { type: "image", src: img3, alt: "Castle hall with supplies and torchlight", caption: "Hall" } },
  ],
} as const satisfies ProjectContent;
