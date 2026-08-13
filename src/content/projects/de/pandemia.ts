import video from "../../../assets/videos/pandemia.mp4";
import img0 from "../../../assets/images/projects/pandemia/pandemia-0.png";
import img1 from "../../../assets/images/projects/pandemia/pandemia-1.png";
import img2 from "../../../assets/images/projects/pandemia/pandemia-2.png";
import img3 from "../../../assets/images/projects/pandemia/pandemia-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Pandemia",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein rasanter Endless Runner à la Subway Surfers: Spieler entkommen einem Schwarm von COVID-Viren. Weiche Hindernissen aus, sammle Gesundheits-Boosts und jag den Highscore.<br/><br/>Drei Spuren, Rampen, Barrieren und Masken-Collectibles — wischen, ausweichen, neuen Rekord setzen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Brückenlauf in Pandemia", caption: "Brückenlauf" } },
    { type: "media", props: { type: "image", src: img1, alt: "Endless Run", caption: "Runner" } },
    { type: "media", props: { type: "image", src: img2, alt: "Punktebildschirm", caption: "Punkte" } },
    { type: "media", props: { type: "image", src: img3, alt: "Spuren und Collectibles", caption: "Spuren" } },
  ],
} as const satisfies ProjectContent;
