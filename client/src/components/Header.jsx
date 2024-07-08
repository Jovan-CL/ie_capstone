import { NavLink } from "react-router-dom";
import LogoutButton from "../components/logout.button";
// import PIIELOGOCROPPED from "../assets/piie-logo-cropped.png";
import { PiChats } from "react-icons/pi";
import {
  PIIELOGOCROPPED,
  IECONNECNEWPNG,
  PUPLOGOPNG,
  BULLETINICON,
  PEOPLEICONPNG,
  PROFILEICONPNG,
  JOBSICONPNG,
} from "../assets/index";

const Header = () => {
  return (
    <header className="bulletin-header">
      <ul className="bulletin_icons">
        <img src={PIIELOGOCROPPED} alt="" />
        {/* client\src\assets\piie-logo-cropped.png */}
        <span>
          <img src={IECONNECNEWPNG} alt="" />
        </span>

        <a href="https://www.pup.edu.ph/">
          <img src={PUPLOGOPNG} alt="" />
        </a>
      </ul>
      <div className="nav-container">
        <nav className="bulletin-nav">
          <NavLink to="/bulletin">
            <img src={BULLETINICON} alt="" />
            <p>Bulletin</p>
          </NavLink>
          <NavLink to="/people">
            <img src={PEOPLEICONPNG} alt="" />
            <p>People</p>
          </NavLink>
          <NavLink to="/profile">
            <img src={PROFILEICONPNG} alt="" />
            <p>Profile</p>
          </NavLink>
          <NavLink to="/jobs">
            <img className="jobs-icon" src={JOBSICONPNG} alt="" />
            <p>Jobs</p>
          </NavLink>
          <NavLink to="/chats">
            <PiChats className="text-white text-[2rem]" />
            <p>Chats</p>
          </NavLink>
          <LogoutButton />
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
  );
};
export default Header;
