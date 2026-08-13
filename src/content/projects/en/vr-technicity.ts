import video from "../../../assets/videos/vr-technicity.mp4";
import img0 from "../../../assets/images/projects/vr-technicity/vr-technicity-0.png";
import img1 from "../../../assets/images/projects/vr-technicity/vr-technicity-1.png";
import img2 from "../../../assets/images/projects/vr-technicity/vr-technicity-2.png";
import img3 from "../../../assets/images/projects/vr-technicity/vr-technicity-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Technicity",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A chapter-based VR tech-training suite. Chapter 1 walks interior electrical work — follow floor arrows, grab parts from the materials rack, and inspect orange conduits with a handheld scanner.<br/><br/>Faults show up as clogged lines, burned conduits, and overheating alerts so trainees can diagnose and repair before they touch live gear.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Technicity Chapter 1 electrical briefing", caption: "Chapter briefing" } },
    { type: "media", props: { type: "image", src: img1, alt: "Conduit overheating with scanner tablet", caption: "Conduit fault" } },
    { type: "media", props: { type: "image", src: img2, alt: "Repairing burned conduits", caption: "Repair task" } },
    { type: "media", props: { type: "image", src: img3, alt: "Materials station with electrical parts", caption: "Materials station" } },
  ],
} as const satisfies ProjectContent;
