import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import logo from "../assets/Strawberry-removebg-preview.png";
import logo1 from "../assets/BlueBerry-removebg-preview.png";
import logo2 from "../assets/Chocolate-removebg-preview.png";
import Header from "../components/Header";
import Images from "../components/Images";

import smallLogo1 from "../assets/Cherry-removebg-preview.png"
import smallLogo2 from "../assets/Chocolate pice.png"
import smallLogo3 from "../assets/Leafe-removebg-preview.png"
import smallLogo4 from "../assets/berry.png"

interface DonutItem {
  name: string;
  bg: string;
  color: string;
  img: string;
}

function HeroSection() {
  const donutArray: DonutItem[] = [
    {
      name: "Strawberry",
      bg: "#FDDBE4",
      color: "#F8506D",
      img: logo,
    },
    {
      name: "BlueBerry",
      bg: "#DEF7FF",
      color: "#4ABAF0", // Fixed typo: was #4ABAFO
      img: logo1,
    },
    {
      name: "Chocolate",
      bg: "#FFF2E3",
      color: "#974F2D",
      img: logo2,
    },
  ];

  const [selectedDonut, setSelectedDonut] = useState<number>(0);
  const [donutColor, setDonutColor] = useState<string>(donutArray[0].color);
  const [donutBackgroundColor, setDonutBackgroundColor] = useState<string>(donutArray[0].bg);

  // Function to handle donut selection
  const handleDonutSelect = (index: number) => {
    setSelectedDonut(index);
    setDonutColor(donutArray[index].color);
    setDonutBackgroundColor(donutArray[index].bg);
  };

  return (
    <div 
      style={{ backgroundColor: donutBackgroundColor }} 
      className="w-screen min-h-screen overflow-x-hidden sm:px-16 px-8"
    >
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
              {donutArray[selectedDonut].name} {/* Fixed: was donutArray.name */}
            </p>
            <p className="text-6xl font-bold text-slate-800">Donut</p>
          </div>

          <div>
            <p className="text-2xl text-slate-600">
              Raised ring with {donutArray[selectedDonut].name.toLowerCase()} frosting
            </p>
            <p className="text-2xl text-slate-600">and round sprinkles</p>
          </div>

          <div className="flex gap-4 flex-col sm:flex-row">
            <Button variant="primary" color={donutColor}>
              Order Now
            </Button>
            <Button variant="outline" color={donutColor}>
              View Menu
            </Button>
          </div>

          {/* Donut Thumbnails */}
          <div className="flex gap-5 mt-6">
            {donutArray.map((item, idx) => {
              return (
                <div 
                  key={idx} 
                  onClick={() => handleDonutSelect(idx)}
                  className="cursor-pointer"
                >
                  <Images img={item.img} name={item.name} />
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Right Donut Image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, rotate: 90 }}
          transition={{ duration: 0.7 }}
        >
          <motion.img
            src={donutArray[selectedDonut].img} // Fixed: was donutArray[0].img
            alt={donutArray[selectedDonut].name} // Fixed: was donutArray[0].name
            className="w-[260px] sm:w-[300px] lg:w-[380px] rounded-full shadow-2xl"
            style={{ boxShadow: `0 25px 50px -12px ${donutColor}40` }} // Dynamic shadow color
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <img className="absolute -bottom-14 left-1" src={smallLogo4} alt="" width={100}/>
          <img className="absolute -top-14 left-1" src={smallLogo1} alt="" width={100}/>
          <img className="absolute -top-14 right-1" src={smallLogo3} alt="" width={100}/>
          <img className="absolute -bottom-14 right-1" src={smallLogo2} alt="" width={100}/>
        </motion.div>
      </main>
    </div>
  );
}

export default HeroSection;