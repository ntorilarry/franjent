"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { RiMenu2Line } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoWhite, LogoMain } from "../../public";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import NavMenu from "./navMenu";

const SCROLL_THRESHOLD = 100;

const WHITE_NAV_PATHS = new Set([
  "/inquire",
  "/gallery",
  "/floor-plans",
  "/team",
  "/downloads",
]);

const Navbar = () => {
  const pathname = usePathname();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setHasScrolled(currentScrollY > SCROLL_THRESHOLD);

      if (
        currentScrollY <= SCROLL_THRESHOLD ||
        currentScrollY < lastScrollY.current
      ) {
        setScrollingDown(false);
      } else if (
        currentScrollY > SCROLL_THRESHOLD &&
        currentScrollY > lastScrollY.current
      ) {
        setScrollingDown(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
    setHasScrolled(lastScrollY.current > SCROLL_THRESHOLD);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const useWhiteNavBg = WHITE_NAV_PATHS.has(pathname);
  const overHero = !hasScrolled;
  const lightNavFg = overHero && !useWhiteNavBg;

  const headerBg = useWhiteNavBg
    ? "bg-[#f2eee6] shadow-sm"
    : hasScrolled
      ? "bg-[#f2eee6] shadow-sm"
      : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-in-out ${
          scrollingDown ? "-translate-y-full" : "translate-y-0"
        } ${headerBg} ${menuOpen ? "hidden" : ""}`}
      >
        <nav className=" relative max-w-8xl w-full py-2  sm:mx-auto">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between py-5">
              {/* Desktop Menu Button */}
              <div className="hidden lg:flex lg:items-center">
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-base font-medium uppercase tracking-tighter transition-colors ${
                    lightNavFg
                      ? "text-gray-50 hover:text-gray-200"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  <RiMenu2Line className="h-6 w-6" /> Menu
                </button>
              </div>

              {/* Logo (center on desktop) */}
              <Link
                href="/"
                className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
              >
                <Image
                  src={hasScrolled ? LogoMain : LogoWhite}
                  alt="FauzanResort Logo"
                  width={120}
                  height={120}
                  loading="eager"
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>

              {/* Actions */}
              <div className="hidden lg:flex lg:items-center">
                <Link href="/inquire">
                  <button
                    className={`rounded-full inline-flex gap-2 px-8 py-4 ms-2 text-sm uppercase font-medium transition-colors ${
                      lightNavFg
                        ? "bg-gray-50 text-black  hover:bg-gray-100"
                        : "bg-gray-50 text-black hover:bg-gray-100"
                    }`}
                  >
                    JOIN JOURNEY <BsArrowRight />
                  </button>
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className={`inline-flex items-center justify-center rounded-full p-2 transition-colors ${
                    lightNavFg
                      ? "text-white hover:bg-white/15"
                      : "text-black hover:bg-neutral-200 hover:text-gray-700"
                  }`}
                >
                  {menuOpen ? (
                    <HiX className="h-6 w-6" />
                  ) : (
                    <HiMenu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="nav-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60]"
          >
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              aria-label="Close menu overlay"
            />
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 overflow-auto"
            >
              <NavMenu onClose={() => setMenuOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
