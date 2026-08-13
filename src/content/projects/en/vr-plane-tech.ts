import video from "../../../assets/videos/vr-plane-tech.mp4";
import img0 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-0.png";
import img1 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-1.png";
import img2 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-2.png";
import img3 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Plane Tech",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A hangar-side VR trainer for light-aircraft maintenance. Work a Tecnam P2002-JF and its Rotax 912 engine in fault mode — diagnose alternator overvoltage, weak batteries, and regulator failures with labeled parts, smoke cues, and a handheld checklist.<br/><br/>Point, grab, and inspect components the way a line technician would, without putting a real airframe at risk.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Tecnam aircraft in the hangar", caption: "Hangar" } },
    { type: "media", props: { type: "image", src: img1, alt: "Rotax engine fault with smoke", caption: "Engine fault" } },
    { type: "media", props: { type: "image", src: img2, alt: "Battery diagnosis checklist", caption: "Diagnostics" } },
    { type: "media", props: { type: "image", src: img3, alt: "Aircraft maintenance walkaround", caption: "Walkaround" } },
  ],
} as const satisfies ProjectContent;
