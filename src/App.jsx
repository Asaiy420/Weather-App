import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global background gradient */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-600/10 via-purple-600/5 to-transparent pointer-events-none z-[-2]" />
      {/* Overlay for content readability */}
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-[-1]" />
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
