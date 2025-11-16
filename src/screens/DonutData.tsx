// donutData.ts
import StrawberryImg from "../assets/Strawberry-removebg-preview.png";
import BlueBerryImg from "../assets/BlueBerry-removebg-preview.png";
import ChocolateImg from "../assets/Chocolate-removebg-preview.png";

import small1 from "../assets/Cherry-removebg-preview.png";
import small2 from "../assets/Leafe-removebg-preview.png";
import small3 from "../assets/berry.png";
import small4 from "../assets/Chocolate pice.png";

export const donutData = [
    {
    id: 3,
    name: "Chocolate",
    color: "#974F2D",
    background: "#FFF2E3",
    mainImg: ChocolateImg,
    gallery: [StrawberryImg, BlueBerryImg, ChocolateImg],
    smallLogos: [small4, small1, small3, small2],
  },
  
  {
    id: 1,
    name: "Strawberry",
    color: "#F8506D",
    background: "#FDDBE4",
    mainImg: StrawberryImg,
    gallery: [StrawberryImg, BlueBerryImg, ChocolateImg],
    smallLogos: [small4, small1, small3, small2],
  },

  {
    id: 2,
    name: "Blue Berry",
    color: "#4A65FF",
    background: "#DEE3FF",
    mainImg: BlueBerryImg,
    gallery: [StrawberryImg, BlueBerryImg, ChocolateImg],
    smallLogos: [small4, small1, small3, small2],
  },
];