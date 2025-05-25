import React from "react";
import "./App.css";
import './i18n'
import Home from "./components/Home";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Newsbanner from "./components/Newsbanner";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <About />
      <Pricing />
      <Newsbanner />
      <Footer />
    </>
  );
};

export default App;
