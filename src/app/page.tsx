import React from 'react';

import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import Forsale from '@/components/ForSale';
import ForRent from '@/components/ForRent';

import NewsSection from '@/components/NewsSection';



const Page = () => {
  return (
    <div>
     
     <Hero/>
     <FeaturedProject/>
     <Forsale/>
     <ForRent/>
     <NewsSection/>
     
    </div>
  );
};

export default Page;
