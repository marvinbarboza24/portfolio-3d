import video from "../../../assets/videos/vr-autopsy.mp4";
import img0 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-0.png";
import img1 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-1.png";
import img2 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-2.png";
import img3 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Autopsy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "An immersive VR educational simulation for forensic pathology and medical examination. Perform step-by-step autopsies in a digital lab, analyzing scenarios such as heart attacks and gunshot trauma through hands-on anatomical exploration.<br/><br/>Follow lab objectives: glove up, complete external exams, remove and weigh organs, and review case notes.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Forensic lab", caption: "Lab" } },
    { type: "media", props: { type: "image", src: img1, alt: "External examination", caption: "External exam" } },
    { type: "media", props: { type: "image", src: img2, alt: "Internal organ exam", caption: "Internal exam" } },
    { type: "media", props: { type: "image", src: img3, alt: "Forensic case notes", caption: "Case notes" } },
  ],
} as const satisfies ProjectContent;
