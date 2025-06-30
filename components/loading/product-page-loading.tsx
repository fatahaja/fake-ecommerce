const ProductPageLoading = () => {
  return (
    <div className="h-[82px] p-4 bg-gray-200 animate-pulse justify-between flex">
      <div className="flex gap-4 py-1 h-[50px] items-center">
        <div className="bg-gray-300 h-[34px] w-24 rounded-md"></div>
        <div className="bg-gray-300 h-[34px] w-24 rounded-md"></div>
        <div className="bg-gray-300 h-[34px] w-24 rounded-md"></div>
      </div>
      <div className="flex gap-8 py-1 h-[50px] items-center">
        <div className="bg-gray-300 h-[34px] w-32 rounded-md"></div>
        <div className="bg-gray-300 h-[34px] w-24 rounded-full"></div>
      </div>

    </div>
  )
}

export default ProductPageLoading;