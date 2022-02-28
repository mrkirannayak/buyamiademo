import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.section
      id="home"
      className="homeWrap fullPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="homebannerTitle">
        <motion.div
          className="topTitle"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          If not now, then when?
        </motion.div>
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          Time to make your wealth work for you
        </motion.h2>
      </div>
    </motion.section>
  );
};

export default Home;
