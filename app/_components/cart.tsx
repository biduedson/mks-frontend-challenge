import { useContext } from "react";
import { CartContext } from "../_provider/cartProducts-context";
import CartItem from "./cart-item";

const Cart = () => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className=" overflow-y-scroll h-full pb-[230px] pt-[40px]  flex items-center flex-col gap-4 [&::-webkit-scrollbar]:hidden">
      {cartProducts.map((product) => (
        <span key={product.product.id}>
          <CartItem cartProduct={product} />
        </span>
      ))}
    </div>
  );
};

export default Cart;
