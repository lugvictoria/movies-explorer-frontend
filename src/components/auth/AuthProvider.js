import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LS_AUTH_KEY } from "../../defines";

const defContext = {
  user: null,
  login: () => ({}),
  logout: () => ({}),
};

const AuthContext = createContext(defContext);

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useState(userData);
  const navigate = useNavigate();

  const login = ({ user, token }) => {
    setUser(user);
    localStorage.setItem(LS_AUTH_KEY, token);
    navigate("/movies");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LS_AUTH_KEY);
    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
