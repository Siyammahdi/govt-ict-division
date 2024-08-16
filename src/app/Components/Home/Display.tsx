"use client";
import React from "react";
import ReactPlayer from "react-player";
import ComponentLayout from "../ComponentLayout";
import { Image, Link } from "@nextui-org/react";

const Display: React.FC = () => {
  return (
    <ComponentLayout>
      <div className="flex items-start justify-between">
        <div className="bg-gradient-to-r from-[#006a4e] to-[#188f00] p-10 rounded-3xl">
          <ReactPlayer url="https://youtu.be/GT9ShGE_qjg" />
        </div>
        <div className=" bg-gradient-to-r from-[#006a4e] to-[#188f00] rounded-3xl">
          <h1 className="text-2xl py-3 rounded-t-2xl text-center text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00]">
            To Prevent Dengue
          </h1>
          <Link href="https://bangladesh.gov.bd/site/page/91530698-c795-4542-88f2-5da1870bd50c">
            <Image src="/dengu.jpg" alt="hotline" />
          </Link>
        </div>
        <div className=" bg-gradient-to-r from-[#006a4e] to-[#188f00] rounded-3xl">
          <h1 className="text-2xl py-3 rounded-t-2xl text-center text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00]">
            Emergency Hotline
          </h1>
          <Link href="https://bangladesh.gov.bd/site/page/aaebba14-f52a-4a3d-98fd-a3f8b911d3d9">
            <Image src="/hotline_v.2_bn.png" alt="hotline" />
          </Link>
        </div>
        
      </div>
    </ComponentLayout>
  );
};

export default Display;
