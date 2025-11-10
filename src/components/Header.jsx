import React, { useState } from "react";
import { Menu, Rotate3D, X } from "lucide-react";
import logo from "../assets/Screenshot_2025-11-09_233710-removebg-preview.png";
import {animate, motion} from "framer-motion"
import Button from "./Button";

function Header({color}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Home", "Menu", "Our Story", "Reviews"];

  return (
    <header className="w-full flex justify-between items-center sm:px-12 lg:px-20 py-6">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <motion.img
        whileHover={{rotate: 45, scale: 1.1}}
        transition={{duration: 0.3}}
          className="cursor-pointer"
          src={logo}
          alt="Donut logo"
          width={40}
        />
        <p className="text-2xl font-bold text-slate-700 cursor-pointer hover:scale-105 transition-all duration-300">
          Donut
        </p>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-medium text-slate-700">
        {navItems.map((item) => (
          <li
            key={item}
            className="list-none cursor-pointer hover:scale-105 transition-all duration-300"
          >
            {item}
          </li>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Contact Button */}
      <button style={{backgroundColor: color}} className={`hidden md:block px-6 py-1.5 text-white font-medium rounded-full transition-all duration-30`}>
        Contact
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 font-medium text-slate-700 md:hidden z-50">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:scale-105 transition-all duration-300"
            >
              {item}
            </li>
          ))}
          <button className="bg-sky-400 hover:bg-sky-500 px-6 py-2 text-white font-medium rounded-full transition-all duration-300">
            Contact
          </button>
        </ul>
      )}
    </header>
  );
}

export default Header;