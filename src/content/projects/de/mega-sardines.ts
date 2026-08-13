import video from "../../../assets/videos/mega-sardines.mp4";
import img0 from "../../../assets/images/projects/mega-sardines/mega-sardines-0.png";
import img1 from "../../../assets/images/projects/mega-sardines/mega-sardines-1.png";
import img2 from "../../../assets/images/projects/mega-sardines/mega-sardines-2.png";
import img3 from "../../../assets/images/projects/mega-sardines/mega-sardines-3.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Mega Sardines",
  theme: "light",
  tags: ["unity", "ar", "android"],
  videoBorder: true,
  description:
    "Eine AR-Promo für Mega Sardines. Kamera auf die Dose richten, und die Packung wird lebendig — 3D-MEGA-Schrift, ein Fischerboot, schwimmende Sardinen und ein #1-Badge auf dem echten Etikett.<br/><br/>Image-Tracking auf dem Produktartwork, ein Fischschwarm um die Dose und ein Maskottchen auf der Verpackung — die Marke lässt sich im Regal zeigen, nicht auf einer Folie.",
  components: [
    { type: "media", props: { type: "video", src: video, caption: "Gameplay" } },
    { type: "media", props: { type: "image", src: img0, alt: "AR-Sardine über der Mega-Dose", caption: "Produkt-AR" } },
    { type: "media", props: { type: "image", src: img1, alt: "Fischschwarm an der Mega-Sardines-Packung", caption: "Fischschwarm" } },
    { type: "media", props: { type: "image", src: img2, alt: "Maskottchen auf dem Produktetikett", caption: "Packungs-Maskottchen" } },
    { type: "media", props: { type: "image", src: img3, alt: "3D-MEGA-Logo, Boot und Sardinen auf der Dose", caption: "On-Pack-Overlay" } },
  ],
} as const satisfies ProjectContent;
