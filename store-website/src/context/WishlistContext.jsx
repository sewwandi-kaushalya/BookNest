import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (book) => {
    setWishlistItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.id === book.id
      );

      if (exists) {
        return currentItems.filter(
          (item) => item.id !== book.id
        );
      }

      return [...currentItems, book];
    });
  };

  const isInWishlist = (bookId) => {
    return wishlistItems.some(
      (item) => item.id === bookId
    );
  };

  const removeFromWishlist = (bookId) => {
    setWishlistItems((currentItems) =>
      currentItems.filter((item) => item.id !== bookId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}

