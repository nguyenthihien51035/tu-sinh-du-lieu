import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Vegetable from "../assets/banner.png"


const Banner = () => {
  return (
<div className="bg-[#064727] w-full mt-4 flex justify-start items-center rounded-[20px] px-6 sm:px-10 lg:px-14 gap-[10px]">
    <div className="flex flex-col gap-2 sm:gap-4 lg:gap-6 items-start my-2">
        <span className="text-white font-semibold text-xl sm:text-2xl sm:text-4xl lg:text-6xl">
            Get <span className="text-[#ecf77b]">free delivery</span> on shopping $200
        </span>
        <span className="text-white text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] w-[500px] hidden xl:flex">
            Get the freshest groceries delivered right to your home. Save time, skip the lines, and enjoy the convenience of quick and effecient delivery.
        </span>
        <button className="text-[#064727] bg-[#faea4c] text-[8px] sm:text-[10px] md:text-[12px] lg:text-[18px] p-2 lg:p-4 rounded-md flex items-center gap-2 font-semibold hover:scale-105 transition">
            Learn More
            <FaArrowRight />
        </button>
    </div>
    <img src={Vegetable} alt="" className="mt-12 w-[200px] lg:w-[390px] xl:w-[450px] object-contain" />
</div>  )
}

export default Banner