import video from "../../../assets/videos/vr-caregiver.mp4";
import img0 from "../../../assets/images/projects/vr-caregiver/vr-caregiver-0.png";
import img1 from "../../../assets/images/projects/vr-caregiver/vr-caregiver-1.png";
import img2 from "../../../assets/images/projects/vr-caregiver/vr-caregiver-2.png";
import img3 from "../../../assets/images/projects/vr-caregiver/vr-caregiver-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Caregiver",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "Ein VR-Trainingsraum für Pflegekräfte — Behandlungszimmer, Patientinnen und alltägliche Aufgaben in einer First-Person-Simulation. Durch die Einrichtung gehen, auf eine Person zugehen und die kleinen Interaktionen einer Schicht üben: Präsenz, Haltung, wie man einen Raum betritt.<br/><br/>Damit neue Pflegekräfte Soft Skills und räumliches Gespür trainieren, bevor sie auf Station sind.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Pflegeeinrichtung mit stehender Person", caption: "Pflegeeinrichtung" } },
    { type: "media", props: { type: "image", src: img1, alt: "Behandlungszimmer mit Pflegekraft in Kasack", caption: "Klinikraum" } },
    { type: "media", props: { type: "image", src: img2, alt: "Patientenbetreuung in VR", caption: "Patientenbetreuung" } },
    { type: "media", props: { type: "image", src: img3, alt: "Pflege-Trainingsumgebung", caption: "Trainingsbereich" } },
  ],
} as const satisfies ProjectContent;
