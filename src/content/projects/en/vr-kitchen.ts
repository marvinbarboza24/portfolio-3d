import video from "../../../assets/videos/vr-kitchen.mp4";
import img0 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-0.png";
import img1 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-1.png";
import img2 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-2.png";
import img3 from "../../../assets/images/projects/vr-kitchen/vr-kitchen-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Kitchen",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A VR culinary training sim set in a commercial kitchen. Holographic recipe cards walk you through dishes like Eggs Benedict with Bacon — toast the muffin, cook the bacon, whisk hollandaise, and plate with both hands.<br/><br/>Labeled stations for knives, boards, and cookware, with grab-and-place interaction so trainees can practice mise en place before they ever touch a real stove.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Holographic Eggs Benedict recipe", caption: "Recipe overlay" } },
    { type: "media", props: { type: "image", src: img1, alt: "Labeled kitchen tools on the counter", caption: "Tool stations" } },
    { type: "media", props: { type: "image", src: img2, alt: "Commercial stove and kettle", caption: "Cook line" } },
    { type: "media", props: { type: "image", src: img3, alt: "Hands plating food in VR", caption: "Hands-on plating" } },
  ],
} as const satisfies ProjectContent;
