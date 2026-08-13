import videoGoingUp from "../../../assets/videos/going-up.mp4";
import goingUp0 from "../../../assets/images/projects/going-up/going-up-0.jpg";
import goingUp1 from "../../../assets/images/projects/going-up/going-up-1.jpg";
import goingUp2 from "../../../assets/images/projects/going-up/going-up-2.jpg";
import goingUp3 from "../../../assets/images/projects/going-up/going-up-3.jpg";

import type { ProjectContent } from "../../types";

export default {
  title: "Going Up In the Sky!",
  theme: "light",
  tags: ["unity", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.spanchingcompany.goingupinthesky",
  description:
    "Embark on an exciting journey where the only way is up. Climb higher, clear obstacles, and collect power-ups until you reach the sky.<br/><br/>A Unity climb-up adventure on Android with 60 FPS gameplay, graphics presets, rewind, and slow motion. Live on Google Play.",
  components: [
    { type: "media", props: { type: "video", src: videoGoingUp, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: goingUp0, alt: "Going Up In the Sky gameplay", caption: "Climb" } },
    { type: "media", props: { type: "image", src: goingUp1, alt: "Obstacles and sky levels", caption: "Obstacles" } },
    { type: "media", props: { type: "image", src: goingUp2, alt: "Power-ups and movement", caption: "Power-ups" } },
    { type: "media", props: { type: "image", src: goingUp3, alt: "High climb challenge", caption: "Aim for the sky" } },
  ],
} as const satisfies ProjectContent;
