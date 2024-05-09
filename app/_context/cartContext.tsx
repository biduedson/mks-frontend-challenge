"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../_api/api";
import { IProduct } from "../_interfaces/interfaces";

export const productcontext = createContext<IProduct[]>([]);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

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
