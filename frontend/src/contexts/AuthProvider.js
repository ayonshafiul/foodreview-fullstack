import { useState, createContext, useContext } from "react";

const AdminContext = createContext();

const UserContext = createContext();

export function useAdmin() {
  return useContext(AdminContext);
}

export function useUser() {
  return useContext(UserContext);
}

const AuthProvider = ({ children }) => {
  const [adminAuth, setAdminAuth] = useState(false);
  const [userAuth, setUserAuth] = useState(false);

  return (
    <AdminContext.Provider value={{ adminAuth, setAdminAuth }}>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        {children}
      </UserContext.Provider>
    </AdminContext.Provider>
  );
};

export default AuthProvider;
