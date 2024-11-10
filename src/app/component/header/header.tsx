import Image from "next/image";
import React from "react";

const HeaderPage = () => {
  return (
    <section className="flex flex-col">
  <header className="flex overflow-hidden flex-col w-full bg-white shadow-[15px_16px_52px_rgba(0,0,0,0.2)] max-md:max-w-full">
    <div className="px-14 py-6 w-full bg-[#A29875] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-1.5 text-7xl text-white whitespace-nowrap max-md:mt-10 max-md:text-4xl">
            <Image loading="lazy" src="\images\Logoletter.svg"
            className="object-contain shrink-0 self-start aspect-[0.89] w-[63px]"
            alt="logo" 
            width={63.52}
            height={70.35}
            />
            <h1 className="grow shrink w-[161px] max-md:text-4xl">urity</h1>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-wrap gap-10 self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
            <form className="flex flex-wrap flex-auto gap-10 px-6 py-4 text-xl text-gray-500 rounded-2xl bg-stone-50 max-md:pl-5 max-md:max-w-full">
              <label className="sr-only">Search for Gold Jewellery, Diamond Jewellery and more…</label>
              <input type="search" id="searchInput" placeholder="Search for Gold Jewellery, Diamond Jewellery and more…" className="flex-grow bg-transparent border-none outline-none" />
              <button type="submit" aria-label="Search">
                <Image loading="lazy" src="images/search.svg"
                className="object-contain shrink-0 self-start aspect-square w-[21px]"
                alt="search icon"
                width={21.5}
                height={21.5}
                />
              </button>
            </form>
            <nav className="flex gap-10 items-start my-auto">
            <a href="#" aria-label="Wishlist">
                <Image loading="lazy" src="images/heart.svg"
                className="object-contain shrink-0 aspect-[0.97] w-[29px]"
                alt="heart"
                width={33.42}
                height={29.71}
                />
              </a>
              <a href="#" aria-label="User account">
                <Image loading="lazy" src="images/userpic.svg"
                className="object-contain shrink-0 aspect-[1.1] w-[33px]"
                alt="login-man"
                width={28.97}
                height={29.26}
                />
              </a>
              
              <a href="#" aria-label="Shopping cart">
                <Image loading="lazy" src="images/trawli.svg" 
                className="object-contain shrink-0 aspect-[1.23] w-[38px]"
                alt="trawli"
                width={38.01}
                height={30.08}
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  </section> 
  );
};

export default HeaderPage;
