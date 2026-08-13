import video from "../../../assets/videos/vr-kitchen.mp4";
import img0 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-0.png";
import img1 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-1.png";
import img2 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-2.png";
import img3 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Kitchen",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein VR-Kochtraining in einer Profiküche. Holografische Rezeptkarten führen durch Gerichte wie Eggs Benedict with Bacon — Muffin toasten, Speck braten, Hollandaise schlagen und mit beiden Händen anrichten.<br/><br/>Beschriftete Stationen für Messer, Bretter und Kochgeschirr, mit Greif-Interaktion zum Üben von Mise en Place, bevor es an den echten Herd geht.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Holografisches Eggs-Benedict-Rezept", caption: "Rezept-Overlay" } },
    { type: "media", props: { type: "image", src: img1, alt: "Beschriftete Küchenutensilien", caption: "Werkzeugstationen" } },
    { type: "media", props: { type: "image", src: img2, alt: "Profiherd und Kessel", caption: "Kochlinie" } },
    { type: "media", props: { type: "image", src: img3, alt: "Anrichten mit VR-Händen", caption: "Anrichten" } },
  ],
} as const satisfies ProjectContent;
