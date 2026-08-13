import video from "../../../assets/videos/vr-motor-technician.mp4";
import img0 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-0.png";
import img1 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-1.png";
import img2 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-2.png";
import img3 from "../../../assets/images/projects/vr-motor-technician/vr-motor-technician-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Motor Technician",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Eine VR-Werkstatt für Motorrad-Techniker. Geführte Schritte durch die CVT-Montage am Scooter — Cover Sheath, Riemenscheiben, Riemen und Teilekiste — mit beschrifteten Aufgaben und einer Abschlussmeldung, wenn der Antrieb wieder zusammen ist.<br/><br/>Teile von der Bank greifen, am Bike montieren und die Reihenfolge in einer Garage lernen, die sich beliebig oft zurücksetzen lässt.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Werkbank mit Motorteilen", caption: "Teilebank" } },
    { type: "media", props: { type: "image", src: img1, alt: "Schritt vier der Motormontage", caption: "Geführter Schritt" } },
    { type: "media", props: { type: "image", src: img2, alt: "CVT-Montage am Scooter abgeschlossen", caption: "CVT fertig" } },
    { type: "media", props: { type: "image", src: img3, alt: "Teilekiste in der Garage", caption: "Teilekiste" } },
  ],
} as const satisfies ProjectContent;
