import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser
      ? JSON.parse(storedUser)
      : {
          uid: "",
          email: "",
          displayName: "",
        };
  });

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSettings = () => {
    setOpenUserProfile(!openUserProfile);
  };

  const [openUserProfile, setOpenUserProfile] = useState(false);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

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
