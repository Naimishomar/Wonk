import { useState } from 'react';
import { motion } from 'framer-motion';

const imageObjects = [
  {
    src: "https://framerusercontent.com/images/CSIcrJlvWuVwQIDRljtem9kUY.png?scale-down-to=1024&width=1456&height=816",
    rotate: "rotate-1",
    hoverRotate: "rotate-8"
  },
  {
    src: "https://framerusercontent.com/images/WcBuURzFZmpNg9DEdg8aHzQZzYU.png?scale-down-to=512&width=1456&height=586",
    rotate: "-rotate-2",
    hoverRotate: "rotate-6"
  },
  {
    src: "https://framerusercontent.com/images/tgNdsIyAwLLWdA9rb5F29LRt0.png?width=932&height=651",
    rotate: "rotate-7",
    hoverRotate: "rotate-2"
  },
  {
    src: "https://framerusercontent.com/images/arnrBiUD8C76YflSOsT3fxDvM.png?scale-down-to=512&width=1456&height=816",
    rotate: "-rotate-4",
    hoverRotate: "rotate-6"
  },
  {
    src: "https://framerusercontent.com/images/TtVEnKTKy7t20bvqDw4xhoqYmk.png?scale-down-to=512&width=1405&height=725",
    rotate: "rotate-2",
    hoverRotate: "rotate-6"
  },
];


export default function AnimatedCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 bg-[#F5F3ED] md:grid-cols-5 justify-center items-center px-15 pt-20 pb-15">
      {imageObjects.map((image, index) => {
        const isHovered = index === hoveredIndex;
        return (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:w-64 md:h-64 rounded-4xl cursor-pointer"
          >
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className={`w-full h-full object-cover rounded-4xl hover:translate-y-7 ${isHovered ? image.hoverRotate : image.rotate} transition-all duration-500 ease-in-out shadow-xl`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
