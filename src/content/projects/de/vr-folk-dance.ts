import video from "../../../assets/videos/vr-folk-dance.mp4";
import img0 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-0.png";
import img1 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-1.png";
import img2 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-2.png";
import img3 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Folk Dance",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein VR-Unterricht für philippinischen Volkstanz. Eine Lehrer-NPC in der Schulturnhalle führt durch die Grundlagen des Pandanggo; danach Posen am Bewegungsleitfaden abgleichen und die volle Sequenz auf dem Feld üben.<br/><br/>Lern-Tafeln, Body-Tracking-Overlays und ein turnhallengroßer Raum, damit Schüler traditionelle Schritte proben, bevor sie live auftreten.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Volkstanz-Lehrerin mit Tutorial-Tafel", caption: "Lehrerin" } },
    { type: "media", props: { type: "image", src: img1, alt: "Bewegungssilhouette in der Turnhalle", caption: "Bewegungsleitfaden" } },
    { type: "media", props: { type: "image", src: img2, alt: "Volkstanz-Posen üben", caption: "Tanzübung" } },
    { type: "media", props: { type: "image", src: img3, alt: "Schulturnhalle", caption: "Turnhalle" } },
  ],
} as const satisfies ProjectContent;
