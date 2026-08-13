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
    "LINK is Diliman College’s Moodle LMS (Moove theme) — courses, announcements, calendars, and faculty support across the college’s institutes.<br/><br/>Categories for IBAT, IHS, IIE, IIT, IPA, BSTM, and IPERS. Hundreds of courses and a thousand-plus users: senior high, teacher education, IT, public administration, and tourism. LINK Support / DCMIS for day-to-day help.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Preview" } },
    { type: "media", props: { type: "image", src: img0, alt: "Diliman College LINK homepage with announcements and course categories", caption: "LINK home" } },
    { type: "media", props: { type: "image", src: img1, alt: "Institute of Information Technology course catalog", caption: "IIT courses" } },
    { type: "media", props: { type: "image", src: img2, alt: "Moodle course topics and resources", caption: "Course page" } },
    { type: "media", props: { type: "image", src: img3, alt: "Calendar and activity timeline", caption: "Calendar" } },
  ],
} as const satisfies ProjectContent;
