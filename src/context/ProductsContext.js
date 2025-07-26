"use client";
import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    setProducts([...products, product]);
  };

  const removeProducts = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const findProduct = (productId) => {
    return products.find((product) => product.id == productId);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        addProducts,
        removeProducts,
        findProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
