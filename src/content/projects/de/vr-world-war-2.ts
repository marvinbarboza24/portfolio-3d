import video from "../../../assets/videos/vr-world-war-2.mp4";
import img0 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-0.png";
import img1 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-1.png";
import img2 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-2.png";
import img3 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR World War 2",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein VR-Museumsrundgang durch die Geschichte des Zweiten Weltkriegs — Galerien, zeitgenössische Fahrzeuge und beschriftete Exponate unter dem Banner Lakbay-In VR. Von einem ruhigen Saal in Dioramen mit Jeeps, tropischer Inszenierung und Archivfotos an den Wänden.<br/><br/>Für Schüler und Besucher, die die Dimension der Epoche spüren sollen, ohne die Galerie zu verlassen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Lakbay-In-VR-Museumsgalerie", caption: "Museumsgalerie" } },
    { type: "media", props: { type: "image", src: img1, alt: "WW2-Jeep-Exponat mit tropischer Inszenierung", caption: "Fahrzeug-Exponat" } },
    { type: "media", props: { type: "image", src: img2, alt: "Historische Museumsausstellung", caption: "Historische Ausstellung" } },
    { type: "media", props: { type: "image", src: img3, alt: "WW2-Museumssaal", caption: "Museumssaal" } },
  ],
} as const satisfies ProjectContent;
