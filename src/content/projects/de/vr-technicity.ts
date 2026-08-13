import video from "../../../assets/videos/vr-technicity.mp4";
import img0 from "../../../assets/images/projects/vr-technicity/vr-technicity-0.png";
import img1 from "../../../assets/images/projects/vr-technicity/vr-technicity-1.png";
import img2 from "../../../assets/images/projects/vr-technicity/vr-technicity-2.png";
import img3 from "../../../assets/images/projects/vr-technicity/vr-technicity-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Technicity",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Eine kapitelweise VR-Technikschulung. Kapitel 1 führt durch Elektroarbeiten im Innenraum — Bodenpfeilen folgen, Teile vom Materialregal holen und orangefarbene Leitungen mit einem Handscanner prüfen.<br/><br/>Störungen erscheinen als verstopfte Leitungen, verbrannte Kabelwege und Überhitzungswarnungen, damit Auszubildende diagnostizieren und reparieren, bevor sie an echte Anlagen gehen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Technicity Kapitel-1 Elektro-Briefing", caption: "Kapitel-Briefing" } },
    { type: "media", props: { type: "image", src: img1, alt: "Leitungsüberhitzung mit Scanner-Tablet", caption: "Leitungsstörung" } },
    { type: "media", props: { type: "image", src: img2, alt: "Verbrannte Leitungen reparieren", caption: "Reparatur" } },
    { type: "media", props: { type: "image", src: img3, alt: "Materialstation mit Elektroteilen", caption: "Materialstation" } },
  ],
} as const satisfies ProjectContent;
