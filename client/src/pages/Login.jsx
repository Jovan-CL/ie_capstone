import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import { refreshAccessToken } from "../authService";
import axios from "axios";

const Login = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const data = { uname: username, pword: password };
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/ie-connect/api/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.statusText === "OK" && response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setIsAuthenticated(response.data.data);
        navigate("/bulletin");
      } else {
        alert(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <>
      {/*bulletin_icons bulletin-header*/}
      <header className=" | login-header">
        <ul className=" | login-header-icons">
          <img src="../assets/piie-logo-cropped.png" alt="" />

          <span>
            <img src="../assets/ie-connect-new.png" alt="" />
          </span>

          <a href="https://www.pup.edu.ph/">
            <img src="../assets/pup-logo.png" alt="" />
          </a>
        </ul>
      </header>
      <main className="login-main">
        <section>
          <div>
            <h1>Connect, Network, and Inspire</h1>
          </div>
          <div className="login-form-div">
            <form onSubmit={handleLogin}>
              <input
                className="login-input"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Forgot Password?</p>
              <button type="submit">Sign in</button>
              <div className="registration-link">
                <p>Don&#39;t have an account?</p>
                <NavLink to="/registration">Sign up</NavLink>
              </div>
            </form>
          </div>
          <footer>
            <div>
              <p>admin</p>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Login;
