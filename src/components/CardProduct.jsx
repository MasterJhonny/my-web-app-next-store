import Image from "next/image";

const CardProduct = ({ product }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
      {/* Price Badge */}
      <div className="relative">
        <div className="absolute top-3 left-3 bg-slate-950 bg-opacity-70 text-white px-2 py-1 rounded text-base font-semibold z-10">
          Bs. {product.price || "0.00"}
        </div>

        {/* Product Image */}
        <div className="aspect-square bg-white p-4">
          <Image
            src={product.image_url || "https://spea.pt/image_default.png"}
            alt={product.detail}
            width={200}
            height={200}
            className="w-full h-full object-contain"
            priority={true}
          />
        </div>
      </div>

      {/* Product Name */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-center text-gray-200 leading-tight">
          {product.detail}
        </h3>
      </div>
    </div>
  );
};

export default CardProduct;
