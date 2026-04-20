"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import MainLayout from "@/shared/mainLayout";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  read: string;
  image: string;
  place?: string;
};

const categories = [
  "All",
  "Stays",
  "Essays",
  "Interviews",
  "Field Notes",
  "Design",
  "Food",
];

const featured: Post = {
  id: "quiet-art-returning",
  title: "The quiet art of the returning guest",
  excerpt:
    "On being recognized without being remembered, and why the small gesture — a flower, a note, the right pillow — has outlived every loyalty tier chart ever printed.",
  category: "Essays",
  author: "Amara Okafor",
  date: "April 14, 2026",
  read: "9 min read",
  place: "London, England",
  image:
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1800&h=1100&fit=crop",
};

const subFeatured: Post[] = [
  {
    id: "third-gen-innkeeper",
    title: "Ten questions for a third-generation innkeeper",
    excerpt:
      "Lila Mercier sits down with the woman who learned hospitality at her grandmother's reception desk.",
    category: "Interviews",
    author: "Lila Mercier",
    date: "April 9, 2026",
    read: "14 min read",
    place: "Cotswolds, England",
    image:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1000&h=800&fit=crop",
  },
  {
    id: "breakfast-country",
    title: "What hotel breakfasts say about the country they're in",
    excerpt:
      "A field report from seven mornings, seven cities, and one surprisingly controversial take on the continental.",
    category: "Field Notes",
    author: "Tomás Reyes",
    date: "April 2, 2026",
    read: "6 min read",
    place: "Seven cities",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&h=800&fit=crop",
  },
];

const posts: Post[] = [
  {
    id: "design-light",
    title: "A hotel&apos;s whole language is its light",
    excerpt:
      "How the best properties in Kyoto, Marrakesh, and Copenhagen use light as their only design signature.",
    category: "Design",
    author: "Kenji Watanabe",
    date: "March 28, 2026",
    read: "7 min read",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=700&fit=crop",
  },
  {
    id: "off-season",
    title: "The case for the off-season",
    excerpt:
      "Cornwall in February. Santorini in November. Why the best time to go is usually the one the guidebook warns you against.",
    category: "Essays",
    author: "Amara Okafor",
    date: "March 22, 2026",
    read: "5 min read",
    image:
      "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&h=700&fit=crop",
  },
  {
    id: "kitchen-residency",
    title: "Notes from a three-week kitchen residency",
    excerpt:
      "A guest chef program at The Barn, reported from behind the pass.",
    category: "Food",
    author: "Tomás Reyes",
    date: "March 15, 2026",
    read: "11 min read",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=700&fit=crop",
  },
  {
    id: "islands-to-yourself",
    title: "Six islands you can almost have to yourself",
    excerpt:
      "A curated short list of the quieter archipelagos — and when, exactly, to book them.",
    category: "Stays",
    author: "Priya Shankar",
    date: "March 8, 2026",
    read: "8 min read",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900&h=700&fit=crop",
  },
  {
    id: "concierge-phone",
    title: "The concierge, and the phone that never rings after midnight",
    excerpt:
      "Our director of member services on running a 24-hour desk at a company of thirty-one.",
    category: "Interviews",
    author: "Amara Okafor",
    date: "March 1, 2026",
    read: "10 min read",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&h=700&fit=crop",
  },
  {
    id: "mountain-lodges",
    title: "Alpine lodges for people who don&apos;t ski",
    excerpt:
      "Where to go in the Alps for firewood, hot cocoa, and a good book — no poles required.",
    category: "Stays",
    author: "Kenji Watanabe",
    date: "February 22, 2026",
    read: "6 min read",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=700&fit=crop",
  },
];

const tags = [
  "Boutique",
  "Hospitality",
  "Slow travel",
  "Off-season",
  "Member letters",
  "Design",
  "Interviews",
];

const stripApos = (s: string) => s.replace(/&apos;/g, "'");

