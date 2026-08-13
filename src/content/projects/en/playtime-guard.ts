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
    "PlayTime Guard helps parents manage how long children play games on Android. Set a Parent PIN, add games, set a daily allowance, and games lock when time runs out.<br/><br/>Assist Mode for shared phones and Guard Mode for dedicated child devices, plus tamper alerts, lock-now controls, and extra time in +15 / +30 / +60 minutes.",
  components: [
    { type: "media", props: { type: "video", src: videoGuard, caption: "Preview" } },
    { type: "media", props: { type: "image", src: guard0, alt: "PlayTime Guard parental controls", caption: "Daily limits" } },
    { type: "media", props: { type: "image", src: guard1, alt: "Assist Mode and Guard Mode setup", caption: "Setup" } },
    { type: "media", props: { type: "image", src: guard2, alt: "Parent PIN screen", caption: "Parent PIN" } },
    { type: "media", props: { type: "image", src: guard3, alt: "Managed games list", caption: "Add games" } },
  ],
} as const satisfies ProjectContent;
