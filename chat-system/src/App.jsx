import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage/index.jsx";
import ChatPage from "./pages/chatPage/index.jsx";
import FriendsPage from "./pages/friendsPage/index.jsx";
import ChatLayout from "./layouts/ChatLayout.jsx";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "./utils/context/globalContext.jsx";
import { AppProvider } from "./utils/context/AppContext.jsx";

function App() {
  return (
    <GlobalProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/chat"
          element={
            <AppProvider>
              <ChatLayout />
            </AppProvider>
          }
        >
          <Route index path=":chat_id" element={<ChatPage />} />
        </Route>
        <Route path="friends" element={<FriendsPage />} />
      </Routes>
    </GlobalProvider>
  );
}

export default App;
