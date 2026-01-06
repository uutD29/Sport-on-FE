import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

const CategoryList = [
  { name: "Running", imgUrl: "category-running.png" },
  { name: "Tennis", imgUrl: "category-tennis.png" },
  { name: "Basketball", imgUrl: "category-basketball.png" },
  { name: "Football", imgUrl: "category-football.png" },
  { name: "Swimming", imgUrl: "category-swimming.png" },
  { name: "Badminton", imgUrl: "category-badminton.png" },
];

const CategoriesSection = () => {
  return (
    <section id="categories-section" className="container mx-auto pb-20">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>
        <Link href="#" className="text-primary font-medium flex gap-2">
          See All Categories
          <FiArrowRight className="self-center " />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12 mt-8">
        {CategoryList.map((category, index) => (
          <div
            className="rounded-lg bg-linear-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center flex-col items-center"
            key={index}
          >
            <div className="self-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                width={86}
                height={86}
                alt={category.name}
              />
              <div className="text-xl font-medium text-primary text-center">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default CategoriesSection;
