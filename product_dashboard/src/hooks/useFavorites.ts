import { useEffect, useState } from "react";
import { getFavorites, setFavorites } from "@/lib/storage";

export function useFavorites() {
      const [favorites, setFavs] = useState<number[]>([]);

      useEffect(() => {
            setFavs(getFavorites());
      }, []);

      const toggleFavorite = (id: number) => {
            setFavs(prev => {
                  const updated = prev.includes(id)
                        ? prev.filter(f => f !== id)
                        : [...prev, id];

                  setFavorites(updated);
                  return updated;
            });
      };

      return { favorites, toggleFavorite };
}
