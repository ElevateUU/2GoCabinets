import Image from "next/image";
import React from "react";

import { IMAGES, STATES, DESCRIPTIONS, CARDS_HOW } from "@/constants";

import styles from "@/styles/Cards.module.css";

import Slider from "@/components/slider";
import Layout from "@/components/layout/layout";
import CabSelector from "@/components/cabselctor";

import Couple from "@/public/process/homeowner.webp";

import Homeowner from "@/public/homeowner.webp";

import Kitchen1 from "@/public/cards/Slider/Feher_Kitchen.jpg";
import Kitchen2 from "@/public/cards/Slider/Keire_Bathroom.jpg";
import Kitchen3 from "@/public/cards/Slider/mod6_carousel_2.jpg";
import Kitchen4 from "@/public/cards/Slider/Riggen_Bathroom.jpg";


import card1 from "@/public/cards/card1.webp";
import card2 from "@/public/cards/card2.webp";
import card3 from "@/public/cards/card3.webp";

export default function How() {

  const cards = CARDS_HOW

  return (
    <Layout>
      <main className="bg-how">
        <section className="mt-24 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-9">
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="font-normal text-color4 text-8xl mb-4">
              FAST <br /> AFFORDABLE <br /> QUALITY
            </h2>
          </div>
          <div className="">
            <Image
              className="rounded-2xl"
              src={Couple}
              alt="Renovation"
              width={700}
              height={450}
            />
          </div>
        </section>

        <section className="p-10 px-9 ">
          <div>
            <div className="flex flex-start border-t-[1px] border-sembro">
              <h4 className="mb-4 text-color4 text-center text-xl py-16">
                <p className="font-bold text-3xl">
                  What sets us apart from the rest of the big time competitive
                  brands?
                </p>
                Our process allows us to expedite delivery of your product,
                saving weeks if not months of time you could be enjoying your
                new remodel! Quality is our main priority. We guarantee that our
                quality will match and/or exceed the big names of the industry.
                We do all this at a fraction of the cost! Don’t believe us?
                We’ll come to you with our mobile showroom and give you a quote
                the same day. Lets get started.
              </h4>
            </div>
            <div style={{ paddingBottom: `${Math.max(cards.length, 1)}em` }}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${styles.card} grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-9 border-t-[1px] border-sembro py-16`}
                  style={{ transform: `translateY(${index}em)` }}
                >
                  <div className="flex flex-col gap-7 items-start">
                    <div className="flex flex-row gap-7 items-center">
                      <div className="bg-color4 w-16 h-16 rounded-full text-center flex items-center justify-center">
                        <h4 className="text-center text-3xl font-light text-white ">
                          {index + 1}
                        </h4>
                      </div>
                      <p className="text-3xl">{card.title}</p>
                    </div>
                    <p className="text-xl font-normal text-gray max-w-[550px]">
                      {card.description}
                    </p>
                  </div>

                  <div>
                    <img
                      className="rounded"
                      alt={card.title}
                      src={card.image}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t-[1px] border-sembro pb-10">
          <CabSelector />
        </section>

        <section className="p-10 px-9 border-t-[1px] border-b-[1px] border-sembro">
          <h4 className="mb-4 text-color4 text-left text-4xl py-16 max-w-[777px]">
            Ask us about our other options!
          </h4>

          <div className="flex overflow-x-auto space-x-4">
            <div className="bg-white h-[480px] w-[620px] flex-shrink-0 flex flex-col justify-between text-white rounded-2xl p-6 gap-7">
              <div>
                <h3 className="text-color4 text-2xl">Cabinet Hardware</h3>
                <p className="text-gray font-roboto-mono text-lg tracking-wide font-light">
                  Bring your full vision to life by partnering with a
                  professional designer.
                </p>
              </div>
              <div className="flex justify-end">
                <Image src={card1} alt={""} width={140} height={140} />
              </div>
            </div>
            <div className="bg-white h-[480px] w-[620px] flex-shrink-0 flex flex-col justify-between text-white rounded-2xl p-6 gap-7">
              <div>
                <h3 className="text-color4 text-2xl">Back Splash</h3>
                <p className="text-gray font-roboto-mono text-lg tracking-wide font-light">
                  Have your material selections purchased, stored and delivered
                  in time for break ground.
                </p>
              </div>
              <div className="flex justify-end">
                <Image src={card2} alt={""} width={140} height={140} />
              </div>
            </div>
            <div className="bg-white h-[480px] w-[620px] flex-shrink-0 flex flex-col justify-between text-white rounded-2xl p-6 gap-7">
              <div>
                <h3 className="text-color4 text-2xl">
                Sink Hardware
                </h3>
                <p className="text-gray font-roboto-mono text-lg tracking-wide font-light">
                  Easily compile the documents needed for your renovation by
                  collaborating with a permitting and approvals specialist.
                </p>
              </div>
              <div className="flex justify-end">
                <Image src={card3} alt={""} width={140} height={140} />
              </div>
            </div>
            <div className="bg-white h-[480px] w-[620px] flex-shrink-0 flex flex-col justify-between text-white rounded-2xl p-6 gap-7">
              <div>
                <h3 className="text-color4 text-2xl">
                Appliances
                </h3>
                <p className="text-gray font-roboto-mono text-lg tracking-wide font-light">
                  Easily compile the documents needed for your renovation by
                  collaborating with a permitting and approvals specialist.
                </p>
              </div>
              <div className="flex justify-end">
                <Image src={card3} alt={""} width={140} height={140} />
              </div>
            </div>
          </div>
        </section>

        <section className="px-9">
          <div className="flex justify-between flex-grow pb-10 pt-16">
            <h4 className="text-4xl">
              1000+ rooms renovated on the 2Go platform
            </h4>
            <div className="flex items-center gap-2">
              <a href="" className="underline text-color5">
                Explore Project Gallery
              </a>
              <button className="rounded-full border-color5 border w-8 h-8 flex items-center justify-center">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 .682L6.59 2.106l5.58 5.644H0v2.019h12.17l-5.59 5.634L8 16.836l8-8.077L8 .682z"
                    fill="#97A8C7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="pb-10">
            <Slider
              images={IMAGES}
              state={STATES}
              descriptions={DESCRIPTIONS}
              showLink={true}
            />
          </div>
        </section>

        <section>
          <div
            className="relative bg-fixed bg-center bg-no-repeat bg-cover h-screen "
            style={{ backgroundImage: "url('/GridBg.jpg')" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-baseline">
                <p className="text-color4 text-400">5</p>
                <p className="text-color4 text-6xl">/5</p>
              </div>
              <div className="py-10 px-6 max-w-[600px] text-center">
                <p className="text-color4 text-5rem font-roboto-mono">
                  Average rating in five star reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-9 py-10 bg-how">
          <div className="flex flex-row">
            <div className="flex flex-col justify-center gap-6">
              <h2 className="text-color4 text-4xl">Build with the best</h2>
              <p className="text-xl font-roboto-mono w-[695px] text-gray">
                Each contractor in the Block Network has been vetted for
                craftsmanship, boasts a track record of successful projects, and
                possesses a collaborative approach to construction.
              </p>
              <button className="bg-color4 w-40 h-14 text-white rounded-lg text-sm hover:bg-color4darker">
                Get Your Estimate
              </button>
            </div>
            <div className="relative h-[700px] w-full rounded-2xl overflow-hidden">
              <Image
                src={Homeowner}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </section>

        <section></section>
      </main>
    </Layout>
  );
}
