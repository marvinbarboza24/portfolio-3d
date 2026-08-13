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
    "Ein VR-Training für Ministranten (Tagapaglingkod) durch die katholische Messe — von den Eröffnungsriten bis zur Wandlung. Sanctusglocken läuten, einer Checkliste auf Tagalog folgen und die Liturgie mit Bewertung und Zeitmessung durchlaufen.<br/><br/>In einem vollständigen Kircheninnenraum üben Auszubildende Abläufe, Haltung und den Umgang mit liturgischen Gegenständen, bevor sie im echten Gottesdienst dienen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Sanctusglocken in VR läuten", caption: "Sanctusglocken" } },
    { type: "media", props: { type: "image", src: img1, alt: "Liturgischer Gegenstand am Altar", caption: "Altar-Aufgabe" } },
    { type: "media", props: { type: "image", src: img2, alt: "Sitzung abgeschlossen mit Punkteanzeige", caption: "Sitzung beendet" } },
    { type: "media", props: { type: "image", src: img3, alt: "Kircheninnenraum", caption: "Heiligtum" } },
  ],
} as const satisfies ProjectContent;
