// components/Carousel.tsx
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Arrow from "@/public/assets/arrow.svg";

type CarouselProps = {
  images: (string | StaticImageData)[];
  descriptions: string[];
  state: string[];
  showLink?: boolean;
};

const Carousel = ({
  images,
  state,
  descriptions,
  showLink = true,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(images.length - 1);
    }
    if (activeIndex >= images.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col justify-between items-center w-full md:w-auto">
        <div className="h-[300px] md:h-[540px] w-full md:w-[820px] relative">
          <Image
            src={images[activeIndex]}
            alt=""
            layout="fill"
            objectFit="cover"
            className="rounded-2xl pr-3"
          />
        </div>
        <div className="flex items-center gap-8 mt-4">
          <button
            onClick={() => setActiveIndex(activeIndex - 1)}
            className="rounded-full rotate-180 border border-color5 w-7 h-7 flex justify-center items-center"
          >
            <Image src={Arrow} alt={""}></Image>
          </button>
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full cursor-pointer ${
                  index === activeIndex ? "bg-color4" : "bg-graydot"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveIndex(activeIndex + 1)}
            className="rounded-full border border-color5 w-7 h-7 flex justify-center items-center"
          >
            <Image src={Arrow} alt={""}></Image>
          </button>
        </div>
      </div>
      <div className="flex justify-center flex-col p-4 text-center md:text-left">
        <div className="flex items-start justify-center md:justify-start">
          <p className="rounded p-1 text-color5 inline-block border">
            {state[activeIndex]}
          </p>
        </div>
        <p className="text-2xl md:text-3xl py-4">{descriptions[activeIndex]}</p>
        {showLink && (
          <Link className="text-color5 underline decoration-solid" href={""}>
              View Project
          </Link>
        )}
      </div>
    </div>
  );
};

export default Carousel;