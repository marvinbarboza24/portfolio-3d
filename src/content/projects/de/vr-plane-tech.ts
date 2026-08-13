import video from "../../../assets/videos/vr-plane-tech.mp4";
import img0 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-0.png";
import img1 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-1.png";
import img2 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-2.png";
import img3 from "../../../assets/images/projects/vr-plane-tech/vr-plane-tech-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Plane Tech",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein VR-Hangar-Trainer für die Wartung von Leichtflugzeugen. Am Tecnam P2002-JF und seinem Rotax-912-Motor im Störungsmodus arbeiten — Lichtmaschinen-Überspannung, schwache Batterien und Reglerausfälle diagnostizieren, mit beschrifteten Teilen, Rauch-Hinweisen und Checkliste in der Hand.<br/><br/>Zeigen, greifen und prüfen wie ein Line-Techniker — ohne ein echtes Flugzeug zu gefährden.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Tecnam-Flugzeug im Hangar", caption: "Hangar" } },
    { type: "media", props: { type: "image", src: img1, alt: "Rotax-Motorstörung mit Rauch", caption: "Motorstörung" } },
    { type: "media", props: { type: "image", src: img2, alt: "Batterie-Diagnose-Checkliste", caption: "Diagnose" } },
    { type: "media", props: { type: "image", src: img3, alt: "Wartungs-Rundgang am Flugzeug", caption: "Rundgang" } },
  ],
} as const satisfies ProjectContent;
