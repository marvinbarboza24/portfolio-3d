import video from "../../../assets/videos/vr-world-war-2.mp4";
import img0 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-0.png";
import img1 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-1.png";
import img2 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-2.png";
import img3 from "../../../assets/images/projects/vr-world-war-2/vr-world-war-2-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR World War 2",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A VR museum walkthrough of World War II history — galleries, period vehicles, and labeled exhibits under the Lakbay-In VR banner. Step from a quiet hall into dioramas with jeeps, tropical staging, and archival photos on the walls.<br/><br/>Built for students and visitors who should feel the scale of the era without leaving the gallery.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Lakbay-In VR museum gallery", caption: "Museum gallery" } },
    { type: "media", props: { type: "image", src: img1, alt: "WWII jeep exhibit with tropical staging", caption: "Vehicle exhibit" } },
    { type: "media", props: { type: "image", src: img2, alt: "Historical museum display", caption: "Historical display" } },
    { type: "media", props: { type: "image", src: img3, alt: "WWII museum hall", caption: "Museum hall" } },
  ],
} as const satisfies ProjectContent;
