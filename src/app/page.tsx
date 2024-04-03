import React from 'react';
import {Navbar} from '../components/Navbar'; // Import the Navbar component
import Hero from '@/components/Hero';
import FeaturedProject from '@/components/FeaturedProject';
import Section from '@/components/Section';
import { Footer } from '@/components/Footer';



const Page = () => {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <FeaturedProject/>
     <Section/>
     <Footer/>
    </div>
  );
};

export default Page;
