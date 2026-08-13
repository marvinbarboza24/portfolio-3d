import video from "../../../assets/videos/ar-space-shooter.mp4";
import img0 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-0.png";
import img1 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-1.png";
import img2 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-2.png";
import img3 from "../../../assets/images/projects/ar-space-shooter/ar-space-shooter-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "AR Space Shooter",
  theme: "light",
  tags: ["unity", "ar"],
  videoBorder: true,
  description:
    "An immersive augmented reality arcade game that turns your real-world environment into an intergalactic battleground. Using the device camera, clear your physical space by targeting asteroids, cosmic debris, and alien threats in real time.<br/><br/>Touch to fire, swipe to move, and defend the room as threats spawn into the live camera feed.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Controls tutorial", caption: "Tutorial" } },
    { type: "media", props: { type: "image", src: img1, alt: "Camera arena", caption: "AR arena" } },
    { type: "media", props: { type: "image", src: img2, alt: "AR combat", caption: "Combat" } },
    { type: "media", props: { type: "image", src: img3, alt: "Asteroid targets", caption: "Asteroids" } },
  ],
} as const satisfies ProjectContent;
