import video from "../../../assets/videos/vr-human-anatomy.mp4";
import img0 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-0.png";
import img1 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-1.png";
import img2 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-2.png";
import img3 from "../../../assets/images/projects/vr-human-anatomy/vr-human-anatomy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Human Anatomy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A VR anatomy lab with a full skeleton, labeled regions, and system-by-system walkthroughs. Pick up a clipboard for pelvis and lower back, inspect the heart and vessels, then run an Air Balance minigame on the lungs.<br/><br/>Walk around a life-size body, isolate systems, and read the notes in-world instead of flipping a textbook.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Labeled human skeleton in the anatomy lab", caption: "Skeleton lab" } },
    { type: "media", props: { type: "image", src: img1, alt: "Circulatory system and heart walkthrough", caption: "Circulatory system" } },
    { type: "media", props: { type: "image", src: img2, alt: "Heart and vessels with study clipboard", caption: "Heart study" } },
    { type: "media", props: { type: "image", src: img3, alt: "Respiratory Air Balance minigame", caption: "Air Balance" } },
  ],
} as const satisfies ProjectContent;
