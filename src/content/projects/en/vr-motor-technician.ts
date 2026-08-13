import video from "../../../assets/videos/vr-motor-technician.mp4";
import img0 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-0.png";
import img1 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-1.png";
import img2 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-2.png";
import img3 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Motor Technician",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A VR workshop for motorcycle technicians. Guided steps take you through CVT assembly on a scooter — cover sheath, pulleys, belts, and the parts crate — with labeled tasks and a completion cue when the drive is back together.<br/><br/>Grab components off the bench, fit them to the bike, and learn the sequence in a garage you can reset as many times as you need.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Workshop bench with engine parts", caption: "Parts bench" } },
    { type: "media", props: { type: "image", src: img1, alt: "Step four of motor assembly", caption: "Guided step" } },
    { type: "media", props: { type: "image", src: img2, alt: "CVT assembly complete on the scooter", caption: "CVT complete" } },
    { type: "media", props: { type: "image", src: img3, alt: "Parts crate in the garage", caption: "Parts crate" } },
  ],
} as const satisfies ProjectContent;
