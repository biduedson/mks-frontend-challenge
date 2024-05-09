"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../_api/api";
import { IProduct, IProducts } from "../_interfaces/interfaces";

export const productcontext = createContext<IProducts>({
  products: [],
  count: 0,
});

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProducts>({
    products: [],
    count: 0,
  });

  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await api.get(
          "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
        );
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Erro ao buscar productos", error);
      }
    };
    allProducts();
  }, []);

  return (
    <productcontext.Provider value={products}>
      {children}
    </productcontext.Provider>
  );
};
