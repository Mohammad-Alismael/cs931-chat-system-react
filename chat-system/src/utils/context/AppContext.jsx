import React, { createContext, useState } from "react";

// Create the context
const AppContext = createContext();

// Context provider component
const AppProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [chats, setChats] = useState([]);

  return (
      <AppContext.Provider value={{ contacts, setContacts, chats, setChats }}>
        {children}
      </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
