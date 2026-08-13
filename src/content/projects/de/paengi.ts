import video from "../../../assets/videos/paengi.mp4";
import img0 from "../../../assets/images/projects/paengi/paengi-0.png";
import img1 from "../../../assets/images/projects/paengi/paengi-1.png";
import img2 from "../../../assets/images/projects/paengi/paengi-2.png";
import img3 from "../../../assets/images/projects/paengi/paengi-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Paengi",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein buntes 2D-Lernspiel, das gesundes Essen zur kulinarischen Reise macht. Sammle lokale Früchte, Gemüse und traditionelle Sangkap, koche ikonische Filipino-Gerichte und lerne Nutzen und Kulturerbe kennen.<br/><br/>Als Mini-Koch durch Inseln und Grotten platformen, Zutaten sammeln und Filipino-Küche kochen.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Zutatenjagd", caption: "Sammeln" } },
    { type: "media", props: { type: "image", src: img1, alt: "Koch-Platforming", caption: "Platforming" } },
    { type: "media", props: { type: "image", src: img2, alt: "Sangkap sammeln", caption: "Sangkap" } },
    { type: "media", props: { type: "image", src: img3, alt: "Essens-Collectibles", caption: "Rezepte" } },
  ],
} as const satisfies ProjectContent;
