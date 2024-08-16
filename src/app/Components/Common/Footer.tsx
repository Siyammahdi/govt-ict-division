import { Image } from "@nextui-org/react";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#006a4e] to-[#188f00] p-14 text-white shadow-sm">
      <div className="w-full flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-2/5 mb-10 md:mb-0">
        <Image src="/logo.png" alt="logo" height={50} />
          <h3 className="text-4xl font-normal">
            ICT Division
          </h3>
          <p className="my-5 text-lg font-medium">
            <a href="#" className="mr-5 hover:underline">
            Sitemap
            </a>
            <a href="#" className="mr-5 hover:underline">
            Secrecy Policy
            </a>
            <a href="#" className="mr-5 hover:underline">
            Contact
            </a>
            <a href="#" className="mr-5 hover:underline">
            FAQ
            </a>
            <a href="#" className="mr-5 hover:underline">
              Terms of use
            </a>
          </p>
          <p className="text-secondary text-sm font-normal">
            Siyammahdi©2024
          </p>
        </div>

        {/* Center Section */}
        <div className="md:w-2/5 mb-10 md:mb-0">
          <div className="flex items-center mb-4">
            <div className=" text-white w-10 h-10 flex items-center justify-center rounded-full mr-4">
            <FaMapMarkerAlt />
            </div>
            <p>
              <span className="block text-sm">Q93V+J7H, Dhaka 1205</span>
              Vision 2021 Tower
            </p>
          </div>
          <div className="flex items-center mb-4">
            <div className=" text-white w-10 h-10 flex items-center justify-center rounded-full mr-4">
            <FaPhoneAlt />
            </div>
            <p>+88-02-8181547</p>
          </div>
          <div className="flex items-center">
            <div className=" text-white w-10 h-10 flex items-center justify-center rounded-full mr-4">
            <FaRegEnvelope />
            </div>
            <p>
              <a
                href="mesbah@ictd.gov.bd"
                className="text-secondary hover:underline"
              >
                mesbah@ictd.gov.bd
              </a>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/5">
          <p className="text-gray-400 text-sm mb-4">
            <span className="text-white font-bold">About ICT Division</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <Image src="/footer/np-logo-set.png" alt="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
