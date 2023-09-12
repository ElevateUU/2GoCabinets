import React, { useEffect, useState } from "react";

import { useWindowSize } from "react-use";
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Link from "next/link";
import Image from "next/image";

// import { desktopImages, mobileImages } from "@/constants";

import block1 from "@/public/slider/sliderBackground/countertops/block1.png";
import block2 from "@/public/slider/sliderBackground/countertops/block2.png";
import block3 from "@/public/slider/sliderBackground/countertops/block3.png";
import block4 from "@/public/slider/sliderBackground/countertops/block4.png";
import block5 from "@/public/slider/sliderBackground/countertops/block5.png";
import block6 from "@/public/slider/sliderBackground/countertops/block6.png";

import door1 from "@/public/slider/sliderBackground/doors/door1.png";
import door2 from "@/public/slider/sliderBackground/doors/door2.png";
import door3 from "@/public/slider/sliderBackground/doors/door3.png";
import door4 from "@/public/slider/sliderBackground/doors/door4.png";
import door5 from "@/public/slider/sliderBackground/doors/door5.png";
import door6 from "@/public/slider/sliderBackground/doors/door6.png";

import truckCar from "@/public/slider/sliderBackground/truck/truck.png";

import TruckBg from "@/public/slider/sliderBackground/truckBg.jpg";
import CabinetsBg from "@/public/slider/sliderBackground/Cabinets.jpg";
import CountertopBg from "@/public/slider/sliderBackground/Countertop.jpg";

