import video from "../../../assets/videos/disaster-game.mp4";
import img0 from "../../../assets/images/projects/disaster-game/disaster-game-0.png";
import img1 from "../../../assets/images/projects/disaster-game/disaster-game-1.png";
import img2 from "../../../assets/images/projects/disaster-game/disaster-game-2.png";
import img3 from "../../../assets/images/projects/disaster-game/disaster-game-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Disaster Game",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein interaktives Vorsorge-Spiel: Spieler meistern reale Gefahrenszenarien wie Taifune und Erdbeben, um in Sicherheit zu kommen. Wege räumen, Entscheidungen treffen, Vorräte managen — und dabei Evakuierung und Überleben lernen.<br/><br/>Kalamiät wählen, durch beschädigte Innenräume platformen, Erste Hilfe und Taschenlampen sammeln.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Szenario-Auswahl", caption: "Katastrophen" } },
    { type: "media", props: { type: "image", src: img1, alt: "Taschenlampen-Power-up", caption: "Vorräte" } },
    { type: "media", props: { type: "image", src: img2, alt: "Beschädigte Innenräume", caption: "Erdbeben" } },
    { type: "media", props: { type: "image", src: img3, alt: "Trümmer und Gefahren", caption: "Gefahren" } },
  ],
} as const satisfies ProjectContent;
