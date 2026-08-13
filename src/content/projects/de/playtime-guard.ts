import videoGuard from "../../../assets/videos/playtime-guard.mp4";
import guard0 from "../../../assets/images/projects/playtime-guard/playtime-guard-0.png";
import guard1 from "../../../assets/images/projects/playtime-guard/playtime-guard-1.png";
import guard2 from "../../../assets/images/projects/playtime-guard/playtime-guard-2.png";
import guard3 from "../../../assets/images/projects/playtime-guard/playtime-guard-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "PlayTime Guard",
  theme: "light",
  tags: ["android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.playtimeguard.parent",
  description:
    "PlayTime Guard hilft Eltern, die Spielzeit auf Android zu begrenzen. Mit PIN Spiele hinzufügen, Tageslimit setzen — danach sperrt die App automatisch.<br/><br/>Assist Mode für geteilte Handys, Guard Mode für Kindergeräte, plus Tamper-Alerts, Sofort-Sperre und +15 / +30 / +60 Minuten Extra-Zeit.",
  components: [
    { type: "media", props: { type: "video", src: videoGuard, caption: "Vorschau" } },
    { type: "media", props: { type: "image", src: guard0, alt: "PlayTime Guard Elternkontrolle", caption: "Tageslimits" } },
    { type: "media", props: { type: "image", src: guard1, alt: "Assist Mode und Guard Mode Setup", caption: "Setup" } },
    { type: "media", props: { type: "image", src: guard2, alt: "Eltern-PIN", caption: "Eltern-PIN" } },
    { type: "media", props: { type: "image", src: guard3, alt: "Verwaltete Spiele", caption: "Spiele hinzufügen" } },
  ],
} as const satisfies ProjectContent;
