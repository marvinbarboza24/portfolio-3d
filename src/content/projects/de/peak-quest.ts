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
    "Ein Mathe-Abenteuer: Klettere, indem du Grundrechenarten meisterst. Plus, Minus, Mal und Geteilt lösen Hindernisse, schalten Karten frei und steigern den Schwierigkeitsgrad.<br/><br/>Dschungel-Fragenbretter, Antwort-Eingabe und ein Achievement-Regal, das sich mit jedem Skill füllt.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Rechenaufgabe", caption: "Frage" } },
    { type: "media", props: { type: "image", src: img1, alt: "Achievement-Regal", caption: "Achievements" } },
    { type: "media", props: { type: "image", src: img2, alt: "Dschungel-Mathebrett", caption: "Dschungel" } },
    { type: "media", props: { type: "image", src: img3, alt: "Schwierigere Aufgaben", caption: "Level" } },
  ],
} as const satisfies ProjectContent;
