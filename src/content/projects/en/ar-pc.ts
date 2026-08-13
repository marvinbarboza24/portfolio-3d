import video from "../../../assets/videos/ar-pc.mp4";
import img0 from "../../../assets/images/projects/ar-pc/ar-pc-0.png";
import img1 from "../../../assets/images/projects/ar-pc/ar-pc-1.png";
import img2 from "../../../assets/images/projects/ar-pc/ar-pc-2.png";
import img3 from "../../../assets/images/projects/ar-pc/ar-pc-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "AR PC",
  theme: "light",
  tags: ["unity", "ar"],
  videoBorder: true,
  description:
    "An augmented reality educational app that turns PC building into an interactive visual experience. Scan the physical world with a camera to view detailed 3D models of computer components, explore how they work, and test your knowledge with integrated quizzes.<br/><br/>Built in Unity with marker-based AR. Learn RAM, GPUs, SSDs, and more through 3D overlays, audio explainers, and quiz modes from average to difficult.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Hardware quiz", caption: "Quiz" } },
    { type: "media", props: { type: "image", src: img1, alt: "Difficult quiz", caption: "Challenge quiz" } },
    { type: "media", props: { type: "image", src: img2, alt: "Graphics card in AR", caption: "GPU overlay" } },
    { type: "media", props: { type: "image", src: img3, alt: "RAM in AR", caption: "RAM overlay" } },
  ],
} as const satisfies ProjectContent;
