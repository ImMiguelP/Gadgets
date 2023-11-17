import { Button } from "../../src/components/ui/button";
import Image from "next/image";
import React from "react";
import bgImg from "../../../public/images/weatherhome.png";

const Hero = () => {
  const desc =
    "Discover the latest weather updates for any location by simply entering it into our intuitive platform. Uncover not only the current forecast but also explore a comprehensive 7-day outlook, detailed weather information, and a plethora of additional features to keep you informed and prepared. Experience the power of precise weather forecasting at your fingertips.";

  return (
    <div className="flex flex-col xl:flex-row w-full items-center md:p-6 lg:space-x-6 ">
      <div className="flex-grow space-y-6">
        <h1 className="text-6xl">Your City Your Weather Now!</h1>
        <h2 className="text-md text-secondary-foreground/40">{desc}</h2>
        <div className="w-full flex justify-center xl:justify-start">
          <Button href="/weather" className="text-lg rounded-xl">
            Get Started Now
          </Button>
        </div>
      </div>
      <div className="flex-grow">
        <Image
          width={4000}
          height={4000}
          alt=""
          src={bgImg.src}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
