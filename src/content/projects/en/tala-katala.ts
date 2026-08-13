import video from "../../../assets/videos/tala-katala.mp4";
import img0 from "../../../assets/images/projects/tala-katala/tala-katala-0.png";
import img1 from "../../../assets/images/projects/tala-katala/tala-katala-1.png";
import img2 from "../../../assets/images/projects/tala-katala/tala-katala-2.png";
import img3 from "../../../assets/images/projects/tala-katala/tala-katala-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Tala Katala",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An educational 2D and 3D mini-game collection dedicated to the conservation of the endangered Red-vented Cockatoo (Katala). Through quizzes, word searches, drag-and-drop puzzles, and environmental challenges, players learn habitat preservation and the steps needed to save this iconic Philippine bird.<br/><br/>Pre-tests on local wildlife, conservation vocabulary, and playable lessons built for classrooms and awareness campaigns.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Tala Katala main menu", caption: "Menu" } },
    { type: "media", props: { type: "image", src: img1, alt: "Conservation word search", caption: "Word search" } },
    { type: "media", props: { type: "image", src: img2, alt: "Mini-game puzzles", caption: "Puzzles" } },
    { type: "media", props: { type: "image", src: img3, alt: "Conservation play", caption: "Awareness" } },
  ],
} as const satisfies ProjectContent;
