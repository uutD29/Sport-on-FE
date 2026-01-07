import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6 md:gap-10 px-4 py-5 md:py-7">

        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
          className="shrink-0"
        />

        <nav className="w-full md:w-auto order-3 md:order-2 flex justify-center md:justify-start gap-6 md:gap-24 font-medium">
          <Link
            href="#"
            className="relative after:absolute after:left-1/2 after:block after:h-[3px] after:w-1/2 after:-translate-x-1/2 after:translate-y-1 after:rounded-full after:bg-primary after:content-['']"
          >
            Home
          </Link>
          <Link href="#">Category</Link>
          <Link href="#">Explore Products</Link>
        </nav>

        <div className="order-2 md:order-3 flex items-center gap-6 md:gap-10">
          <FiSearch size={24} />
          <div className="relative">
            <FiShoppingBag size={24} />
            <div className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary text-[10px] leading-3.5 text-white">
              3
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
