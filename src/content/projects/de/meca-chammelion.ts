import videoMeca from "../../../assets/videos/meca-chammelion.mp4";
import meca0 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-0.png";
import meca1 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-1.png";
import meca2 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-2.png";
import meca3 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Meca Chammelion Hide&Seek",
  theme: "light",
  tags: ["unity", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.SpanchingCompany.MecaChammelionHideSeek",
  description:
    "Male dich in die Umgebung, bleib stehen und überliste die Sucher — solo oder online mit Freunden.<br/><br/>Verstecker passen ihre Körperfarbe an die Szene an. Sucher jagen in First-Person. Mit lokaler Übung, Online-Lobbys und Proximity-Voice.",
  components: [
    { type: "media", props: { type: "video", src: videoMeca, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: meca0, alt: "Tarn-Versteckspiel", caption: "Tarnen" } },
    { type: "media", props: { type: "image", src: meca1, alt: "Mal- und Pose-Werkzeuge", caption: "Malen und posieren" } },
    { type: "media", props: { type: "image", src: meca2, alt: "Sucher-Gameplay", caption: "Suchen" } },
    { type: "media", props: { type: "image", src: meca3, alt: "Online-Lobby", caption: "Online-Lobby" } },
  ],
} as const satisfies ProjectContent;
