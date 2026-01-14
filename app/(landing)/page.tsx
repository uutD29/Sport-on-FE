import Image from "next/image";
import HeroSection from "../components/Home/hero";
import CategoriesSection from "../components/Home/categories";
import { getAllCategories } from "../services/category.service";
import ProductsSection from "../components/Home/products";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}
