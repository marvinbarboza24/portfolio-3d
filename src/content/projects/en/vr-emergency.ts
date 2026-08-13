import video from "../../../assets/videos/vr-emergency.mp4";
import img0 from "../../../assets/images/projects/vr-emergency/vr-emergency-0.png";
import img1 from "../../../assets/images/projects/vr-emergency/vr-emergency-1.png";
import img2 from "../../../assets/images/projects/vr-emergency/vr-emergency-2.png";
import img3 from "../../../assets/images/projects/vr-emergency/vr-emergency-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Emergency",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A household emergency trainer that drops you into a kitchen fire — LPG cylinder flare-up on the stove, a panicked occupant, and seconds to decide what to do. Tutorials cover gas leaks, fire response, and getting people out of the room safely.<br/><br/>Practice the sequence in VR so the first time you see a real kitchen fire is not the first time you have to think.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Kitchen stove fire with occupant in shock", caption: "Kitchen fire" } },
    { type: "media", props: { type: "image", src: img1, alt: "Home interior during the emergency", caption: "Home interior" } },
    { type: "media", props: { type: "image", src: img2, alt: "LPG hazard in the kitchen", caption: "Gas hazard" } },
    { type: "media", props: { type: "image", src: img3, alt: "Emergency response in VR", caption: "Response" } },
  ],
} as const satisfies ProjectContent;
