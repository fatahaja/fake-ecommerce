import Image from "next/image"

const ProductImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  return (
    <div className={`relative overflow-hidden aspect-square ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        quality={80}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default ProductImage