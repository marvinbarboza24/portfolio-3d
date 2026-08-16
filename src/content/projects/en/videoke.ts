import img0 from "../../../assets/images/projects/videoke/videoke-0.png";
import img1 from "../../../assets/images/projects/videoke/videoke-1.png";
import img2 from "../../../assets/images/projects/videoke/videoke-2.png";
import img3 from "../../../assets/images/projects/videoke/videoke-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Videoke",
  theme: "dark",
  tags: ["vue"],
  videoBorder: false,
  live: "https://videoke.pages.dev/",
  description:
    "A restobar song queue — see who’s on the mic, add a number from the book, dedicate it, then wait for the score. Box remote, cheers, encore, and tonight’s leaderboard.<br/><br/>Vue 3 + Vite + GSAP. Purple booth and CRT lyrics, English/Filipino. Demo room: Box 3 at Vina’s Restobar, Marikina. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Videoke hero with lime title and Add a song", caption: "Hero" } },
    { type: "media", props: { type: "image", src: img1, alt: "Videoke now playing card with lyrics and hype", caption: "Now playing" } },
    { type: "media", props: { type: "image", src: img2, alt: "Videoke numbered song book", caption: "Song book" } },
    { type: "media", props: { type: "image", src: img3, alt: "Videoke add-a-song form with key and duet", caption: "Request" } },
  ],
} as const satisfies ProjectContent;
