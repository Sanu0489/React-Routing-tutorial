import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
    </div>
  );
}

export default App;
