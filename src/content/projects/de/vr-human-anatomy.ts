import video from "../../../assets/videos/vr-human-anatomy.mp4";
import img0 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-0.png";
import img1 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-1.png";
import img2 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-2.png";
import img3 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Human Anatomy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein VR-Anatomielabor mit vollständigem Skelett, beschrifteten Regionen und System-für-System-Rundgängen. Klemmbrett zu Becken und unterem Rücken, Herz und Gefäße prüfen, dann das Air-Balance-Minispiel an den Lungen.<br/><br/>Um einen lebensgroßen Körper gehen, Systeme isolieren und die Notizen in der Welt lesen — statt im Lehrbuch umzublättern.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Beschriftetes Skelett im Anatomielabor", caption: "Skelettlabor" } },
    { type: "media", props: { type: "image", src: img1, alt: "Kreislaufsystem und Herz", caption: "Kreislaufsystem" } },
    { type: "media", props: { type: "image", src: img2, alt: "Herz und Gefäße mit Lernklemmbrett", caption: "Herzstudie" } },
    { type: "media", props: { type: "image", src: img3, alt: "Atem-Minispiel Air Balance", caption: "Air Balance" } },
  ],
} as const satisfies ProjectContent;
