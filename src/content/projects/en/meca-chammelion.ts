import videoMeca from "../../../assets/videos/meca-chammelion.mp4";
import meca0 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-0.png";
import meca1 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-1.png";
import meca2 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-2.png";
import meca3 from "../../../assets/images/projects/meca-chammelion/meca-chammelion-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Meca Chammelion Hide&Seek",
  theme: "light",
  tags: ["unity", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.SpanchingCompany.MecaChammelionHideSeek",
  description:
    "Paint yourself to blend into the world, freeze in place, and outsmart seekers — solo in practice or online with friends.<br/><br/>Hiders paint body colors to match scenery and stick to surfaces. Seekers hunt in first-person. Includes local practice, online lobbies, and proximity voice.",
  components: [
    { type: "media", props: { type: "video", src: videoMeca, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: meca0, alt: "Camouflage hide and seek", caption: "Blend in" } },
    { type: "media", props: { type: "image", src: meca1, alt: "Paint and pose tools", caption: "Paint and pose" } },
    { type: "media", props: { type: "image", src: meca2, alt: "Seeker hunt gameplay", caption: "Seek" } },
    { type: "media", props: { type: "image", src: meca3, alt: "Online lobby match", caption: "Online lobby" } },
  ],
} as const satisfies ProjectContent;
