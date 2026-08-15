import img0 from "../../../assets/images/projects/salo-rsvp/salo-rsvp-0.png";
import img1 from "../../../assets/images/projects/salo-rsvp/salo-rsvp-1.png";
import img2 from "../../../assets/images/projects/salo-rsvp/salo-rsvp-2.png";
import img3 from "../../../assets/images/projects/salo-rsvp/salo-rsvp-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Salo RSVP",
  theme: "light",
  tags: ["vue"],
  videoBorder: false,
  live: "https://salo-rsvp.pages.dev/",
  description:
    "A Filipino kasal invitation for Marvin and Lea — paper invite over a Tagaytay garden, countdown, schedule with directions, entourage, where to stay, meal picks, wishing well, and an RSVP that takes plus-ones, pets, and song requests.<br/><br/>Vue 3 + Vite + GSAP. Couple PIN unlocks the guest list, meal tally, and CSV export. Pets are allowed. Live on Cloudflare Pages.",
  components: [
    { type: "media", props: { type: "image", src: img0, alt: "Tagaytay garden ceremony at golden hour", caption: "Garden" } },
    { type: "media", props: { type: "image", src: img1, alt: "Paper invitation still", caption: "Invite" } },
    { type: "media", props: { type: "image", src: img2, alt: "Church aisle for the misa", caption: "Misa" } },
    { type: "media", props: { type: "image", src: img3, alt: "Garden reception table", caption: "Handaan" } },
  ],
} as const satisfies ProjectContent;
