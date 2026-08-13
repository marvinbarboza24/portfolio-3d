import video from "../../../assets/videos/cmu-portal.mp4";
import img0 from "../../../assets/images/projects/cmu-portal/cmu-portal-0.png";
import img1 from "../../../assets/images/projects/cmu-portal/cmu-portal-1.png";
import img2 from "../../../assets/images/projects/cmu-portal/cmu-portal-2.png";
import img3 from "../../../assets/images/projects/cmu-portal/cmu-portal-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "CMU Portal",
  theme: "light",
  tags: ["vue", "laravel"],
  videoBorder: true,
  live: "http://portal.cityofmalabonuniversity.edu.ph/",
  description:
    "Studierenden- und Dozierendenportal der City of Malabon University — die UMS-Seite des Campus. Vue + Laravel Login, Selbst-Einschreibung für Regular- und Irregular-Studierende, Leistungsnachweise, Stundenpläne und Moodle-Export Richtung Digital Academics.<br/><br/>Gebaut für Einschreibungsfenster, die stehen müssen: Block Sections, Evaluation durch Program Coordinator, ein Login für die Hochschulsysteme.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Vorschau" } },
    { type: "media", props: { type: "image", src: img0, alt: "CMU-Portal-Login mit Universitätswappen", caption: "Login" } },
    { type: "media", props: { type: "image", src: img1, alt: "Selbst-Einschreibung mit Fächertabelle", caption: "Einschreibung" } },
    { type: "media", props: { type: "image", src: img2, alt: "Leistungsnachweise und Noten", caption: "Akten" } },
    { type: "media", props: { type: "image", src: img3, alt: "Wöchentlicher Stundenplan", caption: "Stundenplan" } },
  ],
} as const satisfies ProjectContent;
