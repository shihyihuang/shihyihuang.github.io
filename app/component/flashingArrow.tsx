
import React from "react";
import { motion, Variants } from "framer-motion";
import Icon from "./icon";

// Define the animation variants
const variants: Variants = {
    flash: {
      scale: [1, 1.1, 1], // Scale the arrow to create a pulse effect
      opacity: [0.7, 1, 0.7], // Change the opacity to create a flashing effect
      transition: {
        duration: 1.5, // Duration of one cycle of the animation
        ease: "easeInOut",
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "loop",
      },
    },
  };

const FlashingArrow: React.FC = () => {

  return (
    <motion.div
      className="flashing-arrow"
      variants={variants}
      animate="flash"
      style={{
        fontSize: "4rem", // Set the size of the arrow
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10%", // Set the height of the container
      }}>
      <Icon name="scroll down" />
    </motion.div>
  );
};

export default FlashingArrow;
