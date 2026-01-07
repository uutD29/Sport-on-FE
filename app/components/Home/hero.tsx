import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="flex container mx-auto h-screen relative"
    >
      <div className="relative self-center ">
        <Image
          src="/images/img-basketball-transparent.png"
          alt="ornament"
          width={432}
          height={423}
          className="absolute grayscale left-20 -top-20"
        />
        <div className="relative w-2/3 ml-40 z-10">
          <div className="text-primary italic">Friday Sale, 50%</div>
          <h1 className="text-[95px] font-extrabold italic bg-linear-to-b from-black to-[#CBCBCB] bg-clip-text text-transparent leading-tight">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-1/2 mt-10 leading-loose z-10">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-8">
            <Button>
              Explore More <FiFastForward />{" "}
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="play"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.png"
          alt="hero-image"
          width={700}
          height={950}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-0"
        />
      </div>
      <Image
        src="/images/img-ornament-hero.svg"
        alt="ornament"
        width={420}
        height={420}
        className="absolute -right-[200px] top-1/2 -translate-y-1/2"
      />
    </section>
  );
};

export default HeroSection;
