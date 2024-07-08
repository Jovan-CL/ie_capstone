import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export function useLogout() {
  const { setIsAuthenticated } = useContext(AuthContext);

  async function logout() {
    try {
      const response = await axios.post(
        "http://localhost:8000/ie-connect/api/logout",
        {
          headers: { "Content-Type": "application/json" },
          //   withCredentials: true,
        }
      );

      console.log(response);
      if (response.status !== 200) {
        throw new Error(response.error);
      }

      localStorage.removeItem("user");
      setIsAuthenticated(null);
    } catch (err) {
      alert(err.message);
    }
  }
  return logout;
}
