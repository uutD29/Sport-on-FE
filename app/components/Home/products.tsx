import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";

const productList = [
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "product-1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 990000,
    imgUrl: "product-2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "product-3.png",
  },
  {
    name: "SportsOn HyperSoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "product-4.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "product-5.png",
  },
  {
    name: "SportsOn Basketball",
    category: "Running",
    price: 200000,
    imgUrl: "product-6.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-32">
      <h2 className="mb-11 text-center text-4xl font-bold italic">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {productList.map((product, index) => (
          <Link
            href={`/product/${product.name}`}
            key={index}
            className="duration-300 bg-white p-1.5 hover:drop-shadow-xl"
          >
            <div className="relative flex aspect-square w-full items-center justify-center bg-primary-light">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain"
              />
              <Button className="absolute right-3 top-3 h-10 w-10 p-2!">
                <FiPlus size={24} />
              </Button>
            </div>
            <h3 className="mt-4 mb-1.5 text-lg font-medium">{product.name}</h3>
            <div className="mb-8 flex justify-between">
              <div className="text-gray-500">{product.category}</div>
              <div className="font-medium text-primary">
                {priceFormatter(product.price)}{" "}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
