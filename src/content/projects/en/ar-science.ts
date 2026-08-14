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
    "An interactive learning app for Grade 7 science — microscope, cells, biological organization, and reproduction — through scenes and quizzes.<br/><br/>Built for students and teachers who want visual lessons instead of slides. Aligned with core life-science topics and live on Google Play.",
  components: [
    { type: "media", props: { type: "youtube", src: "https://www.youtube.com/embed/maua1We-iGY", caption: "Preview" } },
    { type: "media", props: { type: "image", src: ar0, alt: "ARScience lesson scene", caption: "Lessons" } },
    { type: "media", props: { type: "image", src: ar1, alt: "Cell structure topic", caption: "Cells" } },
    { type: "media", props: { type: "image", src: ar2, alt: "Science quiz", caption: "Quizzes" } },
    { type: "media", props: { type: "image", src: ar3, alt: "Interactive science scene", caption: "Visual learning" } },
  ],
} as const satisfies ProjectContent;
