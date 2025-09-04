import { createContext, useState } from "react";
const UserContext = createContext();
const userProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "cgcb" });
  const updateUser = (newname) => {
    setUser({ name: newname });
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default { UserContext, userProvider };
