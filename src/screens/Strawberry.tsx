// Strawberry.tsx
import { motion } from "framer-motion";
import Button from "../components/Button";
import logo1 from "../assets/Strawberry-removebg-preview.png";
import logo2 from "../assets/BlueBerry-removebg-preview.png";
import logo3 from "../assets/Chocolate-removebg-preview.png";
import Header from "../components/Header";
import Images from "../components/Images";

import smallLogo1 from "../assets/Cherry-removebg-preview.png";
import smallLogo2 from "../assets/Chocolate pice.png";
import smallLogo3 from "../assets/Leafe-removebg-preview.png";
import smallLogo4 from "../assets/berry.png";

interface StrawberryProps {
  onScreenChange: (screen: number) => void;
}

function Strawberry({ onScreenChange }: StrawberryProps) {
  const donutName = "Strawberry";
  const donutColor = "#F8506D";
  const donutBg = "#FDDBE4";

  return (
    <div
      style={{ backgroundColor: donutBg }}
      className="w-screen min-h-screen overflow-x-hidden sm:px-16 px-8"
    >
      <Header color={donutColor} logo={logo1} />

      <main className="flex flex-col-reverse lg:flex-row justify-between items-center mt-20 lg:mt-28 px-6 sm:px-12 lg:px-20">
        <motion.div
          className="flex flex-col gap-7 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-6xl font-bold text-slate-800">{donutName}</p>
            <p className="text-6xl font-bold text-slate-800">Donut</p>
          </div>

          <div>
            <p className="text-2xl text-slate-600">
              Raised ring with strawberry frosting
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

          <div className="flex gap-5 mt-6">
            <Images img={logo1} name={donutName} onClick={() => onScreenChange(1)} />
            <Images img={logo2} name={donutName} onClick={() => onScreenChange(2)} />
            <Images img={logo3} name={donutName} onClick={() => onScreenChange(3)} />
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center"
          initial={{ x: 350, opacity: 0 }}
          animate={{ x: 0, rotate: 90, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={logo1}
            alt={donutName}
            className="w-[260px] sm:w-[300px] lg:w-[380px] rounded-full shadow-2xl"
            style={{ boxShadow: `0 25px 50px -12px ${donutColor}40` }}
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <img className="absolute -bottom-14 left-1" src={smallLogo4} alt="" width={100} />
          <img className="absolute -top-14 left-1" src={smallLogo1} alt="" width={100} />
          <img className="absolute -top-14 right-1" src={smallLogo3} alt="" width={100} />
          <img className="absolute -bottom-14 right-1" src={smallLogo2} alt="" width={100} />
        </motion.div>
      </main>
    </div>
  );
}

export default Strawberry;