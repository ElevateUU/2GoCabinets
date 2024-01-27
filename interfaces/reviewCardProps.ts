import { StaticImageData } from "next/image";

export interface ReviewCardProps {
  imageSrc: StaticImageData;
  name: string;
  stars: number;
  description: string;
}
