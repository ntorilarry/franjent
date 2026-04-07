"use client";

import Image from "next/image";
import { LogoMain } from "../../public";
import { BsArrowRight } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { LuPlane } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

const links = [
  "Behind the Stays",
  "Privacy Policy",
  "Terms & Conditions",
  "Directory",
  "Sitemap",
];

const Footer = () => {
  return (
    <footer className="bg-[#f2eee6] px-4 sm:px-6 lg:px-8 pb-8">
      <div className="rounded-4xl bg-[#e8e2d8] px-8 sm:px-12 lg:px-16 pt-12 pb-0 overflow-hidden relative">

        {/* Top row — divider line with icons */}
        <div className="flex items-center gap-4 mb-10">
          <TbWorld className="h-5 w-5 text-slate-500 shrink-0" />
          <div className="flex-1 border-t border-slate-400/50" />
          <LuPlane className="h-5 w-5 text-slate-500 shrink-0" />
        </div>

        {/* Second row — tagline + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-slate-800">
            Worth Every Trip
          </h2>
          <button className="inline-flex items-center gap-4 rounded-full bg-slate-800 px-8 py-3.5 text-sm font-semibold tracking-widest text-white transition-all hover:bg-slate-700 hover:gap-5 shrink-0 self-start sm:self-auto">
            BECOME AN ALLIANCE PROPERTY
            <BsArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom area — logo icon left, links + contact right, JOURNEY wordmark below */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

          {/* Logo icon */}
          <div className="shrink-0 w-52 sm:w-64 lg:w-72 self-start lg:self-end pb-0">
            <Image
              src={LogoMain}
              alt="Journey logo mark"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Middle — copyright + social */}
          <div className="flex flex-col items-start lg:items-center gap-3 pb-8 lg:pb-12">
            <div className="flex items-center gap-4">
              <FiInstagram className="h-5 w-5 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors" />
              <RiTwitterXLine className="h-5 w-5 text-slate-600 hover:text-slate-900 cursor-pointer transition-colors" />
            </div>
            <p className="text-xs text-slate-500">© Journey Rewards Inc. 2026</p>
          </div>

          {/* Right — nav links + contact */}
          <div className="flex flex-col sm:flex-row gap-8 pb-8 lg:pb-12 shrink-0">
            {/* Nav links */}
            <ul className="flex flex-col items-start sm:items-end gap-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <div className="flex flex-col items-start sm:items-end gap-2">
              <a
                href="mailto:hello@journey.com"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                hello@journey.com
              </a>
              <a
                href="tel:18889904712"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                1 (888) 990-4712
              </a>
            </div>
          </div>
        </div>

        {/* JOURNEY wordmark — bottom, full width, clipped */}
        <div className="text-center  overflow-hidden leading-none">
          <span
            className="text-slate-800 font-bold tracking-tight select-none"
            style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 0.85, letterSpacing: "-0.02em" }}
          >
            FRANJENT
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
