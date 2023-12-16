import React from "react";
import TopSection from "../topSection";
import InfoSection from "../infoSection";
import Stats from "../stats";
import Carousal from "../carousal";
import Navbar from "../navbar";
import Footer from "../Footer";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <TopSection />
      <Carousal />
      <InfoSection />
      <Stats />
      <Footer/>
    </div>
  );
};

export default HomePage;
