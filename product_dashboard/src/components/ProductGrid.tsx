"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortSelect from "./SortSelect";
import { useFavorites } from "@/hooks/useFavorites";

export default function ProductGrid({ products }: { products: Product[] }) {
      const [search, setSearch] = useState("");
      const [category, setCategory] = useState("all");
      const [showFavorites, setShowFavorites] = useState(false);
      const [sort, setSort] = useState("none");

      const { favorites } = useFavorites();

      const categories = Array.from(new Set(products.map(p => p.category)));

      let filteredProducts = products
            .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
            .filter(p => (category === "all" ? true : p.category === category))
            .filter(p => (showFavorites ? favorites.includes(p.id) : true));

      if (sort === "low") {
            filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
      }

      if (sort === "high") {
            filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
      }

      return (
            <div className="text-black">
                  <div className="flex flex-col lg:flex-row gap-4 mb-6 items-start lg:items-center">
                        <SearchBar value={search} onChange={setSearch} />

                        <CategoryFilter
                              categories={categories}
                              value={category}
                              onChange={setCategory}
                        />

                        <SortSelect value={sort} onChange={setSort} />

                        <label className="flex items-center gap-2 text-sm font-medium text-black">
                              <input
                                    type="checkbox"
                                    checked={showFavorites}
                                    onChange={e => setShowFavorites(e.target.checked)}
                                    className="accent-black"
                              />
                              Favorites
                        </label>
                  </div>

                  {filteredProducts.length === 0 && (
                        <p className="text-center text-gray-700 mt-10">
                              No products found
                        </p>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredProducts.map(product => (
                              <ProductCard key={product.id} product={product} />
                        ))}
                  </div>
            </div>
      );
}
