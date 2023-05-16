import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/index.jsx";
import ChatPage from "./pages/chatPage/index.jsx";
import FriendsPage from "./pages/friendsPage/index.jsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />}>
              <Route path=':chat_id' element={<p>This is the chat page</p>} />
          </Route>
          <Route path="/friends" element={<FriendsPage />} />
      </Routes>
  );
}

export default App;
