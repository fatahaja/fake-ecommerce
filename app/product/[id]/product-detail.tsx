'use client'

import { useAppContext } from "@/app/context/app-context"
import CartCounter from "@/components/filters/cart-counter"
import ProductImage from "@/components/products/product-image"
import { delay } from "@/helpers/common-helper"
import { useState } from "react"

export interface IProductDetail {
  id: string,
  name: string,
  category: string,
  price: number,
  description: string,
  imageUrl: string,
  stock: number
}

interface IProps {
  product: IProductDetail
}

const ProductDetail = ({ product }: IProps) => {
  const { cartCount, setCartCount } = useAppContext();
  const [addToCartLoading, setAddToCartLoading] = useState(false);

  const handleAddToCart = async (count: number) => {
    setAddToCartLoading(true);
    await delay(1000);
    setCartCount(count);
    setAddToCartLoading(false);
  }

  return (
    <div className="relative p-10 flex flex-col gap-4 justify-center md:flex-row md:gap-12">
      <div className="w-full min-w-32 max-w-xl overflow-hidden md:max-w-md">
        <ProductImage src={product.imageUrl} alt={product.name} className="rounded-xl" />
      </div>
      <div className="flex flex-col gap-3 w-full max-w-xl">
        <p className="md:text-2xl font-bold">{product.name}</p>
        <p className="text-gray-400 ">Stock: {product.stock}</p>
        <p className="md:text-xl text-orange-500">$ {product.price}</p>
        <section className="flex flex-col gap-2 rounded-xl border-gray-400 md:p-2 md:border">
          <p className="font-semibold">Product Description:</p>
          <p>{product.description}</p>
        </section>
        <button
          disabled={addToCartLoading}
          onClick={() => handleAddToCart(cartCount + 1)}
          className={`p-2 mt-8 cursor-pointer rounded-xl text-2xl font-semibold text-white ${addToCartLoading ? 'bg-gray-400 animate-pulse cursor-progress' : 'bg-orange-400'}`}
        >{addToCartLoading ? "Loading..." : "Add to cart"}</button>
      </div>
      <div className="fixed right-2 top-2">
        <CartCounter />
      </div>
    </div>
  )
}

export default ProductDetail