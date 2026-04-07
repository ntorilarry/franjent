"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";

const cards = [
  { name: "Columns", location: "New Orleans, LA", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop" },
  { name: "Fieldtrip", location: "Lexington, KY", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=500&fit=crop" },
  { name: "Dunton", location: "Joshua Tree, CA", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop" },
  { name: "Walden", location: "Wimberley, TX", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=500&fit=crop" },
  { name: "Abode", location: "Malibu, CA", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=500&fit=crop" },
  { name: "French Cowboy", location: "Quebec, Canada", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=500&fit=crop" },
  { name: "Annex", location: "Johnson City, TX", image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=500&fit=crop" },
  { name: "Haven", location: "Heber City, UT", image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=500&fit=crop" },
  { name: "Grove House", location: "Ojai, CA", image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=400&h=500&fit=crop" },
  { name: "The Barn", location: "Hudson, NY", image: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=400&h=500&fit=crop" },
  { name: "Cervo", location: "Zermatt, CH", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=500&fit=crop" },
  { name: "Kokomo", location: "Fiji Islands", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop" },
];

// Split cards into 5 columns, repeat for seamless loop
const NUM_COLS = 5;
const columns = Array.from({ length: NUM_COLS }, (_, i) =>
  [...cards, ...cards].filter((_, j) => j % NUM_COLS === i % NUM_COLS)
);

// Alternate scroll directions and speeds per column
const colConfig = [
  { direction: -1, duration: 30 },
  { direction: 1, duration: 38 },
  { direction: -1, duration: 25 },
  { direction: 1, duration: 34 },
  { direction: -1, duration: 28 },
];

function Card({ name, location, image }: { name: string; location: string; image: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden w-full aspect-[3/4] shrink-0">
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white text-base font-light tracking-wide mb-1">{name}</p>
        <div className="flex items-center gap-1 text-white/60 text-xs">
          <IoLocationOutline className="h-3 w-3 shrink-0" />
          <span className="uppercase tracking-widest">{location}</span>
        </div>
      </div>
    </div>
  );
}

function Column({
  cards,
  direction,
  duration,
}: {
  cards: typeof columns[0];
  direction: number;
  duration: number;
}) {
  // We duplicate the list so the loop is seamless
  const items = [...cards, ...cards];
  const cardHeightPct = 100 / cards.length;

  return (
    <div className="relative overflow-hidden flex-1 min-w-0" style={{ height: "100%" }}>
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: direction === -1 ? [0, `-${50}%`] : [`-${50}%`, 0] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {items.map((card, i) => (
          <Card key={`${card.name}-${i}`} {...card} />
        ))}
      </motion.div>
    </div>
  );
}

const ExploreAlliance = () => {
  return (
    <section className="relative bg-[#1a1a1a] overflow-hidden" style={{ height: "100vh" }}>
      {/* Moving card columns */}
      <div className="absolute inset-0 flex gap-3 px-3 py-3 opacity-80">
        {columns.map((col, i) => (
          <Column
            key={i}
            cards={col}
            direction={colConfig[i].direction}
            duration={colConfig[i].duration}
          />
        ))}
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Centered content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 ">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl text-white max-w-4xl  mb-2">
          A Growing Collection of Remarkable Places
        </h2>
        <p className="text-white text-sm sm:text-base max-w-2xl mb-6 ">
          We&apos;ve done the searching for you, bringing together places shaped by passionate hoteliers
          and hosts who pour care, character, and intention into every stay.
        </p>
        <button className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5">
          EXPLORE THE ALLIANCE
          <BsArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};

export default ExploreAlliance;
