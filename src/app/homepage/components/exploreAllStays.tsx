"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import {
  LuWaves,
  LuBuilding2,
  LuTrees,
  LuMountain,
  LuCompass,
} from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

const categories = [
  { name: "Beachside Resorts", icon: LuWaves },
  { name: "City Boutiques", icon: LuBuilding2 },
  { name: "Countryside Getaways", icon: LuTrees },
  { name: "Mountain Escapes", icon: LuMountain },
  { name: "Secluded Retreats", icon: LuCompass },
];

const stays = [
  {
    name: "Nihi Sumba",
    location: "East Nusa Tenggara, Indonesia",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=700&h=900&fit=crop",
  },
  {
    name: "Hotel Le Marais",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&h=900&fit=crop",
  },
  {
    name: "The Barn at Cotswolds",
    location: "Gloucestershire, England",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=700&h=900&fit=crop",
  },
  {
    name: "Cervo Mountain Resort",
    location: "Zermatt, Switzerland",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=900&fit=crop",
  },
  {
    name: "Kokomo Private Island",
    location: "Fiji Islands, Pacific",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=700&h=900&fit=crop",
  },
];

const ExploreAllStays = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleCategoryClick = (i: number) => {
    swiperRef.current?.slideTo(i);
  };

  return (
    <section className="bg-[#f2eee6] py-16 lg:py-24 px-4 sm:px-8 lg:px-16">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          {/* Left — headline + CTA */}
          <div className="lg:flex-1 flex flex-col items-start justify-center lg:pr-12">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl text-slate-900 mb-10">
              Carefully curated stays across the globe.
            </h2>
            <button className="inline-flex items-center gap-4 rounded-full bg-slate-800 px-8 py-3 text-sm font-semibold tracking-widest text-white transition-all hover:bg-slate-700 hover:gap-5">
              EXPLORE ALL STAYS
              <BsArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Center — arch card + swiper */}
          <div className="flex flex-col items-center gap-6 shrink-0">
            {/* Outer ring */}
            <div className="relative p-1.5 rounded-t-[220px] rounded-b-2xl border border-slate-300/60">
              {/* Arch clip */}
              <div className="relative w-72 sm:w-80 lg:w-[30rem] h-[480px] sm:h-[540px] lg:h-[700px] rounded-t-[210px] rounded-b-xl overflow-hidden">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  speed={600}
                  pagination={{ el: ".explore-pagination", clickable: true }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  className="w-full h-full"
                >
                  {stays.map((stay) => (
                    <SwiperSlide
                      key={stay.name}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={stay.image}
                        alt={stay.name}
                        fill
                        className="object-cover"
                      />

                      {/* Hotel name overlay */}
                      <div className="absolute bottom-14 left-6 z-10">
                        <p className="text-white text-2xl font-light drop-shadow-lg">
                          {stay.name}
                        </p>
                      </div>

                      {/* Footer bar */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/70 backdrop-blur-sm px-5 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/80 text-xs tracking-widest uppercase">
                          <IoLocationOutline className="h-4 w-4 shrink-0" />
                          <span>{stay.location}</span>
                        </div>
                        <button className="flex items-center gap-1.5 text-white text-xs font-semibold tracking-widest uppercase whitespace-nowrap hover:text-white/70 transition-colors">
                          About This Stay
                          <BsArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Swiper pagination rendered outside the arch */}
            <div className="explore-pagination flex items-center justify-center gap-2" />
          </div>

          {/* Right — category list */}
          <div className="lg:flex-1 flex flex-col items-start lg:items-end justify-center lg:pl-12 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(i)}
                  className={`flex items-center gap-3 transition-all duration-300 ${
                    isActive
                      ? "text-slate-900"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <span
                    className={`text-xl sm:text-2xl tracking-tight ${
                      isActive ? "font-bold" : "font-normal"
                    }`}
                  >
                    {cat.name}
                  </span>
                  {isActive && (
                    <span className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-300 shrink-0">
                      <Icon className="h-4 w-4 text-slate-700" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreAllStays;
