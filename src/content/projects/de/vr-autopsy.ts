import video from "../../../assets/videos/vr-autopsy.mp4";
import img0 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-0.png";
import img1 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-1.png";
import img2 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-2.png";
import img3 from "../../../assets/images/projects/vr-autopsy/vr-autopsy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Autopsy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Eine immersive VR-Lernsimulation für Rechtsmedizin. Schritt-für-Schritt-Autopsien im digitalen Labor — Szenarien wie Herzinfarkt und Schussverletzungen per Anatomie-Exploration.<br/><br/>Laborziele: Handschuhe, äußere Untersuchung, Organe entnehmen und wiegen, Fallnotizen prüfen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Rechtsmedizin-Labor", caption: "Labor" } },
    { type: "media", props: { type: "image", src: img1, alt: "Äußere Untersuchung", caption: "Äußere Untersuchung" } },
    { type: "media", props: { type: "image", src: img2, alt: "Organuntersuchung", caption: "Innere Untersuchung" } },
    { type: "media", props: { type: "image", src: img3, alt: "Fallnotizen", caption: "Fallnotizen" } },
  ],
} as const satisfies ProjectContent;
