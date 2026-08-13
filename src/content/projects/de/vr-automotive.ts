import video from "../../../assets/videos/vr-automotive.mp4";
import img0 from "../../../assets/images/projects/vr-automotive/vr-automotive-0.png";
import img1 from "../../../assets/images/projects/vr-automotive/vr-automotive-1.png";
import img2 from "../../../assets/images/projects/vr-automotive/vr-automotive-2.png";
import img3 from "../../../assets/images/projects/vr-automotive/vr-automotive-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Automotive",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein immersiver VR-Mechanik-Simulator: Du arbeitest als Kfz-Techniker in einer virtuellen Werkstatt — Wartung, Ölwechsel, Motorkomponenten prüfen und Fehler diagnostizieren.<br/><br/>Geführte Aufgaben vom Ölkanister bis zur Arbeit unter dem Fahrwerk in der Grube.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Virtuelle Werkstatt", caption: "Werkstatt" } },
    { type: "media", props: { type: "image", src: img1, alt: "Gruben-Inspektion", caption: "Unterboden" } },
    { type: "media", props: { type: "image", src: img2, alt: "Ölwechsel-Aufgabe", caption: "Ölwechsel" } },
    { type: "media", props: { type: "image", src: img3, alt: "Autowerkstatt", caption: "Garage" } },
  ],
} as const satisfies ProjectContent;
