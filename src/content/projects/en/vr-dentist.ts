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
    "VR Dentist is an immersive virtual reality simulation designed for dental training and procedural practice.<br/><br/>Built in Unity for Quest 2, with characters and scenes from Blender, Mixamo, and Sketchfab. Players work through procedures like extractions, fillings, root canals, and cleanings in a first-person clinic.",
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
        alt: "First-person dental procedure",
        caption: "Procedure practice",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist1,
        alt: "Dental clinic environment",
        caption: "Clinic environment",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist2,
        alt: "Patient treatment in VR",
        caption: "Patient treatment",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: vrDentist3,
        alt: "Procedure selection menu",
        caption: "Procedure selection",
      },
    },
  ],
} as const satisfies ProjectContent;
