"use client";
import { useEffect, useState } from "react";
import ProductItem from "./product-item";
import { IProducts } from "../_interfaces/interfaces";
import { api } from "../_api/api";

const ProductList = () => {
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
    <div className="flex flex-col gap-4 pb-16 pt-4  md:grid sm:grid-cols-2 lg:grid-cols-4  lg:p-[120px] lg:pt-0 lg:pb-0 ">
      {products.products.map((product) => (
        <div className=" flex justify-center items-center" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
