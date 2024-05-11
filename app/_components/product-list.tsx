"use client";
import { useEffect, useState } from "react";
import ProductItem from "./product-item";
import { IProducts } from "../_interfaces/interfaces";
import { api } from "../_api/api";
import { motion } from "framer-motion";

const ProductList = () => {
  const parent = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        //you can use these if u want stagger effect on initial stage instead of whileInView
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    pop: (custom: number) => ({
      opacity: 1,
      transition: {
        delay: 0.2 * custom,
      },
    }),
  };
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
      {products.products.map((product, index) => (
        <motion.div
          variants={parent}
          key={product.id}
          initial="hidden"
          animate={{ opacity: 1, y: 0 }}
          whileInView={"pop"}
          transition={{ delay: index * 0.05 }} // Ajuste o atraso de transição para cada item
          className=" flex justify-center items-center"
        >
          <ProductItem product={product} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
