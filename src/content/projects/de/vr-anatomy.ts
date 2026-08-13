import video from "../../../assets/videos/vr-anatomy.mp4";
import img0 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-0.png";
import img1 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-1.png";
import img2 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-2.png";
import img3 from "../../../assets/images/projects/vr-anatomy/vr-anatomy-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Anatomy",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Eine interaktive VR-Lern-App für Humanbiologie. Im 3D-Labor Organe inspizieren, Körpersysteme isolieren und Strukturen aus der Nähe betrachten.<br/><br/>Organ-Assembly: Herz, Lunge, Leber und Darm an die richtige Stelle setzen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Organ-Tisch", caption: "Organe" } },
    { type: "media", props: { type: "image", src: img1, alt: "Körpersysteme", caption: "Systeme" } },
    { type: "media", props: { type: "image", src: img2, alt: "Organ-Assembly", caption: "Assembly" } },
    { type: "media", props: { type: "image", src: img3, alt: "Anatomie-Labor", caption: "Labor" } },
  ],
} as const satisfies ProjectContent;
