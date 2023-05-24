import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: "1684262181070",
    email: "",
    displayName: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [openUserProfile, setOpenUserProfile] = useState(false);
  const toggleSettings = () => {
    setOpenUserProfile(!openUserProfile);
  };
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        isOpen,
        toggleDrawer,
        openUserProfile,
        toggleSettings,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