export default function BlogPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCat = category === "All" || p.category === category;
      if (!inCat) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q)
      );
    });
  }, [category, query]);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative isolate min-h-[75vh] overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=1800&h=1200&fit=crop"
          alt="The Journal"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-8xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-16 lg:pb-20">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <div className="h-px w-16 bg-white" />
            <p className="text-sm font-medium text-white tracking-widest uppercase">
              The Journal
            </p>
          </div>
          <h1 className="max-w-5xl text-6xl font-heading font-light text-white sm:text-7xl lg:text-8xl">
            Words from{" "}
            <span className="italic">the road, slowly.</span>
          </h1>
          <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-base font-body text-gray-200">
              Essays, interviews, and field notes — reported from the ground
              by the people behind Franjent Studios.
            </p>
            <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-white/40 bg-white/10 p-1.5 backdrop-blur">
              <FiSearch className="ml-3 h-4 w-4 text-white/80" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the journal"
                className="flex-1 bg-transparent px-2 py-2 text-sm text-white placeholder:text-white/60 outline-none"
              />
              <button
                type="button"
                className="shrink-0 rounded-full bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:bg-white/90"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="sticky top-0 z-20 border-b border-slate-200 bg-[#f2eee6]/95 backdrop-blur">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-16">
          <div className="flex items-center gap-3 overflow-x-auto py-5">
            {categories.map((c) => {
              const isActive = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "border border-slate-300 text-slate-700 hover:border-slate-900"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-[#f2eee6] px-4 py-20 sm:px-6 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-8xl">
          <div className="mb-10 flex items-end justify-between">
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
              This Week
            </p>
            <Link
              href="#archive"
              className="text-xs font-semibold uppercase tracking-widest text-slate-700 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
            >
              Full archive
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <Link
              href="#"
              className="group relative overflow-hidden rounded-4xl bg-slate-900"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-white/90 px-3.5 py-1.5 text-[10px] font-semibold tracking-widest text-slate-800 uppercase backdrop-blur-sm">
                  {featured.category}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-12">
                  <p className="mb-4 inline-flex items-center gap-1.5 text-xs text-white/70">
                    <IoLocationOutline className="h-3.5 w-3.5" />
                    {featured.place}
                  </p>
                  <h2 className="mb-5 max-w-2xl text-4xl font-light leading-tight sm:text-5xl lg:text-6xl">
                    {stripApos(featured.title)}
                  </h2>
                  <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/80">
                    {stripApos(featured.excerpt)}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/15 pt-5 text-xs">
                    <span className="font-semibold">{featured.author}</span>
                    <span className="flex items-center gap-3 text-white/70">
                      <span>{featured.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <LuClock3 className="h-3.5 w-3.5" />
                        {featured.read}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex flex-col gap-6">
              {subFeatured.map((p) => (
                <Link
                  key={p.id}
                  href="#"
                  className="group flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition-colors hover:border-slate-900 sm:flex-row sm:p-5"
                >
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100 sm:h-36 sm:w-44">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                        {p.category}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-2">
                        {stripApos(p.title)}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-600">
                        {stripApos(p.excerpt)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{p.author}</span>
                      <span className="inline-flex items-center gap-1">
                        <LuClock3 className="h-3 w-3" />
                        {p.read}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Archive grid + tag rail */}
      <section id="archive" className="bg-white px-4 py-20 sm:px-6 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-8xl gap-12 lg:grid-cols-[1fr_280px] lg:gap-16">
          <div>
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  {category === "All"
                    ? "Latest"
                    : `Filed under · ${category}`}
                </p>
                <h2 className="text-4xl font-light text-slate-900 sm:text-5xl">
                  {filtered.length} {filtered.length === 1 ? "story" : "stories"}
                </h2>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 px-8 py-16 text-center">
                <p className="text-sm text-slate-600">
                  Nothing matches that search yet. Try another category or
                  word.
                </p>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2">
                {filtered.map((p) => (
                  <Link key={p.id} href="#" className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-800 uppercase backdrop-blur-sm">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-light leading-tight text-slate-900 group-hover:underline decoration-slate-300 underline-offset-2">
                      {stripApos(p.title)}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {stripApos(p.excerpt)}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                      <span className="font-semibold text-slate-900">
                        {p.author}
                      </span>
                      <span className="flex items-center gap-3">
                        <span>{p.date}</span>
                        <span className="inline-flex items-center gap-1">
                          <LuClock3 className="h-3 w-3" />
                          {p.read}
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {filtered.length > 0 && (
              <div className="mt-14 flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-4 rounded-full border-2 border-slate-900 bg-transparent px-8 py-3 text-xs font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-slate-900 hover:text-white hover:gap-5"
                >
                  Load More
                  <BsArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10 lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-3xl border border-slate-200 p-6">
              <p className="mb-4 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                Popular Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t}
                    onClick={() => setQuery(t)}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-[11px] font-medium text-slate-700 transition-colors hover:border-slate-900 hover:text-slate-900"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl bg-slate-900 p-7 text-white">
              <p className="mb-3 text-[10px] font-semibold tracking-widest text-white/70 uppercase">
                The Dispatch
              </p>
              <h3 className="mb-3 text-2xl font-light leading-tight">
                A quiet letter, once a month.
              </h3>
              <p className="mb-5 text-xs leading-relaxed text-white/75">
                One essay, one hotel worth flying for, one sentence we
                couldn&apos;t stop thinking about.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="flex flex-col gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none focus:bg-white/15"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-slate-900 transition-colors hover:bg-white/90"
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                  {!subscribed && <BsArrowRight className="h-3.5 w-3.5" />}
                </button>
              </form>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-semibold tracking-widest text-slate-500 uppercase">
                From The Archive
              </p>
              <div className="space-y-5">
                {posts.slice(0, 3).map((p, i) => (
                  <Link
                    key={p.id}
                    href="#"
                    className="group flex items-start gap-4"
                  >
                    <span className="text-2xl font-light text-slate-300 group-hover:text-slate-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 border-b border-slate-100 pb-5">
                      <h4 className="text-sm font-semibold leading-snug text-slate-900 group-hover:underline decoration-slate-300 underline-offset-2">
                        {stripApos(p.title)}
                      </h4>
                      <p className="mt-1 text-[11px] text-slate-500">
                        {p.author} · {p.read}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#f2eee6] px-4 pb-24 sm:px-6 lg:px-16">
        <div className="relative mx-auto max-w-8xl overflow-hidden rounded-4xl bg-slate-900 px-8 py-16 sm:px-14 sm:py-20 lg:px-20 lg:py-24">
          <Image
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&h=900&fit=crop"
            alt=""
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 text-xs font-semibold tracking-widest text-white/70 uppercase">
              Written something good?
            </p>
            <h2 className="mb-6 text-4xl font-light text-white sm:text-5xl lg:text-6xl">
              We publish two outside essays a season.
            </h2>
            <p className="mb-10 max-w-lg text-sm leading-relaxed text-white/75">
              If you&apos;ve reported a story from the road — quiet, honest,
              and long enough to matter — we&apos;d like to read it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="mailto:journal@franjent.com"
                className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-slate-900 transition-all hover:bg-white/90 hover:gap-5"
              >
                Pitch The Journal
                <BsArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/franjent-studios"
                className="inline-flex items-center gap-4 rounded-full border border-white/60 bg-transparent px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-white/10 hover:gap-5"
              >
                About The Studio
                <BsArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
