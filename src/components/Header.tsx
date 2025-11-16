import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  color: string;
  logo: string;
}

function Header({ color, logo }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const parentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0 },
  };

  const navItems: string[] = ["Home", "Menu", "Our Story", "Reviews"];

  return (
    <header className="w-full flex justify-between items-center px-6 sm:px-16 lg:px-24 py-6">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 360 }}
          whileHover={{ rotate: 180, scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="cursor-pointer rounded-full"
          src={logo}
          alt="Donut logo"
          width={40}
        />
        <motion.p
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-slate-700 cursor-pointer">
          Donut
        </motion.p>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 font-medium text-slate-700">
        <motion.ul
          variants={parentVariants}
          initial="hidden"
          animate="show"
          className="flex gap-8"
        >
          {navItems.map((item) => (
            <motion.li
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              key={item}
              className="list-none cursor-pointer"
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Mobile Toggle */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Contact Button */}
      <motion.button
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ backgroundColor: color }}
        className="hidden md:block px-6 py-1.5 text-white font-medium rounded-full"
      >
        Contact
      </motion.button>

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