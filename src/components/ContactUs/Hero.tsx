import Image from 'next/image';
import React from 'react';
import hero_contactUs from '../../../public/hero_contactUs.jpg';

const Hero = () => {
  return (
    <div className='min-w-full max-h-[400px] bg-cover bg-center'>
      <Image src={hero_contactUs} alt='hero_contactUs' width={1920} height={400} />
    </div>
  );
}

export default Hero;
