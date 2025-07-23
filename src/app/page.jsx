"use client";
import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import { Search } from "lucide-react";
import { Input } from "@/components/input";
import AddButton from "@/components/AddButton";
import CardProduct from "@/components/CardProduct";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const LoadProducts = async () => {
  const data = await fetch(`${API_BASE_URL}/products`);

  return await data.json();
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // state of search
  const [search, setSearch] = useState("");

  // expression regex and filter tasks
  const expre = new RegExp(search, "i");
  const searchName = products.filter((product) => expre.test(product.detail));

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await LoadProducts();

      setIsLoading(false);
      // console.log("🚀 ~ PageProducts ~ productsData:", productsData);
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-8">
        Catalogo de Productos
      </h1>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Buscar..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center text-center text-gray-400">
          <Triangle
            visible={true}
            height="90"
            width="90"
            color="#9929EA"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {searchName.map((product) => (
          <CardProduct key={product.detail} product={product} />
        ))}
      </div>
      <AddButton href="/new" />
    </main>
  );
}
