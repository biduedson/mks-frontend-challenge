import { useContext, useState } from "react";
import { CartContext } from "../_context/data-context";
import { Button } from "./ui/button";
import Cart from "./cart";
import TotalPriceCart from "./total-cart-price";

const SideBar = () => {
  const { isOpen, sideBarOpen } = useContext(CartContext);
  const handleCloseSideBar = () => {
    sideBarOpen(isOpen);
  };
  return (
    <div>
      <div
        className={`[&::-webkit-scrollbar]:hidden fixed top-0 right-0  h-full bg-primary-blue w-[82vw]  ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition duration-500 `}
      >
        <div className="flex w-full justify-end p-4 ">
          <div className="text-[27px] font-bold  leading-[32px]">
            <h1>Carrinho de compras</h1>
          </div>
          <Button
            onClick={handleCloseSideBar}
            className="w-[45px] h-[45px] text-[32px]  text-primary-blue cursor-pointer rounded-full bg-black z-50 flex items-center justify-center"
          >
            X
          </Button>
        </div>
        <Cart />
        <TotalPriceCart />
      </div>
    </div>
  );
};

export default SideBar;
