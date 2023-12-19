import Navbar from '@/app/_components/Navbar';
import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <Image
        src="/boerencamping.png"
        alt="CampingPlaatje"
        height={1970}
        width={810}
        className="w-screen"
      />
    </div>
  );
};

export default Home;
