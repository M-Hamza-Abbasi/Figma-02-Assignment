import Image from "next/image";
import React from "react";

const HeroPage = () => {
  return (
    <div className="h-screen mt-32 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start px-4 lg:px-20">
        <div className="text-[37.84px] font-bold leading-[62.24px] tracking-[0.025em] text-left">
          <h1>IMPECCABLE</h1>
          <h1>CRAFTSMANSHIP AND</h1>
          <h1>FINESSE</h1>
        </div>
        <p className="w-[798.9px] h-[144px] tracking-[2.5%] text-[#787054] text-[29.24px] sm:text-[18px] lg:text-[24px] mt-[523.71px] lg:mt-6 leading-[48.1px] xl:text-[30px] font-medium">
          An example of intricate workmanship and detail, elegant necklaces and
          long and short chains form a part of our desirable collection.
        </p>
        <button className="font-medium bg-[#A29875] px-[8.6px] sm:px-[8.6px] py-2 text-[#FFFFFF] rounded mt-6 lg:mt-8 transition duration-300 ease-in-out hover:bg-[#787054] xl:text-[30px] xl:w-[288px] xl:h-[58px] xl:rounded-md xl:mt-16">
          Explore Now
        </button>
      </div>

      {/* Right side */}
    <div className="w-[421.38px] md:w-[400px] lg:w-[462px] mt-10 lg:mt-0 lg:ml-[210px] flex shrink-0 border border-white border-solid rounded-[129px_0px_129px_0px]">
        <Image
          src="/images/slider-1.jpg.svg"
          alt="image"
          width={421.38}
          height={573.59}
          className="flex overflow-hidden relative flex-col border border-white border-solid rounded-[129px_0px_129px_0px]"
        />
       </div>
    </div>
      
  );
};

export default HeroPage;
