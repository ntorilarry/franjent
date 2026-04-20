"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import {
  LuGlobe,
  LuCompass,
  LuHandshake,
  LuScale,
  LuLeaf,
  LuHouse,
  LuBuilding2,
  LuTrees,
} from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

type Partner = {
  name: string;
  city: string;
  country: string;
  region: "Europe" | "Americas" | "Asia Pacific" | "Africa & Middle East";
  type: "Hotel" | "Residence" | "Retreat";
  image: string;
  joined: string;
};

const regions: ("All" | Partner["region"])[] = [
  "All",
  "Europe",
  "Americas",
  "Asia Pacific",
  "Africa & Middle East",
];

const typeOptions: ("All" | Partner["type"])[] = [
  "All",
  "Hotel",
  "Residence",
  "Retreat",
];

const typeIcons: Record<Partner["type"], React.ComponentType<{ className?: string }>> = {
  Hotel: LuBuilding2,
  Residence: LuHouse,
  Retreat: LuTrees,
};

const partners: Partner[] = [
  {
    name: "Claridge's",
    city: "London",
    country: "England",
    region: "Europe",
    type: "Hotel",
    joined: "2019",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&h=1100&fit=crop",
  },
  {
    name: "Hotel Le Marais",
    city: "Paris",
    country: "France",
    region: "Europe",
    type: "Hotel",
    joined: "2019",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&h=1100&fit=crop",
  },
  {
    name: "The Barn",
    city: "Cotswolds",
    country: "England",
    region: "Europe",
    type: "Retreat",
    joined: "2020",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&h=1100&fit=crop",
  },
  {
    name: "Cervo Mountain Resort",
    city: "Zermatt",
    country: "Switzerland",
    region: "Europe",
    type: "Retreat",
    joined: "2021",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=1100&fit=crop",
  },
  {
    name: "Nihi Sumba",
    city: "East Nusa Tenggara",
    country: "Indonesia",
    region: "Asia Pacific",
    type: "Retreat",
    joined: "2020",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=900&h=1100&fit=crop",
  },
  {
    name: "Kokomo Private Island",
    city: "Yaukuve Levu",
    country: "Fiji",
    region: "Asia Pacific",
    type: "Retreat",
    joined: "2022",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&h=1100&fit=crop",
  },
  {
    name: "Aman Kyoto",
    city: "Kyoto",
    country: "Japan",
    region: "Asia Pacific",
    type: "Hotel",
    joined: "2021",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?w=900&h=1100&fit=crop",
  },
  {
    name: "Abode Malibu",
    city: "Malibu",
    country: "USA",
    region: "Americas",
    type: "Residence",
    joined: "2022",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&h=1100&fit=crop",
  },
  {
    name: "Dunton River Camp",
    city: "Dolores",
    country: "USA",
    region: "Americas",
    type: "Retreat",
    joined: "2021",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&h=1100&fit=crop",
  },
  {
    name: "The Annex",
    city: "Johnson City",
    country: "USA",
    region: "Americas",
    type: "Residence",
    joined: "2023",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&h=1100&fit=crop",
  },
  {
    name: "Riad Yasmine",
    city: "Marrakesh",
    country: "Morocco",
    region: "Africa & Middle East",
    type: "Hotel",
    joined: "2020",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=900&h=1100&fit=crop",
  },
  {
    name: "Sharq Village",
    city: "Doha",
    country: "Qatar",
    region: "Africa & Middle East",
    type: "Hotel",
    joined: "2024",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&h=1100&fit=crop",
  },
];

const regionStats = [
  { region: "Europe", count: 68 },
  { region: "Americas", count: 54 },
  { region: "Asia Pacific", count: 41 },
  { region: "Africa & Middle East", count: 21 },
];

