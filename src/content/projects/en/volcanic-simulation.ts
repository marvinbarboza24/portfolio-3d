import videoVolcanic from "../../../assets/videos/volcanic-simulation.mp4";
import vol0 from "../../../assets/images/projects/volcanic-simulation/volcanic-simulation-0.png";
import vol1 from "../../../assets/images/projects/volcanic-simulation/volcanic-simulation-1.png";
import vol2 from "../../../assets/images/projects/volcanic-simulation/volcanic-simulation-2.png";
import vol3 from "../../../assets/images/projects/volcanic-simulation/volcanic-simulation-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Volcanic Simulation 3D",
  theme: "light",
  tags: ["unity", "ar", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.SpanchingCompany.VolcanicSimulation3D",
  description:
    "An educational AR app for learning volcanoes through interactive 3D models — anatomy, types, and a hands-on volcanic simulation.<br/><br/>Place volcano models in the real world with the device camera. Built for classrooms, projects, and anyone who learns better in 3D.",
  components: [
    { type: "media", props: { type: "video", src: videoVolcanic, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: vol0, alt: "Volcano AR simulation", caption: "AR simulation" } },
    { type: "media", props: { type: "image", src: vol1, alt: "Volcano anatomy", caption: "Anatomy" } },
    { type: "media", props: { type: "image", src: vol2, alt: "Types of volcanoes", caption: "Volcano types" } },
    { type: "media", props: { type: "image", src: vol3, alt: "3D volcano model", caption: "3D models" } },
  ],
} as const satisfies ProjectContent;
