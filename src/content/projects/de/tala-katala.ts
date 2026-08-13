import video from "../../../assets/videos/tala-katala.mp4";
import img0 from "../../../assets/images/projects/tala-katala/tala-katala-0.png";
import img1 from "../../../assets/images/projects/tala-katala/tala-katala-1.png";
import img2 from "../../../assets/images/projects/tala-katala/tala-katala-2.png";
import img3 from "../../../assets/images/projects/tala-katala/tala-katala-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Tala Katala",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Eine Sammlung aus 2D- und 3D-Minispielen zum Schutz des gefährdeten Rotsteißkakadus (Katala). Quizzes, Wortsuche, Drag-and-Drop und Umwelt-Rätsel vermitteln Habitatschutz und was es braucht, um diesen philippinischen Vogel zu retten.<br/><br/>Pre-Tests zu lokaler Tierwelt, Artenschutz-Vokabular und spielbare Lektionen für Unterricht und Kampagnen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Tala Katala Hauptmenü", caption: "Menü" } },
    { type: "media", props: { type: "image", src: img1, alt: "Artenschutz-Wortsuche", caption: "Wortsuche" } },
    { type: "media", props: { type: "image", src: img2, alt: "Mini-Game-Rätsel", caption: "Rätsel" } },
    { type: "media", props: { type: "image", src: img3, alt: "Artenschutz spielen", caption: "Awareness" } },
  ],
} as const satisfies ProjectContent;
