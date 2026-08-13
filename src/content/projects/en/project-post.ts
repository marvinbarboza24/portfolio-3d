import video from "../../../assets/videos/project-post.mp4";
import img0 from "../../../assets/images/projects/project-post/project-post-0.png";
import img1 from "../../../assets/images/projects/project-post/project-post-1.png";
import img2 from "../../../assets/images/projects/project-post/project-post-2.png";
import img3 from "../../../assets/images/projects/project-post/project-post-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Project Post",
  theme: "light",
  tags: ["react", "node", "postgresql"],
  videoBorder: true,
  description:
    "A Gmail-inspired full-stack email platform — three-pane inbox, compose with draft auto-save, folders, search, and real-time delivery between accounts.<br/><br/>React + TypeScript client with Tailwind, NestJS API, PostgreSQL, Redis, and Socket.IO. JWT auth, SMTP / Amazon SES / Mailgun transports, and attachments. Runs on mock data for demos, or against the live backend when it is up.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Preview" } },
    { type: "media", props: { type: "image", src: img0, alt: "Project Post inbox with Gmail-style three-pane layout", caption: "Inbox" } },
    { type: "media", props: { type: "image", src: img1, alt: "Sign in screen for Project Post", caption: "Sign in" } },
    { type: "media", props: { type: "image", src: img2, alt: "Compose window with rich text and send", caption: "Compose" } },
    { type: "media", props: { type: "image", src: img3, alt: "Super admin dashboard for users and mail volume", caption: "Admin" } },
  ],
} as const satisfies ProjectContent;