const criteria = [
  {
    icon: LuCompass,
    title: "Independently operated",
    body: "We work only with properties owned and run by the people who decide how the lobby smells and who runs the kitchen.",
  },
  {
    icon: LuScale,
    title: "Quiet excellence",
    body: "We don't care about marble atriums. We care about service you'd describe to a friend — and food worth staying in for.",
  },
  {
    icon: LuLeaf,
    title: "Local at every seam",
    body: "Local ownership, locally-hired staff, responsibly sourced goods. We verify, and we re-verify yearly.",
  },
  {
    icon: LuHandshake,
    title: "A two-way relationship",
    body: "Partners share transparency on rates, availability, and guest notes. We share members who spend, return, and recommend.",
  },
];

const spotlight = {
  name: "Claridge's",
  kicker: "Partner Spotlight · No. 14",
  quote:
    "Joining Journey didn't change how we run the hotel. It changed how often we see the same faces.",
  speaker: "Felicity Long",
  role: "General Manager",
  location: "Mayfair, London",
  image:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&h=1000&fit=crop",
};

export default function AlliancePage() {
  const [region, setRegion] = useState<(typeof regions)[number]>("All");
  const [type, setType] = useState<(typeof typeOptions)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners.filter((p) => {
      if (region !== "All" && p.region !== region) return false;
      if (type !== "All" && p.type !== type) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q)
      );
    });
  }, [region, type, query]);

  const totalPartners = partners.length;

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&h=1200&fit=crop"
          alt="The Alliance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-8xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-16 lg:pb-28">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <div className="h-px w-16 bg-white" />
            <p className="text-sm font-medium text-white tracking-widest uppercase">
              The Alliance
            </p>
          </div>
          <h1 className="max-w-5xl text-6xl font-heading font-light text-white sm:text-7xl lg:text-8xl">
            184 hoteliers.{" "}
            <span className="italic">One short list.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base font-body text-gray-200">
              The Alliance is the network of independent hotels, residences,
              and retreats that Journey members stay across — vetted by a
              team that has slept in every single one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#directory"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Browse The Directory
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#partner"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Become A Partner
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto + region stats */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              What The Alliance Is
            </p>
            <h2 className="mb-8 text-5xl font-light text-slate-900 sm:text-6xl lg:text-7xl">
              A network, not{" "}
              <span className="italic">a collection.</span>
            </h2>
            <p className="mb-6 max-w-md text-base leading-relaxed text-slate-700">
              Every partner is a working independent — owned by the family
              or the founder whose name is still on the letterhead. We
              don&apos;t franchise them. We don&apos;t consolidate them. We
              introduce them to travelers who know the difference.
            </p>
            <p className="max-w-md text-base leading-relaxed text-slate-700">
              Growth is slow on purpose. We add between 12 and 20 partners
              a year, each after a two-night stay by a member of our team.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-slate-300 pb-4">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                <LuGlobe className="h-4 w-4" />
                Partners by region
              </p>
              <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {totalPartners} total
              </p>
            </div>
            {regionStats.map((r) => {
              const pct = Math.round((r.count / 184) * 100);
              return (
                <div key={r.region} className="py-3">
                  <div className="mb-2 flex items-end justify-between">
                    <span className="text-base text-slate-900">
                      {r.region}
                    </span>
                    <span className="text-2xl font-light text-slate-900">
                      {r.count}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-slate-900 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section id="directory" className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                The Directory
              </p>
              <h2 className="text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
                Every partner, on one page.
              </h2>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-slate-300 bg-white p-1.5">
              <FiSearch className="ml-3 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, city, country"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Filter rows */}
          <div className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                Region
              </span>
              {regions.map((r) => {
                const isActive = region === r;
                return (
                  <button
                    key={r}
                    onClick={() => setRegion(r)}
                    className={`inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "border border-slate-300 text-slate-700 hover:border-slate-900"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-3 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                Type
              </span>
              {typeOptions.map((t) => {
                const isActive = type === t;
                const Icon = t === "All" ? null : typeIcons[t];
                return (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-widest transition-all ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "border border-slate-300 text-slate-700 hover:border-slate-900"
                    }`}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mb-8 text-xs tracking-widest uppercase text-slate-500">
            Showing {filtered.length} of {totalPartners}
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 px-8 py-16 text-center">
              <p className="text-sm text-slate-600">
                No partners match those filters. Try a broader region or
                clear your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((p) => {
                const Icon = typeIcons[p.type];
                return (
                  <Link
                    key={p.name}
                    href="/search"
                    className="group block"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-800 uppercase backdrop-blur-sm">
                        <Icon className="h-3 w-3" />
                        {p.type}
                      </span>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-lg font-light text-white">
                          {p.name}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-white/80">
                          <IoLocationOutline className="h-3 w-3" />
                          <span className="uppercase tracking-widest">
                            {p.city}, {p.country}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                      Partner since {p.joined}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Partner spotlight */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <div className="relative overflow-hidden rounded-4xl bg-slate-900">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src={spotlight.image}
                  alt={spotlight.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
                  <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                    {spotlight.name}
                  </p>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-white/70">
                    <IoLocationOutline className="h-3.5 w-3.5" />
                    {spotlight.location}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                {spotlight.kicker}
              </p>
              <blockquote className="mb-8 text-3xl font-light leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                &ldquo;{spotlight.quote}&rdquo;
              </blockquote>
              <div className="mb-8">
                <p className="text-sm font-semibold text-slate-900">
                  {spotlight.speaker}
                </p>
                <p className="text-xs tracking-widest uppercase text-slate-500">
                  {spotlight.role} · {spotlight.name}
                </p>
              </div>
              <Link
                href="/franjent-studios"
                className="inline-flex w-fit items-center gap-4 rounded-full border-2 border-slate-900 bg-transparent px-7 py-3 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:gap-5"
              >
                Read The Full Interview
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Criteria */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
              How We Choose
            </p>
            <h2 className="text-4xl font-light text-slate-900 sm:text-5xl lg:text-6xl">
              Four things a property must be,{" "}
              <span className="italic">and stay being.</span>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {criteria.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group flex flex-col rounded-3xl border border-slate-200 p-8 transition-all hover:border-slate-900 hover:shadow-[0_20px_40px_-25px_rgba(15,23,42,0.2)]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2eee6] transition-colors group-hover:bg-slate-900">
                      <Icon className="h-5 w-5 text-slate-800 transition-colors group-hover:text-white" />
                    </span>
                    <span className="text-2xl font-light text-slate-300">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mb-4 text-xl font-light leading-tight text-slate-900">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section id="partner" className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                Apply To Join
              </p>
              <h2 className="mb-8 text-5xl font-light text-slate-900 sm:text-6xl lg:text-7xl">
                Think your house belongs on the list?
              </h2>
              <p className="max-w-md text-base leading-relaxed text-slate-700">
                We read every application. If your property fits what
                we&apos;re looking for, a member of our team will contact
                you within three weeks to arrange a visit.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
              <div className="mb-8 space-y-5">
                {[
                  {
                    step: "01",
                    title: "Introduction",
                    body: "Tell us about the property, the people behind it, and what makes it worth the trip.",
                  },
                  {
                    step: "02",
                    title: "The Visit",
                    body: "A member of our team stays two nights. Unannounced, paid-in-full.",
                  },
                  {
                    step: "03",
                    title: "The Conversation",
                    body: "If it's a fit, we talk terms. Rates, availability, and how we share member data.",
                  },
                  {
                    step: "04",
                    title: "Welcome",
                    body: "You're introduced to 80,000 members and listed in our directory.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex gap-5 border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                      {s.step}
                    </span>
                    <div>
                      <p className="mb-1 text-base font-semibold text-slate-900">
                        {s.title}
                      </p>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {s.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="mailto:alliance@franjent.com"
                className="inline-flex w-full items-center justify-center gap-4 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-slate-800 hover:gap-5"
              >
                Start An Application
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-center text-xs text-slate-500">
                No application fee. We respond within three weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-xs font-semibold tracking-widest text-white/70 uppercase">
              For Travelers
            </p>
            <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              One membership. {totalPartners}+ ways to spend a night.
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/75">
              Every property in the Alliance honors the same member rates,
              the same upgrades, and the same quiet recognition at the
              front desk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Join Journey
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                Browse Stays
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
