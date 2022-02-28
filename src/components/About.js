import React from "react";
import natural from "../assets/natural.jpg";
import thinking from "../assets/thinking-person.jpg";
import traveler from "../assets/traveler.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="aboutWrap fullPage"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <motion.div
        className="aboutquotes"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        Building a lasting legacy for individuals, families and businesses
        globally
      </motion.div>
      <div className="natural">
        <img src={natural} alt="natural" />
      </div>
      <div className="thinking">
        <img src={thinking} alt="thinking" />
      </div>
      <div className="traveler">
        <img src={traveler} alt="traveler" />
      </div>
    </motion.section>
  );
};

export default About;
