import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Bot from "./components/Bot";
import FeedBack from "./components/FeedBack/feedback";
import Testimonials from "./components/FeedBack/Testimonial";

const App = () => {
  console.clear()
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Bot />
      <Hero /> 
      <About />
      {/*
      <Skills />
      <Hireme />
      <Project />
      <Contact />
      <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
