import React from "react";
import Image from "next/image";

import Car from "@/public/Car.png";
import Money from "@/public/Money.png";
import Ruler from "@/public/Ruler.png";

export const process = () => {
  return (
    <div className="pt-48">
      <p className="font-normal text-xl sm:text-2xl text-center pb-10">
        Our process is straight forward.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center pb-10">
        <div className="bg-white my-5 sm:my-0 sm:mr-10 shadow-md hover:shadow-lg hover:transition duration-300 w-64 h-48 box">
          <div className="icon">
            <Image src={Car} alt="" className="w-[4.5rem] h-14 mb-2" />
            <p className="font-semibold text-lg text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis">
              Quick Delivery
            </p>
          </div>
          <div className="content">
            <p className="m-auto w-[80%] text-center">
              Fast means no longer waiting months to get the materials and labor
              that you need. We pride ourselves on how quickly we could deliver
              our product!
            </p>
          </div>
        </div>

        <div className="bg-white my-5 sm:my-0 sm:mr-10 shadow-md hover:shadow-lg hover:transition duration-300 w-64 h-48 box">
          <div className="icon">
            <Image src={Money} alt="" className="w-14 h-14 mb-2" />
            <p className="font-semibold text-lg text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis">
              Affordable
            </p>
          </div>
          <div className="content">
            <p className="m-auto w-[80%] text-center">
              Speed means nothing without the Quality of work. Our reputation is
              backed by decades of experience and assurance your project will be
              done right!
            </p>
          </div>
        </div>

        <div className="bg-white my-5 sm:my-0 sm:mr-10 shadow-md hover:shadow-lg hover:transition duration-300 w-64 h-48 box">
          <div className="icon">
            <Image src={Ruler} alt="" className="w-14 h-14 mb-2" />
            <p className="font-semibold text-lg text-center whitespace-nowrap overflow-hidden text-overflow-ellipsis">
              Expert Craftsmanship
            </p>
          </div>
          <div className="content">
            <p className="m-auto w-[80%] text-center">
              Affordable is plain and simple! Our process makes our pricing
              super competitive. This means you get the remodel you’ve always
              dreamed about at a lower cost!
            </p>
          </div>
        </div>
      </div>

      <p className="w-full px-4 text-sm sm:w-[49rem] sm:text-base text-center mx-auto font-normal">
        What sets us apart from the rest of the big time competitive brands? <br />
        Don’t wait around for months with supply chain issues and labor
        shortages! Our process allows us to expedite delivery of your product,
        saving weeks if not months of time you could be enjoying your new
        remodel! With that, Quality is our main priority. We guarantee that our
        quality will match and/or exceed the big names of the industry. We do
        all this at a fraction of the cost! Don’t believe us? We’ll come to you
        with our mobile showroom and give you a quote the same day. Lets get
        started.
      </p>
    </div>
  );
};
export default process;

