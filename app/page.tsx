import React, { useContext } from "react";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
