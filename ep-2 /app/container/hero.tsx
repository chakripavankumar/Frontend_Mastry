import React from "react";

const Hero = () => {
  return (
    <div className="my-20 flex w-full flex-col items-center px-4 py-2">
      <button className="cursor-pointer rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-gray-600 transition duration-200 hover:bg-gray-200">
        what are early stage tax requirements ?
      </button>
      <div>
        <h1 className="mt-10 text-center text-7xl font-medium tracking-tighter text-black">
          Magically simplify <br /> accounting and taxes
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-700">
          Automated bookkeeping, effortless tax filing, real‑time insights. Set
          up in 10 mins. Back to building by 12:31pm.
        </p>
      </div>
      <div className="relative z-10 mt-10 flex items-center gap-4">
        <button className="cursor-pointer rounded-lg bg-[#2579F4] px-4 py-2 font-bold tracking-wide text-white shadow-lg text-shadow-md">
          Start free trail
        </button>
        <button className="font-regular cursor-pointer rounded-lg px-4 py-2 tracking-wide text-black">
          Pricing &rarr;
        </button>
      </div>
    </div>
  );
};

export default Hero;
