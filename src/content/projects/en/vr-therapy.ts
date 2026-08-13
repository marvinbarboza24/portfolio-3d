import video from "../../../assets/videos/vr-therapy.mp4";
import img0 from "../../../assets/images/projects/vr-therapy/vr-therapy-0.png";
import img1 from "../../../assets/images/projects/vr-therapy/vr-therapy-1.png";
import img2 from "../../../assets/images/projects/vr-therapy/vr-therapy-2.png";
import img3 from "../../../assets/images/projects/vr-therapy/vr-therapy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Therapy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "An immersive VR app for mental health and stress relief through guided digital environments. Interactive relaxation, exposure-style simulations, and soothing spaces help users manage anxiety, build mindfulness, and improve well-being in a controlled setting.<br/><br/>Park and playground scenes with matching tasks, Simon Says exercises, and calm outdoor atmospheres.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Size-matching exercise", caption: "Matching" } },
    { type: "media", props: { type: "image", src: img1, alt: "Simon Says session", caption: "Simon Says" } },
    { type: "media", props: { type: "image", src: img2, alt: "Therapy park", caption: "Park" } },
    { type: "media", props: { type: "image", src: img3, alt: "Calm playground", caption: "Playground" } },
  ],
} as const satisfies ProjectContent;
