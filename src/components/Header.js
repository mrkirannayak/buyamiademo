import React from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="headFlex">
          <motion.div
            className="logo"
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <a href="#home">
              <img src={Logo} alt="Logo" />
            </a>
          </motion.div>
          <motion.div
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <ul className="nav">
              <li>
                <a href="#home">Private clients</a>
              </li>
              <li>
                <a href="#about">Corporates</a>
              </li>
              <li>
                <a href="#business">Insights</a>
              </li>
              <li>
                <a href="#Success">Contact</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#Success">Careers</a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="rightlinks"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className="searchBox">
              <a href="#">Search</a>
            </div>
            <div className="bookMeeting">
              <button>Book A meeting</button>
            </div>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
