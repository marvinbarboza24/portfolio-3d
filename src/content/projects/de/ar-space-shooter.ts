import video from "../../../assets/videos/ar-space-shooter.mp4";
import img0 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-0.png";
import img1 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-1.png";
import img2 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-2.png";
import img3 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "AR Space Shooter",
  theme: "light",
  tags: ["unity", "ar"],
  videoBorder: true,
  description:
    "Ein immersives AR-Arcade-Spiel, das deine echte Umgebung in ein intergalaktisches Schlachtfeld verwandelt. Mit der Kamerasicht räumst du Asteroiden, Trümmer und Bedrohungen in Echtzeit ab.<br/><br/>Tippen zum Schießen, wischen zum Bewegen — Gegner erscheinen direkt im Live-Kamerabild.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Steuerung", caption: "Tutorial" } },
    { type: "media", props: { type: "image", src: img1, alt: "Kamera-Arena", caption: "AR-Arena" } },
    { type: "media", props: { type: "image", src: img2, alt: "AR-Kampf", caption: "Kampf" } },
    { type: "media", props: { type: "image", src: img3, alt: "Asteroiden-Ziele", caption: "Asteroiden" } },
  ],
} as const satisfies ProjectContent;
