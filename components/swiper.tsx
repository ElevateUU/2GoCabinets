import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

import Arrow from "@/public/assets/arrow.svg"

interface ImageSliderProps {
  images: (string | StaticImageData)[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative max-w-full h-[731px] overflow-hidden"> 
      <div className="absolute w-full h-[661px] overflow-hidden">
        <div
          className="absolute flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 661}px)`,
            width: `${661 * images.length}px`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-[661px] h-[661px] relative mr-4 last:mr-0 rounded-2xl overflow-hidden"
            >
              <Image src={image} alt="" layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-8 py-5"> {/* Added pt-3 here */}
        <button
          onClick={handlePrev}
          className="rounded-full rotate-180 border border-color5 w-7 h-7 flex justify-center items-center"
        >
            <Image src={Arrow} alt={""}></Image>
        </button>
        <div className="flex space-x-2 justify-center">
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
          onClick={handleNext}
          className="rounded-full border border-color5 w-7 h-7 flex justify-center items-center"
        >
            <Image src={Arrow} alt={""}></Image>
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
