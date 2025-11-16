// DonutScreen.tsx
import { motion } from "framer-motion";
import Button from "../components/Button";
import Header from "../components/Header";
import Images from "../components/Images";
import { donutData } from "./DonutData";

interface DonutScreenProps {
    screen: number;
    onScreenChange: (screen: number) => void;
}

function DonutScreen({ screen, onScreenChange }: DonutScreenProps) {
    
    const data = donutData[screen-1];

    if (!data) return <p>Donut not found</p>;

    return (
        <div
            style={{ backgroundColor: data.background }}
            className="w-screen min-h-screen overflow-x-hidden pb-16"
        >
            <Header color={data.color} logo={data.mainImg} />

            <main className="flex flex-col-reverse lg:flex-row justify-between items-center mt-32 lg:mt-28 px-8 sm:px-28 md:px-40">
                <div
                    className="flex flex-col gap-7 mt-20 lg:mt-0"
                >
                    <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    >
                        <p className="sm:text-6xl text-4xl font-bold text-slate-800">{data.name}</p>
                        <p className="sm:text-6xl text-4xl font-bold text-slate-800">Donut</p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <p className="sm:text-xl text-sm text-slate-600">
                            Raised ring with strawberry frosting
                        </p>
                        <p className="sm:text-xl text-sm text-slate-600">and round sprinkles</p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex gap-4 flex-col sm:flex-row">
                        <Button variant="primary" color={data.color}>
                            Order Now
                        </Button>
                        <Button variant="outline" color={data.color}>
                            View Menu
                        </Button>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="flex gap-5 mt-6 justify-center sm:justify-start">
                        {data.gallery.map((img, index) => (
                            <Images
                                key={index}
                                img={img}
                                name={data.name}
                                onClick={() => onScreenChange(index + 1)}
                            />
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="relative flex justify-center items-center"
                    initial={{ scale: 0, opacity: 0, rotate: 360 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 1.3 }}
                >
                    <motion.img
                        src={data.mainImg}
                        alt={data.name}
                        className="w-[260px] sm:w-[300px] lg:w-[380px] rounded-full"
                        whileHover={{ rotate: 10, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />

                    {data.smallLogos.map((logo, index) => {
                        const positions = [
                            "-bottom-10 -left-10",
                            "-top-10 -left-10",
                            "-top-10 -right-10",
                            "-bottom-10 -right-10",
                        ];

                        return (
                            <img
                                key={index}
                                className={`absolute ${positions[index]}`}
                                src={logo}
                                alt=""
                                width={100}
                            />
                        );
                    })}
                </motion.div>
            </main>
        </div>
    );
}

export default DonutScreen;