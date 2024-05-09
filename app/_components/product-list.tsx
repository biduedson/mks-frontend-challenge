"use client";
import { useContext } from "react";
import { productcontext } from "../_context/cartContext";
import ProductItem from "./product-item";

const ProductList = () => {
  const products = useContext(productcontext);

  return (
    <div className="flex items-center flex-col gap-4">
      {products.products.map((product) => (
        <div className="" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
