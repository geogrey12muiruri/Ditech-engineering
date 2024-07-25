import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Location from "./components/Location";
import Project from "./components/Project";

const Layout = ({ children }) => (
  <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      {children}
      {/* <Footer /> Uncomment if you want the Footer to be part of the Layout */}
    </div>
    <ButtonGradient />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><Hero /><Benefits /><Collaboration /><Services /><Location /></Layout>} />
      <Route path="/projects" element={<Layout><Project /></Layout>} /> {/* New route for /projects */}
      {/* Define additional routes here */}
    </Routes>
  );
};

export default App;