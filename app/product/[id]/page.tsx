import { getProductById } from "@/helpers/fetch-helper";
import ProductDetail, { IProductDetail } from "./product-detail";

interface IProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: IProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="h-screen w-full p-8 text-3xl text-gray-400 font-bold flex items-center justify-center">Product Not Found</div>
    )
  }

  return (
    <ProductDetail product={product as IProductDetail} />
  );
}