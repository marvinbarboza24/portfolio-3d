import video from "../../../assets/videos/dyslexia.mp4";
import img0 from "../../../assets/images/projects/dyslexia/dyslexia-0.png";
import img1 from "../../../assets/images/projects/dyslexia/dyslexia-1.png";
import img2 from "../../../assets/images/projects/dyslexia/dyslexia-2.png";
import img3 from "../../../assets/images/projects/dyslexia/dyslexia-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Dyslexia Game",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An educational app designed to support learners with dyslexia through interactive, play-based exercises. Letter-tracing, speak-what-you-hear audio challenges, and drag-and-drop letter assembly build phonics, recognition, and motor skills.<br/><br/>Multisensory Orton-Gillingham-style activities with easy, medium, and hard levels, tracing guides, and instant feedback.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Main menu", caption: "Menu" } },
    { type: "media", props: { type: "image", src: img1, alt: "Correct feedback", caption: "Feedback" } },
    { type: "media", props: { type: "image", src: img2, alt: "Number tracing", caption: "Tracing" } },
    { type: "media", props: { type: "image", src: img3, alt: "Level select", caption: "Levels" } },
  ],
} as const satisfies ProjectContent;
