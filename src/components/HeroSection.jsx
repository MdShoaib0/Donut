import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import logo from "../assets/Screenshot_2025-11-09_233710-removebg-preview.png";
import logo1 from "../assets/Screenshot_2025-11-09_233751-removebg-preview.png";
import logo2 from "../assets/Screenshot_2025-11-09_233812-removebg-preview.png";
import Header from "./Header";

function HeroSection() {

  const donutArray = [
    {
      name: "Strawberry",
      color: "#FFB6C1",
      bg: "#FFE4EC",
      img: logo,
    },
    {
      name: "Blueberry",
      color: "#87CEEB",
      bg: "#E0F6FF",
      img: logo1,
    },
    {
      name: "Dark Chocolate",
      color: "#5C4033",
      bg: "#EDE0D5",
      img: logo2,
    },
  ];


  const [selectedDonut, setSelectedDonut] = useState(0);
  const [donutColor, setDonutColor] = useState(donutArray[0].color);
  const [donutBackgroundColor, setDonutBackgroundColor] = useState(donutArray[0].bg);

  return (
    <div style={{ backgroundColor: donutBackgroundColor }} className="w-screen min-h-screen overflow-x-hidden sm:px-16 px-8">
      {/* Header Section */}
      <Header color={donutColor} />

      <main className="flex flex-col-reverse lg:flex-row justify-between items-center mt-20 lg:mt-28 px-6 sm:px-12 lg:px-20">
        {/* Left Text Section */}
        <motion.div
          className="flex flex-col gap-7 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-6xl font-bold text-slate-800">
              {donutArray[selectedDonut].name}
            </p>
            <p className="text-6xl font-bold text-slate-800">Donut</p>
          </div>

          <div>
            <p className="text-2xl text-slate-600">
              Raised ring with {donutArray[selectedDonut].name.toLowerCase()} frosting
            </p>
            <p className="text-2xl text-slate-600">and round sprinkles</p>
          </div>

          <div className="flex gap-4">
            <Button variant="primary" color={donutColor}>
              Order Now
            </Button>
            <Button variant="outline" color={donutColor}>
              View Menu
            </Button>
          </div>

          {/* Donut Thumbnails */}
          <div className="flex gap-5 mt-6">
            {donutArray.map((item, idx) => (
              <motion.img
                key={idx}
                src={item.img}
                alt={item.name}
                className={`w-20 h-20 cursor-pointer rounded-full transition-all duration-300 ${selectedDonut === idx ? "scale-110" : "opacity-80"
                  }`}
                style={{
                  boxShadow:
                    selectedDonut === idx ? `0 0 0 4px ${item.color}` : "none",
                }}
                onClick={() => {
                  setSelectedDonut(idx);
                  setDonutColor(item.color);
                  setDonutBackgroundColor(item.bg);
                }}
                whileHover={{ rotate: 25, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Donut Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="w-[300px] sm:w-[350px] lg:w-[420px] h-[300px] sm:h-[350px] lg:h-[420px] flex justify-center items-center rounded-full backdrop-blur-3xl shadow-lg transition-all duration-500"
            style={{ backgroundColor: donutArray[selectedDonut].color }}
          >
            <motion.img
              src={donutArray[selectedDonut].img}
              alt={donutArray[selectedDonut].name}
              className="w-[260px] sm:w-[300px] lg:w-[380px]"
              whileHover={{ rotate: 10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </main>
    </div>

  );
}

export default HeroSection;