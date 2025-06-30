'use client'

import { SelectedSortType, useAppContext } from "@/app/context/app-context"
import { useState } from "react"
import CartCounter from "./cart-counter"

const sortOptions: { name: string, value: SelectedSortType | null }[] = [
  { name: 'Default', value: null },
  { name: 'Lowest Price', value: 'lowestPriceFirst' },
  { name: 'Higest Price', value: 'highestPriceFirst' },
  { name: 'A to Z', value: 'ascending' },
  { name: 'Z to A', value: 'descending' }
]

const SortSelector = () => {
  const { selectedSort, setSelectedSort } = useAppContext()

  const [isShow, setIsShow] = useState(false)

  const getSelectedSortName = (val: string | null) => {
    return sortOptions.filter(item => item.value == val)[0].name
  }

  return (
    <div className="flex justify-between items-center gap-8">
      <div className="relative z-10 flex items-center my-2 text-gray-500">
        <p className="font-bold  px-4">Sort:</p>
        <div onClick={() => setIsShow(!isShow)} className="px-2 py-1 w-32 cursor-pointer rounded-md border border-gray-500 flex items-center justify-center">
          {getSelectedSortName(selectedSort)}
        </div>

        {isShow && (
          <div className="absolute w-32 right-0 top-10 p-2 flex flex-col gap-2 bg-white rounded-md border border-gray-500">
            {sortOptions.map((item, idx) => {
              return (
                <div
                  key={`button-sort-${idx}`}
                  onClick={() => {
                    setSelectedSort(item.value)
                    setIsShow(false)
                  }}
                  className="flex cursor-pointer px-2 items-center justify-center rounded hover:bg-gray-300"
                >
                  {item.name}
                </div>
              )
            })}
          </div>
        )}
      </div>
      <CartCounter />
    </div>
  )
}

export default SortSelector