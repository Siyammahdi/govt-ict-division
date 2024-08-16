"use client";

import React, { useState } from "react";
import ComponentLayout from "../ComponentLayout";
import { Card, Image, Link } from "@nextui-org/react";
import { FaLink } from "react-icons/fa";

const HoverCard: React.FC<{
  title: string;
  links: string[];
  image: string;
}> = ({ title, links, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:bg-gradient-to-r from-[#064e3b] to-[#14532d] rounded-lg overflow-hidden transition-all duration-700 ease-in-out p-8 w-full ${
        isHovered ? "max-h-[350px]" : "max-h-[100px]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        isFooterBlurred
        className="h-full bg-transparent border-none shadow-none"
      >
        <div className="flex gap-5 items-center">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={50}
          />
          <p className="text-xl text-white uppercase font-light ">{title}</p>
        </div>
        <div
          className={`mt-4 font-light transition-opacity duration-700 ease-in-out ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <Link href="#" className="text-white flex gap-3 ml-16">
                  <FaLink /> {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

const InfoCards: React.FC = () => {
  return (
    <ComponentLayout>
      <div className="flex gap-10 pt-20">
        <div className="mb-20 gap-4 flex flex-wrap w-1/2 text-white ">
          {cards.map((card) => (
            <HoverCard
              key={card.id}
              title={card.title}
              links={card.links}
              image={card.image}
            />
          ))}
        </div>
        <div className="w-1/2">
          <div className=" bg-slate-100 rounded-2xl">
            <h1 className="text-2xl py-3 rounded-t-2xl px-10 text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:bg-gradient-to-r from-[#064e3b] to-[#14532d]">
              Internal eServices
            </h1>
            <div className="px-10 py-6 text-xl space-y-2 ">
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Web Mail
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Online Application
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> National Enterprise Architecture
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> CIRT
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Online Recruitment System
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> One Stop Service (OSS) (Bangladesh Hi-Tech Park
                Authority)
              </Link>
            </div>
          </div>
          <div className="mt-10 bg-slate-100 rounded-2xl">
            <h1 className="text-2xl py-3 rounded-t-2xl px-10 text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:bg-gradient-to-r from-[#064e3b] to-[#14532d]">
              Important Links
            </h1>
            <div className="px-10 py-6 text-xl space-y-2">
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Presidents Office
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Prime Ministers Office
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Cabinet Division
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Bangladesh Karmachari Kallyan Board (BKKB)
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> National Skills Development Authority
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> Primary Digital Content
              </Link>
              <Link href="#" className=" flex gap-3 ">
                <FaLink /> National Portal
              </Link>
            </div>
          </div>
          
          <div className=" mt-10 bg-slate-100  rounded-2xl">
            <h1 className="text-2xl py-3 rounded-t-2xl px-10 text-white font-semibold bg-gradient-to-r from-[#006a4e] to-[#188f00] dark:bg-gradient-to-r from-[#064e3b] to-[#14532d]">
              Visitor Count
            </h1>
            <div className="flex justify-center py-10">
              <Image src="/ICTDivisionResult.png" height={500} alt="result" />
            </div>
          </div>
          <div className="flex flex-col py-10 items-center gap-2">
            <Link>
              <Image src="/e-directory.jpg" alt="gov" width={300} />
            </Link>
            <Link>
              <Image src="/internal_eservice_en.jpg" alt="gov" width={300} />
            </Link>
            <Link>
              <Image src="/mygov_logo_en.jpg" alt="gov" width={300} />
            </Link>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default InfoCards;

const cards = [
  {
    id: 1,
    title: "About us",
    links: [
      "Vision & Mission",
      "Organogram",
      "Officers/Staff",
      "Work Distribution",
    ],
    image: "/icons/aboutus.png",
  },
  {
    id: 2,
    title: "Notice/Order/Circular",
    links: [
      "Notification/Circular",
      "Office orders/ Government Orders (GO)",
      "News Notifications",
      "Tender/Recruitment Notice",
    ],
    image: "/icons/notice.png",
  },
  {
    id: 3,
    title: "Policies & Publications",
    links: [
      "Policy",
      "Laws & Regulations/Guidelines & Strategies",
      "Publications & Annual Report",
      "Others Report",
    ],
    image: "/icons/policies.png",
  },
  {
    id: 4,
    title: "Citizen e-Services",
    links: [
      "Donation in ICT Innovation",
      "Fellowship & Scholarship",
      "Hi-Teck Park One Stop Service",
      "Other e-Service",
    ],
    image: "icons/e-service.png",
  },
  {
    id: 5,
    title: "Citizen's Charter",
    links: [
      "Citizen's Charter",
      "Focal Point/Monitoring Committee",
      "Work Plan, Monitoring & Evaluation Report",
      "Laws/Regulations/Policies",
    ],
    image: "/icons/CitizenCharter.png",
  },
  {
    id: 6,
    title: "Annual Performance Management",
    links: [
      "Guidelines/Circulars/APA Team/Focal Point",
      "Annual Performance Agreement & Result",
      "Monitoring and evaluation report",
      "APAMS software link",
    ],
    image: "/icons/apa.png",
  },
  {
    id: 7,
    title: "National Integrity Strategy",
    links: [
      "Best Practice Work Plan Web Link",
      "Intregrity Strategy Committee & Focal point",
      "Monitoring/Evaluation Report",
      "Laws/Regulations/Policies",
    ],
    image: "/icons/nis_logo3.png",
  },
  {
    id: 8,
    title: "Grievance Redress System",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/Grievance.png",
  },
  {
    id: 9,
    title: "Right to Information",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/infocom.png",
  },
  {
    id: 10,
    title: "Innovative Activities",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/InnovativeActivities.png",
  },
  {
    id: 11,
    title: "Service Process Simplification",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/ServiceProcess.png",
  },
  {
    id: 12,
    title: "SDG and Development Plan",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/FinalLogoSDG.png",
  },
  {
    id: 13,
    title: "Budget & Projects",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/budget.png",
  },
  {
    id: 14,
    title: "Miscellaneous",
    links: [
      "GRS and Appellate Officers",
      "Work Plan, Monitoring & Evalution Report",
      "Grievance Submission (Online)",
      "Laws/Regulations/Notifications",
    ],
    image: "/icons/-সেবা-1_0.png",
  },
];