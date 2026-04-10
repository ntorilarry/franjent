"use client";

import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl items-center gap-0 rounded-full border border-gray-200 bg-white shadow-sm">
          {/* Where */}
          <div className="flex-1 border-r border-gray-200 px-6 py-3">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Where
            </label>
            <input
              type="text"
              defaultValue="Map Area"
              placeholder="Search places"
              className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* When */}
          <div className="flex-1 border-r border-gray-200 px-6 py-3">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              When
            </label>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400"
            />
          </div>

          {/* With Who */}
          <div className="flex-1 px-6 py-3">
            <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              With Who
            </label>
            <select className="w-full bg-transparent text-sm font-medium text-gray-900 outline-none">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
              <option>5 Adults</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="pr-2">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-gray-800">
              <FiSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
