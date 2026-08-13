import video from "../../../assets/videos/tourist-spot.mp4";
import img0 from "../../../assets/images/projects/tourist-spot/tourist-spot-0.png";
import img1 from "../../../assets/images/projects/tourist-spot/tourist-spot-1.png";
import img2 from "../../../assets/images/projects/tourist-spot/tourist-spot-2.png";
import img3 from "../../../assets/images/projects/tourist-spot/tourist-spot-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Virtual Tourist Spot Center",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An immersive digital tour that lets players explore iconic destinations across the Philippines from anywhere. Discover landmarks, cultural heritage, and virtual information centers to plan real trips or take a guided educational journey through scenic spots.<br/><br/>Walk a tropical visitor center, browse destination screens, and step inside interactive exhibits.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Visitor center exterior", caption: "Center" } },
    { type: "media", props: { type: "image", src: img1, alt: "Interactive tourist center", caption: "Entrance" } },
    { type: "media", props: { type: "image", src: img2, alt: "Indoor exhibits", caption: "Exhibits" } },
    { type: "media", props: { type: "image", src: img3, alt: "Destination screens", caption: "Destinations" } },
  ],
} as const satisfies ProjectContent;
