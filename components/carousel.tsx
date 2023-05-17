import React from "react";

import { useWindowSize } from "react-use";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";

import Countertop from "@/public/slider/CountertopSlide.png";
import Truck from "@/public/slider/TruckSlide.png";
import CabinetMenu from "@/public/slider/CabinetMenuSlide.png";
import CabinetsMobile from "@/public/slider/mobileSlider/CabinetsMobile.svg";
import CountertopMobile from "@/public/slider/mobileSlider/CountertopsMobile.svg";
import TruckMobile from "@/public/slider/mobileSlider/TruckMobile.svg";

const MyCarousel = () => {
  const { width } = useWindowSize();
  const isMobile = width < 640;

  const desktopImages = [
    { src: Countertop, alt: "Countertop" },
    { src: Truck, alt: "Truck" },
    { src: CabinetMenu, alt: "Cabinet Menu" },
  ];

  const mobileImages = [
    { src: CountertopMobile, alt: "Countertop" },
    { src: TruckMobile, alt: "Truck" },
    { src: CabinetsMobile, alt: "Cabinet Menu" },
  ];

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <Carousel
      axis="horizontal"
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover
      swipeScrollTolerance={5}
      className="relative mt-14 md:mt-24 shadow-md"
      renderArrowPrev={(clickHandler, hasPrev) => {
        if (isMobile) return;
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <IoIosArrowBack className="w-12 h-20 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        if (isMobile) return;
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <IoIosArrowForward className="w-12 h-20 text-white" />
          </div>
        );
      }}
    >
      {images.map(({ src, alt }, index) => (
        <div key={index} className="w-full relative carousel-height-xl">
          <div className="w-full h-full relative">
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover" // changed from 'cover' to 'contain'
              priority={index === 0}
            />
          </div>
          {((isMobile && (alt === "Cabinet Menu" || alt === "Countertop")) ||
            (!isMobile &&
              (alt === "Countertop" || alt === "Cabinet Menu"))) && (
            <div
              className={`absolute ${
                alt === "Countertop" ? "top-[50%]" : "top-[37%]"
              } left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            >
              <Link href="/commingSoon">
                <button
                  className={`text-black border h-10 border-black p-0 leading-5 hover:bg-sembro hover:border-sembro hover:text-white active:bg-sembro font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${
                    isMobile
                      ? "inline-block md:hidden"
                      : "hidden md:inline-block"
                  }`}
                  type="button"
                >
                  Choose Now
                </button>
              </Link>
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
