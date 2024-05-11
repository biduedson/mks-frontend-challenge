"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Cart from "./cart";
import { useContext, useState } from "react";
import { CartContext } from "../_context/data-context";
import { formatCurrency } from "../_helpers/price";
import TotalPriceCart from "./total-cart-price";
import SideBar from "./side-bar";

const Header = () => {
  const { cartProducts, totalCartPrice, sideBarOpen, isOpen } =
    useContext(CartContext);

  return (
    <header className="fixed top-0 w-full z-30 p-6 bg-primary-blue justify-between h-12 flex items-center text-white">
      <div className="flex items-center gap-2">
        <span className=" text-[32px] font-semibold">MKS</span>
        <p className="text-base  leading-[19px] font-light">Sistemas</p>
      </div>
      <SideBar />
      <Button
        className="gap-2 flex rounded-full text-primary-blue w-[52px] h-[26px] bg-white"
        size="icon"
        variant="ghost"
        onClick={() => sideBarOpen(isOpen)}
      >
        <Image src="/cart-icon.png" alt="cart" width={14} height={14} />
        <span className="text-xs text-black">{cartProducts.length}</span>
      </Button>
    </header>
  );
};

export default Header;
