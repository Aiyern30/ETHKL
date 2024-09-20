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
      <div className="hidden lg:grid grid-cols-5 grid-rows-6 h-screen bg-yellow-400">
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
