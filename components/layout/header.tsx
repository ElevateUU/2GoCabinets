import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Modal from "@/components/modal";
import DModal from "@/components/DModal";

import ArrowDown from "@/public/assets/arrowdown.svg";
import Logo from "@/public/Logos/Logo.png";
import { SOCIAL_MEDIA_ICONS } from "@/constants";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isDModalOpen, setDModalOpen] = useState(false);

  const openDModal = () => setDModalOpen(true);
  const closeDModal = () => setDModalOpen(false);

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
    <div className="fixed bg-white left-0 top-0 w-full z-10 ease-in duration-300">
      <div className="max-w-[1380px] mx-auto flex justify-between items-center p-4">
        <ul className="nav-links hidden items-center justify-between sm:flex">
          <div className="flex items-center gap-5">
            <Link href="/">
              <Image src={Logo} width={250} alt={""} className="pr-8" />
            </Link>
            <li className="p-4 text-black font-light hover:bg-lightgray hover:rounded-lg">
              <Link href="/How-it-works">How It Works</Link>
            </li>
            <div className="relative">
              <div
                onMouseEnter={() => setIsDropdownOpen(true)}
                className="p-4 font-light text-black cursor-pointer flex flex-row items-center gap-1 hover:bg-lightgray hover:rounded-lg relative"
              >
                <div className="flex gap-0.5 items-center">
                  <Link href="#">Services</Link>
                  <Image
                    className="transform rotate-90 w-3 h-3"
                    src={ArrowDown}
                    alt=""
                  />
                </div>

                {isDropdownOpen && (
                  <div onMouseLeave={() => setIsDropdownOpen(false)} className="absolute top-16 flex flex-col p-4 gap-0.5 justify-center left-0 mt-1 w-64 h-28 rounded-md bg-white border border-lightgray ring-1 ring-black ring-opacity-5 z-10 transition-opacity duration-200">
                    <Link
                      href=""
                      className="block font-light top-10 px-6 py-2 text-lg text-black hover:bg-lightgray hover:rounded-lg"
                    >
                      Cabinets
                    </Link>
                    <Link
                      href="/countertops"
                      className="block font-light px-6 py-2 text-lg text-black hover:bg-lightgray hover:rounded-lg"
                    >
                      Countertops
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <li className="p-4 font-light text-black hover:bg-lightgray hover:rounded-lg">
              <Link href="/review">Reviews</Link>
            </li>
            <li className="p-4 font-light text-black hover:bg-lightgray hover:rounded-lg">
              <Link href="/gallery">Gallery</Link>
            </li>
            {/* <li
              onClick={openDModal}
              className="p-4 font-light text-black hover:bg-lightgray hover:rounded-lg"
            >
              <Link href="/gallery">3D Design</Link>
            </li> */}
            <DModal isOpen={isDModalOpen} closeModal={closeDModal} />
            {/* <div className="relative group hover:overflow-visible">
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
            </div> */}
          </div>
        </ul>
        <div className="flex">
          <div className="pl-4 hidden sm:flex">
            <button
              onClick={openModal}
              className="bg-color4 text-white w-40 h-14 rounded-lg text-sm hover:bg-color4darker"
              type="button"
            >
              Get Your Estimate
            </button>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
          </div>
        </div>

        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="flex flex-row justify-between items-center sm:hidden z-10 w-full"
        >
          {nav ? (
            <AiOutlineClose size={40} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-black" />
          )}
          <Link
            className="bg-color4 text-white text-sm text-center py-2 px-4 w-[41%] h-[39px] justify-end"
            href="tel:3802222085"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              Call Us
            </button>
          </Link>
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

      <div className="bg-header_info w-full h-14 flex justify-between items-center px-10 hidden sm:flex">
        <div className="flex items-center gap-1">
          <p className="text-gray">Email Us:</p>
          <Link href="mailto:info@2gocabinets.com">
            <p className="text-color4">info@2gocabinets.com</p>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray">Call Us:</p>
          <Link href="tel:3802222085">
            <p className="text-color4">(380) 222-2085</p>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-gray">Our Address:</p>
          <Link href="https://www.google.com/search?hl=en-US&gl=us&q=2+Go+Cabinets+%26+Countertops,+2155+N+Wilson+Rd,+Columbus,+OH+43228&ludocid=15416611313375861193&lsig=AB86z5Utg0n_j8zd6nk4Rv16QEbF">
            <p className="text-color4">2155 N Wilson Rd, Columbus, OH 43228</p>
          </Link>
        </div>
        <div className="flex items-center gap-1">
          {SOCIAL_MEDIA_ICONS.map((icon) => (
            <Link
              className="flex items-center justify-center px-2 rounded-full w-8 h-8"
              href={icon.href}
              key={icon.name}
            >
              <Image
                src={icon.src}
                width={20}
                height={20}
                alt={`${icon.name} Icon`}
                loading="lazy"
                className="text-color4"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
