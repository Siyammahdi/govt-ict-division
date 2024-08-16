"use client";
import React, { useState } from "react";
import ComponentLayout from "../ComponentLayout";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
} from "@nextui-org/react";

const InCharge: React.FC = () => {
  const [selectedAdviser, setSelectedAdviser] = useState<{
    id: number;
    name: string;
    image: string;
    post: string;
    about1: string;
    about2: string;
    about3: string;
  } | null>(null);

  const handleDetailsClick = (adviser: {
    id: number;
    name: string;
    image: string;
    post: string;
    about1: string;
    about2: string;
    about3: string;
  }) => {
    setSelectedAdviser(adviser);
  };

  const closeModal = () => {
    setSelectedAdviser(null);
  };

  return (
    <ComponentLayout>
      <h1 className="text-3xl px-5 text-[#188f00] font-semibold py-8 pb-16">
        In Charge
      </h1>
      <div className="flex flex-col md:flex-row pb-32 px-5 gap-10">
        {advisers.map((adviser) => (
          <Card
            key={adviser.id}
            isFooterBlurred
            className="w-full h-[300px] col-span-12 sm:col-span-5"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-xl text-white/70 uppercase font-bold">
                {adviser.post}
              </p>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src={adviser.image}
            />
            <CardFooter className="absolute bg-gradient-to-r from-[#006a4e] to-[#188f00]/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-xl font-semibold">
                  {adviser.name}
                </p>
              </div>
              <Button
                className="text-tiny bg-red-600 text-white font-semibold"
                radius="md"
                size="sm"
                onClick={() => handleDetailsClick(adviser)}
              >
                Details
              </Button>
            </CardFooter>
          </Card>
        ))}
        
      </div>


      {/* Modal Implementation */}
      {selectedAdviser && (
        <Modal
          backdrop="blur"
          isOpen
          size="3xl"
          onClose={closeModal}
          aria-labelledby="modal-title"
        >
          <ModalContent>
            <ModalHeader className="items-center mb-8 gap-2 bg-gradient-to-r from-[#006a4e] to-[#188f00]">
              <p className="text-2xl text-white font-bold" id="modal-title">
                {selectedAdviser.name}
              </p>
              <p className="text-lg font-semibold text-white/50">
                {selectedAdviser.post}
              </p>
            </ModalHeader>
            <ModalBody>
              <div className=" flex gap-5">
                <Image
                  src={selectedAdviser.image}
                  alt={`${selectedAdviser.name}'s image`}
                  width={300}
                  height={200}
                  className="rounded-xl mx-auto mb-4"
                />
                <p className="text-sm text-gray-700 w-1/2">{selectedAdviser.about1}</p>
              </div>

              <div className="text-sm text-gray-700 space-y-5">
                <p>{selectedAdviser.about2}</p>
                <p>{selectedAdviser.about3}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={closeModal}
                className="bg-gradient-to-r from-[#006a4e] to-[#188f00] text-white font-semibold"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </ComponentLayout>
  );
};

export default InCharge;

const advisers = [
  {
    id: 1,
    name: "Dr. Mohammad Younus",
    image: "/MohammadYounus.png",
    post: "Honorable Chief Adviser",
    about1:
      "The third of nine children, Muhammad Yunus was born on 28 June 1940 to a Bengali family of Muslim Saudagars in the village of Bathua, by the Kaptai road at Hathazari in the Chittagong District of Bengal Presidency (now in Bangladesh). His father was Haji Muhammad Dula Mia Soudagar, a jeweller, and his mother was Sufia Khatun. His early childhood was spent in the village. In 1957, he enrolled in the Department of Economics at Dhaka University and completed his BA in 1960 and MA in 1961",
    about2:
      "In 1976, during visits to the poorest households in the village of Jobra near Chittagong University, Yunus discovered that very small loans could make a disproportionate difference to a poor person. Village women who made bamboo furniture had to take usurious loans to buy bamboo, and repay their profits to the lenders. Traditional banks did not want to make tiny loans at reasonable interest to the poor due to high risk of default.[25] But Yunus believed that, given the chance, the poor will not need to pay high interest on the money, can keep any profits from their own labor, and hence microcredit was a viable business model. Yunus lent US$27 of his money to 42 women in the village, who made a profit of BDT 0.50 (US$0.02) each on the loan.[citation needed] Thus, Yunus is credited with the idea of microcredit. In December 1976, Yunus finally secured a loan from the government Janata Bank to lend to the poor in Jobra.",
    about3:
      "After dissolving parliament on 6 August 2024, Bangladeshi president Mohammed Shahabuddin nominated Yunus to serve as the head of the interim government of Bangladesh, acceding to student demands following the resignation of former Prime Minister Sheikh Hasina. His acquittal on appeal the following day of charges of labor code violations, which were viewed as politically motivated, facilitated his return to the country and appointment.",
  },
  {
    id: 2,
    name: "Nahid Islam",
    image: "/NahidIslam.jpg",
    post: "Honorable Ict Adviser",
    about1:
      "Nahid Islam (born in 1998) is a Bangladeshi student activist He has been an adviser of ICT to the interim government of Bangladesh since August 8, 2024.[4] He was one of the main coordinators of the Anti-discrimination Students Movement, which led the 2024 Bangladesh quota reform movement, the government once unluckily called the protesters 'Razakar'.[6] He is currently serving under Chief Adviser, Nobel Peace Prize winner Muhammad Yunus",
    about2:
      "Nahid is a coordinator for a student movement named Anti-discrimination Students Movement which organized protests in support of reforming quotas in government jobs, which evolved into a non-cooperation movement demanding the resignation of Prime Minister Sheikh Hasina and her government. He gained national attention in mid-July 2024 when he and several other Dhaka University students were detained by police as protests turned violent.[10][11]In the aftermath, on August 5, Hasina resigned and fled the country for India. Nahid stated that their goals were not fully met, and following Hasina’s resignation, the group aimed to 'abolish fascist systems forever'. He and his group called on Nobel Laureate Muhammad Yunus to lead an interim government, which he accepted.",
    about3:
      "Islam was reportedly abducted at midnight on 19 July 2024, from a house in Sabujbagh by at least 25 men in plainclothes. Blindfolded and handcuffed, he was taken to a room where he was interrogated repeatedly about his involvement in the student movement and then tortured. He was left unconscious and battered under a bridge in Purbachal on 21 July. Later on 26 July, Islam was seized from Gonoshasthaya Nagar Hospital in Dhanmondi by individuals identifying themselves as personnel from various intelligence agencies, including the Dhaka Metropolitan Police’s Detective Branch.",
  },
  {
    id: 3,
    name: "Shamsul Arefin",
    image: "/ShamsulArefin.jpg",
    post: "Secretary",
    about1:
      "Mr. Md Shamsul Arefin is currently serving as the Secretary of the Information and Communication Technology Division. he held the position of the Secretary of Coordination and Reforms at the Cabinet Division of Bangladesh. he served as Joint Secretary and Additional Secretary at the same Division. He is a member of the Bangladesh Civil Service (Administration) cadre and belongs to the BCS-11th batch. He obtained B.Com. (Hons.) and M.Com. from the Department of Finance at Dhaka University. ",
    about2:
      "Throughout his career, Mr. Arefin has held many important positions in the field administration, including Magistrate, Assistant Commissioner (Land), UNO and DC, in various parts of the country. Additionally, he served as Deputy Director of the Accommodation Directorate, Senior Assistant Secretary in the Ministry of Food and Disaster Management, Deputy Secretary in the Economic Relations Division, and Director of Rajdhani Unnayon Kotripokhho (RAJUK). He has also worked as a Thana Election Officer, Assistant Returning Officer, and Returning Officer in national and local government level elections.",
    about3:
      "During his long career, Mr. Arefin actively participated in various meetings, workshops, and seminars, including regional, bilateral, and multilateral meetings on different negotiations, both in the country and abroad. He has experience in the preparation, monitoring, and evaluation of Annual Performance Agreement (APA), National Integrity Strategy (NIS), and Grievance Redress System (GRS). He has participated in several training courses both at home and abroad, including 'Special Training on Good Governance' in India, 'Professional Development Program' in the USA, and 'Project Management' in Australia. He has also visited several countries, including India, Japan, the USA, and Australia, and has joined different seminars and workshops as a speaker or panelist.",
  },
];
