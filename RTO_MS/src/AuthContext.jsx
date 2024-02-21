import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your logic for handling successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('loginToken');
    setIsLoggedIn(false);
    history.push('/'); // Redirect to user dashboard

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
