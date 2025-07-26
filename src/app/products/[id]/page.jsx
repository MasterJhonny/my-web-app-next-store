"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Heart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/button";
import Image from "next/image";
import { useState, useContext } from "react";
import { ProductsContext } from "@/context/ProductsContext";
import { ParamsContext } from "@/context/ParamsContext";

export default function ProductDeail() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const { findProduct } = useContext(ProductsContext);
  const { setParams } = useContext(ParamsContext);

  const productDetail = findProduct(id);
  console.log("🚀 ~ ProductDeail ~ productDetail:", productDetail);

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleBack = () => {
    setParams("/products"); // Reset params to home
    router.push("/");
  };

  return (
    <div className="max-w-md mx-auto min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <Button
          size="icon"
          className="cursor-pointer h-8 w-8"
          onClick={handleBack}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-300">
          {productDetail.detail}
        </h1>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`h-5 w-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </Button>
      </div>

      {/* Burger Image */}
      <div className="py-6 flex justify-center">
        <div className="relative">
          <Image
            src={productDetail.image_url}
            alt="Gourmet burger with beef, lettuce, tomato, onions, and cheese"
            width={280}
            height={280}
            className="object-contain border rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-8 px-4 py-6">
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-300">
            Bs. {productDetail.price}
          </div>
          <div className="text-sm text-gray-400">Precio Unidad</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-300">Bs. ---</div>
          <div className="text-sm text-gray-400">Precio por Mayor</div>
        </div>
        {
          // <div className="text-center">
          //   <div className="text-lg font-semibold text-gray-300">80 min</div>
          //   <div className="text-sm text-gray-400">Delivery</div>
          // </div>
        }
      </div>

      {/* Description */}
      <div className="px-4 py-4">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Plus className="h-4 w-4 text-gray-400" />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Meat lovers, get ready to meet your match! Loaded with beef, beef
            sausages, ground beef.
          </p>
        </div>
      </div>

      {/* Quantity Selector */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-gray-300"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-xl font-semibold text-gray-300 min-w-[2rem] text-center">
            {quantity}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full border border-gray-300"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="px-4 pb-6 mt-auto">
        <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-xl text-base font-medium">
          <Plus className="h-5 w-5 mr-2" />
          Add to cart
          <span className="ml-auto text-xl font-semibold">
            Total Bs. {quantity * productDetail.price}
          </span>
        </Button>
      </div>
    </div>
  );
}
