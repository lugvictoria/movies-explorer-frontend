import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LS_AUTH_KEY, LS_FILTER_KEY, LS_SEARCH_KEY } from "../../defines";

const defContext = {
  user: null,
  login: () => ({}),
  logout: () => ({}),
  update: () => ({}),
};

const CurrentUserContext = createContext(defContext);

export const AuthProvider = ({ children, userData }) => {
  const [user, setUser] = useState(userData);
  const navigate = useNavigate();

  const login = ({ user, token }) => {
    setUser(user);
    localStorage.setItem(LS_AUTH_KEY, token);
    navigate("/movies");
  };

  const update = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem(LS_AUTH_KEY);
    localStorage.removeItem(LS_SEARCH_KEY);
    localStorage.removeItem(LS_FILTER_KEY);

    navigate("/", { replace: true });
  };

  const value = useMemo(() => ({ user, login, logout, update }), [user]);

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export const useAuthContext = () => useContext(CurrentUserContext);
