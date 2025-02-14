import React from "react";
import Image from "next/image";

import Car from "@/public/Car.png";
import Money from "@/public/Money.png";
import Ruler from "@/public/Ruler.png";

export const process = () => {
  return (
    <div className="pt-24 ">
      <p className="font-normal text-base sm:text-2xl text-center pb-6">
        Our process is simple and straight forward.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center pb-8 space-y-5 sm:space-y-0 sm:space-x-8">
        <div
          className="bg-white my-5 sm:my-0 shadow-md hover:shadow-lg hover:transition duration-300 w-64 h-48 box"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="icon">
            <Image src={Car} alt="" className="w-[4.5rem] h-14 mb-2" />
            <p className="font-semibold text-lg text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis">
              Fast Installation 
            </p>
          </div>
          <div className="content px-4 flex-grow flex flex-col justify-center items-center h-full">
            <p className="text-center">
              Fast means no longer waiting months to get the materials and labor
              that you need. We strive for a quick turnaround!
            </p>
          </div>
        </div>

        <div className="bg-white sm:my-0 sm:mr-10 shadow-md hover:shadow-lg hover:transition duration-300 w-64 h-48 box">
          <div className="icon">
            <Image src={Money} alt="" className="w-14 h-14 mb-2" />
            <p className="font-semibold text-lg text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis">
              Affordable
            </p>
          </div>
          <div className="content px-4 flex items-center">
            <p className="text-center flex justify-center">
              Affordable is plain and simple! Our process makes our pricing
              super competitive. This means you get the remodel you’ve always
              dreamed about at a lower cost!
            </p>
          </div>
        </div>

        <div className="bg-white my-5 sm:my-0 sm:mr-10 shadow-md hover:shadow-lg hover:transition duration-300 w-64 h-48 box">
          <div className="icon">
            <Image src={Ruler} alt="" className="w-14 h-14 mb-2" />
            <p className="font-semibold text-lg text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis">
               Quality Craftsmanship
            </p>
          </div>
          <div className="content px-4 flex items-center">
            <p className="text-center">
              Speed means nothing without the Quality of work. Our reputation is
              backed by decades of experience and assurance your project will be
              done right!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default process;
