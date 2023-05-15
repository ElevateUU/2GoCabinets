import React from 'react';
import Image from 'next/image';

import Doors from '@/public/process/Doors.png';
import Kitchen from '@/public/process/Kitchen.png';
import Man from '@/public/process/man.png';

export const steps = () => {
  return (
    <div className="pt-20 md:pt-48">
      <div className="pb-10 md:flex flex-col md:flex-row justify-center items-center px-4">
        <Image src={Doors} width={550} alt={''} />
        <div className="md:ml-[120px] mt-4 md:mt-0">
          <p className="text-center md:text-left text-xl font-semibold pb-4">Step 01</p>
          <p className="text-center md:text-left text-2xl font-bold pb-3">
            Pick From Our Wide Selection
          </p>
          <p className="text-center md:text-left text-base md:w-[37rem]">
            We work with Top Manufacturers to bring you the best quality product
            at an affordable cost. Browse our wide selection online. Start with
            either choosing a cabinet that compliments your home and finish with
            selecting a beautiful countertop to match! Once we have have the
            dimensions of your space, you’ll be able to see exactly how your
            selections look in your Kitchen!
          </p>
        </div>
      </div>
      <div className="pb-10 md:flex flex-col justify-center md:flex-row-reverse items-center pt-20 px-4">
        <Image src={Kitchen} alt="" width={550} />
        <div className="md:mr-[120px] mt-4 md:mt-0">
          <p className="text-center md:text-left text-xl font-semibold pb-4">Step 02</p>
          <p className="text-center md:text-left text-2xl font-bold pb-3">Design Your Dream Kitchen</p>
          <p className="text-center md:text-left text-base md:w-[37rem]">
            Work with one of our expert designers to bring your vision to life.
            Our simple, yet elegant design will convert your outdated kitchen
            into a timeless staple in your home!
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center pt-20 px-4">
        <Image src={Man} alt={""} width={550} />
        <div className="md:ml-[120px] mt-4 md:mt-0">
          <p className="text-center md:text-left text-xl font-semibold pb-4">Step 03</p>
          <p className="text-center md:text-left text-2xl font-bold pb-4">Installation</p>
          <p className="text-center md:text-left text-base md:w-[37rem]">
            Once plans are finalized, our project manager will stay on top of
            work-flow to make sure we’re in and out within 10 days.
            Communication will be our main goal so that our expert craftsman
            deliver a quality service, FAST.
          </p>
        </div>
      </div>
    </div>
  );
};

export default steps;
