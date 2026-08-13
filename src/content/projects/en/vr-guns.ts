import video from "../../../assets/videos/vr-guns.mp4";
import img0 from "../../../assets/images/projects/vr-guns/vr-guns-0.png";
import img1 from "../../../assets/images/projects/vr-guns/vr-guns-1.png";
import img2 from "../../../assets/images/projects/vr-guns/vr-guns-2.png";
import img3 from "../../../assets/images/projects/vr-guns/vr-guns-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Guns",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "An immersive VR simulation for hands-on firearm training and mechanics. Step into a digital workshop to assemble and disassemble firearms step by step, then test precision, recoil control, and marksmanship on a realistic firing range.<br/><br/>Timed assembly challenges for Glock 17, sniper, and Tec-9, plus range practice with magazines, targets, and bottle setups.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Firing range practice", caption: "Range" } },
    { type: "media", props: { type: "image", src: img1, alt: "Firing range armory", caption: "Armory" } },
    { type: "media", props: { type: "image", src: img2, alt: "Assembly challenges", caption: "Assembly" } },
    { type: "media", props: { type: "image", src: img3, alt: "Firearm workshop", caption: "Workshop" } },
  ],
} as const satisfies ProjectContent;
