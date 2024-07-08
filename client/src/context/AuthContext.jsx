import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

// export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
