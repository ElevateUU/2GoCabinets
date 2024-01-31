import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Cabinet from "@/public/Renovation/753A8826.jpg";
import Countertop from "@/public/Renovation/753A8837.jpg";

import { selectorProps } from "@/interfaces/cardProps";

const Card: React.FC<selectorProps> = ({
  title,
  buildTime,
  description,
  src,
  alt,
  learnMoreUrl,
}) => (
  <div className="rounded-lg w-full md:w-[24rem]">
    <h2 className="text-gray text-center text-xl md:text-2xl pb-8">{title}</h2>
    <div className="bg-lightgray rounded-lg border-2 border-transparent hover:border-color5">
      <div className="h-80 w-full">
        <Image
          src={src}
          alt={alt}
          className="object-cover h-full w-full rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="text-xs text-center">{buildTime} DAY AVERAGE BUILD</p>
        <p className="mt-2.5 text-center">{description}</p>
        <Link className="bg-color4 text-white text-sm text-center py-2 px-4 w-[41%] h-[39px] my-7" href={learnMoreUrl} passHref>
          <button>
            Learn more
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const BuildingSection: React.FC = () => (
  <section className="pb-12">
    <div>
      <h2 className="text-3xl md:text-4xl pt-16 pb-10 text-center font-normal">
        No matter the scope, you can start building today.
      </h2>
      <div className="flex flex-col px-3 md:flex-row justify-center gap-6 md:gap-[8%]">
        <Card
          title="Countertops"
          buildTime="10"
          description="Finish your dream kitchen with our beautiful selection of countertops"
          src={Countertop}
          alt="Card image"
          learnMoreUrl="/commingSoon"
        />
        <Card
          title="Cabinets"
          buildTime="10"
          description="Build your dream kitchen with our wide selection of cabinets"
          src={Cabinet}
          alt="Card image"
          learnMoreUrl="/cabinets"
        />
      </div>
    </div>
  </section>
);

export default BuildingSection;
