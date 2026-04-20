"use client";

import Image from "next/image";
import Link from "next/link";
import { HiX } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { LogoWhite } from "../../public";
import { CiTrophy } from "react-icons/ci";
import { PiAirplaneTiltThin, PiFunnelThin, PiNotePencil } from "react-icons/pi";
import { TbUsers } from "react-icons/tb";

export default function NavMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="bg-[#142336] text-white overflow-hidden">
      {/* Navbar Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-slate-800">
        <div className="hidden lg:flex lg:items-center">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-3 text-base font-medium uppercase tracking-tighter transition-colors rounded-full bg-gray-50 text-black hover:bg-gray-100"
          >
            <HiX className="h-6 w-6" /> Close
          </button>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src={LogoWhite}
            alt="FauzanResort LogoWhite"
            width={120}
            height={120}
            loading="eager"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>

        <div className="hidden lg:flex lg:items-center">
          <Link href="/auth/sign-up">
            <button className="rounded-full inline-flex gap-2 px-8 py-4 ms-2 text-sm uppercase font-medium transition-colors bg-[#2b385c] text-white hover:bg-[#2b385c]/50">
              JOIN JOURNEY <BsArrowRight />
            </button>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-2 transition-colors text-white hover:bg-white/15"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-wrap gap-8 px-8 py-6">
        {/* Left Section */}
        <div className="flex-1 max-w-xs border-r border-gray-700 pr-8">
          <h1 className="text-3xl  mb-2 ">The Alliance</h1>
          <p className="text-gray-300 text-sm mb-8">
            Journey&apos;s loyalty platform that gives independent hotels and
            brands the same benefits that big chains rely on.
          </p>

          <div className="rounded-2xl overflow-hidden h-72 bg-linear-to-br from-amber-900 to-amber-700 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1700979686190-e5917aed6f5a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Luxury resort interior with arches and garden view"
              className="w-full h-full object-cover"
              height={1000}
              width={800}
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 max-w-xs flex flex-col justify-between border-r border-gray-700 pr-8">
          {/* Member Benefits */}

          <div>
            <h2 className="text-3xl font-serif mb-2">Member Benefits</h2>
            <p className="text-gray-300 text-sm">
              Discover a loyalty program designed for you. Earn rewards from the
              places you love and unlock personalized experiences.
            </p>
          </div>

          <div>
            <div className=" h-px w-full bg-gray-700" />
            <h3 className="text-3xl  py-4 ">Your Experience</h3>
            <div className=" h-px w-full bg-gray-700 " />
            {/* Navigation Items */}
            <nav className="space-y-6">
              <a
                href="/auth/sign-up"
                className="flex items-center my-4 gap-4 text-gray-300 hover:text-amber-400 transition group"
              >
                <TbUsers size={24} className="text-amber-400" />
                <span className="text-base group-hover:text-white">
                  Sign Up or Log In
                </span>
              </a>
            </nav>
            <div className=" h-px w-full bg-gray-700 " />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex gap-x-8">
          <div className="max-w-xs flex flex-col justify-between">
            <div>
              <h2 className="text-3xl mb-2">Discover Journey</h2>
              <p className="text-gray-300 text-sm mb-8">
                Explore all of our exclusive properties and partners, as well as
                unique travel experiences that make Journey so amazing.
              </p>
            </div>
            <nav className="space-y-4  ">
              <div className=" h-px w-full bg-gray-700 " />
              <a
                href="/collections"
                className="flex items-center gap-4  text-gray-300 hover:text-amber-400 transition group"
              >
                <PiFunnelThin size={24} className="text-amber-400" />
                <span className="text-base group-hover:text-white">
                  Collections
                </span>
              </a>
              <div className=" h-px w-full bg-gray-700 " />
              <a
                href="/franjent-studios"
                className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition group"
              >
                <CiTrophy size={24} className="text-amber-400" />
                <span className="text-base group-hover:text-white">
                  Franjent Studios
                </span>
              </a>
              <div className=" h-px w-full bg-gray-700 " />
              <a
                href="/about"
                className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition group"
              >
                <PiAirplaneTiltThin size={24} className="text-amber-400" />
                <span className="text-base group-hover:text-white">About</span>
              </a>
              <div className=" h-px w-full bg-gray-700 " />
              <a
                href="/blog"
                className="flex items-center gap-4 text-gray-300 hover:text-amber-400 transition group"
              >
                <PiNotePencil size={24} className="text-amber-400" />
                <span className="text-base group-hover:text-white">Blog</span>
              </a>
              <div className=" h-px w-full bg-gray-700 " />
            </nav>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden h-full w-full shadow-2xl ">
              <Image
                src="https://images.unsplash.com/photo-1638558164749-5261d594aaa5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury desert resort with pool and white umbrellas"
                className="w-full h-full object-cover"
                width={1000}
                height={480}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
