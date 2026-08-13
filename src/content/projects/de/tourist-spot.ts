import video from "../../../assets/videos/tourist-spot.mp4";
import img0 from "../../../assets/images/projects/tourist-spot/tourist-spot-0.png";
import img1 from "../../../assets/images/projects/tourist-spot/tourist-spot-1.png";
import img2 from "../../../assets/images/projects/tourist-spot/tourist-spot-2.png";
import img3 from "../../../assets/images/projects/tourist-spot/tourist-spot-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Virtual Tourist Spot Center",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Eine immersive Digitale Tour zu ikonischen Orten auf den Philippinen. Sehenswürdigkeiten, Kulturerbe und virtuelle Infostellen — für echte Reiseplanung oder eine geführte Lernreise.<br/><br/>Tropisches Besucherzentrum, Destination-Screens und interaktive Ausstellungen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Besucherzentrum außen", caption: "Zentrum" } },
    { type: "media", props: { type: "image", src: img1, alt: "Interaktives Touristenzentrum", caption: "Eingang" } },
    { type: "media", props: { type: "image", src: img2, alt: "Innenausstellungen", caption: "Ausstellungen" } },
    { type: "media", props: { type: "image", src: img3, alt: "Reiseziele", caption: "Ziele" } },
  ],
} as const satisfies ProjectContent;
