import React from "react";
import Navbar from "../navbar/Navbar";
import About from "../about/About";
import Services from "../service/Services";
import Footer from "../footer/Footer";
import { Routes, Route } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Navbar />
     
      <About />
      <Services />
     
      <Footer />
    </>
  );
};

export default Home;