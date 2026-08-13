import video from "../../../assets/videos/ifrit.mp4";
import img0 from "../../../assets/images/projects/ifrit/ifrit-0.png";
import img1 from "../../../assets/images/projects/ifrit/ifrit-1.png";
import img2 from "../../../assets/images/projects/ifrit/ifrit-2.png";
import img3 from "../../../assets/images/projects/ifrit/ifrit-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Ifrit",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein Multiplayer-Blockchain-Actionspiel rund um den Grind: spielen, Tokens verdienen und sie in Systemen ausgeben, die für die Spieler gebaut sind.<br/><br/>Third-Person-Kampf in Verstecken, Kathedralen und Industrie-Maps — Lock-on, leichte und schwere Angriffe, Rolls und ein tiefes System-Kit, das die Schleife belohnend hält.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Spieler in einem industriellen Versteck", caption: "Versteck" } },
    { type: "media", props: { type: "image", src: img1, alt: "Lauf durch eine gotische Kathedralenhalle", caption: "Kathedrale" } },
    { type: "media", props: { type: "image", src: img2, alt: "Nahkampf auf einer Marmorterrasse", caption: "Kampf" } },
    { type: "media", props: { type: "image", src: img3, alt: "Kampf im Industrieviertel", caption: "Industrieviertel" } },
  ],
} as const satisfies ProjectContent;
