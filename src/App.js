import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Accent/About";
import Projects from "./components/Ielts/Projects";
import GRE from './components/GRE/GRE';
import Footer from "./components/Footer";
import Toefl from "./components/Toefl/Toefl";
import Register from "./components/Register/Register"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Ielts" element={<Projects />} />
          <Route path="/Accent" element={<About />} />
          <Route path="/Toefl" element={<Toefl />} />
          <Route path="/GRE" element={<GRE />} />
          <Route path="/Register" element={< Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
