'use client';

import { useAppContext } from "@/app/context/app-context";
import SortSelector from "./sort-selector";

interface IFilterSelector {
  options?: string[];
}


export default function FilterSelector({ options = ["Books", "Phones"] }: IFilterSelector) {
  const { category, setCategory } = useAppContext()

  const handleClick = (option: string, currentState: string, cb: (input: string) => void) => {
    if (option == currentState) return cb('')

    return cb(option)
  }

  return (
    <div className="p-4 md:flex md:justify-between">
      <div className="flex overflow-y-auto no-scrollbar  items-center gap-4">
        {options.map((option) => (
          <button
            key={`filter-option-${option}`}
            onClick={() => handleClick(option, category, setCategory)}
            className={`px-6 py-1 cursor-pointer rounded-md border border-orange-600 
            hover:bg-orange-300 hover:text-white 
            ${category === option ? "bg-orange-400 text-white" : ""}`}
          >
            {option}
          </button>
        ))}
      </div>
      <SortSelector />
    </div>
  );
}