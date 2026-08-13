import video from "../../../assets/videos/aswang.mp4";
import img0 from "../../../assets/images/projects/aswang/aswang-0.png";
import img1 from "../../../assets/images/projects/aswang/aswang-1.png";
import img2 from "../../../assets/images/projects/aswang/aswang-2.png";
import img3 from "../../../assets/images/projects/aswang/aswang-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Aswang",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein actionreiches Survival-Spiel aus der philippinischen Folklore. Spieler stellen sich formwandelnden Nachtwesen — Ziel: jede Aswang finden und besiegen, bevor sie die Stadt verschlingt.<br/><br/>Dunkle Dörfer erkunden, ein Folklore-Bestiarium studieren und Wesen wie den Syokoy mit Taschenlampe, Nahkampf und traditionellen Waffen jagen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Dschungel-Ritualstätte", caption: "Ritualstätte" } },
    { type: "media", props: { type: "image", src: img1, alt: "Taschenlampe", caption: "Nachtjagd" } },
    { type: "media", props: { type: "image", src: img2, alt: "Nachterkundung", caption: "Wildnis" } },
    { type: "media", props: { type: "image", src: img3, alt: "Kreaturen-Lore", caption: "Bestiarium" } },
  ],
} as const satisfies ProjectContent;
