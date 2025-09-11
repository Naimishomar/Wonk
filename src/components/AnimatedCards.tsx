import { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://framerusercontent.com/images/CSIcrJlvWuVwQIDRljtem9kUY.png?scale-down-to=1024&width=1456&height=816",
  "https://framerusercontent.com/images/WcBuURzFZmpNg9DEdg8aHzQZzYU.png?scale-down-to=512&width=1456&height=586",
  "https://framerusercontent.com/images/tgNdsIyAwLLWdA9rb5F29LRt0.png?width=932&height=651",
  "https://framerusercontent.com/images/arnrBiUD8C76YflSOsT3fxDvM.png?scale-down-to=512&width=1456&height=816",
  "https://framerusercontent.com/images/TtVEnKTKy7t20bvqDw4xhoqYmk.png?scale-down-to=512&width=1405&height=725",
];

export default function AnimatedCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-3 bg-[#F5F3ED] md:grid-cols-5 justify-center items-center px-15">
      {images.map((src, index) => {
        const isHovered = index === hoveredIndex;

        return (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              x: isHovered ? -20 : 0,
              y: isHovered ? 20 : 0,
              zIndex: isHovered ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="md:w-64 md:h-64 rounded-lg overflow-hidden cursor-pointer shadow-2xl"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
