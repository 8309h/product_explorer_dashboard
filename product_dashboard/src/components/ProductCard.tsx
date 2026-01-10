"use client";

import Link from "next/link";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "@/hooks/useFavorites";

export default function ProductCard({ product }: { product: Product }) {
      const { favorites, toggleFavorite } = useFavorites();

      return (
            <div className="bg-white border rounded p-3 sm:p-4 hover:shadow flex flex-col">
                  <Link href={`/products/${product.id}`} className="flex-1">
                        <img
                              src={product.image}
                              alt={product.title}
                              className="h-32 sm:h-40 mx-auto object-contain"
                        />
                        <h3 className="mt-2 font-medium text-sm sm:text-base line-clamp-2">
                              {product.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500">
                              {product.category}
                        </p>
                        <p className="font-semibold text-sm sm:text-base">
                              ${product.price}
                        </p>
                  </Link>

                  <FavoriteButton
                        isFavorite={favorites.includes(product.id)}
                        onClick={() => toggleFavorite(product.id)}
                  />
            </div>
      );
}
