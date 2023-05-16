import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/index.jsx";
import ChatPage from "./pages/chatPage/index.jsx";
import FriendsPage from "./pages/friendsPage/index.jsx";
import ChatLayout from "./layouts/ChatLayout.jsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatLayout />}>
              <Route index path=':chat_id' element={<ChatPage />} />
          </Route>
          <Route path="friends" element={<FriendsPage />} />
      </Routes>
  );
}

export default App;
