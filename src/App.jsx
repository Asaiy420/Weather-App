import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-r/longer from-indigo-500 to-teal-400 ">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;