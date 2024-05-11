import React, { useContext } from "react";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import Footer from "./_components/footer";

export default function Home() {
  const openSideBar = () => {};
  return (
    <div className="relative mt-16 ">
      <Header />

      <main>
        <ProductList />
      </main>

      <Footer />
    </div>
  );
}
