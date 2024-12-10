import Image from "next/image";
import userComputerImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import Button from "@/components/Button";

export const HeroSection = () => {
  return (
    <div className="py-[90px] md:py-[154px] lg:py-[200px] relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-10 "
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="ring-class size-[620px] "></div>
        <div className="ring-class size-[820px] "></div>
        <div className="ring-class size-[1020px] "></div>
        <div className="ring-class size-[1220px] "></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-15}>
          <Sparkle className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={80}>
          <Sparkle className="size-4 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={178}>
          <Sparkle className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={145}>
          <Sparkle className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={200}>
          <div className="h-30 w-30 rounded-full text-emerald-300"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex items-center flex-col">
          <Image
            src={userComputerImage}
            className="size-[100px]"
            alt="user computer image"
            width={0}
            height={0}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Avaliable for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide mt-8">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            hight-performance web applications.Lets discuss your next project.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center md:flex-row justify-center mt-8 gap-4">
        <Button
          text="Explore My Work"
          variant="secondary"
          icon={<ArrowDown className="size-4" />}
          iconPosition="right"
        />

        <Button text="👋  Let's Connect" variant="primary" />
      </div>
    </div>
  );
};
