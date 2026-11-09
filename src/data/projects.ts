export type Project = {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
};

/** Four featured projects for the scroll-driven hero banner. */
export const projects: Project[] = [
  {
    id: "marjan",
    index: "01",
    title: "Hilton Marjan Island Beach resort & Spa",
    description:
      "A landmark hospitality destination on Marjan Island, blending coastal luxury with fluid architectural form and warm evening light.",
    image: "/dark-grain.png",
    imageAlt: "Hilton Marjan Island Beach Resort & Spa",
    objectPosition: "center center",
  },
  {
    id: "architecture",
    index: "02",
    title: "Architecture & Masterplanning",
    description:
      "International multidisciplinary design spanning architecture, planning and integrated engineering for complex urban environments.",
    image: "/architecture-banner.png",
    imageAlt: "Architecture banner featuring coastal resort design",
    objectPosition: "right center",
  },
  {
    id: "doubletree",
    index: "03",
    title: "DoubleTree by Hilton – Jeddah",
    description:
      "An award-winning hospitality concept recognised internationally for its distinctive tower form and refined guest experience.",
    image: "/award-doubletree.png",
    imageAlt: "DoubleTree by Hilton Jeddah award project",
    objectPosition: "center center",
  },
  {
    id: "future",
    index: "04",
    title: "Design the future Now",
    description:
      "JT Partners delivers architecture, project management, infrastructure and cost consultancy with a collaborative, future-facing approach.",
    image: "/dark-grain.png",
    imageAlt: "JT Partners future hospitality vision",
    objectPosition: "70% center",
  },
];
