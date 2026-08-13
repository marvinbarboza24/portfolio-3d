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
    "Eine AR-Lern-App zu Vulkanen mit interaktiven 3D-Modellen — Anatomie, Typen und eine praktische Vulkansimulation.<br/><br/>Platziere Vulkanmodelle per Kamera in der echten Umgebung. Für den Unterricht, Projekte und alle, die besser in 3D lernen.",
  components: [
    { type: "media", props: { type: "video", src: videoVolcanic, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: vol0, alt: "Vulkan-AR-Simulation", caption: "AR-Simulation" } },
    { type: "media", props: { type: "image", src: vol1, alt: "Vulkan-Anatomie", caption: "Anatomie" } },
    { type: "media", props: { type: "image", src: vol2, alt: "Vulkantypen", caption: "Vulkantypen" } },
    { type: "media", props: { type: "image", src: vol3, alt: "3D-Vulkanmodell", caption: "3D-Modelle" } },
  ],
} as const satisfies ProjectContent;
