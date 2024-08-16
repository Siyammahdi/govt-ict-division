import { Image } from "@nextui-org/react";
import React from "react";
import ComponentLayout from "../ComponentLayout";

const text = "Government of the people's Republic of Bangladesh";

const Hero = () => {
  return (
    <ComponentLayout>
      <div className="flex py-44 ">
        <div className="flex items-center gap-10">
          <Image src="/logo.png" alt="logo" height={150} />
          <div className="space-y-4">
            <h1 className="text-5xl font-semibold">ICT Division</h1>
            <p className="text-[20px]">{text}</p>
          </div>
        </div>
        <div>
          <Image src="/GridDesign.png" alt="logo" height={400} />
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Hero;
