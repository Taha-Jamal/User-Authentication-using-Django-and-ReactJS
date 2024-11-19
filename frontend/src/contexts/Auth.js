import { createContext, useContext, useState, useEffect } from "react";
import { is_authenticated, login, register } from "../api/endpoints";

import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  const get_authenticated = async () => {
    try {
      const success = await is_authenticated();
      setIsAuthenticated(success);
    } catch (error) {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login_user = async (username, password) => {
    const success = await login(username, password);
    console.log(success);
    if (success) {
      setIsAuthenticated(true);
      nav("/");
    }
  };

  const register_user = async (username, email, password, confirmPassword) => {
    if (password === confirmPassword) {
      try {
        await register(username, email, password);
        alert('user registered successfully')
      } catch(error) {
        alert('Error registering user')
      }
    } else {
      alert("password dont match");
    }
  };

  useEffect(() => {
    get_authenticated();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, login_user, register_user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
