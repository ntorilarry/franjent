"use client";

import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiMiniMicrophone } from "react-icons/hi2";
import { BsCheck2 } from "react-icons/bs";
import { TbMicrophoneOff } from "react-icons/tb";

const questions = [
  "What do you love about travel?",
  "What's your ideal stay?",
  "Who do you travel with most?",
];

const HotelJourney = () => {
  return (
    <section className="bg-[#f2eee6] px-4  sm:px-6 lg:p-4">
      {/* Outer rounded card */}
      <div className="relative rounded-4xl mt-20 overflow-hidden min-h-[85vh]">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop"
          alt="Infinity pool ocean"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Subtle dark gradient on left for text legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col lg:flex-row items-end lg:items-center justify-between gap-10 px-8 sm:px-12 lg:px-16 py-16 min-h-[85vh]">

          {/* Left — text */}
          <div className="flex-1 max-w-xl">
            <p className="text-white/60 text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              Known by Journey
            </p>
            <h2 className="text-5xl sm:text-6xl  text-white mb-8">
              With Journey, <br/> you&apos;re more than just{" "}
              <em className=" font-light italic">another guest.</em>
            </h2>
            <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-sm">
              Journey hotels &amp; residences welcome our members with a deeper level of recognition.
              Your preferences travel with you, so each arrival feels personal, familiar and
              thoughtfully considered. From your favorite drink to the best local spots, our
              properties tailor each stay to you.
            </p>
            <p className="text-white font-semibold text-sm mb-10 max-w-sm">
              Travel beyond the expected—for people who know great hospitality when they feel it.
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
            >
              JOIN JOURNEY
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right — testimonial card + phone mockup */}
          <div className="relative flex items-end justify-center gap-4 shrink-0 self-center">

            {/* Testimonial card */}
            <div className="hidden lg:block w-72 rounded-3xl bg-white/20 backdrop-blur-md border border-white/20 p-8 self-end mb-24">
              <p className="text-white/90 text-sm leading-relaxed mb-6">
                When I travel, I like to slow down and find comfort in the quiet. When I check in I go
                straight to the spa or the pool, leave my phone behind. My favorite travel memories
                were spent with loved ones by the water. I always recommend unforgettable views.
                Definitely a salt water pool. A place that is for adults only. Good pillows, for the
                room to be cool...
              </p>
              <p className="text-white font-light text-2xl italic" style={{ fontFamily: "cursive" }}>
                —Collins
              </p>
            </div>

            {/* Phone mockup */}
            <div className="relative w-56 sm:w-64 lg:w-72">
              {/* Phone shell */}
              <div className="rounded-[3rem] border-[10px] border-slate-900 bg-white shadow-2xl overflow-hidden">
                {/* Status bar */}
                <div className="bg-white px-5 pt-3 pb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900">9:41</span>
                  <div className="w-24 h-5 bg-slate-900 rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-slate-900">▲▲▲</span>
                  </div>
                </div>

                {/* App header */}
                <div className="bg-white px-5 pb-3 flex items-center justify-between border-b border-slate-100">
                  <button className="text-slate-500 text-lg">←</button>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-slate-900">Tell us about you</p>
                    <p className="text-xs text-slate-400">0:00:01</p>
                  </div>
                  <button className="text-xs font-semibold text-slate-400 tracking-wide">SKIP</button>
                </div>

                {/* Question card */}
                <div className="bg-slate-100 px-4 py-6">
                  {/* Stacked cards effect */}
                  <div className="relative mx-auto w-44 h-56">
                    {/* Back cards */}
                    <div className="absolute inset-0 rounded-2xl bg-slate-700/60 rotate-3 scale-95" />
                    <div className="absolute inset-0 rounded-2xl bg-slate-800/80 -rotate-2 scale-97" />
                    {/* Front card */}
                    <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center px-5 text-center shadow-xl">
                      <p className="text-white/40 text-[9px] tracking-widest uppercase mb-4">Question 1</p>
                      <p className="text-white text-lg leading-snug">
                        What do you love about travel?
                      </p>
                      <p className="text-white/30 text-[9px] tracking-widest uppercase mt-auto">
                        Swipe for more questions
                      </p>
                    </div>
                  </div>

                  {/* Listening indicator */}
                  <div className="flex items-center justify-center gap-2 mt-5 mb-4">
                    <HiMiniMicrophone className="h-4 w-4 text-slate-500 animate-pulse" />
                    <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                      Listening
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-center gap-4">
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500">
                      <TbMicrophoneOff className="h-5 w-5" />
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-500">
                      <BsCheck2 className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelJourney;
