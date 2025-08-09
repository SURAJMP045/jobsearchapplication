import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResumeBuilderPage from "./components/pages/ResumeBuilderPage";
import Footer from "./components/Footer";
import Jobs from "./components/Jobs";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<main><Jobs /></main>} />
  <Route path="/resume-builder" element={<main><ResumeBuilderPage /></main>} />
</Routes>

      <Footer />
    </Router>
  );
}
