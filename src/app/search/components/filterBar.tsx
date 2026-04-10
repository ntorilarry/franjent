"use client";

import { useState } from "react";
import { LuBuilding2 } from "react-icons/lu";
import { PiStarFourBold } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi";

const filters = [
  { label: "Residences", icon: HiOutlineHome },
  { label: "Hotels", icon: LuBuilding2 },
  { label: "Unique Stays", icon: PiStarFourBold },
];

const FilterBar = ({ count }: { count: number }) => {
  const [active, setActive] = useState("Residences");

  return (
    <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <p className="text-sm text-gray-500">
        <span className="font-medium text-gray-900">{count}</span> available
        stays
      </p>

      <div className="flex items-center gap-2">
        <span className="mr-2 hidden text-xs font-medium uppercase tracking-wider text-gray-400 sm:block">
          Filter by Property Type
        </span>
        {filters.map((f) => {
          const Icon = f.icon;
          const isActive = active === f.label;
          return (
            <button
              key={f.label}
              onClick={() => setActive(f.label)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                isActive
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {f.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
