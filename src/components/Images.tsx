import { motion } from "framer-motion";

interface ImagesProps {
  img: string;
  name: string;
  onClick: (count: number) => void;
}

function Images({ img, name, onClick }: ImagesProps) {
  return (
    <motion.img
      src={img}
      alt={name}
      onClick={() => onClick(1)}
      className="w-20 h-20 cursor-pointer rounded-full"
      whileHover={{ rotate: 25, scale: 1.09 }}
      transition={{ duration: 0.4 }}
    />
  );
}

export default Images;