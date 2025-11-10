import { motion } from "framer-motion";

// Define the props interface
interface ImagesProps {
  img: string;
  name: string;
}

function Images({ img, name }: ImagesProps) {
  return (
    <motion.img
      src={img}
      alt={name}
      className="w-20 h-20 cursor-pointer rounded-full"
      whileHover={{ rotate: 25, scale: 1.1 }}
      transition={{ duration: 0.3 }}
    />
  );
}

export default Images;