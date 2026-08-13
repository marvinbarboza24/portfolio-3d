import video from "../../../assets/videos/vr-anatomy.mp4";
import img0 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-0.png";
import img1 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-1.png";
import img2 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-2.png";
import img3 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Anatomy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "An interactive VR learning app that brings human biology to life. Step into a 3D digital laboratory to inspect organs, isolate body systems, and examine anatomical structures up close.<br/><br/>Hands-on organ assembly: place heart, lungs, liver, and intestines in the correct positions against lab objectives.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Organ table", caption: "Organs" } },
    { type: "media", props: { type: "image", src: img1, alt: "Body systems", caption: "Systems" } },
    { type: "media", props: { type: "image", src: img2, alt: "Organ assembly", caption: "Assembly" } },
    { type: "media", props: { type: "image", src: img3, alt: "Anatomy lab", caption: "Lab" } },
  ],
} as const satisfies ProjectContent;
