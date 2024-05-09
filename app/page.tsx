import React, { useContext } from "react";
import Header from "./_components/header";
import ProductList from "./_components/product-list";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
    </>
  );
}
