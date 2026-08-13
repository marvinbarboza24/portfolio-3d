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
    "City of Malabon University’s Learning Management System — Digital Academics — used by students and faculty for courses, files, quizzes, and gradebooks alongside the CMU Portal.<br/><br/>Course dashboards, weekly topics, timed assessments, and faculty tools including Moodle/CSV export. The same stack as the portal so enrollment data and classroom activity stay in one campus workflow.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Preview" } },
    { type: "media", props: { type: "image", src: img0, alt: "Digital Academics course dashboard", caption: "My courses" } },
    { type: "media", props: { type: "image", src: img1, alt: "Weekly course topics and resources", caption: "Course" } },
    { type: "media", props: { type: "image", src: img2, alt: "Timed quiz with question navigator", caption: "Assessments" } },
    { type: "media", props: { type: "image", src: img3, alt: "Faculty gradebook with export tools", caption: "Gradebook" } },
  ],
} as const satisfies ProjectContent;
