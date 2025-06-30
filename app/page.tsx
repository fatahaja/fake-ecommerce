import FilterSelector from "@/components/filters/filter-selector";
import ProductsList, { IProduct } from "@/components/products/product-list";
import { categories } from "@/helpers/common-helper";
import { getProducts } from "@/helpers/fetch-helper";

async function ProductSection() {
  const products = await getProducts();

  return (
    <ProductsList products={products as IProduct[]} />
  );
}

export default async function Home() {
  return (
    <>
      <FilterSelector options={categories} />
      <ProductSection />
    </>
  )
}