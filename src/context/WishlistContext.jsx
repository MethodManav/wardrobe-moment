// src/context/WishlistContext.jsx
import React, { createContext, useContext, useMemo, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState([]); // array of products

  const isWishlisted = (id) => items.some((p) => p.id === id);

  const addToWishlist = (product) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const toggleWishlist = (product) => {
    setItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const totalItems = items.length;

  const value = useMemo(
    () => ({
      items,
      totalItems,
      addToWishlist,
      removeFromWishlist,
      toggleWishlist,
      isWishlisted,
    }),
    [items, totalItems]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) {
    throw new Error("useWishlist must be used inside WishlistProvider");
  }
  return ctx;
};
