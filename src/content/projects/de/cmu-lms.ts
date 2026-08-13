import video from "../../../assets/videos/cmu-lms.mp4";
import img0 from "../../../assets/images/projects/cmu-lms/cmu-lms-0.png";
import img1 from "../../../assets/images/projects/cmu-lms/cmu-lms-1.png";
import img2 from "../../../assets/images/projects/cmu-lms/cmu-lms-2.png";
import img3 from "../../../assets/images/projects/cmu-lms/cmu-lms-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "CMU Digital Academics",
  theme: "light",
  tags: ["vue", "laravel"],
  videoBorder: true,
  description:
    "Das Learning Management System der City of Malabon University — Digital Academics — für Kurse, Dateien, Quizzes und Notenlisten, parallel zum CMU Portal.<br/><br/>Kurs-Dashboards, Wochenthemen, zeitlich begrenzte Tests und Dozierenden-Tools inklusive Moodle/CSV-Export. Derselbe Stack wie das Portal, damit Einschreibung und Unterricht in einem Campus-Workflow bleiben.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Vorschau" } },
    { type: "media", props: { type: "image", src: img0, alt: "Digital-Academics-Kursdashboard", caption: "Meine Kurse" } },
    { type: "media", props: { type: "image", src: img1, alt: "Wöchentliche Kursthemen und Materialien", caption: "Kurs" } },
    { type: "media", props: { type: "image", src: img2, alt: "Quiz mit Fragennavigator", caption: "Prüfungen" } },
    { type: "media", props: { type: "image", src: img3, alt: "Notenliste mit Export", caption: "Notenliste" } },
  ],
} as const satisfies ProjectContent;
