import video from "../../../assets/videos/urban-doctor.mp4";
import img0 from "../../../assets/images/projects/urban-doctor/urban-doctor-0.png";
import img1 from "../../../assets/images/projects/urban-doctor/urban-doctor-1.png";
import img2 from "../../../assets/images/projects/urban-doctor/urban-doctor-2.png";
import img3 from "../../../assets/images/projects/urban-doctor/urban-doctor-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Urban Doctor Adventures",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "An interactive 3D survival and outdoor-skills game about real-world self-reliance. Explore environments to identify herbal remedies like lagundi, set up campsites with drag-and-drop tents and knot-tying, and collect trash to promote community wellness and eco-friendly living.<br/><br/>Task-driven exploration with a compass, inventory, and hands-on survival mini-games.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Urban Doctor Adventures main menu", caption: "Menu" } },
    { type: "media", props: { type: "image", src: img1, alt: "Collect trash", caption: "Cleanup" } },
    { type: "media", props: { type: "image", src: img2, alt: "Find the boy", caption: "Quest" } },
    { type: "media", props: { type: "image", src: img3, alt: "Find lagundi leaf", caption: "Herbs" } },
  ],
} as const satisfies ProjectContent;
