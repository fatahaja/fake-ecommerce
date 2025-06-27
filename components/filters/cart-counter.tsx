'use-client'

import { useAppContext } from "@/app/context/app-context"

const CartCounter = () => {
  const { cartCount } = useAppContext()
  return (
    <div className="px-4 py-1 w-24 flex justify-center bg-orange-400 rounded-full text-white font-bold">Cart: {cartCount}</div>
  )
}

export default CartCounter