const MyCarousel = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // Only run this code once the component is mounted on the client-side
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect will only run once when the component is mounted

  // Now you can use windowWidth in your code
  let topValueBlock1, topValueBlock2, topValueBlock3, topValueBlock4, topValueBlock5, topValueBlock6;

  if (windowWidth && windowWidth <= 480) { // for small devices
    topValueBlock1 = "29%";
    topValueBlock2 = "29%";
    topValueBlock3 = "80%";
    topValueBlock4 = "54%";
    topValueBlock5 = "80%";
    topValueBlock6 = "54%";
  } else if (windowWidth && windowWidth <= 768) { // for medium devices
    topValueBlock1 = "33%";
    topValueBlock2 = "33%";
    topValueBlock3 = "78%";
    topValueBlock4 = "57%";
    topValueBlock5 = "78%";
    topValueBlock6 = "57%";
  } else { // for large devices
    topValueBlock1 = "31%";
    topValueBlock2 = "31%";
    topValueBlock3 = "77%";
    topValueBlock4 = "54%";
    topValueBlock5 = "77%";
    topValueBlock6 = "54%";
  }

  const desktopImages = [
    {
      src: TruckBg,
      alt: "Truck",
      overlaySrc: [
        {
          src: truckCar,
          width: "55vw",
          height: "40vh",
          bottom: "0",
          left: "25%",
          top: "",
          right: "",
          animation: "animate-slideInFromLeft",
          transform: "translateX(-50%)",
        },
    ], 
      description: "WE COME TO YOU",
      under: "",
      color: "text-sembro",
      color_under: "text-choose",
      size: "text-8xl tracking-wide",
      size_under: "",
      stroke: "",
      animation: "slideInFromRight",
      bottomTextAnimation: "",
      weight: "font-extrabold",
      weight_under: "font-semibold ",
      position: "top-[20%] left-[50%] transform -translate-x-1/2",
    },
    {
      src: CountertopBg,
      alt: "Countertop",
      overlaySrc: [
        {
          src: block1,
          width: 670,
          height: 230,
          top: "0",
          left: "0",
          right: "",
          transform: "translateX(-50%)",
          animation: "",
        },
        {
          src: block2,
          width: 670,
          height: 230,
          top: "0",
          right: "0",
          transform: "translateX(50%)",
          animation: "",
        },
        {
          src: block3,
          width: 670,
          height: 230,
          top: "",
          right: "",
          bottom: "0",
          left: "0",
          transform: "",
          animation: "",
        },
        {
          src: block4,
          width: 670,
          height: 230,
          top: "34%",
          bottom: "",
          left: "0",
          right: "",
          transform: "translateX(-20%)",
          animation: "",
        },
        {
          src: block5,
          width: 670,
          height: 230,
          top: "",
          bottom: "0",
          left: "",
          right: "0",
          transform: "",
          animation: "",
        },
        {
          src: block6,
          width: 670,
          height: 230,
          top: "34%",
          bottom: "",
          left: "",
          right: "0",
          transform: "translateX(20%)",
          animation: "",
        },
      ],
      description: "COUNTERTOPS",
      under: "Choose from wide selection",
      color: "text-countertop",
      color_under: "text-choose",
      size: "text-8xl",
      animation: "slideInFromLeft",
      stroke: "",
      bottomTextAnimation: "slideInFromRight",
      size_under: "text-3xl",
      weight: "font-extrabold",
      weight_under: "font-semibold",
      position: "top-20 left-1/2 transform -translate-x-1/2",
    },
    {
      src: CabinetsBg,
      alt: "Cabinet Menu",
      overlaySrc: [
        {
          src: door1,
          width: "20vh",
          height: "44vh",
          bottom: "0",
          left: "15%",
          right: "",
          top: "",
          transform: "translateX(-50%)",
          animation: "door 0.5s ease-in-out 0.2s forwards",
        },
        {
          src: door2,
          width: "20vh",
          height: "44vh",
          bottom: "0",
          left: "30%",
          animation: "door 0.5s ease-in-out 0.4s forwards",
          transform: "translateX(-50%)",
        },
        {
          src: door3,
          width: "20vh",
          height: "44vh",
          bottom: "0",
          left: "45%",
          top: "",
          animation: "door 0.5s ease-in-out 0.6s forwards",
          transform: "translateX(-50%)",
        },
        {
          src: door4,
          width: "20vh",
          height: "44vh",
          bottom: "0",
          left: "60%",
          top: "",
          animation: "door 0.5s ease-in-out 0.8s forwards",
          transform: "translateX(-50%)",
        },
        {
          src: door5,
          width: "20vh",
          height: "44vh",
          bottom: "0",
          top: "",
          left: "75%",
          animation: "door 0.5s ease-in-out 1s forwards",
          transform: "translateX(-50%)",
        },
      ],
      description: "CABINETS",
      under: "Choose from wide selection",
      color: "text-white",
      stroke: "text-stroke",
      color_under: "text-choose",
      size: "text-8xl",
      animation: "slideInFromRight",
      bottomTextAnimation: "slideInFromLeft",
      size_under: "text-3xl",
      weight: "font-extrabold",
      weight_under: "font-semibold",
      position: "top-20 left-1/2 transform -translate-x-1/2",
    },
  ];

  const mobileImages = [
    {
      src: CountertopBg,
      alt: "Countertop",
      overlaySrc: [
        {
          src: block1,
          width: "36vw",
          height: "14vh",
          top: topValueBlock1,
          left: "0",
          right: "",
          transform: "translateX(-50%)",
          animation: "",
        },
        {
          src: block2,
          width: "36vw",
          height: "14vh",
          top: topValueBlock2,
          right: "0",
          transform: "translateX(50%)",
          animation: "",
        },
        {
          src: block3,
          width: "47vw",
          height: "14vh",
          top: topValueBlock3,
          right: "",
          bottom: "0",
          left: "0",
          transform: "",
          animation: "",
        },
        {
          src: block4,
          width: "41vw",
          height: "14vh",
          top: topValueBlock4,
          bottom: "",
          left: "0",
          right: "",
          transform: "translateX(-20%)",
          animation: "",
        },
        {
          src: block5,
          width: "47vw",
          height: "14vh",
          top: topValueBlock5,
          bottom: "0",
          left: "",
          right: "0",
          transform: "",
          animation: "",
        },
        {
          src: block6,
          width: "41vw",
          height: "14vh",
          top: topValueBlock6,
          bottom: "",
          left: "",
          right: "0",
          transform: "translateX(20%)",
          animation: "",
        },
      ],
      description: "COUNTERTOPS",
      under: "Choose from wide selection",
      color: "text-countertop",
      color_under: "text-choose",
      size: "text-4xl",
      stroke: "",
      animation: "slideInFromLeft",
      bottomTextAnimation: "slideInFromRight",
      size_under: "text-2xl",
      weight: "font-extrabold",
      weight_under: "font-semibold",
      position: "top-[13%] left-1/2 transform -translate-x-1/2",
    },
    {
      src: TruckBg,
      alt: "Truck",
      overlaySrc: [
        {
          src: truckCar,
          width: 340,
          height: 140,
          bottom: "0",
          left: " 8%",
          top: "",
          right: "",
          animation: "animate-slideInFromLeft",
          transform: "translateX(-50%)",
        },
      ],
      description: "WE COME TO YOU",
      under: "",
      color: "text-sembro",
      color_under: "text-choose",
      stroke: "",
      size: "text-6xl tracking-wider",
      size_under: "",
      animation: "slideInFromRight",
      bottomTextAnimation: "",
      weight: "font-extrabold",
      weight_under: "font-semibold ",
      position: "top-[20%] left-[50%] transform -translate-x-1/2",
    },
    {
      src: CabinetsBg,
      alt: "Cabinet Menu",
      overlaySrc: [
        {
          src: door1,
          width: "20vw",
          height: "22vh",
          bottom: "0",
          left: "0%",
          right: "",
          top: "",
          transform: "translateX(0)",
          animation: "door 0.5s ease-in-out 0.2s forwards",
        },
        {
          src: door2,
          width: "20vw",
          height: "22vh",
          bottom: "0",
          left: "20%",
          animation: "door 0.5s ease-in-out 0.4s forwards",
          transform: "translateX(0)",
        },
        {
          src: door3,
          width: "20vw",
          height: "22vh",
          bottom: "0",
          left: "40%",
          top: "",
          animation: "door 0.5s ease-in-out 0.6s forwards",
          transform: "translateX(0)",
        },
        {
          src: door4,
          width: "20vw",
          height: "22vh",
          bottom: "0",
          left: "60%",
          top: "",
          animation: "door 0.5s ease-in-out 0.8s forwards",
          transform: "translateX(0)",
        },
        {
          src: door5,
          width: "20vw",
          height: "22vh",
          bottom: "0",
          top: "",
          left: "80%",
          animation: "door 0.5s ease-in-out 1s forwards",
          transform: "translateX(0)",
        },
      ],
      description: "CABINETS",
      under: "Choose from wide selection",
      color: "text-white",
      color_under: "text-choose",
      stroke: "",
      size: "text-5xl",
      animation: "slideInFromRight",
      bottomTextAnimation: "slideInFromLeft",
      size_under: "text-2xl",
      weight: "font-extrabold",
      weight_under: "font-semibold",
      position: "top-20 left-1/2 transform -translate-x-1/2",
    },
  ];

  const { width } = useWindowSize();
  const isMobile = width < 640;

  const [currentSlide, setCurrentSlide] = useState(0);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <Carousel
      axis="horizontal"
      showStatus={false}
      showThumbs={false}
      onChange={setCurrentSlide}
      autoPlay={true}
      infiniteLoop={true}
      stopOnHover
      swipeScrollTolerance={5}
      className="relative mt-14 md:mt-24"
      renderArrowPrev={(clickHandler, hasPrev) => {
        if (isMobile) return;
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <IoIosArrowBack className="w-12 h-20 z-10 text-white" />
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
      {images.map(
        (
          {
            src,
            overlaySrc,
            alt,
            description,
            under,
            stroke,
            color,
            color_under,
            size,
            position,
            weight,
            weight_under,
            size_under,
            animation,
            bottomTextAnimation,
          },
          index
        ) => (
          <div key={index} className="w-full relative carousel-height-xl">
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />

              {Array.isArray(overlaySrc) &&
                overlaySrc.map((image, i) => (
                  <div
                    key={i}
                    className={`absolute z-10 ${
                      currentSlide === index ? `${image.animation}` : ""
                    }`}
                    style={{
                      width: image.width,
                      height: image.height,
                      top: image.top,
                      right: image.right,
                      bottom: image.bottom,
                      left: image.left,
                      transform:
                        currentSlide === index
                          ? image.transform
                          : "translateX(0)",
                      transition:
                        currentSlide === index
                          ? "transform 1s ease-in-out"
                          : "",
                    }}
                  >
                    {currentSlide === index && (
                      <Image
                        src={image.src}
                        alt={`Overlay ${i}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                ))}
              {((isMobile && (alt === "Cabinet Menu" || alt === "Countertop")) ||
              (!isMobile &&
                (alt === "Countertop" || alt === "Cabinet Menu"))) && (
              <div
                className={`absolute z-[max] ${
                  alt === "Countertop" ? "top-[47%]" : "top-[37%]"
                } left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
              >
                <Link href="/comingSoon">
                  {/* <button
                    className={`text-black border h-10 border-black p-0 leading-5 hover:bg-sembro hover:border-sembro hover:text-white active:bg-sembro font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 z-[max] ${
                      isMobile
                        ? "inline-block md:hidden"
                        : "hidden md:inline-block"
                    }`}
                    type="button"
                  >
                    Choose Now
                  </button> */}
                </Link>
              </div>
            )}
              <div
                className={`absolute ${position}  w-full h-full flex flex-col pointer-events-none`}
              >
                <p
                  className={`${color} ${size} ${weight} ${stroke} ${
                    currentSlide === index ? `animate-${animation}` : ""
                  } z-20`}
                >
                  {description}
                </p>

                <p
                  className={`${color_under} ${weight_under} ${size_under} ${
                    currentSlide === index
                      ? `animate-${bottomTextAnimation}`
                      : ""
                  } z-20`}
                >
                  {under}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </Carousel>
  );
};

export default MyCarousel;
