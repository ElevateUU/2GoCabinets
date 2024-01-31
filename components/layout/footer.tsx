import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/Logos/Logo.png";

import { SOCIAL_MEDIA_ICONS } from "@/constants";
import { NAV_POLICY } from "@/constants";

import { NAV_LINKS } from "@/constants";

const footer = () => {
  return (
    <footer className="bg-footercolor border-t border-color5 px-4 lg:px-9">
      <div className="flex flex-col lg:flex-row justify-between pb-6 lg:pb-14">
        <div className="flex flex-col items-center p-3 lg:p-0">
          <Link href="/">
              <Image src={Logo} width={300} alt="" className="pr-8 pt-8" />
          </Link>
          <p className="max-w-[550px] pt-8 font-light text-xl mt-4 text-center lg:mt-0">
            Simplify the chaos and cost of construction by accessing vetted
            contractors, digital tools, and range of optional support
            packages—all in one place.
          </p>
        </div>

        <div className="p-3 flex flex-col lg:flex-row justify-between w-full lg:w-[600px] mt-4 lg:mt-0">
          <nav className="flex flex-row flex-wrap gap-4 justify-center lg:flex-col">
            {NAV_LINKS.map((link, index) => (
              <Link key={index} className="text-color4" href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-4 mt-4 lg:mt-0">
            <div className="flex gap-3">
              {SOCIAL_MEDIA_ICONS.map((icon) => (
                <Link
                  className="flex items-center justify-center px-2 bg-icons rounded-full w-8 h-8"
                  href={icon.href}
                  key={icon.name}
                >
                  <Image
                    src={icon.src}
                    width={20}
                    height={20}
                    alt={`${icon.name} Icon`}
                    loading="lazy"
                  />
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xs text-gray">Email</p>
              <Link href={""}>
                <p className="text-color4">info@2gocabinets.com</p>
              </Link>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xs text-gray">Phone</p>
              <Link href={""}>
                <p className="text-color4">(380) 222-2085</p>
              </Link>
            </div>
            {/* <form action="" className="mt-4 lg:mt-0">
              <label htmlFor="">
                <span className="text-xs text-gray">
                  Sign up to our newsletter
                </span>
                <span>*</span>
              </label>
              <div className="flex flex-col lg:flex-row gap-3 align-center mt-2">
                <input
                  className="bg-transparent py-3 text-gray border-b border-gray focus:outline-none w-full"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="bg-borderlight rounded-lg py-3 px-6 mt-3 lg:mt-0">
                  Sign Up
                </button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-9 py-9 border-t border-color5 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-xs mb-4 lg:mb-0">© 2GoCabinets 2023</div>
        <div className="flex gap-3 justify-center">
          {NAV_POLICY.map((link, index) => (
            <Link key={index} className="text-xs" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default footer;
