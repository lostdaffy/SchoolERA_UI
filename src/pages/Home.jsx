import React from "react";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
