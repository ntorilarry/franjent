"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import {
  LuWaves,
  LuBuilding2,
  LuTrees,
  LuMountain,
  LuCompass,
  LuSparkles,
} from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

type Collection = {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  size: "tall" | "wide" | "regular";
};

const filters = [
  { key: "all", label: "All Collections", icon: LuSparkles },
  { key: "beach", label: "Beachside", icon: LuWaves },
  { key: "city", label: "City", icon: LuBuilding2 },
  { key: "country", label: "Countryside", icon: LuTrees },
  { key: "mountain", label: "Mountain", icon: LuMountain },
  { key: "secluded", label: "Secluded", icon: LuCompass },
];

const collections: Collection[] = [
  {
    id: "coastal-serenity",
    tag: "Beachside Retreats",
    title: "Coastal Serenity",
    description:
      "Barefoot mornings and sunset rituals at hand-picked shores from Sumba to Santorini.",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&h=1500&fit=crop",
    count: 24,
    icon: LuWaves,
    size: "tall",
  },
  {
    id: "metropolitan-nights",
    tag: "City Boutiques",
    title: "Metropolitan Nights",
    description:
      "Design-forward townhouses and penthouses in the world's most restless capitals.",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&h=900&fit=crop",
    count: 31,
    icon: LuBuilding2,
    size: "wide",
  },
  {
    id: "countryside-quiet",
    tag: "Countryside Getaways",
    title: "Countryside Quiet",
    description:
      "Slow mornings, woodsmoke, and handwritten menus. A tonic for the over-scheduled.",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1200&h=1500&fit=crop",
    count: 18,
    icon: LuTrees,
    size: "regular",
  },
  {
    id: "peaks-and-powder",
    tag: "Mountain Escapes",
    title: "Peaks & Powder",
    description:
      "Alpine lodges tuned for fireside evenings and first-tracks mornings.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1500&fit=crop",
    count: 15,
    icon: LuMountain,
    size: "tall",
  },
  {
    id: "hidden-islands",
    tag: "Secluded Retreats",
    title: "Hidden Islands",
    description:
      "Private cays and barefoot-only resorts for the travelers who want to disappear.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1400&h=900&fit=crop",
    count: 9,
    icon: LuCompass,
    size: "wide",
  },
  {
    id: "architectural-icons",
    tag: "Design Destinations",
    title: "Architectural Icons",
    description:
      "Stays where the building is the reason to book — landmarks, manifestos, and listed gems.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=1500&fit=crop",
    count: 22,
    icon: LuSparkles,
    size: "regular",
  },
];

const editorPicks = [
  {
    name: "Nihi Sumba",
    location: "East Nusa Tenggara, Indonesia",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&h=1100&fit=crop",
  },
  {
    name: "Claridge's",
    location: "London, England",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&h=1100&fit=crop",
  },
  {
    name: "Cervo Mountain Resort",
    location: "Zermatt, Switzerland",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1100&fit=crop",
  },
  {
    name: "Kokomo Private Island",
    location: "Fiji Islands, Pacific",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&h=1100&fit=crop",
  },
];

const spanFor = (size: Collection["size"]) => {
  if (size === "wide") return "lg:col-span-2 lg:row-span-1 h-[420px]";
  if (size === "tall") return "lg:col-span-1 lg:row-span-2 h-[420px] lg:h-[860px]";
  return "lg:col-span-1 lg:row-span-1 h-[420px]";
};

export default function CollectionsPage() {
  const [active, setActive] = useState("all");
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative isolate min-h-[85vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&h=1200&fit=crop"
          alt="Curated collections hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/80" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-8xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-16 lg:pb-28">
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            <div className="h-px w-16 bg-white" />
            <p className="text-sm font-medium text-white tracking-widest uppercase">
              Curated by Journey
            </p>
          </div>
          <h1 className="max-w-4xl text-6xl font-heading font-light text-white sm:text-7xl lg:text-8xl">
            Stays, gathered by{" "}
            <span className="italic">intention.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-body text-gray-200">
            Collections are our editors&apos; answer to &quot;where should we go
            next?&quot; Every grouping is hand-built around a feeling — the
            hush of a valley, the hum of a capital, the particular light of a
            coast at 6pm.
          </p>
        </div>
      </section>

      {/* Filter strip */}
      <section className="sticky top-0 z-20 border-b border-slate-200 bg-[#f2eee6]/95 backdrop-blur">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
          <div className="flex items-center gap-3 overflow-x-auto py-5">
            {filters.map((f) => {
              const Icon = f.icon;
              const isActive = active === f.key;
              return (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "border border-slate-300 text-slate-700 hover:border-slate-900"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Collection grid */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {collections.length} Collections · Updated Weekly
              </p>
              <h2 className="max-w-2xl text-4xl text-slate-900 sm:text-5xl lg:text-6xl">
                Pick a mood. We&apos;ll handle the list.
              </h2>
            </div>
            <Link
              href="/search"
              className="inline-flex shrink-0 items-center gap-4 rounded-full border-2 border-slate-900 bg-transparent px-7 py-3 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:gap-5"
            >
              Browse All Stays
              <BsArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid auto-rows-[420px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((c) => {
              const Icon = c.icon;
              const isLiked = liked[c.id];
              return (
                <Link
                  key={c.id}
                  href={`/search?collection=${c.id}`}
                  className={`group relative overflow-hidden rounded-3xl bg-slate-900 ${spanFor(
                    c.size
                  )}`}
                >
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/10" />

                  {/* Top row: count badge + like */}
                  <div className="absolute left-5 right-5 top-5 z-10 flex items-start justify-between">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 backdrop-blur-sm">
                      <Icon className="h-3.5 w-3.5 text-slate-800" />
                      <span className="text-[10px] font-semibold tracking-widest text-slate-800 uppercase">
                        {c.count} Stays
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(c.id);
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-colors hover:bg-white"
                      aria-label="Save collection"
                    >
                      <FiHeart
                        className={`h-4 w-4 ${
                          isLiked
                            ? "fill-red-500 text-red-500"
                            : "text-slate-700"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-7 text-white">
                    <p className="mb-3 text-[11px] font-semibold tracking-widest text-white/70 uppercase">
                      {c.tag}
                    </p>
                    <h3 className="mb-3 text-3xl font-light leading-tight lg:text-4xl">
                      {c.title}
                    </h3>
                    <p className="mb-5 max-w-md text-sm leading-relaxed text-white/80">
                      {c.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white transition-all group-hover:gap-3">
                      Explore Collection
                      <BsArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editor's note + picks */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              From The Editor
            </p>
            <blockquote className="mb-8 text-3xl font-light leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              &ldquo;A good collection is a conversation — a reason to go,
              not just a place to stay.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop"
                  alt="Editor portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Amara Okafor
                </p>
                <p className="text-xs text-slate-500 tracking-wide uppercase">
                  Head of Curation, Journey
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-end justify-between">
              <h3 className="text-2xl text-slate-900 sm:text-3xl">
                This month&apos;s editor picks
              </h3>
              <Link
                href="/search"
                className="text-xs font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {editorPicks.map((p) => (
                <div key={p.name} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-900">
                    {p.name}
                  </p>
                  <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
                    <IoLocationOutline className="h-3.5 w-3.5" />
                    <span>{p.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-xs font-semibold tracking-widest text-white/70 uppercase">
              Collect your own
            </p>
            <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              Save collections. Build wishlists. Travel with intent.
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/75">
              Members unlock private wishlists, early access to new
              collections, and member-only rates across every stay we list.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Become A Member
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Explore Stays
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
