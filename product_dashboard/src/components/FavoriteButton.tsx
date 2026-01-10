"use client";

export default function FavoriteButton({
      isFavorite,
      onClick,
}: {
      isFavorite: boolean;
      onClick: () => void;
}) {
      return (
            <button
                  onClick={onClick}
                  className={`mt-2 text-sm font-medium ${isFavorite ? "text-red-600" : "text-gray-500"
                        }`}
            >
                  {isFavorite ? "♥ Remove Favorite" : "♡ Add Favorite"}
            </button>
      );
}
