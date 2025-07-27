import { ThreeDCardDemo } from "@/components/ThreeDCard";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <section className="w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center max-w-sm mx-auto p-4 relative h-[30rem] just">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="hover" imageUrl="https://placehold.co/220" />

          <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
            Name LastName
          </h2>
          <p className="text-sm border font-semibold dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 line-clamp-2 text-center pb-11">
            Watch me hover Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aut velit soluta architecto incidunt earum distinctio cum
            officiis officia non vitae reprehenderit quam natus quas ratione
            ipsam tempore, quidem iste aspernatur fuga pariatur ab explicabo!
            Blanditiis, minima labore aperiam velit alias quo laborum soluta
            quia possimus sunt, harum, vero magnam cumque?
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 lg:mt-5">
          <p className="text-30-bold">All Projects</p>
          <ul className="mt-7 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-1 justify-center">
            {["1", "2", "3"].map((item, i) => (
              <ThreeDCardDemo key={i}/>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
