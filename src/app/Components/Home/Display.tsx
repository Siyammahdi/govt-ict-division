"use client";
import React from "react";
import ReactPlayer from "react-player";
import ComponentLayout from "../ComponentLayout";
import { Image, Link } from "@nextui-org/react";
import MusicPlayer from "../MusicPlayer";

const Display: React.FC = () => {
  return (
    <ComponentLayout>
      <div className="pb-28 px-5">
        <h1 className="text-3xl text-[#188f00] font-semibold py-8 pb-16">
          Resources
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
          <div className="hidden md:block">
            <div className="bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d] p-10 rounded-2xl cursor-pointer">
              <ReactPlayer url="https://youtu.be/GT9ShGE_qjg" />
            </div>
            <MusicPlayer />
          </div>
          <div className="flex items-start gap-10">
            <div className="">
              <div className=" bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d] rounded-3xl cursor-pointer">
                <h1 className="lg:text-xl py-3 rounded-t-2xl text-center text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d]">
                  To Prevent Dengue
                </h1>
                <Link href="https://bangladesh.gov.bd/site/page/91530698-c795-4542-88f2-5da1870bd50c">
                  <Image src="/dengu.jpg" alt="hotline" width={260} />
                </Link>
              </div>
              <div className=" mt-10 bg-slate-100 dark:bg-[#0f3636] rounded-2xl">
                <h1 className="lg:text-2xl py-3 rounded-t-2xl px-5 lg:px-10 text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d]">
                  Visitor Count
                </h1>
                <div className="px-4 lg:px-10 py-8 text-sm md:text-xl space-y-4">
                  <div className="text-yellow-500">Today: 3043</div>
                  <div className="text-red-500">Yesterday: 4346</div>
                  <div className="text-blue-600">All: 53308103</div>
                  <div className="text-[#188f00]">Online: 41</div>
                </div>
              </div>
            </div>
            <div className=" bg-gradient-to-r from-[#006a4e] mt-10 lg:mt-0 to-[#188f00] rounded-3xl">
              <h1 className="lg:text-2xl py-3 rounded-t-2xl text-center text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:from-[#064e3b] dark:to-[#14532d]">
                Emergency Hotline
              </h1>
              <Link href="https://bangladesh.gov.bd/site/page/aaebba14-f52a-4a3d-98fd-a3f8b911d3d9">
                <Image src="/hotline_v.2_bn.png" alt="hotline" height={500} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Display;
