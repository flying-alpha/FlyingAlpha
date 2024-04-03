import React from 'react';
import {Navbar} from '../components/Navbar'; // Import the Navbar component
import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import Forsale from '@/components/ForSale';
import { Footer } from '@/components/Footer';
import ForRent from '@/components/ForRent';
import NewsCard from '@/components/NewsCard';
import NewsSection from '@/components/NewsSection';



const Page = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <FeaturedProject/>
     <Forsale/>
     <ForRent/>
     <NewsSection/>
     <Footer/>
    </div>
  );
};

export default Page;
