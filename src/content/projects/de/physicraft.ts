import video from "../../../assets/videos/physicraft.mp4";
import img0 from "../../../assets/images/projects/physicraft/physicraft-0.png";
import img1 from "../../../assets/images/projects/physicraft/physicraft-1.png";
import img2 from "../../../assets/images/projects/physicraft/physicraft-2.png";
import img3 from "../../../assets/images/projects/physicraft/physicraft-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Physicraft",
  theme: "light",
  tags: ["unity", "ar", "android"],
  videoBorder: true,
  description:
    "Ein AR-Physikspiel mit Quizzes und räumlichen Lektionen. Module zu geradliniger Bewegung und Wurfbewegung in der Kinematik, Shop für Hinweise, Extra-Zeit und Gold-Boni, plus Video- oder interaktives Tutorial vor dem Start.<br/><br/>Matching- und Geschwindigkeitsaufgaben im Wireframe-Labor spielen, dann dieselbe Physik per AR in den Raum vor dir setzen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Menü Projectile Motion in Kinematics", caption: "Kinematik-Menü" } },
    { type: "media", props: { type: "image", src: img1, alt: "Shop mit Quiz-Hinweisen und Zeit-Boosts", caption: "Quiz-Shop" } },
    { type: "media", props: { type: "image", src: img2, alt: "Physicraft-Titel und Tutorial-Auswahl", caption: "Titelbildschirm" } },
    { type: "media", props: { type: "image", src: img3, alt: "Geschwindigkeits-Matching im Physiklabor", caption: "Velocity-Labor" } },
  ],
} as const satisfies ProjectContent;
