import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Features from "./components/Features";
import About from "./components/About";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features/>
      <About/>
      <Pricing/>
    </>
  );
};

export default App;
