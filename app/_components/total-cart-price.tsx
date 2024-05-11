import { useContext } from "react";
import { CartContext } from "../_provider/cartProducts-context";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

const TotalPriceCart = () => {
  const { totalCartPrice, clearCart, cartProducts } = useContext(CartContext);
  return (
    <div className="text-[28px] flex-col font-bold leading-[15px] pt-6  justify-between  text-white  flex h-[130px] fixed bottom-0 w-full items-center bg-primary-blue ">
      <div className="w-full flex justify-between px-14 ">
        <p>Total:</p>
        <p>{formatCurrency(totalCartPrice)}</p>
      </div>
      <Button
        className="w-full rounded-none h-[55px] bg-black text-xl font-bold"
        onClick={clearCart}
      >
        Finaliza Compra
      </Button>
    </div>
  );
};

export default TotalPriceCart;
