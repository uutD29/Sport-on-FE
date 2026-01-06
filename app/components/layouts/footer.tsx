import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-24 md:mt-52">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10 pt-10 md:pt-14 pb-16 md:pb-24">

        {/* Logo + Text */}
        <div className="md:w-105 max-w-md">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
          />
          <p className="mt-6 md:mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>

        {/* Links */}
        <div className="md:w-105 grid grid-cols-1 xs:grid-cols-2 gap-10 md:grid-cols-2">
          <div className="flex gap-4 md:gap-7 flex-col">
            <Link href="#">Home</Link>
            <Link href="#">Categories</Link>
            <Link href="#">Products</Link>
            <Link href="#">About Us</Link>
          </div>
          <div className="flex gap-4 md:gap-7 flex-col">
            <Link href="#">Instagram</Link>
            <Link href="#">Facebook</Link>
            <Link href="#">TikTok</Link>
            <Link href="#">YouTube</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-t-white/15">
        <div className="container mx-auto px-4 py-6.5 flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between">
          <div className="text-sm md:text-base">
            SportsOn © 2025 All Rights Reserverd.
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 md:w-105 gap-2 md:gap-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
