const Login = () => {
  return (
    <>
      <header className="login-header">
        <nav>
          <ul>
            <li>
              <a href="http://">
                <img src="./assets/piie-logo-cropped.png" alt="PIIE logo" />
              </a>
            </li>
            <li>
              <img src="./assets/ie-connect-new.png" alt="" />
            </li>
            <a href="https://www.pup.edu.ph/">
              <img src="./assets/pup-logo.png" alt="" />
            </a>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <div>
            <h1>Connect, Network, and Inspire</h1>
          </div>
          <div>
            <form action="">
              <input type="text" />
              <input type="text" />
              <p>Forgot Password?</p>
              <button type="submit">Sign in</button>
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
