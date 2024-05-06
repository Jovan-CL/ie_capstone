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

        <nav className="bulletin-nav">
          <NavLink>
            <img src="../assets/bulletin-icon.png" alt="" />
            <p>Bulletin</p>
          </NavLink>
          <NavLink>
            <img src="../assets/people-icon.png" alt="" />
            <p>People</p>
          </NavLink>
          <NavLink>
            <img src="../assets/profile-icon.png" alt="" />
            <p>Profile</p>
          </NavLink>
          <NavLink>
            <img className="jobs-icon" src="../assets/jobs-icon.png" alt="" />
            <p>Jobs</p>
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
