"use client";
import Image from "next/image";
import { IProduct } from "../_interfaces/interfaces";
import { Button } from "./ui/button";
import { formatCurrency } from "../_helpers/price";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../_provider/cartProducts-context";

interface IProductsItensProps {
  product: IProduct;
}
const ProductItem = ({ product }: IProductsItensProps) => {
  const { cartProducts, addProductToCart, totalCartPrice } =
    useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    addProductToCart(product, quantity);
  };

  return (
    <div
      className="w-[250.5px] h-[328px] flex items-center flex-col shadow-lgrounded-lg justi justify-end 
    lg:w-[218px] lg:h-[285px]"
    >
      <div className="relative w-[127.8px] h-[158.82px] lg:[97px] lg:h-[139px] ">
        <Image src={product.photo} alt={product.name} fill />
      </div>
      <div className="flex items-center pt-2">
        <div className="w-[142.77px] h-[43.73px] flex items-center lg:w-[124px] lg:h-[38px]">
          <p className="text-black text-[16px] font-normal">{product.name}</p>
        </div>
        <div
          className="flex justify-center items-center rounded-[5px] w-[73.69px] h-[29.92px] bg-primary-black  text-white
        lg:w-[62px] lg:[26px] lg:text-[12px] lg:font-bold"
        >
          {formatCurrency(Number(product.price))}
        </div>
      </div>

      <p className="text-[10px] font-light w-[221px] text-left py-4 lg:w-[192px] lg:py-2 ">
        Redesigned from scratch and completely revised.
      </p>
      <Button
        className=" w-full rounded-tl-none rounded-tr-none bg-primary-blue flex gap-2"
        onClick={addToCart}
      >
        <Image
          src="/shopping-bag.png"
          alt="shopping-bag"
          width={13}
          height={15}
        />
        <p className="uppercase text-sm  font-medium leading-[18px]">Comprar</p>
      </Button>
    </div>
  );
};

export default ProductItem;
