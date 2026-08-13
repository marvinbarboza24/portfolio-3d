import video from "../../../assets/videos/dyslexia.mp4";
import img0 from "../../../assets/images/projects/dyslexia/dyslexia-0.png";
import img1 from "../../../assets/images/projects/dyslexia/dyslexia-1.png";
import img2 from "../../../assets/images/projects/dyslexia/dyslexia-2.png";
import img3 from "../../../assets/images/projects/dyslexia/dyslexia-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Dyslexia Game",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Eine Lern-App für Menschen mit Legasthenie: Buchstaben nachspuren, Hör-Aufgaben und Drag-and-Drop-Buchstabenaufbau fördern Phonetik, Erkennung und Motorik.<br/><br/>Multisensorische Übungen im Orton-Gillingham-Stil mit Easy, Medium und Hard, Spurhilfen und direktem Feedback.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Hauptmenü", caption: "Menü" } },
    { type: "media", props: { type: "image", src: img1, alt: "Richtig", caption: "Feedback" } },
    { type: "media", props: { type: "image", src: img2, alt: "Zahlen nachspuren", caption: "Nachspuren" } },
    { type: "media", props: { type: "image", src: img3, alt: "Levelauswahl", caption: "Level" } },
  ],
} as const satisfies ProjectContent;
