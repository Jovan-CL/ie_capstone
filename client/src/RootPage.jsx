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
        </ul>
        <div className="nav-container">
          <nav className="bulletin-nav">
            <NavLink to="/bulletin">
              <img src="../assets/bulletin-icon.png" alt="" />
              <p>Bulletin</p>
            </NavLink>
            <NavLink to="/people">
              <img src="../assets/people-icon.png" alt="" />
              <p>People</p>
            </NavLink>
            <NavLink to="/profile">
              <img src="../assets/profile-icon.png" alt="" />
              <p>Profile</p>
            </NavLink>
            <NavLink to="jobs">
              <img className="jobs-icon" src="../assets/jobs-icon.png" alt="" />
              <p>Jobs</p>
            </NavLink>
          </nav>
          <div className="hamburger-container">
            <button className="hamburger-button">
              <svg width="25" viewBox="0 0 100 100">
                <rect width="80" height="10" x="10" y="30" rx="5"></rect>
                <rect width="80" height="10" x="10" y="50" rx="5"></rect>
                <rect width="80" height="10" x="10" y="70" rx="5"></rect>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
