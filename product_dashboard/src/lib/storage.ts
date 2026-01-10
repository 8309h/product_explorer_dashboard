export function getFavorites(): number[] {
      if (typeof window === "undefined") return [];
      try {
            const data = localStorage.getItem("favorites");
            if (!data) return [];
            return JSON.parse(data);
      } catch {
            return [];
      }
}

export function setFavorites(ids: number[]) {
      localStorage.setItem("favorites", JSON.stringify(ids));
}
