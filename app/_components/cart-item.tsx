"use client";
import Image from "next/image";
import { ICartProduct } from "../_interfaces/interfaces";
import { Button } from "./ui/button";
import { formatCurrency } from "../_helpers/price";
import { useContext } from "react";
import { CartContext } from "../_provider/cartProducts-context";

interface ICartItemProps {
  cartProduct: ICartProduct;
}
const CartItem = ({ cartProduct }: ICartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFronCart,
  } = useContext(CartContext);

  return (
    <div className="flex relative lg:w-[379px] lg:h-[95px] lg:flex-row lg:px-2 items-center w-[250px] h-[220px] bg-white rounded-lg flex-col jus justify-center gap-3">
      <div
        className="absolute top-4 right-4 text-center text-black text-[42px] font-normal leading-[17px]
         lg:w-[18px] lg:h-[18px] lg:rounded-full lg:bg-black lg:text-[10px]
       lg:text-white lg:top-[-8px] lg:right-[-8px] cursor-pointer"
        onClick={() => removeProductFronCart(cartProduct.product.id)}
      >
        X
      </div>
      <div className="w-[80px] h-[95.1px] flex items-center justify-center relative lg:w-[67px] lg:h-[56px]">
        <Image
          src={cartProduct.product.photo}
          alt={cartProduct.product.name}
          fill
        />
      </div>
      <div className="flex items-center justify-center w-[211px] h-[21.45px]">
        <p className="text-[16px] leading-[19px] font-normal text-black lg:text-[13px] lg:leading-[17px]">
          {cartProduct.product.name}
        </p>
      </div>
      <div className="flex w-[211px] h-[21.45px] justify-between">
        <div className=" flex w-[97px] h-[34px]  justify-between border  rounded-[2px] font-[22px] items-center lg:w-[50px] lg:h-[19px] lg:text-[12px]">
          <span
            className="border-r-[1px] text-black w-[32.4px] text-center cursor-pointer"
            onClick={() => decreaseProductQuantity(cartProduct.product.id)}
          >
            -
          </span>
          <span className=" text-black border-r-[1px] w-[32.4px] text-center cursor-pointer">
            {cartProduct.quantity}
          </span>
          <span
            className=" text-black w-[32.4px] text-center cursor-pointer"
            onClick={() => increaseProductQuantity(cartProduct.product.id)}
          >
            +
          </span>
        </div>

        <p className="w-[84px] h-[34px] text-[15px] leading-[15px] font-semibold bg-primary-black flex justify-center items-center rounded-[5px] lg:bg-white lg:text-black lg:text-[14px] lg:leading-[17px]">
          {formatCurrency(
            Number(cartProduct.product.price * cartProduct.quantity)
          )}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
