import videoThemepark from "../../../assets/videos/themepark-games.mp4";
import park0 from "../../../assets/images/projects/themepark-games/themepark-games-0.png";
import park1 from "../../../assets/images/projects/themepark-games/themepark-games-1.png";
import park2 from "../../../assets/images/projects/themepark-games/themepark-games-2.png";
import park3 from "../../../assets/images/projects/themepark-games/themepark-games-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "ThemePark Games",
  theme: "light",
  tags: ["unity", "android"],
  videoBorder: true,
  live: "https://play.google.com/store/apps/details?id=com.SpanchingCompany.ThemeParkGames",
  description:
    "A pocket theme park packed with carnival attractions. Walk the hub, pick a stall, and jump into quick mini-games for coins and prizes.<br/><br/>Attractions include Whack-A-Mouse, Bumper Cars, Shooting Gallery, Musical Fish Hole, Dice Throw, Fortune Wheel, and a remote-control car track.",
  components: [
    { type: "media", props: { type: "video", src: videoThemepark, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: park0, alt: "Theme park hub", caption: "Park hub" } },
    { type: "media", props: { type: "image", src: park1, alt: "Carnival mini-game", caption: "Mini-games" } },
    { type: "media", props: { type: "image", src: park2, alt: "Shooting gallery and bumper cars", caption: "Attractions" } },
    { type: "media", props: { type: "image", src: park3, alt: "Coin rewards and play", caption: "Coins and prizes" } },
  ],
} as const satisfies ProjectContent;
