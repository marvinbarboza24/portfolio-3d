import video from "../../../assets/videos/vr-automotive.mp4";
import img0 from "../../../assets/images/projects/vr-automotive/vr-automotive-0.png";
import img1 from "../../../assets/images/projects/vr-automotive/vr-automotive-1.png";
import img2 from "../../../assets/images/projects/vr-automotive/vr-automotive-2.png";
import img3 from "../../../assets/images/projects/vr-automotive/vr-automotive-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Automotive",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "An immersive VR mechanics simulator that puts you in the role of a professional auto technician. Work in a virtual garage to perform routine maintenance, change oil, inspect engine components, and diagnose issues with step-by-step tools.<br/><br/>Guided tasks from retrieving an oil container to working under the chassis in a service pit.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Virtual garage", caption: "Garage" } },
    { type: "media", props: { type: "image", src: img1, alt: "Service pit inspection", caption: "Undercarriage" } },
    { type: "media", props: { type: "image", src: img2, alt: "Oil change task", caption: "Oil change" } },
    { type: "media", props: { type: "image", src: img3, alt: "Auto workshop", caption: "Workshop" } },
  ],
} as const satisfies ProjectContent;
