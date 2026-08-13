import video from "../../../assets/videos/sorpresa.mp4";
import img0 from "../../../assets/images/projects/sorpresa/sorpresa-0.png";
import img1 from "../../../assets/images/projects/sorpresa/sorpresa-1.png";
import img2 from "../../../assets/images/projects/sorpresa/sorpresa-2.png";
import img3 from "../../../assets/images/projects/sorpresa/sorpresa-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Sorpresa",
  theme: "light",
  tags: ["unity"],
  videoBorder: true,
  description:
    "Ein interaktives Torten-Konfigurator- und Bestelltool. Schicht für Schicht Geschmack, Frosting und Toppings wählen — danach online an lokale Cafés übergeben.<br/><br/>Live-3D-Vorschau, Peso-Preisübersicht und Optionen wie Midnight Chocolate Cake, Mandeln und Choco-Swirl-Ränder.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "Torten-Werkstatt", caption: "Werkstatt" } },
    { type: "media", props: { type: "image", src: img1, alt: "Sorte und Toppings", caption: "Anpassen" } },
    { type: "media", props: { type: "image", src: img2, alt: "Fertige Dekoration", caption: "Deko" } },
    { type: "media", props: { type: "image", src: img3, alt: "Bestellübersicht", caption: "Bestellung" } },
  ],
} as const satisfies ProjectContent;
