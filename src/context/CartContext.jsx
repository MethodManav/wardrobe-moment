// src/context/CartContext.jsx
import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]); 
  // each item: { product, days, quantity }

  const addToCart = (product, days, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? {
                ...i,
                days, // you can choose to keep previous days instead
                quantity: i.quantity + quantity,
              }
            : i
        );
      }
      return [...prev, { product, days, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const clearCart = () => setItems([]);

  const totalAmount = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum +
          item.product.pricePerDay * item.days * (item.quantity || 1),
        0
      ),
    [items]
  );

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + (item.quantity || 1), 0),
    [items]
  );

  const value = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    totalAmount,
    totalItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
