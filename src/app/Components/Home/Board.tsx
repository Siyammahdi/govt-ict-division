import React from "react";
import ComponentLayout from "../ComponentLayout";
import { TbListDetails } from "react-icons/tb";
import { VscActivateBreakpoints } from "react-icons/vsc";

const Board: React.FC = () => {
  return (
    <div className="mb-20 bg-gradient-to-r from-[#006a4e] to-[#188f00]">
      <ComponentLayout>
        <h1 className="text-3xl text-white font-extralight py-8 pb-16">Notice <span className="text-secondary font-semibold">Board</span></h1>

        <div className="pb-20">
          <div className="card bg-white bg-opacity-35 w-full h-auto rounded-md overflow-hidden shadow-lg transition-colors duration-300">
            <input
              type="checkbox"
              id="accordion-item"
              className="hidden peer"
            />
            <label
              htmlFor="accordion-item"
              className="flex justify-between items-center p-3.5 py-16 cursor-pointer select-none text-gray-800 font-semibold text-base transition-colors duration-300"
            >
              <div className="space-y-5 px-16 text-white dark:text-black">
                {tenderNoticesPri.map((notice, index) => (
                  <p key={index} className="flex items-center gap-5">
                    <VscActivateBreakpoints /> {notice}
                  </p>
                ))}
              </div>
              <span className="expand-btn transition-transform text-2xl text-white transform peer-checked:-rotate-90">
                <TbListDetails />
              </span>
            </label>
            <div className="detail-box overflow-hidden transition-all duration-1000 max-h-0 peer-checked:max-h-[2100px]">
              <div className="transition-box p-4 pb-16 pt-0 rounded-md">
                <div className="content space-y-5 px-16 text-white font-semibold">
                  {tenderNoticesFull.map((notice, index) => (
                    <p key={index} className="flex items-center gap-5">
                      <VscActivateBreakpoints /> {notice}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </div>
  );
};

export default Board;

//peer-checked:bg-gradient-to-br peer-checked:from-blue-200 peer-checked:to-red-200

const tenderNoticesPri = [
  "Request for Proposals: Design and Implementation of a Smart City Traffic Management System",
  "Invitation to Bid: Supply of Eco-Friendly Packaging Materials for Retail Products",
  "Call for Tender: Annual Maintenance and Calibration of Laboratory Instruments",
];

const tenderNoticesFull = [
  "Request for Proposals: Construction of New School Building in Downtown",
  "Invitation to Bid: Supply of Medical Equipment for City Hospital",
  "Call for Tender: IT Network Infrastructure Upgrade for University Campus",
  "Call for Tender: Landscaping and Grounds Maintenance for Public Parks",
  "Request for Quotation: Catering Services for Annual Corporate Event",
  "Invitation to Bid: Installation of Solar Panels for Government Buildings",
  "Call for Proposals: Development of Mobile App for Local Government Services",
  "Request for Bids: Renovation of City Library Interior",
  "Invitation to Bid: Installation of Solar Panels for Government Buildings",
  "Invitation for Tender: Procurement of Office Furniture for New Office Spaces",
  "Request for Proposals: Marketing Campaign for Upcoming Product Launch",
  "Call for Tender: IT Network Infrastructure Upgrade for University Campus",
  "Invitation to Bid: Cleaning Services for Municipal Buildings",
  "Request for Quotations: Supply and Installation of Security Systems for Retail Stores",
];
