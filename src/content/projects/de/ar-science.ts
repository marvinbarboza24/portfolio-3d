import videoArScience from "../../../assets/videos/ar-science.mp4";
import ar0 from "../../../assets/images/projects/ar-science/ar-science-0.png";
import ar1 from "../../../assets/images/projects/ar-science/ar-science-1.png";
import ar2 from "../../../assets/images/projects/ar-science/ar-science-2.png";
import ar3 from "../../../assets/images/projects/ar-science/ar-science-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ARScience",
  theme: "light",
  tags: ["unity", "ar", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.SpanchingCompany.ARScience",
  description:
    "Eine interaktive Lern-App für Naturwissenschaften der 7. Klasse — Mikroskop, Zellen, biologische Organisation und Fortpflanzung — mit Szenen und Quizzes.<br/><br/>Für Schüler und Lehrer, die visuelle Lektionen statt Folien wollen. Live im Google Play Store.",
  components: [
    { type: "media", props: { type: "video", src: videoArScience, caption: "Vorschau" } },
    { type: "media", props: { type: "image", src: ar0, alt: "ARScience Lektion", caption: "Lektionen" } },
    { type: "media", props: { type: "image", src: ar1, alt: "Zellstruktur", caption: "Zellen" } },
    { type: "media", props: { type: "image", src: ar2, alt: "Wissenschafts-Quiz", caption: "Quizzes" } },
    { type: "media", props: { type: "image", src: ar3, alt: "Interaktive Szene", caption: "Visuelles Lernen" } },
  ],
} as const satisfies ProjectContent;
