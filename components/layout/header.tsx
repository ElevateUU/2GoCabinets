import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Logo from "@/public/Logos/Logo.png"

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className='fixed flex-wrap bg-white left-0 top-0 w-full z-10 ease-in duration-300 drop-shadow-md'
    >
      <div className='max-w-[1240px] m-auto flex justify-center items-center p-4 text-white'>
      <ul className="hidden items-center sm:flex">
          <li className="p-4  text-black transition-all hover:text-sembro">
            <Link href="/#home">Home</Link>
          </li>
          <li className="p-4 px-9 text-black transition-all hover:text-sembro">
            <Link href="/#service">Services</Link>
          </li>
          <li className="p-4 pr-14 text-black transition-all hover:text-sembro">
            <Link href="/commingSoon">Cabinets</Link>
          </li>
          <Image src={Logo} width={200} alt={""} />
          <li className="p-4 pl-14 text-black transition-all hover:text-sembro">
            <Link href="/commingSoon">Countertops</Link>
          </li>
          <li className="p-4 px-9 text-black transition-all hover:text-sembro">
            <Link href="/commingSoon">About</Link>
          </li>
          <button
            className="text-black border h-10 border-black p-0 leading-5 hover:bg-sembro hover:border-sembro hover:text-white active:bg-sembro font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <Link href="/#contact">Contact Us</Link>
          </button>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block justify-end sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={30} className='text-black' />
          ) : (
            <AiOutlineMenu size={20} className='text-black' />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300'
          }
        >
          <ul className='text-black'>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#home'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#service'>Services</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/commingSoon'>Cabinets</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/commingSoon'>Countertops</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/commingSoon'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl text-sembro'>
              <Link href='/#contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
