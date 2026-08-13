import videoGoingUp from "../../../assets/videos/going-up.mp4";
import goingUp0 from "../../../assets/images/projects/going-up/going-up-0.jpg";
import goingUp1 from "../../../assets/images/projects/going-up/going-up-1.jpg";
import goingUp2 from "../../../assets/images/projects/going-up/going-up-2.jpg";
import goingUp3 from "../../../assets/images/projects/going-up/going-up-3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Going Up In the Sky!",
  theme: "light",
  tags: ["unity", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.spanchingcompany.goingupinthesky",
  description:
    "Ein Kletter-Abenteuer, in dem es nur nach oben geht. Überwinde Hindernisse, sammle Power-ups und steige in den Himmel.<br/><br/>Unity-Adventure für Android mit 60 FPS, Grafik-Presets, Rewind und Zeitlupe. Live im Google Play Store.",
  components: [
    { type: "media", props: { type: "video", src: videoGoingUp, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: goingUp0, alt: "Going Up In the Sky Gameplay", caption: "Klettern" } },
    { type: "media", props: { type: "image", src: goingUp1, alt: "Hindernisse und Level", caption: "Hindernisse" } },
    { type: "media", props: { type: "image", src: goingUp2, alt: "Power-ups", caption: "Power-ups" } },
    { type: "media", props: { type: "image", src: goingUp3, alt: "Himmel-Challenge", caption: "Ziel: der Himmel" } },
  ],
} as const satisfies ProjectContent;
