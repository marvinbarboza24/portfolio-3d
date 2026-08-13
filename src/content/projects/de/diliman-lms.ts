import video from "../../../assets/videos/diliman-lms.mp4";
import img0 from "../../../assets/images/projects/diliman-lms/diliman-lms-0.png";
import img1 from "../../../assets/images/projects/diliman-lms/diliman-lms-1.png";
import img2 from "../../../assets/images/projects/diliman-lms/diliman-lms-2.png";
import img3 from "../../../assets/images/projects/diliman-lms/diliman-lms-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Diliman College LINK",
  theme: "light",
  tags: ["moodle", "javascript"],
  videoBorder: true,
  description:
    "LINK ist das Moodle-LMS (Moove-Theme) von Diliman College — Kurse, Ankündigungen, Kalender und Support über die Institute hinweg.<br/><br/>Kategorien für IBAT, IHS, IIE, IIT, IPA, BSTM und IPERS. Hunderte Kurse und über tausend Nutzer: Senior High, Lehrerbildung, IT, Public Administration und Tourismus. LINK Support / DCMIS für den Alltag.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Vorschau" } },
    { type: "media", props: { type: "image", src: img0, alt: "LINK-Startseite mit Ankündigungen und Kurskategorien", caption: "LINK Start" } },
    { type: "media", props: { type: "image", src: img1, alt: "IIT-Kurskatalog", caption: "IIT-Kurse" } },
    { type: "media", props: { type: "image", src: img2, alt: "Moodle-Kursthemen und Materialien", caption: "Kursseite" } },
    { type: "media", props: { type: "image", src: img3, alt: "Kalender und Aktivitäts-Timeline", caption: "Kalender" } },
  ],
} as const satisfies ProjectContent;
