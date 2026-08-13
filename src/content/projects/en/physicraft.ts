import video from "../../../assets/videos/physicraft.mp4";
import img0 from "../../../assets/images/projects/physicraft/physicraft-0.png";
import img1 from "../../../assets/images/projects/physicraft/physicraft-1.png";
import img2 from "../../../assets/images/projects/physicraft/physicraft-2.png";
import img3 from "../../../assets/images/projects/physicraft/physicraft-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Physicraft",
  theme: "light",
  tags: ["unity", "ar", "android"],
  videoBorder: true,
  description:
    "An AR physics game built around quizzes and spatial lessons. Modules cover linear motion and projectile motion in kinematics, with a shop for hints, extra time, and gold bonuses, plus video or interactive tutorials before you jump in.<br/><br/>Play matching and velocity tasks in a wireframe lab, then use AR to put the same physics in the room in front of you.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Projectile Motion in Kinematics menu", caption: "Kinematics menu" } },
    { type: "media", props: { type: "image", src: img1, alt: "Shop with quiz hints and time boosts", caption: "Quiz shop" } },
    { type: "media", props: { type: "image", src: img2, alt: "Physicraft title and tutorial choice", caption: "Title screen" } },
    { type: "media", props: { type: "image", src: img3, alt: "Velocity matching in the physics lab", caption: "Velocity lab" } },
  ],
} as const satisfies ProjectContent;
