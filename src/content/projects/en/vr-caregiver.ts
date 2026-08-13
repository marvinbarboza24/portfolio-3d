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
    "A VR training space for caregivers — clinical rooms, patients, and everyday care tasks in a controlled first-person sim. Walk a facility, approach a patient, and rehearse the small interactions that make up a shift: presence, posture, and how you enter a room.<br/><br/>Built so new carers can practice soft skills and spatial awareness before they are on the floor.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Care facility with a standing patient", caption: "Care facility" } },
    { type: "media", props: { type: "image", src: img1, alt: "Clinical room with caregiver in scrubs", caption: "Clinical space" } },
    { type: "media", props: { type: "image", src: img2, alt: "Patient care interaction in VR", caption: "Patient care" } },
    { type: "media", props: { type: "image", src: img3, alt: "Caregiver training environment", caption: "Training floor" } },
  ],
} as const satisfies ProjectContent;
