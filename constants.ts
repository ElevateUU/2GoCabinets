// import block1 from "@/public/slider/sliderBackground/countertops/block1.png";
// import block2 from "@/public/slider/sliderBackground/countertops/block2.png";
// import block3 from "@/public/slider/sliderBackground/countertops/block3.png";
// import block4 from "@/public/slider/sliderBackground/countertops/block4.png";
// import block5 from "@/public/slider/sliderBackground/countertops/block5.png";
// import block6 from "@/public/slider/sliderBackground/countertops/block6.png";

// import door1 from "@/public/slider/sliderBackground/doors/door1.png";
// import door2 from "@/public/slider/sliderBackground/doors/door2.png";
// import door3 from "@/public/slider/sliderBackground/doors/door3.png";
// import door4 from "@/public/slider/sliderBackground/doors/door4.png";
// import door5 from "@/public/slider/sliderBackground/doors/door5.png";
// import door6 from "@/public/slider/sliderBackground/doors/door6.png";

// import truckCar from "@/public/slider/sliderBackground/truck/truck.png";

// import TruckBg from "@/public/slider/sliderBackground/truckBg.jpg";
// import CabinetsBg from "@/public/slider/sliderBackground/Cabinets.jpg";
// import CountertopBg from "@/public/slider/sliderBackground/Countertop.jpg";

// import { StaticImageData } from "next/image";

// interface OverlayImage {
//   src: StaticImageData;
//   width: number;
//   height: number;
//   bottom?: string;
//   left?: string;
//   top?: string;
//   transform?: string;
// }

// interface ImageInterface {
//   src: StaticImageData;
//   alt: string;
//   overlaySrc?: OverlayImage[];
//   description: string;
//   under: string;
//   color: string;
//   color_under: string;
//   size: string;
//   size_under: string;
//   weight: string;
//   weight_under: string;
//   position: string;
// }

// export const desktopImages: ImageInterface[] = [
//   {
//     src: CountertopBg,
//     alt: "Countertop",
//     overlaySrc: [
//       { src: block1, width: 400, height: 200 },
//       { src: block2, width: 50, height: 50 },
//       { src: block3, width: 50, height: 50 },
//       { src: block4, width: 50, height: 50 },
//       { src: block5, width: 50, height: 50 },
//     ],
//     description: "COUNTERTOPS",
//     under: "Choose from wide selection",
//     color: "text-countertop",
//     color_under: "text-choose",
//     size: "text-8xl",
//     size_under: "text-3xl",
//     weight: "font-extrabold",
//     weight_under: "font-semibold",
//     position: "top-20 left-1/2 transform -translate-x-1/2",
//   },
//   {
//     src: TruckBg,
//     alt: "Truck",
//     overlaySrc: [
//       {
//         src: truckCar,
//         width: 840,
//         height: 350,
//         bottom: "0",
//         left: "50%",
//         transform: "translateX(-50%)",
//       },
//     ],
//     description: "WE COME TO YOU",
//     under: "",
//     color: "text-sembro",
//     color_under: "text-choose",
//     size: "text-9xl tracking-widest",
//     size_under: "",
//     weight: "font-extrabold",
//     weight_under: "font-semibold ",
//     position: "top-[30%] left-[50%] transform -translate-x-1/2",
//   },
//   {
//     src: CabinetsBg,
//     alt: "Cabinet Menu",
//     overlaySrc: [
//       { src: door1, width: 400, height: 200 },
//       { src: door2, width: 50, height: 50 },
//       { src: door3, width: 50, height: 50 },
//       { src: door4, width: 50, height: 50 },
//       { src: door5, width: 50, height: 50 },
//       { src: door6, width: 50, height: 50 },
//     ],
//     description: "CABINETS",
//     under: "Choose from wide selection",
//     color: "text-white",
//     color_under: "text-choose",
//     size: "text-8xl",
//     size_under: "text-3xl",
//     weight: "font-extrabold",
//     weight_under: "font-semibold",
//     position: "top-20 left-1/2 transform -translate-x-1/2",
//   },
// ];

// export const mobileImages = [
//   {
//     src: CountertopBg,
//     alt: "Countertop",
//     overlaySrc: [
//       { src: block1, width: 50, height: 50 },
//       { src: block2, width: 50, height: 50 },
//       { src: block3, width: 50, height: 50 },
//       { src: block4, width: 50, height: 50 },
//       { src: block5, width: 50, height: 50 },
//     ],
//     description: "COUNTERTOPS",
//     under: "Choose from wide selection",
//     color: "",
//     color_under: "text-choose",
//     size: "text-5xl",
//     size_under: "text-7xl",
//     weight: "font-extrabold",
//     weight_under: "font-semibold",
//     position: "top-20 left-1/2 transform -translate-x-1/2",
//   },
//   {
//     src: TruckBg,
//     alt: "Truck",
//     overlaySrc: [
//       {
//         src: truckCar,
//         width: 10,
//         height: 10,
//         bottom: "0",
//         left: "50%",
//         transform: "translateX(-50%)",
//       },
//     ],
//     description: "WE COME TO YOU",
//     under: "",
//     color: "",
//     color_under: "text-choose",
//     size: "text-5xl",
//     size_under: "",
//     weight: "font-extrabold",
//     weight_under: "font-semibold",
//     position: "top-20 left-1/2 transform -translate-x-1/2",
//   },
//   {
//     src: CabinetsBg,
//     alt: "Cabinet Menu",
//     overlaySrc: [
//       { src: door1, width: 400, height: 200 },
//       { src: door2, width: 50, height: 50 },
//       { src: door3, width: 50, height: 50 },
//       { src: door4, width: 50, height: 50 },
//       { src: door5, width: 50, height: 50 },
//       { src: door6, width: 50, height: 50 },
//     ],
//     description: "CABINETS",
//     under: "Choose from wide selection",
//     color: "",
//     color_under: "text-choose",
//     size: "text-5xl",
//     size_under: "text-5xl",
//     weight: "font-extrabold",
//     weight_under: "font-semibold",
//     position: "top-20 left-1/2 transform -translate-x-1/2",
//   },
// ];
