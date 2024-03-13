import Image from "next/image";
import React from "react";

import { IMAGES, STATES, DESCRIPTIONS, CARDS } from "@/constants";

import Slider from "@/components/slider";
import ReviewCard from "@/components/reviewbox";
import Swiper from "@/components/swiper";
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
      <main className="bg-how">
        <section className="px-9 pt-52 pb-10">
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
