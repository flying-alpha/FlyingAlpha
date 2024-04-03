import React from "react";

import { newsSection } from "@/data/Property";
import NewsCard from "./NewsCard";



const NewsSection = () => {
  return (
    <div className="flex flex-col pl-10 pr-10 mt-10 mb-10 justify-center">
      <div>
        <h1 className="text-[30px] ml-[60px]">News</h1>
        <p className="ml-[60px] mt-1 mb-3">Below is a list of properties that are currently up for sale</p>
      </div>
      <div className="flex gap-10 ml-[60px] mb-5 flex-wrap">
        {newsSection.map((item, index) => (
          <NewsCard
            key={index} 
            imgUrl={item.imgUrl} 
            title={item.title}
            article={item.article}
            author={item.author}
            authorImg ={item.authorImg}
            category={item.category}
            
          />
        ))}
      </div>
      
    </div>
  );
};

export default NewsSection;
