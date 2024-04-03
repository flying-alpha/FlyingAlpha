import React from "react";
import Card from "./Card";


const FeaturedProject = () => {
  return (
    <div className=" flex flex-col pl-10 pr-10 mt-10  justify-center ">
      <div>
      <h1 className="text-[30px] ml-[90px] font-extrabold">We've got properties in Patna for everyone</h1>
      <p className="ml-[90px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quam rerum adipisci error minima vero molestiae </p>
      </div>
      <div className="flex gap-10 justify-center mt-0">
      <div> <Card/></div>
       <div> <Card/></div>
       <div> <Card/></div>
      </div>
    </div>
  );
};

export default FeaturedProject;
