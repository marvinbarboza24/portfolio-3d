import video from "../../../assets/videos/vr-church.mp4";
import img0 from "../../../assets/images/projects/vr-church/vr-church-0.png";
import img1 from "../../../assets/images/projects/vr-church/vr-church-1.png";
import img2 from "../../../assets/images/projects/vr-church/vr-church-2.png";
import img3 from "../../../assets/images/projects/vr-church/vr-church-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "VR Church",
  theme: "light",
  tags: ["unity", "quest"],
  videoBorder: true,
  description:
    "A VR training sim for altar servers (Tagapaglingkod) walking through a Catholic Mass — from the Introductory Rites through consecration. Ring the sanctuary bells, follow a Tagalog checklist, and move through the liturgy with scored, timed tasks.<br/><br/>Built around a full church interior so trainees can rehearse cues, posture, and object handling before serving a live Mass.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Ringing sanctuary bells in VR", caption: "Sanctuary bells" } },
    { type: "media", props: { type: "image", src: img1, alt: "Liturgical object on the altar table", caption: "Altar task" } },
    { type: "media", props: { type: "image", src: img2, alt: "Session complete with score overlay", caption: "Session complete" } },
    { type: "media", props: { type: "image", src: img3, alt: "Church sanctuary interior", caption: "Sanctuary" } },
  ],
} as const satisfies ProjectContent;
