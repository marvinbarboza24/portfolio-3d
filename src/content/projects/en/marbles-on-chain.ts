import video from "../../../assets/videos/marbles-on-chain.mp4";
import img0 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-0.png";
import img1 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-1.png";
import img2 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-2.png";
import img3 from "../../../assets/images/projects/marbles-on-chain/marbles-on-chain-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Marbles on Chain",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "A WebGL 1v1 marble race built for the chain. You drop onto a sky-high track, your marble marked You, and race through ramps, gates, and block obstacles while another player runs the same course.<br/><br/>Physics racing in the browser — glow materials, HDRP look, and a competitive map made to sit on-chain as a multiplayer match.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Player marble labeled You on the race track", caption: "Your marble" } },
    { type: "media", props: { type: "image", src: img1, alt: "1v1 marble race course", caption: "Race course" } },
    { type: "media", props: { type: "image", src: img2, alt: "Track obstacles and ramps", caption: "Obstacles" } },
    { type: "media", props: { type: "image", src: img3, alt: "Gate and pillar section of the map", caption: "Track gates" } },
  ],
} as const satisfies ProjectContent;
