"use client";

import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { api } from "../_api/api";
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
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);
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
        return cartProduct;
      })
    );
  };

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

          return cartProduct;
        })
      );
    }

    setCartProducts((prev) => [...prev, { product, quantity }]);
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        isOpen,
        cartProducts,
        sideBarOpen,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        totalCartPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
