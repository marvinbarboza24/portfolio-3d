import video from "../../../assets/videos/vr-folk-dance.mp4";
import img0 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-0.png";
import img1 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-1.png";
import img2 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-2.png";
import img3 from "../../../assets/images/projects/vr-folk-dance/vr-folk-dance-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Folk Dance",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A VR classroom for Filipino folk dance. An instructor NPC in a school gym walks you through the basics of Pandanggo, then you match poses against a motion guide and practice the full sequence on the court.<br/><br/>Watch-and-learn panels, body tracking overlays, and a gym-scale space so students can rehearse traditional steps before performing them live.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Folk dance instructor with tutorial panel", caption: "Instructor" } },
    { type: "media", props: { type: "image", src: img1, alt: "Motion silhouette guide in the gym", caption: "Motion guide" } },
    { type: "media", props: { type: "image", src: img2, alt: "Practicing folk dance poses", caption: "Dance practice" } },
    { type: "media", props: { type: "image", src: img3, alt: "School gymnasium dance hall", caption: "Gym hall" } },
  ],
} as const satisfies ProjectContent;
