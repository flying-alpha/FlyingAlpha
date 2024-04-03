import React from "react";
import { CardTwo } from "./CardTwo";

import { propertyForRent } from '../data/Property';

const ForRent = () => {
  return (
    <div className="flex flex-col pl-10 pr-10 mt-10 mb-10 justify-center bg-white">
      <div>
        <h1 className="text-[30px] ml-[60px]">Properties For Rent</h1>
        <p className="ml-[60px] mt-1 mb-3">Below is a list of properties that are currently up for rent </p>
      </div>
      <div className="flex gap-10 ml-[60px] mb-5 flex-wrap">
        {propertyForRent.map((item, index) => (
          <CardTwo
            key={index} 
            imgURL={item.imgURL} 
            name={item.name}
            propertyType={item.propertyType}
            price={item.price}
            location={item.location}
            bedroom={item.bedroom}
            bathroom={item.bathroom}
            area={item.area}
            variant = {item.varient}
          />
        ))}
      </div>
      
    </div>
  );
};

export default ForRent;
