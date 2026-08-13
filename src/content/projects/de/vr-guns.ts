import video from "../../../assets/videos/vr-guns.mp4";
import img0 from "../../../assets/images/projects/vr-guns/vr-guns-0.png";
import img1 from "../../../assets/images/projects/vr-guns/vr-guns-1.png";
import img2 from "../../../assets/images/projects/vr-guns/vr-guns-2.png";
import img3 from "../../../assets/images/projects/vr-guns/vr-guns-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Guns",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Eine immersive VR-Simulation für Schusswaffen-Training und Mechanik. In der digitalen Werkstatt Waffen Schritt für Schritt zusammen- und auseinanderbauen, danach Präzision, Rückstoßkontrolle und Treffsicherheit auf dem Schießstand testen.<br/><br/>Zeit-Challenges für Glock 17, Sniper und Tec-9 plus Stand-Training mit Magazinen und Zielen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Schießstand-Übung", caption: "Schießstand" } },
    { type: "media", props: { type: "image", src: img1, alt: "Waffenkammer", caption: "Waffenkammer" } },
    { type: "media", props: { type: "image", src: img2, alt: "Montage-Challenges", caption: "Montage" } },
    { type: "media", props: { type: "image", src: img3, alt: "Waffen-Werkstatt", caption: "Werkstatt" } },
  ],
} as const satisfies ProjectContent;
