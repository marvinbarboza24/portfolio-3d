import videoVrDentist from "../../../assets/videos/vr-dentist.mp4";

import vrDentist0 from "../../../assets/images/projects/vr-dentist/vr-dentist-0.png";
import vrDentist1 from "../../../assets/images/projects/vr-dentist/vr-dentist-1.png";
import vrDentist2 from "../../../assets/images/projects/vr-dentist/vr-dentist-2.png";
import vrDentist3 from "../../../assets/images/projects/vr-dentist/vr-dentist-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Dentist",
  theme: "light",
  tags: ["unity", "blender", "mixamo", "quest", "sketchfab"],
  videoBorder: true,
  description:
    "VR Dentist ist eine immersive VR-Simulation für zahnmedizinische Ausbildung und das Üben von Behandlungsabläufen.<br/><br/>Umgesetzt in Unity für Quest 2, mit Charakteren und Szenen aus Blender, Mixamo und Sketchfab. Spieler durchlaufen Extraktionen, Füllungen, Wurzelbehandlungen und Reinigungen in einer First-Person-Klinik.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoVrDentist,
        caption: "Gameplay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist0,
        alt: "Zahnbehandlung in der First-Person-Ansicht",
        caption: "Übungsprozedur",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist1,
        alt: "Zahnklinik-Umgebung",
        caption: "Klinik-Umgebung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist2,
        alt: "Patientenbehandlung in VR",
        caption: "Patientenbehandlung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist3,
        alt: "Menü zur Auswahl der Prozedur",
        caption: "Prozedurauswahl",
      },
    },
  ],
} as const satisfies ProjectContent;
