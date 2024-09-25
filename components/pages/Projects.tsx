// import { GrFormNextLink } from "react-icons/gr";
// import { Button } from "../ui";
// import StripedBackground from "./StripedBackground ";
// import Image from "next/image";

// const Projects = () => (
//   <div
//     className="grid grid-cols-3 grid-rows-4 "
//     style={{
//       gridTemplateAreas: `
//         "box1 box2 box3"
//         "box4 box4 box3"
//         "box4 box4 box5"
//         "box4 box4 box5"
//       `,
//       gridTemplateColumns: "repeat(3, 1fr)",
//       gridTemplateRows: "repeat(4, auto)",
//     }}
//   >
//     <div
//       className="flex items-center justify-center"
//       style={{ gridArea: "box1", height: "230px" }}
//     >
//       <StripedBackground width="100%" height="100%" />
//     </div>
//     <div
//       className="bg-yellow-400 flex items-center justify-center"
//       style={{ gridArea: "box2", height: "230px" }}
//     ></div>
//     <div
//       className="flex items-center justify-center"
//       style={{ gridArea: "box3", height: "300px" }}
//     >
//       <StripedBackground width="100%" height="100%" />
//     </div>
//     <div
//       className="bg-yellow-400 border-2 border-black p-9 text-black"
//       style={{ gridArea: "box4", height: "680px" }}
//     >
//       <div className="font-bold  mb-4">My Projects</div>
//       <div className="flex justify-center items-center">
//         <div className="w-1/2 space-y-5">
//           <div className="">1/6</div>
//           <div className="text-xl ">Redesign Case Study</div>
//           <div className="text-sm ">
//             Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
//             sint. Velit officia consequat duis enim velit mollit. Exercitation
//             veniam consequat sunt nostrud amet.
//           </div>
//         </div>
//         <div className="w-1/2 flex items-center justify-center">
//           <Image src="/controller.png" alt="shadcn" width={300} height={300} />
//         </div>
//       </div>
//       <div className="relative flex justify-center mt-4">
//         <button className="border-2 w-48 border-black h-10 rounded hover:bg-[#FFE042] text-left pl-5">
//           Get Started
//         </button>
//         <GrFormNextLink size={30} className="absolute top-2 right-2" />
//       </div>
//     </div>
//     <div
//       className="bg-yellow-400 flex items-center justify-center"
//       style={{ gridArea: "box5", height: "20rem" }}
//     ></div>
//   </div>
// );

// export default Projects;

"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import StripedBackground from "./StripedBackground ";

// Example projects array (You can replace this with your actual data)
const projects = [
  {
    title: "Redesign Case Study",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
    index: 1,
    total: 6,
  },
  {
    title: "E-commerce Platform",
    description:
      "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud...",
    index: 2,
    total: 6,
  },
  {
    title: "Social Media App",
    description: "Non deserunt ullamco est sit aliqua dolor do amet sint...",
    index: 3,
    total: 6,
  },
  // Add more projects as needed
];

export default function Testing() {
  const [currentProject, setCurrentProject] = useState(0);

  // Function to go to the previous project
  const handlePrevious = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Function to go to the next project
  const handleNext = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Desktop View */}
      <div
        id="myproject"
        className="hidden lg:grid grid-cols-5 grid-rows-6 h-screen bg-yellow-400 text-black"
      >
        <div className="row-span-2 col-span-2 bg-black">
          <StripedBackground width="100%" height="100%" />
        </div>
        <div className="row-span-2 col-span-2"></div>
        <div className="row-span-3 col-span-1 bg-black">
          <StripedBackground width="100%" height="100%" />
        </div>
        <div className="col-span-4 row-span-4 p-4 flex flex-col justify-between border-2 border-black">
          <div>
            <h4 className="text-xl font-semibold">My Projects</h4>
            <h1 className="text-4xl font-bold mt-2">
              {projects[currentProject].index}/{projects[currentProject].total}
            </h1>
            <h2 className="text-2xl font-bold mt-4">
              {projects[currentProject].title}
            </h2>
            <p className="mt-4">{projects[currentProject].description}</p>
          </div>
          <button className="mt-4 px-4 py-2 border border-black flex items-center gap-2">
            Take A Look <span>→</span>
          </button>
        </div>
        <div className="row-span-4 flex justify-between items-center px-4">
          <button
            onClick={handlePrevious}
            className="w-40 h-12 flex items-center justify-center border border-black hover:bg-gray-200"
          >
            <FaChevronLeft className="text-xl text-black" />
          </button>
          <button
            onClick={handleNext}
            className="w-40 h-12 flex items-center justify-center border border-black hover:bg-gray-200"
          >
            <FaChevronRight className="text-xl text-black" />
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden grid grid-cols-2 grid-rows-6 h-screen bg-yellow-400">
        <div className="row-span-1">
          <StripedBackground width="100%" height="100%" />
        </div>
        <div className="row-span-1"></div>
        <div className="col-span-2 row-span-4 p-4 flex flex-col justify-between border-2 border-black">
          <div>
            <h4 className="text-xl font-semibold">My Projects</h4>
            <h1 className="text-4xl font-bold mt-2">
              {projects[currentProject].index}/{projects[currentProject].total}
            </h1>
            <h2 className="text-2xl font-bold mt-4">
              {projects[currentProject].title}
            </h2>
            <p className="mt-4">{projects[currentProject].description}</p>
          </div>
          <button className="mt-4 px-4 py-2 border border-black flex items-center gap-2">
            Take A Look <span>→</span>
          </button>
        </div>
        <div className="row-span-1 col-span-2 flex items-center">
          <button
            onClick={handlePrevious}
            className="w-40 h-12 flex items-center justify-center border border-black hover:bg-gray-200"
          >
            <FaChevronLeft className="text-xl text-black" />
          </button>
          <button
            onClick={handleNext}
            className="w-40 h-12 flex items-center justify-center border border-black hover:bg-gray-200"
          >
            <FaChevronRight className="text-xl text-black" />
          </button>
        </div>
        <div className="row-span-1"></div>
        <div className="row-span-1 sm:hidden">
          <StripedBackground width="100%" height="100%" />
        </div>
      </div>
    </>
  );
}
