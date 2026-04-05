"use client";

import React, { useState, useEffect, startTransition } from "react";
import { FaChevronRight } from "react-icons/fa";

type BackgroundOption = {
  type: "image" | "video";
  src: string;
};

const backgroundOptions: BackgroundOption[] = [
  {
    type: "video",
    src: "https://res.cloudinary.com/djmddrfv2/video/upload/v1774547897/herobg_i0e4vj.webm",
  },
  // { type: "video", src: "/videos/herobg2.mp4" },
];

const Hero = () => {
  const [background, setBackground] = useState<BackgroundOption | null>(null);

  useEffect(() => {
    startTransition(() => {
      const randomIndex = Math.floor(Math.random() * backgroundOptions.length);
      setBackground(backgroundOptions[randomIndex]);
    });
  }, []);

  return (
    <div className="">
      <div
        className="relative isolate min-h-screen overflow-hidden bg-black py-12 sm:py-16 lg:py-20"
        data-aos="fade-in"
      >
        <video
          key={background?.src}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={background?.src}
        />

        <div
          className="pointer-events-none absolute inset-0 z-1 bg-gray-900/80"
          aria-hidden
        />

        <div className="relative z-2 mx-auto flex min-h-[80vh] max-w-8xl flex-col justify-center items-start px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl pt-16 lg:pt-0 px-2 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 mb-8 items-center justify-start">
              <div className=" h-px w-16 bg-white" />
              <p className="text-sm font-medium text-white">
                The Future of Loyalty
              </p>
            </div>

            <h1 className="text-6xl mb-8 font-heading font-light text-white sm:text-7xl lg:text-8xl ">
              The most <span className="italic">inspiring </span>
              {"  "} stays, united by one membership.
            </h1>
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
              <p className=" mx-auto  text-base font-body font-normal text-gray-300">
                Journey is the first loyalty program that brings together
                boutique hotels and residences, designed for travelers who
                choose character over chains. awaits at FauzanResort.
              </p>
              <p className=" mx-auto text-base font-body font-normal text-gray-300">
                Discover your next stay to start earning rewards and recognition
                wherever you go.
              </p>
            </div>
            {/* <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-teal-800 px-8 py-4 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-teal-700"
              role="button"
            >
              Plan your stay
            </Link> */}
          </div>

          <div className="mt-12 w-full px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-4xl">
              <div className="flex flex-col gap-4 bg-white lg:rounded-full p-4 shadow-xl sm:flex-row">
                {/* Where */}
                <div className="flex-1 border-b border-gray-200 pb-4 text-black sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6">
                  <label className="block text-xs font-semibold text-black mb-2 tracking-wider">
                    WHERE
                  </label>
                  <input
                    type="text"
                    placeholder="Search places"
                    className="w-full bg-transparent text-black placeholder-gray-400 outline-none"
                  />
                </div>

                {/* When */}
                <div className="flex-1 border-b border-gray-200 pb-4 text-black sm:border-b-0 sm:border-r sm:px-6 sm:pb-0">
                  <label className="block text-xs font-semibold text-black mb-2 tracking-wider">
                    WHEN
                  </label>
                  <input
                    type="text"
                    placeholder="Add dates"
                    className="w-full bg-transparent text-black placeholder-gray-400 outline-none"
                  />
                </div>

                {/* With Who */}
                <div className="flex-1 px-0 text-black sm:px-6">
                  <label className="block text-xs font-semibold text-black mb-2 tracking-wider">
                    WITH WHO
                  </label>
                  <select className="w-full bg-transparent text-black outline-none font-medium">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                    <option>5 Adults</option>
                  </select>
                </div>

                {/* Explore Button */}
                <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-sm hover:bg-gray-900 transition flex items-center gap-2 whitespace-nowrap ml-0 sm:ml-2">
                  EXPLORE STAYS <FaChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
