import video from "../../../assets/videos/ifrit.mp4";
import img0 from "../../../assets/images/projects/ifrit/ifrit-0.png";
import img1 from "../../../assets/images/projects/ifrit/ifrit-1.png";
import img2 from "../../../assets/images/projects/ifrit/ifrit-2.png";
import img3 from "../../../assets/images/projects/ifrit/ifrit-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Ifrit",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "A multiplayer blockchain action game built around the grind: play, earn tokens, and spend them back in systems designed for the player.<br/><br/>Third-person combat across hideouts, cathedrals, and industrial maps — lock-on, light and heavy attacks, rolls, and a deep kit of systems that keep the loop rewarding.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Players in an industrial hideout", caption: "Hideout" } },
    { type: "media", props: { type: "image", src: img1, alt: "Running through a gothic cathedral hall", caption: "Cathedral" } },
    { type: "media", props: { type: "image", src: img2, alt: "Melee combat on a marble terrace", caption: "Combat" } },
    { type: "media", props: { type: "image", src: img3, alt: "Fight in an industrial district", caption: "Industrial district" } },
  ],
} as const satisfies ProjectContent;
