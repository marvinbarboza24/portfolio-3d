import video from "../../../assets/videos/vr-emergency.mp4";
import img0 from "../../../assets/images/projects/vr-emergency/vr-emergency-0.png";
import img1 from "../../../assets/images/projects/vr-emergency/vr-emergency-1.png";
import img2 from "../../../assets/images/projects/vr-emergency/vr-emergency-2.png";
import img3 from "../../../assets/images/projects/vr-emergency/vr-emergency-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Emergency",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein Haushalts-Notfalltrainer: Küchenbrand durch eine LPG-Flasche am Herd, eine panische Person im Raum, und Sekunden für die richtige Entscheidung. Tutorials zu Gaslecks, Brandbekämpfung und sicherer Evakuierung.<br/><br/>Die Abläufe in VR üben, damit der erste echte Küchenbrand nicht das erste Mal ist, an dem man nachdenken muss.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Herdbrand mit schockierter Person", caption: "Küchenbrand" } },
    { type: "media", props: { type: "image", src: img1, alt: "Wohnungsinnenraum während des Notfalls", caption: "Wohnung" } },
    { type: "media", props: { type: "image", src: img2, alt: "LPG-Gefahr in der Küche", caption: "Gasgefahr" } },
    { type: "media", props: { type: "image", src: img3, alt: "Notfallreaktion in VR", caption: "Reaktion" } },
  ],
} as const satisfies ProjectContent;
