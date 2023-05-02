import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/index.jsx";
import ChatPage from "./pages/chatPage/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/settings" element={<HomePage />} />
    </Routes>
  );
}

export default App;
