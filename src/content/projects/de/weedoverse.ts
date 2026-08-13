import video from "../../../assets/videos/weedoverse.mp4";
import img0 from "../../../assets/images/projects/weedoverse/weedoverse-0.png";
import img1 from "../../../assets/images/projects/weedoverse/weedoverse-1.png";
import img2 from "../../../assets/images/projects/weedoverse/weedoverse-2.png";
import img3 from "../../../assets/images/projects/weedoverse/weedoverse-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Weedoverse",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Eine 3D-Welt zum Durchlaufen — tropischer Platz, Cannabis-Shop, Pflanzenreihen und ein riesiges Bud-Landmark. Season Harvest ist ein zeitlich begrenztes Minispiel: Mähdrescher fahren, so viele Pflanzen wie möglich abernten, den Score sichern bevor die Zeit abläuft.<br/><br/>Open-World-Spaziergang plus Arcade-Farming, mit In-World-Werbung und einer Gamify-the-World-Schicht über der Map.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Avatar auf dem Weedoverse-Platz", caption: "Platz" } },
    { type: "media", props: { type: "image", src: img1, alt: "Cannabis-Shop und Pflanzenreihen", caption: "Shop-Viertel" } },
    { type: "media", props: { type: "image", src: img2, alt: "Season-Harvest-Minispiel mit Score und Timer", caption: "Ernte-Minispiel" } },
    { type: "media", props: { type: "image", src: img3, alt: "Mähdrescher im eingezäunten Feld", caption: "Feld" } },
  ],
} as const satisfies ProjectContent;
