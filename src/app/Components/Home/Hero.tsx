import { Image } from "@nextui-org/react";
import React from "react";
import ComponentLayout from "../ComponentLayout";

const text = "Government of the People's Republic of Bangladesh";

const Hero = () => {
  return (
    <ComponentLayout>
      <div className="flex flex-col md:flex-row items-center py-16 px-10 lg:px-0 md:py-36">
        <div className="flex flex-col items-center md:items-start gap-6 md:gap-10 md:w-1/2">
          <Image src="/logo.png" alt="logo" height={100}  className="hidden md:block"  />
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-semibold">ICT Division</h1>
            <p className="text-lg md:text-[22px]">{text}</p>
          </div>
          <Image src="/logo.png" alt="logo" height={150} className="md:hidden" />
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image src="/GridDesign.png" alt="design" height={450} className="object-contain md:h-450" />
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Hero;
