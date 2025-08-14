import { useState, useCallback } from 'react';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlistItems(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const isInWishlist = useCallback((productId: string) => {
    return wishlistItems.includes(productId);
  }, [wishlistItems]);

  return {
    wishlistItems,
    toggleWishlist,
    isInWishlist
  };
};