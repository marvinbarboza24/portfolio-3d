import video from "../../../assets/videos/peak-quest.mp4";
import img0 from "../../../assets/images/projects/peak-quest/peak-quest-0.png";
import img1 from "../../../assets/images/projects/peak-quest/peak-quest-1.png";
import img2 from "../../../assets/images/projects/peak-quest/peak-quest-2.png";
import img3 from "../../../assets/images/projects/peak-quest/peak-quest-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Peak Quest",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An educational math adventure where players climb by mastering core arithmetic. Solve addition, subtraction, multiplication, and division to clear obstacles, unlock maps, and progress through harder levels.<br/><br/>Jungle question boards, enter-answer challenges, and an achievement shelf that fills as you master each skill.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Arithmetic question", caption: "Question" } },
    { type: "media", props: { type: "image", src: img1, alt: "Achievement shelf", caption: "Achievements" } },
    { type: "media", props: { type: "image", src: img2, alt: "Jungle math board", caption: "Jungle" } },
    { type: "media", props: { type: "image", src: img3, alt: "Harder problems", caption: "Levels" } },
  ],
} as const satisfies ProjectContent;
