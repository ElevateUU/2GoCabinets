import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout/layout";

import { IMAGES, STATES, DESCRIPTIONS, CARDS } from "@/constants";

import MyCarousel from "@/components/carousel";
import CabSelector from "@/components/cabselctor";
import ReviewCard from "@/components/reviewbox";
import Slider from "@/components/slider";
import Process from "@/components/procces";

import styles from "@/styles/Cards.module.css";

import Arrow from "@/public/assets/arrow.svg";
import Google from "@/public/assets/google.svg";
import Yelp from "@/public/assets/yelp.svg";
import Done from "@/public/assets/done.svg";

import Kitchen1 from "@/public/cards/Slider/Feher_Kitchen.jpg"
import Kitchen2 from "@/public/cards/Slider/Keire_Bathroom.jpg";
import Kitchen3 from "@/public/cards/Slider/mod6_carousel_2.jpg";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const cards = CARDS

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-how">
      <Head>
        <title>2GoCabinets</title>
        <meta
          name="description"
          content="2GoCabinets - Quality Kitchen Renovations in Central Ohio. Over 50 kitchens renovated with our system. Trusted by homeowners."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/BuchFavicon.ico" />
      </Head>
      <Layout>
        <section id="home">
          <MyCarousel />
        </section>

        <section className="px-9">
          <div className="flex flex-col items-center md:items-start md:flex-row justify-between flex-grow pb-10 pt-16">
            <h4 className="text-4xl text-center md:text-left">
              50+ Kitchens Renovated with our 2Go System <br />
              <p className="text-xl">See what customers have to say!</p>
            </h4>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <a href="" className="underline text-color5">
                Explore Project Gallery
              </a>
              <button className="rounded-full border-color5 border w-8 h-8 flex items-center justify-center">
                <Image src={Arrow} alt={""} />
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

        <article className="flex flex-col items-center justify-center md:grid md:grid-cols-2 gap-4 px-9">
          <header className="col-span-2 flex flex-col justify-between items-center w-full md:flex-row">
            <h2 className="text-2xl text-center md:text-4xl">
              Trusted by homeowners of Central Ohio
            </h2>
            <nav className="flex items-center gap-2">
              <a
                href="#"
                className="underline text-color5"
                aria-label="Read Homeowner Reviews"
              >
                Read Homeowner Reviews
              </a>
              <button
                className="rounded-full border-color5 border w-8 h-8 flex items-center justify-center"
                aria-label="Navigate to reviews"
              >
                <Image src={Arrow} alt="Arrow icon pointing to reviews" />
              </button>
            </nav>
          </header>

          <section className="flex justify-center gap-4 w-full md:justify-start">
            <div className="flex flex-col gap-1 items-center">
              <figure>
                <Image className="w-16 h-5" src={Google} alt="Google logo" />
                <figcaption className="text-xs text-modaltext">
                  4.6 STARS (90)
                </figcaption>
              </figure>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <figure>
                <Image className="w-14 h-5" src={Yelp} alt="Yelp logo" />
                <figcaption className="text-xs text-modaltext">
                  4.7 STARS (120)
                </figcaption>
              </figure>
            </div>
          </section>
        </article>

          <div className="px-9 pt-10 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
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

        <div className="pb-10">
          <Process />
        </div>

          <div className="p-10 px-9 ">
            <div style={{ paddingBottom: `${Math.max(cards.length, 1)}em` }}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${styles.card} grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-9 border-t-[1px] border-sembro py-16`}
                  style={{ transform: `translateY(${index}em)` }}
                >
                  <div className="flex flex-col gap-7 items-start">
                    <div className="flex flex-col sm:flex sm:flex-row gap-7 items-center">
                      <div className="bg-color4 w-16 h-16 rounded-full text-center flex items-center justify-center">
                        <h4 className="text-center text-3xl font-light text-white ">
                          {index + 1}
                        </h4>
                      </div>
                      <p className="text-center sm:text-3xl">{card.title}</p>
                    </div>
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

        <section className="py-10">
          <CabSelector />
        </section>

        <section className="px-4 md:px-9 py-6 md:py-12">
        <div className="bg-milkgray w-full md:w-full h-auto md:h-[690px] rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 md:p-0">
            <div className="flex flex-col gap-4 md:gap-7 md:pl-10">
              <div className="flex justify-center sm:flex">
                <p className="rounded p-1 text-color5 border inline-block">
                  Guarantee
                </p>
              </div>
              <p className="text-center text-2xl sm:text-4xl">
                2Go Project Protection
              </p>
              <p className="text-center sm:max-w-xs md:max-w-[580px] text-modaltext text-lg md:text-xl">
                Renovating is a risky business. 2Go makes your renovation more
                secure with guardrails to ensure your dream renovation is
                realized.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 md:pr-10 w-full md:w-[600px]">
              {[
                "Professional Designers",
                "Great Communication",
                "Contractors Licensed & Insuranced",
                "Workmanship Warranty",
                "Pride In Our Work",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-b border-borderlight py-4 md:py-7 flex flex-row justify-between"
                >
                  <p className="text-xl md:text-2xl">{item}</p>
                  <Image
                    className="w-7 md:w-9 h-7 md:h-9 mr-4 md:mr-6"
                    src={Done}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
