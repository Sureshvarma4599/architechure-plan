import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    // Mock fetch logic
    setUsers([{ id: 1, name: "John Doe" }]);
  };

  return (
    <UserContext.Provider value={{ users, fetchUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
