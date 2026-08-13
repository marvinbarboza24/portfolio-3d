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
    "Student and faculty portal for City of Malabon University — the UMS side of campus operations. Vue + Laravel sign-in, self-enrollment for regular and irregular students, academic records, class schedules, and Moodle export so records can move into Digital Academics.<br/><br/>Built for enrollment windows that have to stay up: block sections, program-coordinator evaluation for irregular students, and a single login into university systems.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Preview" } },
    { type: "media", props: { type: "image", src: img0, alt: "CMU Portal sign-in with university crest", caption: "Sign in" } },
    { type: "media", props: { type: "image", src: img1, alt: "Self-enrollment dashboard with enlisted subjects", caption: "Enrollment" } },
    { type: "media", props: { type: "image", src: img2, alt: "Student academic records and grades", caption: "Records" } },
    { type: "media", props: { type: "image", src: img3, alt: "Weekly class schedule grid", caption: "Schedule" } },
  ],
} as const satisfies ProjectContent;
