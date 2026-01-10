import { fetchProductById } from "@/lib/api";

export default async function ProductPage({
      params,
}: {
      params: Promise<{ id: string }>;
}) {
      const { id } = await params;
      const product = await fetchProductById(id);

      return (
            <main className="p-4 sm:p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                  <img
                        src={product.image}
                        alt={product.title}
                        className="mx-auto max-h-96 object-contain"
                  />
                  <div>
                        <h1 className="text-xl sm:text-2xl font-bold">{product.title}</h1>
                        <p className="mt-4 text-sm sm:text-base">{product.description}</p>
                        <p className="mt-4 font-semibold text-lg">${product.price}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
            </main>
      );
}
