"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button";
import { Heart } from "lucide-react";
import { ParamsContext } from "@/context/ParamsContext";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const ProductForm = () => {
  const router = useRouter();
  const { setParams } = useContext(ParamsContext);

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    detail: "",
    price: "",
    quantity: "",
    category: "",
    supplier: "",
    image_url: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image_url: e.target.files[0],
    });
    setSelectedFile(e.target.files[0]);
  };

  const handleTest = () => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { detail, price, quantity, category, supplier, image_url } = formData;
    console.log("🚀 ~ handleSubmit ~ formData:", formData);

    const formDataToSend = new FormData();
    formDataToSend.append("detail", detail);
    formDataToSend.append("price", price);
    formDataToSend.append("quantity", quantity);
    formDataToSend.append("category", category);
    formDataToSend.append("supplier", supplier);
    if (image_url) {
      formDataToSend.append("image_url", image_url);
    }

    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        setParams("/"); // Reset params to home
        setIsLoading(false);
        alert("Producto registrado exitosamente");
        setFormData({
          detail: "",
          price: "",
          quantity: "",
          category: "",
          supplier: "",
          image_url: null,
        });
        setSelectedFile(null);
        router.push("/");
      } else {
        alert("Error al registrar el producto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-items-center items-center pt-10">
      <h1 className="font-bold py-3 text-lg">Registrar Nuevo Producto</h1>
      <div className="w-96 p-6 pt-7 shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-3">
            <label className="font-semibold text-sm">Detalle:</label>
            <input
              className="border border-gray-400 rounded-md py-1 px-2 font-semibold"
              type="text"
              name="detail"
              value={formData.detail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-semibold text-sm">Precio:</label>
            <input
              className="border border-gray-400 rounded-md py-1 px-2 font-semibold"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-semibold text-sm">Cantidad:</label>
            <input
              className="border border-gray-400 rounded-md py-1 px-2 font-semibold"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-semibold text-sm">Categoría:</label>
            <input
              className="border border-gray-400 rounded-md py-1 px-2 font-semibold"
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-semibold text-sm">Proveedor:</label>
            <input
              className="border border-gray-400 rounded-md py-1 px-2 font-semibold"
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-semibold text-sm">Imagen:</label>
            <input
              className="border border-gray-400 rounded-md py-1 px-2 font-semibold"
              type="file"
              accept=".png,.jpg,.jpeg"
              name="image_url"
              onChange={handleFileChange}
              required
            />
          </div>
          {selectedFile && (
            <div className="flex flex-col mb-3">
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="imagen producto"
                className="w-16 h-16 rounded-full"
              />
            </div>
          )}
          <Button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md flex items-center space-x-2">
            <Heart className="h-4 w-4 fill-current" />
            <span>{isLoading ? "Cargando..." : "Registrar Producto"}</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
