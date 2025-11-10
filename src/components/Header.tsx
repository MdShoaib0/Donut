import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/BlueBerry-removebg-preview.png";
import { motion } from "framer-motion";

interface HeaderProps {
  color: string;
}

function Header({ color }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems: string[] = ["Home", "Menu", "Our Story", "Reviews"];

  return (
    <header className="w-full flex justify-between items-center sm:px-12 lg:px-20 py-6">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <motion.img
          whileHover={{ rotate: 45, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer rounded-full"
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
      <button 
        style={{ backgroundColor: color }} 
        className="hidden md:block px-6 py-1.5 text-white font-medium rounded-full transition-all duration-300"
      >
        Contact
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.ul 
          className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-6 gap-4 font-medium text-slate-700 md:hidden z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
          <button 
            style={{ backgroundColor: color }} 
            className="px-6 py-2 text-white font-medium rounded-full transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </button>
        </motion.ul>
      )}
    </header>
  );
}

export default Header;  