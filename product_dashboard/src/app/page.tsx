import { fetchProducts } from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

export default async function HomePage() {
  const products = await fetchProducts();
  return (
    <main className="p-6">
      <ProductGrid products={products} />
    </main>
  );
}
