import { useContext } from "react";
import { CartContext } from "../_context/data-context";
import CartItem from "./cart-item";

interface CartProps {
  setIsOpen: (isOpen: boolean) => void;
}

const Cart = ({ setIsOpen }: CartProps) => {
  const { cartProducts } = useContext(CartContext);

  return (
    <div className="w-full flex items-center flex-col gap-4">
      {cartProducts.map((product) => (
        <span key={product.product.id}>
          <CartItem cartProduct={product} />
        </span>
      ))}
    </div>
  );
};

export default Cart;
