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
  addProductToCart: (product: IProduct, quantity: number) => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

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

  return (
    <CartContext.Provider value={{ cartProducts, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
