import video from "../../../assets/videos/urban-doctor.mp4";
import img0 from "../../../assets/images/projects/urban-doctor/urban-doctor-0.png";
import img1 from "../../../assets/images/projects/urban-doctor/urban-doctor-1.png";
import img2 from "../../../assets/images/projects/urban-doctor/urban-doctor-2.png";
import img3 from "../../../assets/images/projects/urban-doctor/urban-doctor-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Urban Doctor Adventures",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein interaktives 3D-Survival-Spiel zu Selbstversorgung. Finde Heilkräuter wie Lagundi, baue Camps mit Zelt und Knoten, sammle Müll — für Gemeinschaft und Umwelt.<br/><br/>Aufgaben-Erkundung mit Kompass, Inventar und praktischen Survival-Minispielen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Urban Doctor Adventures Hauptmenü", caption: "Menü" } },
    { type: "media", props: { type: "image", src: img1, alt: "Müll sammeln", caption: "Aufräumen" } },
    { type: "media", props: { type: "image", src: img2, alt: "Den Jungen finden", caption: "Quest" } },
    { type: "media", props: { type: "image", src: img3, alt: "Lagundi-Blatt finden", caption: "Kräuter" } },
  ],
} as const satisfies ProjectContent;
