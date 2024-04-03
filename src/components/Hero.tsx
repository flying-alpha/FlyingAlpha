import Image from 'next/image';
import React from 'react';
import hero from '../../public/hero.jpg'

const Hero = () => {
  return (
    <div>
      <Image
        src={hero}
        
        alt="Picture of the author"
        className='w-full h-[50vh] bg-cover bg-center '
      />
    </div>
  );
};

export default Hero;
