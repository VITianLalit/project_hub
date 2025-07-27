import SearchForm from "@/components/SearchForm";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { Boxes } from "@/components/ui/background-boxes";

import React from "react";

const page = () => {
  return (
    <>
      <div className="h-[530px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className="uppercase bg-black px-6 py-3 font-work-sans font-extrabold text-white sm:text-[54px] sm:leading-[64px] text-[36px] leading-[46px] max-w-5xl text-center my-5 relative">
          Welcome to ProjectHub
        </h1>
        <p className="font-medium text-[20px] text-white text-center break-words !max-w-3xl relative">
          Where project meets innovation. Discover, share, and collaborate on exciting projects across various domains.
        </p>
        <SearchForm />
      </div>
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="text-30-semibold">Trendy Projects</p>
        <ul className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 justify-center">
          {["1", "2", "3"].map((item, i) => (
            <ThreeDCardDemo key={i}/>
          ))}
        </ul>
      </section>
    </>
  );
};

export default page;
