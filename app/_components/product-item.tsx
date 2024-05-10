"use client";
import Image from "next/image";
import { IProduct } from "../_interfaces/interfaces";
import { Button } from "./ui/button";
import { formatCurrency } from "../_helpers/price";
import { useContext, useState } from "react";
import { CartContext } from "../_context/data-context";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Cart from "./cart";

interface IProductsItensProps {
  product: IProduct;
}
const ProductItem = ({ product }: IProductsItensProps) => {
  const { cartProducts, addProductToCart } = useContext(CartContext);
  const [isCArtOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addToCart = () => {
    addProductToCart(product, quantity);
    setIsCartOpen(true);
  };
  return (
    <div className="w-[250.5px] h-[328px] flex items-center flex-col  shadow-lg   rounded-lg justi justify-end ">
      <div className="relative w-[127.8px] h-[158.82px]">
        <Image src={product.photo} alt={product.name} fill />
      </div>
      <div className="flex items-center pt-2">
        <div className="w-[142.77px] h-[43.73px] flex items-center">
          <p className="text-black text-[16px] font-normal">{product.name}</p>
        </div>
        <div className="flex justify-center items-center rounded-[5px] w-[73.69px] h-[29.92px] bg-primary-black  text-white">
          {formatCurrency(Number(product.price))}
        </div>
      </div>

      <p className="text-[10px] font-light w-[221px] text-left py-4">
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
      <Sheet open={isCArtOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="bg-p bg-primary-blue">
          <SheetHeader>
            <SheetTitle className="text-white text-left text-[27px] leading-8 font-semibold">
              Carrinho de compras
            </SheetTitle>
            <>
              <div></div>
            </>
          </SheetHeader>
          <Cart setIsOpen={setIsCartOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ProductItem;
