"use client";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../_context/data-context";
import ProductItem from "./product-item";
import { api } from "../_api/api";
import { IProducts } from "../_interfaces/interfaces";

const ProductList = () => {
  //const products = useContext(productcontext);
  const [products, setProducts] = useState<IProducts>();

  useEffect(() => {
    const allProducts = async () => {
      try {
        const response = await api.get(
          "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
        );
        setProducts(response.data);
      } catch (error) {
        console.log("Erro ao buscar productos", error);
      }
    };
    allProducts();
  }, [products]);

  if (!products) {
    return <h1 className="ani animate-pulse">loading!</h1>;
  }
  return (
    <div className="flex items-center flex-col gap-4 pb-16 pt-4 ">
      {products.products.map((product) => (
        <div className="" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
