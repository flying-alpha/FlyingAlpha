import React from 'react'
import Image from 'next/image'
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { FaHotTubPerson } from "react-icons/fa6";
import { RxDimensions } from "react-icons/rx";

export function CardTwo({
  imgURL,
  name,
  location,
  bedroom,
  bathroom,
  area,
  propertyType,
  price,
}: {
  imgURL: any;
  name: string;
  location: string;
  bedroom: number;
  bathroom: number;
  area: number;
  propertyType: string;
  price: string;
}) 
{
  return (
    <div className="w-[300px] rounded-md border bg-[#FFF7FC] relative">
      <Image
        src={imgURL}
        alt="card2"
        className="h-[200px] w-full rounded-md object-cover  z-10"
      />
      <div className="absolute top-0 flex gap-1">
       <p className='bg-blue-500 text-white  rounded-sm px-2'>{propertyType}</p>
      
      </div>
      <div className="absolute top-0 right-0 flex gap-1">
      <p className='bg-red-500 text-white rounded-sm px-2'>{price}</p>
      
      </div>
      <div className="p-4">
        <h1 className="text-[16px] font-semibold">
          
          {name}
          </h1>
        <div className='flex'>
          <div className='pl-2 pr-1 pt-1'><FaLocationDot /></div>
          <div>
            <p>{location}</p>
          </div>
        </div>
        <div className='flex gap-4 mt-4'>
          <div className='flex gap-1'>
            <FaBed />
            <p className='pb-1'>{bedroom}</p>
          </div>
          <div className='flex gap-1'>
            <FaHotTubPerson />
            <p className='pb-1'>{bathroom}</p>
          </div>
          <div className='flex gap-1'>
            <RxDimensions />
            <p className='pb-1'>{Math.pow(area, 2)} m²</p>

          </div>
        </div>
      </div>
    </div>
  )
}
