import { StaticImageData } from "next/image";

export interface selectorProps {
  title: string;
  buildTime: string;
  description: string;
  src: StaticImageData;
  alt: string;
  learnMoreUrl: string;
}

export interface CardProps {
  backgroundImage: StaticImageData;
  circleImage: StaticImageData;
  name: string;
  experience: string;
}
