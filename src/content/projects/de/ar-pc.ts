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
    "Eine AR-Lern-App, die PC-Bau visuell erlebbar macht. Scanne die Umgebung per Kamera, betrachte detaillierte 3D-Modelle von Computerkomponenten und teste dein Wissen mit Quizzes.<br/><br/>Umgesetzt in Unity mit markerbasiertem AR. RAM, GPUs, SSDs und mehr per 3D-Overlay, Audio-Erklärungen und Quiz-Modi von Average bis Difficult.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Hardware-Quiz", caption: "Quiz" } },
    { type: "media", props: { type: "image", src: img1, alt: "Schweres Quiz", caption: "Schwieriges Quiz" } },
    { type: "media", props: { type: "image", src: img2, alt: "Grafikkarte in AR", caption: "GPU-Overlay" } },
    { type: "media", props: { type: "image", src: img3, alt: "RAM in AR", caption: "RAM-Overlay" } },
  ],
} as const satisfies ProjectContent;
