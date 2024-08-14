"use client"
// import React, { useState } from "react";
// import { Accordion, AccordionItem } from "@nextui-org/react";

// export default function App() {
//   const [hoveredItem, setHoveredItem] = useState(null);

//   const defaultContent =
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

//   const handleMouseEnter = (key) => {
//     setHoveredItem(key);
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

//   return (
//     <Accordion variant="shadow">
//       <AccordionItem
//         key="1"
//         aria-label="Accordion 1"
//         title="Accordion 1"
//         isOpen={hoveredItem === "1"}
//         onMouseEnter={() => handleMouseEnter("1")}
//         onMouseLeave={handleMouseLeave}
//         css={{
//           backgroundColor: hoveredItem === "1" ? "#e0f7fa" : "white", // Change color when selected
//         }}
//       >
//         {defaultContent}
//       </AccordionItem>
//       <AccordionItem
//         key="2"
//         aria-label="Accordion 2"
//         title="Accordion 2"
//         isOpen={hoveredItem === "2"}
//         onMouseEnter={() => handleMouseEnter("2")}
//         onMouseLeave={handleMouseLeave}
//         css={{
//           backgroundColor: hoveredItem === "2" ? "#e0f7fa" : "white", // Change color when selected
//         }}
//       >
//         {defaultContent}
//       </AccordionItem>
//       <AccordionItem
//         key="3"
//         aria-label="Accordion 3"
//         title="Accordion 3"
//         isOpen={hoveredItem === "3"}
//         onMouseEnter={() => handleMouseEnter("3")}
//         onMouseLeave={handleMouseLeave}
//         css={{
//           backgroundColor: hoveredItem === "3" ? "#e0f7fa" : "white", // Change color when selected
//         }}
//       >
//         {defaultContent}
//       </AccordionItem>
//     </Accordion>
//   );
// }


import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Button color="primary">
        Test Button
      </Button>
    </div>
  );
}