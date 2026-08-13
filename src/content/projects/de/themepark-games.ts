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
    "Ein Freizeitpark für die Hosentasche. Laufe durch den Hub, wähle eine Attraktion und spiele kurze Minispiele um Münzen und Preise.<br/><br/>Mit Whack-A-Mouse, Bumper Cars, Schießbude, Musical Fish Hole, Würfelwurf, Glücksrad und einer RC-Bahn.",
  components: [
    { type: "media", props: { type: "video", src: videoThemepark, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: park0, alt: "Freizeitpark-Hub", caption: "Park-Hub" } },
    { type: "media", props: { type: "image", src: park1, alt: "Jahrmarkt-Minispiel", caption: "Minispiele" } },
    { type: "media", props: { type: "image", src: park2, alt: "Attraktionen", caption: "Attraktionen" } },
    { type: "media", props: { type: "image", src: park3, alt: "Münzen und Preise", caption: "Münzen und Preise" } },
  ],
} as const satisfies ProjectContent;
