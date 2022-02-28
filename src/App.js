import React from "react";
import HorizontalScroll from "react-scroll-horizontal";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Business from "./components/Business";
import Successstories from "./components/Successstories";
const App = () => {
  return (
    <>
      <section id="wrapper">
        <Header />
        <div className="fullpageWrap">
          <HorizontalScroll
            reverseScroll={true}
            config={{ stiffness: 100, damping: 15 }}
          >
            <Home />
            <About />
            <Business />
            <Successstories />
          </HorizontalScroll>
        </div>
      </section>
    </>
  );
};

export default App;
