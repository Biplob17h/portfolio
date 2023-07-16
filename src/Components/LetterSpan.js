import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const LetterSpan = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const controls = useAnimationControls();
  const rubberBand = () => {
    controls.start({
      transform: [
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(1,1,1)",
      ],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      className="text-5xl font-bold inline-block"
      animate={controls}
      onMouseOver={() => {
        if (!isPlaying) {
          rubberBand();
        }
      }}
      onAnimationComplete={() => {
        setIsPlaying(false);
      }}>
      {children}
    </motion.span>
  );
};

export default LetterSpan;
