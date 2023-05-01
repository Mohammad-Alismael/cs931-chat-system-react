import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/HomePage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<HomePage />} />
      <Route path="/settings" element={<HomePage />} />
    </Routes>
  );
}

export default App;
