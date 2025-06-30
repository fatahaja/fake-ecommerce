'use client';

import { useAppContext } from "@/app/context/app-context";
import ProductImage from "./product-image";
import Link from "next/link";
import { applySort } from "@/helpers/common-helper";

export interface IProduct {
  id: string,
  name: string,
  category: string,
  price: number,
  description: string,
  imageUrl: string,
}

interface IProps {
  products: IProduct[]
}

const fiterProductsByCategory = (cat: string, items: IProduct[] = []) => {
  if (!items.length) return [];
  if (cat == '') return items

  return items.reduce((acc: IProduct[], item) => {
    if (item.category === cat) {
      acc.push(item);
    }
    return acc;
  }, []);
}


const ProductsList = ({ products }: IProps) => {
  const { category, selectedSort } = useAppContext();

  const sortedProduct = applySort(selectedSort, products)
  const filteredProducts = fiterProductsByCategory(category, sortedProduct)

  if (!filteredProducts.length) {
    return (
      <div className="w-full p-8 text-3xl text-gray-400 font-bold flex items-center justify-center">No Product</div>
    )
  }

  return (
    <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product, idx) => {
        return (
          <div key={`product-card-${idx}`}
            className="p-4 cursor-pointer flex flex-col gap-2 rounded-xl min-w-32 max-w-md bg-orange-50 hover:border border-orange-600"
          >
            <Link href={`product/${product.id}`}>
              <ProductImage src={product.imageUrl || ''} alt={product.name} />
              <div className="p-2 rounded-sm">
                <p className="font-semibold md:text-xl">{product.name}</p>
                <p className=" text-orange-600 md:text-2xl">$ {product.price}</p>
                <p className=" text-gray-600 text-xs md:text-sm">{product.description}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ProductsList;