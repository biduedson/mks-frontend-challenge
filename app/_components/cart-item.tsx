import Image from "next/image";
import { ICartProduct } from "../_interfaces/interfaces";
import { Button } from "./ui/button";
import { formatCurrency } from "../_helpers/price";

interface ICartItemProps {
  cartProduct: ICartProduct;
}

const CartItem = ({ cartProduct }: ICartItemProps) => {
  return (
    <div className="flex items-center w-[250px] h-[220px] bg-white rounded-lg flex-col jus justify-center gap-3">
      <div className="w-[80px] h-[95.1px] flex items-center justify-center relative ">
        <Image
          src={cartProduct.product.photo}
          alt={cartProduct.product.name}
          fill
        />
      </div>
      <div className="flex items-center justify-center w-[211px] h-[21.45px]">
        <p className="text-[16px] leading-[19px] font-normal">
          {cartProduct.product.name}
        </p>
      </div>
      <div className="flex w-[211px] h-[21.45px] justify-between ">
        <div className=" flex w-[97px] h-[34px]  justify-between border  rounded-[2px] font-[22px] items-center">
          <span className="border-r-[1px] w-[32.4px] text-center">-</span>
          <span className="border-r-[1px] w-[32.4px] text-center">
            {cartProduct.quantity}
          </span>
          <span className="w-[32.4px] text-center">+</span>
        </div>

        <Button className="w-[84px] h-[34px]">
          {formatCurrency(Number(cartProduct.product.price))}
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
