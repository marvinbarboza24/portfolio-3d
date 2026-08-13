import video from "../../../assets/videos/vr-therapy.mp4";
import img0 from "../../../assets/images/projects/vr-therapy/vr-therapy-0.png";
import img1 from "../../../assets/images/projects/vr-therapy/vr-therapy-1.png";
import img2 from "../../../assets/images/projects/vr-therapy/vr-therapy-2.png";
import img3 from "../../../assets/images/projects/vr-therapy/vr-therapy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Therapy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Eine immersive VR-App für mentale Gesundheit und Stressabbau in geführten Umgebungen. Entspannung, Expositionssimulationen und ruhige Räume helfen bei Angst, Achtsamkeit und Wohlbefinden.<br/><br/>Park- und Spielplatzszenen mit Zuordnungsaufgaben, Simon Says und ruhiger Outdoor-Atmosphäre.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Größen-Zuordnung", caption: "Zuordnen" } },
    { type: "media", props: { type: "image", src: img1, alt: "Simon-Says-Übung", caption: "Simon Says" } },
    { type: "media", props: { type: "image", src: img2, alt: "Therapie-Park", caption: "Park" } },
    { type: "media", props: { type: "image", src: img3, alt: "Ruhiger Spielplatz", caption: "Spielplatz" } },
  ],
} as const satisfies ProjectContent;
