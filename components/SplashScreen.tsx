// components/SplashScreen.tsx
import React, { useEffect, useState } from 'react';
import Image from "next/image"

import BerezaPromo1 from "@/public/Splash/BerezaPromo1.png"

const SplashScreen: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-screen z-50 transition-transform duration-1000 transform ${showSplash ? 'translate-y-0' : '-translate-y-full'}`}>
      <Image className='w-full h-full object-cover' src={BerezaPromo1} alt={''} />
    </div>
  );
};

export default SplashScreen;
