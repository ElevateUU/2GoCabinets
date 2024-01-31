import Image from "next/image";
import React from "react";

import { IMAGES, STATES, DESCRIPTIONS, CARDS } from "@/constants";

import Slider from "@/components/slider";
import ReviewCard from "@/components/reviewbox";
import Swiper from "@/components/swiper";
import SplashScreen from "@/components/splashScreen";
import Layout from "@/components/layout/layout";

import customCabinets from "@/public/cabinets/Custom Slide.jpg";
import foreverCabinets from "@/public/cabinets/Forevermark Slide.jpg";
import jnkCabinets from "@/public/cabinets/J_K Slide.jpg";
import usCabinet from "@/public/cabinets/US CABINET Slide.jpg";

import Kitchen1 from "@/public/cards/Slider/Feher_Kitchen.jpg";
import Kitchen2 from "@/public/cards/Slider/Keire_Bathroom.jpg";
import Kitchen3 from "@/public/cards/Slider/mod6_carousel_2.jpg";
import Kitchen4 from "@/public/cards/Slider/Riggen_Bathroom.jpg";

import BerezaPromo2 from "@/public/Splash/BerezaPromo2.png";
import Link from "next/link";

export default function How() {
  const swiper = [
    Kitchen1,
    Kitchen2,
    Kitchen3,
    Kitchen4,
    Kitchen1,
    Kitchen2,
    Kitchen3,
    Kitchen4,
  ];

  return (
    <Layout>
      <SplashScreen />
      <main className="bg-how">
        <section className="relative">
          <Image src={BerezaPromo2} alt={""} />

          <div className="absolute bottom-[22rem] left-48 flex flex-col gap-3 items-center">
            <button className="bg-color4 rounded-lg text-white w-[200px] h-[60px]">
              Get Estimate
            </button>
            <p className="w-[485px] text-center">
              Explore our IN STOCK cabinet line! Bereza Cabinets, where Modern
              Design Meets Unmatched Functionality. Elevate your space with
              sleek lines and premium finishes, creating a harmonious blend of
              style and practicality. Redefine your Kitchen today with Bereza
              Cabinets!
            </p>
          </div>
        </section>

        <section className="px-9 py-10">
          <div className="flex flex-wrap md:flex-nowrap md:justify-around overflow-x-auto">
            <div className="bg-white w-[325px] h-[380px] rounded-2xl p-4 flex flex-col gap-3 hover:border border-graydot">
              <div className="flex justify-center">
                <Image
                  className="rounded-lg flex justify-center"
                  height={240}
                  src={foreverCabinets}
                  alt={""}
                />
              </div>
              <p className="text-3xl">Forever Cabinets</p>
              <div className="flex gap-2.5">
                <p className="py-1 px-2 text-sm bg-footercolor rounded">
                  Contemporary
                </p>
                <p className="py-1 px-2 text-sm bg-footercolor rounded">Cool</p>
              </div>
            </div>

            <div className="bg-white w-[325px] h-[380px] rounded-2xl p-4 flex flex-col gap-3 hover:border border-graydot">
              <div className="flex justify-center">
                <Image
                  className="rounded-lg flex justify-center"
                  height={240}
                  src={jnkCabinets}
                  alt={""}
                />
              </div>
              <p className="text-3xl">J&K Cabinets</p>
              <div className="flex gap-2.5">
                <p className="py-1 px-2 text-sm bg-footercolor rounded">
                  Contemporary
                </p>
                <p className="py-1 px-2 text-sm bg-footercolor rounded">Cool</p>
              </div>
            </div>

            <div className="bg-white w-[325px] h-[380px] rounded-2xl p-4 flex flex-col gap-3 hover:border border-graydot">
              <div className="flex justify-center">
                <Image
                  className="rounded-lg flex justify-center"
                  height={240}
                  src={usCabinet}
                  alt={""}
                />
              </div>
              <p className="text-3xl">U.S Cabinets</p>
              <div className="flex gap-2.5">
                <p className="py-1 px-2 text-sm bg-footercolor rounded">
                  Contemporary
                </p>
                <p className="py-1 px-2 text-sm bg-footercolor rounded">Cool</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-9">
          <div className="flex justify-between flex-grow pb-10 pt-16">
            <h4 className="text-4xl">Building Better around Central Ohio</h4>
            <div className="flex items-center gap-2">
              <Link href="/gallery">
                <button className="bg-color4 text-white px-6 py-3 rounded-lg h-16">
                  Explore Project Gallery
                </button>
              </Link>
            </div>
          </div>
          <div className="pb-10">
            <Slider
              images={IMAGES}
              state={STATES}
              descriptions={DESCRIPTIONS}
              showLink={false}
            />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-4 px-9">
          <div className="col-span-2 flex justify-between items-center">
            <div>
              <h2 className="text-4xl text-left">
                Trusted by homeowners around Ohio
              </h2>
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
          <div className="flex justify-start gap-4">
            <div className="flex items-center flex-col gap-1">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 108 35"
                className="w-16 h-5"
                fill="#6b6b6b"
              >
                <path d="M13.2 0h1c3.3.1 6.6 1.4 8.9 3.8l-2.6 2.6c-1.3-1.2-2.9-2.1-4.6-2.4-2.6-.5-5.3-.1-7.4 1.4-2.3 1.5-3.9 4.1-4.3 6.9-.4 2.7.3 5.5 2.1 7.7 1.7 2.1 4.3 3.4 7 3.5 2.5.1 5.1-.6 7-2.4 1.4-1.2 2.1-3.1 2.3-5h-9v-3.7h12.6c.6 4-.3 8.5-3.3 11.3-2 2-4.8 3.2-7.6 3.4-2.8.3-5.6-.3-8-1.6C4.4 23.9 2 21.3.9 18.2c-1.1-2.9-1.1-6.1-.1-9 .9-2.6 2.7-4.9 4.9-6.6C7.9 1 10.5.2 13.2 0zM85.3.9h3.8v25.7h-3.8c.1-8.5 0-17.1 0-25.7zM34.8 9.8c2.4-.4 4.9.1 6.9 1.5 1.8 1.3 3 3.2 3.4 5.4.5 2.5-.1 5.2-1.7 7.2-1.7 2.2-4.6 3.4-7.4 3.2-2.6-.1-5-1.4-6.5-3.5-1.7-2.3-2.1-5.5-1.2-8.2.9-2.8 3.5-5 6.5-5.6zm.6 3.5c-1 .3-1.9.8-2.5 1.6-1.7 2.1-1.6 5.5.3 7.4 1.1 1.1 2.8 1.6 4.3 1.3 1.4-.3 2.7-1.2 3.3-2.5 1.2-2.1.8-5.1-1-6.8-1.2-1-2.9-1.4-4.4-1zM53.9 9.8c2.7-.5 5.7.2 7.7 2.1 3.3 3 3.7 8.5.8 11.9-1.7 2.2-4.5 3.3-7.2 3.2-2.6-.1-5.2-1.4-6.7-3.5-1.7-2.4-2.1-5.6-1.1-8.3 1-2.7 3.5-4.9 6.5-5.4zm.5 3.5c-1 .3-1.9.8-2.5 1.6-1.7 2.1-1.7 5.4.2 7.4 1.1 1.2 2.8 1.7 4.4 1.4 1.4-.3 2.7-1.2 3.3-2.5 1.2-2.2.8-5.1-1-6.8-1.1-1.1-2.8-1.5-4.4-1.1zM70.1 10.9c2.1-1.3 4.8-1.7 7.1-.5.7.3 1.3.8 1.8 1.3v-1.5h3.6v15.9c0 2.4-.6 4.9-2.4 6.7-1.9 1.9-4.8 2.5-7.4 2.1-2.8-.4-5.2-2.4-6.3-5 1.1-.5 2.2-.9 3.3-1.4.6 1.5 1.9 2.7 3.5 3 1.6.3 3.5-.1 4.5-1.4 1.1-1.4 1.1-3.2 1.1-4.9-.8.8-1.8 1.5-2.9 1.8-2.5.7-5.3-.2-7.2-1.9-1.9-1.7-3.1-4.3-3-6.9.1-3 1.8-5.8 4.3-7.3zm3.7 2.3c-1.1.2-2.1.8-2.8 1.6-1.7 2-1.7 5.2 0 7.2 1 1.2 2.5 1.8 4 1.7 1.4-.1 2.7-1 3.4-2.3 1.2-2.1 1-5-.6-6.8-.9-1.1-2.5-1.7-4-1.4zM93.8 11.8c2.2-2 5.5-2.7 8.3-1.6 2.6 1 4.3 3.5 5.1 6.1l-11.7 4.8c.5 1 1.4 2 2.5 2.3 1.6.6 3.4.4 4.7-.7.5-.4.9-.9 1.3-1.4l3 2c-1.4 2.1-3.8 3.6-6.3 3.8-2.8.3-5.8-.7-7.6-2.9-2.9-3.5-2.6-9.3.7-12.4zm1.9 3.3c-.6.9-.9 2-.8 3l7.8-3.3c-.4-1-1.5-1.6-2.5-1.8-1.7-.2-3.5.7-4.5 2.1z"></path>
              </svg>
              <p className="text-xs text-modaltext">4.6 STARS (90)</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 385"
                className="w-14 h-5"
                fill="#6b6b6b"
              >
                <path d="M806.5 227.2l16.3-3.8c.3-.1.9-.2 1.6-.4 4.5-1.2 8.3-4.1 10.7-8.1 2.4-4 3.2-8.7 2.1-13.3 0-.1 0-.2-.1-.3-.5-2.2-1.5-4.2-2.8-6.1-1.8-2.3-4.1-4.2-6.6-5.7-3-1.7-6.2-3.2-9.4-4.4l-17.8-6.5c-10-3.7-20-7.3-30.1-10.9-6.6-2.3-12.1-4.4-16.9-5.9-.9-.3-1.9-.6-2.7-.8-5.8-1.8-9.9-2.5-13.4-2.6-2.3-.1-4.6.3-6.8 1.2-2.2 1-4.2 2.4-5.9 4.2-.8.9-1.6 1.9-2.3 2.9-.7 1-1.3 2.1-1.8 3.2-.6 1.2-1.1 2.4-1.6 3.6-3.3 9.8-5 20.1-4.9 30.4.1 9.3.3 21.3 5.4 29.4 1.2 2.1 2.9 3.9 4.9 5.3 3.7 2.5 7.4 2.9 11.2 3.1 5.7.4 11.3-1 16.9-2.3l54-12.2zM988 140.8c-4.4-9.3-10.4-17.8-17.7-25.2-.9-.9-1.9-1.8-3-2.6-1-.7-2-1.4-3.1-2.1-1.1-.6-2.2-1.1-3.3-1.6-2.3-.9-4.7-1.3-7.1-1.2-2.3.1-4.6.8-6.6 1.9-3.1 1.5-6.5 4-10.9 8.2-.6.6-1.4 1.3-2.1 2-3.7 3.5-7.8 7.7-12.7 12.7-7.5 7.6-15 15.3-22.3 23L886 169.6c-2.4 2.5-4.6 5.2-6.6 8.1-1.7 2.4-2.9 5.2-3.5 8-.4 2.2-.3 4.5.2 6.7 0 .1 0 .2.1.3 1 4.5 3.8 8.5 7.7 11 3.9 2.5 8.6 3.5 13.2 2.6.7-.1 1.3-.2 1.6-.3l70.3-16.3c5.5-1.3 11.2-2.5 16.1-5.3 3.3-1.9 6.5-3.9 8.7-7.7 1.2-2.1 1.9-4.5 2.1-6.9 1.1-9.7-3.9-20.6-7.9-29zM862.1 170.4c5.1-6.4 5.1-15.9 5.5-23.8 1.5-26.1 3.1-52.1 4.4-78.2.5-9.9 1.6-19.6 1-29.6-.5-8.2-.5-17.6-5.7-24.4-9.2-11.9-28.7-10.9-42-9.1-4.1.6-8.2 1.3-12.2 2.3s-8.1 2-12 3.3c-12.8 4.2-30.7 11.9-33.8 26.6-1.7 8.3 2.3 16.8 5.5 24.4 3.8 9.2 9 17.5 13.8 26.2 12.6 22.9 25.4 45.6 38.2 68.4 3.8 6.8 8 15.4 15.4 18.9l1.5.6c3.3 1.3 6.9 1.5 10.4.7.2 0 .4-.1.6-.1 3.2-.9 6.1-2.6 8.3-5 .3-.4.7-.8 1.1-1.2zM856 240.2c-2-2.8-4.8-4.9-8.1-6-3.3-1.1-6.8-1.1-10.1-.1-.8.3-1.5.6-2.2.9-1.1.6-2.2 1.2-3.2 2-2.9 2.2-5.4 5-7.6 7.8-.6.7-1.1 1.7-1.8 2.3l-11.3 15.6c-6.4 8.7-12.7 17.5-19 26.3-4.1 5.7-7.6 10.6-10.4 14.9-.5.8-1.1 1.7-1.6 2.4-3.4 5.2-5.2 9-6.2 12.3-.7 2.2-1 4.6-.7 6.9.3 2.4 1.1 4.8 2.4 6.9.7 1.1 1.4 2.1 2.2 3 .8.9 1.7 1.8 2.6 2.7 1 .9 2 1.8 3.1 2.5 7.8 5.4 16.4 9.3 25.4 12.4 7.5 2.5 15.3 4 23.1 4.4 1.3.1 2.7 0 4-.1 1.2-.1 2.5-.3 3.7-.5 1.2-.3 2.4-.6 3.6-1 2.3-.9 4.4-2.2 6.1-3.9 1.7-1.7 2.9-3.7 3.7-5.9 1.3-3.3 2.2-7.4 2.7-13.5 0-.9.2-1.9.3-2.9.4-5.1.7-11.1 1-18.1.6-10.8 1-21.6 1.3-32.4l.7-19.2c.2-4.4 0-9.3-1.2-13.7-.5-2.2-1.3-4.2-2.5-6zM983.7 270.2c-2.4-2.6-5.7-5.2-11-8.4-.8-.4-1.7-1-2.5-1.5-4.4-2.6-9.7-5.4-15.9-8.8-9.5-5.2-19-10.3-28.6-15.3l-17-9c-.9-.3-1.8-.9-2.6-1.3-3.3-1.6-6.7-3-10.3-3.7-1.2-.2-2.5-.4-3.7-.4-.8 0-1.6 0-2.4.1-3.4.5-6.5 2.1-9 4.5-2.4 2.4-4.1 5.5-4.6 8.9-.3 2.2-.2 4.3.2 6.5.8 4.5 2.8 9 4.9 12.9l9.1 17c5 9.6 10.1 19.1 15.4 28.6 3.4 6.2 6.2 11.5 8.8 15.9.5.8 1.1 1.7 1.5 2.5 3.2 5.3 5.8 8.6 8.4 11 1.7 1.6 3.7 2.9 5.9 3.6 2.3.8 4.8 1 7.2.8 1.2-.1 2.5-.4 3.7-.6 1.2-.3 2.4-.7 3.5-1.2 1.3-.5 2.5-1 3.6-1.7 6.9-3.9 13.2-8.6 18.9-14.1 6.8-6.7 12.7-13.9 17.4-22.2.6-1.2 1.2-2.4 1.7-3.7.4-1.2.8-2.3 1.1-3.5.3-1.2.5-2.5.6-3.7.2-2.4-.1-4.9-.8-7.2-.6-2.2-1.9-4.3-3.5-6z"></path>
                <path d="M400 105.2c0-14 11.4-25.4 25.1-25.4 13.6 0 24.5 11.4 25.1 25.6v198.3c0 14-11.4 25.4-25.1 25.4-14.1 0-25.1-11.4-25.1-25.4V105.2zm-23.3 122.5c-.2 3.9-1.2 11.2-6.3 16.5-5.5 5.7-13 7.1-17.3 7.1-18 .1-35.9.1-53.9.2-18 0-35.9.1-53.9.2 1.6 4.9 4.7 12.4 11.8 19.3 4.3 4.1 8.4 6.5 10.2 7.5 2.2 1.4 9.6 5.3 18.9 5.3 9.8 0 18.5-3.2 26.9-7.5l.7-.4c5.9-3 11.9-6.2 18.3-7.3 6.3-1 13 .2 17.9 4.5 5.9 5.1 8.2 12.6 6.1 20.3-2.6 8.7-9.8 16.1-17.5 20.7-4.3 2.6-9 4.7-13.7 6.5-6.1 2.2-12.4 3.7-18.7 4.7-6.3 1-12.8 1.4-19.2 1.2-3.1 0-6.5 0-9.8-.4-3.5-.4-7.1-1.2-10.4-2-5.5-1.2-10.6-3-15.7-5.3-4.9-2.2-9.8-4.9-14.3-8.1-4.5-3.2-8.6-6.9-12.6-10.8-3.7-3.9-7.3-8.3-10.4-13-10.6-16.1-15.5-36-14.5-55.3.8-18.9 7.1-37.8 18.5-53.2 1.2-1.9 2.7-3.6 4-5.1.6-.7 1.2-1.3 1.7-2 14.1-17.2 32.9-22.6 40.6-24.9l.4-.1c22.2-6.3 40.6-2.2 48.1 0 3.7 1 24.7 7.5 41 25 .8.8 2.9 3.3 5.7 7.1 10.3 14.1 13.9 27.2 15.1 31.6v.1c1.1 4.4 2.3 10.3 2.3 17.6zm-115.3-32.5c-11.4 9.3-14.5 21.1-15.3 24.8h85.6c-.8-3.5-4.1-15.6-15.5-24.8-11.6-9.3-23.8-9.8-27.5-9.8-3.8-.1-15.9.5-27.3 9.8zM587 143c-22.4 0-42.8 10-57.3 26.4v-.6c-.7-13.2-11.7-23.8-25-23.8-13.9 0-25.1 11.2-25.1 25.2v189.2c0 14 11.2 25.2 25.1 25.2 13.9 0 25.1-11.2 25.1-25.2V300.3c14.5 16.1 34.8 26.4 57.3 26.4 45 0 81.5-40.8 81.5-91.6-.1-50.7-36.6-92.1-81.6-92.1zm-11 142.6c-25.5 0-46.3-22.3-46.3-50 0-28 20.6-50.2 46.3-50.2 25.5 0 46.3 22.3 46.3 50.2-.2 27.7-20.8 50-46.3 50zm-414.6-37.3l-8.2 18.1c-3.7 7.9-7.5 16-11 24-1.1 2.5-2.3 5-3.4 7.6-15.7 34.9-34.3 76.4-74.9 85.2-19.6 4.3-49.3-1.6-60.3-20.1-11-18.7 5.3-40.2 26.3-35.2 3.3.7 6.6 2.4 9.9 4 5.5 2.7 11 5.5 17 4.3 5.7-1 9.2-5.1 13.7-10.4 6.3-7.3 9-15 10.2-19.5-.1-.2-.2-.4-.3-.7-.1-.2-.2-.5-.3-.7-5.1-9.5-9.6-18.1-13.3-25.2-2.4-4.6-4.5-8.7-6.3-12-3.7-6.9-6.4-12.2-8.6-16.2-6.3-11.9-7.3-13.9-10.1-19-6.1-11.6-12.6-22.8-19.2-34.1-7.3-12.2-14.7-25.8-8.6-40.2 4.9-11.6 17.5-17.5 29.5-13.8 12.6 3.8 18.2 15.9 23.5 27.1.9 2 1.9 4 2.8 6 8.4 16.7 16.7 33.5 24.9 50.2.7 1.7 1.8 3.9 3.2 6.7 1.2 2.5 2.6 5.3 4.1 8.5.8 1.6 1.5 3.2 2.2 4.5.9 1.8 1.6 3.3 2.1 4.5 3.8-9.6 7.7-19.1 11.6-28.6 3.9-9.5 7.8-19 11.6-28.6.1-.5 1-2.6 2.4-5.6 1.2-2.6 2.7-5.9 4.3-9.7.5-1.3 1.1-2.6 1.7-4C143 163 149.1 148 162.7 144c9.8-3 20.8 1 26.5 9.3 2.9 4.1 4.1 8.9 4.3 13.6.2 10.5-4.9 21.7-9.2 31.3-1.1 2.3-2.1 4.6-3 6.7 0 .1-.2.5-.5 1.2-1.2 2.7-4.5 10-10.1 22.1-2 4.3-4 8.6-5.9 13-1.2 2.3-2.3 4.7-3.4 7.1z"></path>
                <path d="M687.7 310.2h1.8c.9 0 1.6-.2 2.2-.7.5-.5.8-1.1.8-1.8 0-.8-.2-1.4-.7-1.8-.5-.4-1.2-.6-2.3-.6h-1.8v4.9zm7.3-2.6c0 .9-.2 1.7-.7 2.4-.5.7-1.1 1.2-2 1.5l4 6.7h-2.8l-3.5-6h-2.3v6h-2.5v-15h4.4c1.9 0 3.2.4 4.1 1.1.9.7 1.3 1.8 1.3 3.3zm-17.8 3.1c0-2.2.6-4.4 1.7-6.3 1.1-2 2.7-3.5 4.6-4.7 2-1.1 4.1-1.7 6.4-1.7 2.2 0 4.4.6 6.3 1.7 2 1.1 3.5 2.7 4.7 4.6 1.1 2 1.7 4.1 1.7 6.4 0 2.2-.5 4.3-1.6 6.2-1.1 1.9-2.6 3.5-4.6 4.7-2 1.2-4.1 1.8-6.5 1.8-2.3 0-4.5-.6-6.4-1.7-2-1.2-3.5-2.7-4.6-4.7-1.1-2-1.7-4.1-1.7-6.3zm1.8 0c0 1.9.5 3.8 1.5 5.5 1 1.7 2.3 3 4 4 1.7 1 3.5 1.4 5.4 1.4 2 0 3.8-.5 5.4-1.5 1.7-1 3-2.3 4-4 1-1.7 1.5-3.5 1.5-5.5s-.5-3.8-1.5-5.4c-1-1.7-2.3-3-4-4-1.7-1-3.5-1.5-5.5-1.5s-3.8.5-5.4 1.5c-1.7 1-3 2.3-4 4-.9 1.7-1.4 3.5-1.4 5.5z"></path>
              </svg>
              <p className="text-xs text-modaltext">4.7 STARS (120)</p>
            </div>
          </div>
        </section>

        <section className="px-9 pt-10">
          <div className="flex justify-between">
            <ReviewCard
              imageSrc={Kitchen1}
              name="Tina L."
              stars={5}
              description="“Everything was seamless when I worked with Block. I was actually kind of shocked! I really appreciated being able to save time and not make multiple trips to the hardware store.”"
            />
            <ReviewCard
              imageSrc={Kitchen2}
              name="John D."
              stars={5}
              description="“Compared to what we’ve done before, the build was so much more seamless and communicative. Our contractor was amazing to work with, was extremely responsive and thoughtful throughout the whole process.”"
            />
            <ReviewCard
              imageSrc={Kitchen3}
              name="Anna S."
              stars={5}
              description="“The quality of the work is so incredible, the look is so incredible. I love it. I’m a first time homeowner and renovator, so a big part of the allure of 2Go was having someone experienced help me.”"
            />
          </div>
        </section>

        <section className="px-9 pt-20">
          <Swiper images={swiper} />
        </section>
      </main>
    </Layout>
  );
}
