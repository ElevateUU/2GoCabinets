import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Modal from "@/components/modal";

import ArrowDown from "@/public/assets/arrowdown.svg"
import Logo from "@/public/Logos/Logo.png";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed flex-wrap bg-white left-0 top-0 w-full z-10 ease-in duration-300 drop-shadow-md">
      <div className="max-w-[1380px] m-auto flex items-center p-4 text-white">
        <ul className="nav-links hidden items-center gap-[16rem] sm:flex">
          <div className="flex gap-5">
            <Link href="/">
              <Image src={Logo} width={200} alt={""} className="pr-8" />
            </Link>
            <li className="p-4 text-black font-light hover:bg-lightgray hover:rounded-lg">
              <Link href="/How-it-works">How It Works</Link>
            </li>
            <div className="relative group hover:overflow-visible">
              <div className="p-4 font-light text-black cursor-pointer flex flex-row items-center gap-1 hover:bg-lightgray hover:rounded-lg">
                <Link className="" href={""}>Services</Link>
                  <Image className="transform rotate-90 w-3 h-3" src={ArrowDown} alt={""}></Image>
              </div>
              <div className="absolute flex flex-col p-4 gap-0.5 justify-center left-0 mt-1 w-64 h-28 rounded-md bg-white border border-lightgray ring-1 ring-black ring-opacity-5 overflow-hidden z-10 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200">
                <Link
                  href="/cabinets"
                  className="block font-light px-6 py-2 text-lg text-black hover:bg-lightgray hover:rounded-lg"
                >
                  Cabinets
                </Link>
                <Link
                  href="#"
                  className="block font-light px-6 py-2 text-lg text-black hover:bg-lightgray hover:rounded-lg"
                >
                  Countertops
                </Link>
              </div>
            </div>

            <li className="p-4 font-light text-black hover:bg-lightgray hover:rounded-lg">
              <Link href="/commingSoon">Reviews</Link>
            </li>
            <li className="p-4 font-light text-black hover:bg-lightgray hover:rounded-lg">
              <Link href="/commingSoon">Gallery</Link>
            </li>
            <div className="relative group hover:overflow-visible">
              <div className="p-4 font-light text-black cursor-pointer flex flex-row items-center gap-1 hover:bg-lightgray hover:rounded-lg">
                <Link className="" href={""}>Design</Link>
                <Image className="transform rotate-90 w-3 h-3" src={ArrowDown} alt={""}></Image>
              </div>
              <div className="absolute flex flex-col p-4 gap-0.5 justify-center left-0 mt-1 w-64 h-28 rounded-md bg-white border border-lightgray ring-1 ring-black ring-opacity-5 overflow-hidden z-10 opacity-0 group-hover:opacity-100 hover:opacity-100 transition-opacity duration-200">
                <Link
                  href="/commingSoon"
                  className="block px-6 font-light py-2 text-lg text-black hover:bg-lightgray hover:rounded-lg"
                >
                  Design Library
                </Link>
                <Link
                  href="/commingSoon"
                  className="block px-6 font-light py-2 text-lg text-black hover:bg-lightgray hover:rounded-lg"
                >
                  3D Kitchen Design Tool
                </Link>
              </div>
            </div>
          </div>

          <div className="flex">
            <li className="p-4  text-black transition-all hover:text-sembro">
              <Link href="/#service">Sign In</Link>
            </li>
            <div className="pl-4">
              <button
                onClick={openModal}
                className="bg-color4 w-40 h-14 rounded-lg text-sm hover:bg-color4darker"
                type="button"
              >
                Get Your Estimate
              </button>
              <Modal isOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block justify-end sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={20} className="text-black" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }
        >
          <ul className="text-black">
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#home">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/#service">Services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/commingSoon">Cabinets</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/commingSoon">Countertops</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/commingSoon">About</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl text-sembro">
              <Link href="/#contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
