import video from "../../../assets/videos/marbles-on-chain.mp4";
import img0 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-0.png";
import img1 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-1.png";
import img2 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-2.png";
import img3 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Marbles on Chain",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein WebGL-1v1-Murmelrennen für die Chain. Du landest auf einer Hochbahn, deine Murmel ist mit You markiert, und du rast über Rampen, Tore und Block-Hindernisse, während ein zweiter Spieler dieselbe Strecke fährt.<br/><br/>Physik-Rennen im Browser — Glow-Materialien, HDRP-Look und eine kompetitive Map, die als Multiplayer-Match on-chain sitzt.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Spielermurmel You auf der Rennstrecke", caption: "Deine Murmel" } },
    { type: "media", props: { type: "image", src: img1, alt: "1v1-Murmel-Rennstrecke", caption: "Rennstrecke" } },
    { type: "media", props: { type: "image", src: img2, alt: "Hindernisse und Rampen", caption: "Hindernisse" } },
    { type: "media", props: { type: "image", src: img3, alt: "Tor- und Säulenabschnitt der Map", caption: "Streckentore" } },
  ],
} as const satisfies ProjectContent;
