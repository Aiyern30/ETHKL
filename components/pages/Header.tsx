"use client";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-start border border-black relative text-black">
      <div
        className="flex-1 flex items-end sm:border-r border-black p-8 relative"
        style={{ height: "500px" }}
      >
        <div className="absolute top-5 left-0 pl-4">
          <h1 className="text-2xl font-bold flex flex-col">
            <div>LOGO</div>
            <div>HERE</div>
            <div>HERE</div>
          </h1>
        </div>

        <div className="flex-1 flex flex-col justify-end px-6 pb-6 lg:px-[50px] lg:pb-[50px]">
          <h2 className="text-3xl lg:text-4xl font-bold">
            I'm Milids, A Self-taught UI/UX Designer
          </h2>
          <p className="mt-4 text-base lg:text-lg">
            Based in Cheras, Malaysia. I'm passionate about improving the lives
            of others through design and learning new things every day.
          </p>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex p-8">
        <ul className="flex flex-col space-y-4 text-xl font-semibold text-right">
          {["Home", "Services", "My Project", "Contact"].map((item, index) => (
            <li
              key={index}
              className="relative group cursor-pointer text-right"
            >
              <div className="flex items-center justify-between">
                <a
                  href={`#${item.replace(" ", "").toLowerCase()}`}
                  className="transition-all duration-300 group-hover:text-yellow-800 group-hover:underline"
                >
                  {item}
                </a>
                <span className="absolute -right-11 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-yellow-400 group-hover:text-yellow-800">
                  <FaMinus />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden absolute top-0 right-0 border-l border-b border-black">
        <button
          onClick={toggleMenu}
          className="text-2xl font-bold focus:outline-none p-5"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-[72px] right-0 bg-yellow-400 border border-black shadow-md rounded-md p-4">
          <ul className="flex flex-col space-y-4 text-lg font-semibold text-right">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="/Services">
              <li className="cursor-pointer">Services</li>
            </a>
            <a href="/Project">
              <li className="cursor-pointer">My Project</li>
            </a>
            <a href="/Contact">
              <li className="cursor-pointer">Contact</li>
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
