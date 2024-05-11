"use client";
import Cookies from "js-cookie";
import { ReactNode, createContext, useMemo, useState } from "react";
import {
  IProduct,
  ICartProduct,
  ICartContext,
} from "../_interfaces/interfaces";

export const CartContext = createContext<ICartContext>({
  cartProducts: [] as ICartProduct[],
  totalCartPrice: 0,
  sideBarOpen: (isopen: boolean) => false,
  isOpen: false,
  addProductToCart: (product: IProduct, quantity: number) => {},
  removeProductFronCart: (id: number) => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const initialState = Cookies.get("cart")
    ? JSON.parse(Cookies.get("cart")!)
    : [];

  const [cartProducts, setCartProducts] =
    useState<ICartProduct[]>(initialState);

  const [isOpen, setIsOpen] = useState(false);

  const sideBarOpen = (isOpen: boolean) => {
    setIsOpen(() => !isOpen);
    return isOpen;
  };

  const totalCartPrice = useMemo(() => {
    return cartProducts.reduce((acc, product) => {
      return acc + product.product.price * product.quantity;
    }, 0);
  }, [cartProducts]);

  const decreaseProductQuantity = (id: number) => {
    return setCartProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.product.id === id) {
          if (cartProduct.quantity === 1) {
            return cartProduct;
          }
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }
        Cookies.set("cart", JSON.stringify(cartProducts));
        return cartProduct;
      })
    );
  };

  const increaseProductQuantity = (id: number) => {
    return setCartProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.product.id === id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        Cookies.set("cart", JSON.stringify(cartProducts));

        return cartProduct;
      })
    );
  };

  //Adicionando o produto ao carrinho , e caso ja tenho o produto no carrinho, apenas aumentar sua quantidade.
  const addProductToCart = (product: IProduct, quantity: number) => {
    const isProductAlreadyOnCart = cartProducts.some(
      (cartProduct) => cartProduct.product.id === product.id
    );

    if (isProductAlreadyOnCart) {
      return setCartProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.product.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity,
            };
          }
          Cookies.set("cart", JSON.stringify(cartProducts));
          return cartProduct;
        })
      );
    }

    setCartProducts((prev) => [...prev, { product, quantity }]);
    Cookies.set("cart", JSON.stringify(cartProducts));
  };

  //removendo produtos do carrinho
  const removeProductFronCart = (id: number) => {
    return setCartProducts((prev) =>
      prev.filter((product) => product.product.id !== id)
    );
  };

  //limpar carrinho
  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        cartProducts,
        totalCartPrice,
        sideBarOpen,
        addProductToCart,
        removeProductFronCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
