import Image from "next/image";
import HeroSection from "../components/Home/hero";
import CategoriesSection from "../components/Home/categories";
import Products from "../components/Home/products";

export default function Home() {
  return (
<main>
  <HeroSection />
  <CategoriesSection />
  <Products/>
</main>
  );
}
