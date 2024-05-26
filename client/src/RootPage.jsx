import { NavLink, Outlet } from "react-router-dom";

const RootPage = () => {
  return (
    <>
      <header className="bulletin-header">
        <ul className="bulletin_icons">
          <img src="../assets/piie-logo-cropped.png" alt="" />

          <span>
            <img src="../assets/ie-connect-new.png" alt="" />
          </span>

          <a href="https://www.pup.edu.ph/">
            <img src="../assets/pup-logo.png" alt="" />
          </a>
          <div>
            <NavLink to="/login">
              <button className="button-to-login">Login</button>
            </NavLink>
          </div>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
