import FilterSelector from "@/components/filters/filter-selector";
import ProductsList, { IProduct } from "@/components/products/product-list";
import { categories } from "@/helpers/common-helper";
import { getProducts } from "@/helpers/fetch-helper";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <FilterSelector options={categories} />
      <ProductsList products={products as IProduct[]} />
    </div>
  )
}
