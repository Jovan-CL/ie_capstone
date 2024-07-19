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

const ColumnHeader = () => {
  return (
    <header className="bg-[#264233]">
      {/* <ul className="bulletin_icons">
        <img src={PIIELOGOCROPPED} alt="" />
        {/* client\src\assets\piie-logo-cropped.png 
        <span>
          <img src={IECONNECNEWPNG} alt="" />
        </span>

        <a href="https://www.pup.edu.ph/">
          <img src={PUPLOGOPNG} alt="" />
        </a>
      </ul> */}
      <div className="">
        <nav className="bulletin-nav flex flex-col py-3">
          <NavLink className={`hover:bg-[#45534b]`} to="/bulletin">
            <img src={BULLETINICON} alt="" />
            <p>Bulletin</p>
          </NavLink>
          <NavLink className={`hover:bg-[#45534b]`} to="/people">
            <img src={PEOPLEICONPNG} alt="" />
            <p>People</p>
          </NavLink>
          <NavLink className={`hover:bg-[#45534b]`} to="/profile">
            <img src={PROFILEICONPNG} alt="" />
            <p>Profile</p>
          </NavLink>
          <NavLink className={`hover:bg-[#45534b]`} to="/jobs">
            <img className="jobs-icon" src={JOBSICONPNG} alt="" />
            <p>Jobs</p>
          </NavLink>
          <NavLink className={`hover:bg-[#45534b]`} to="/chats">
            <PiChats className="text-white text-[2rem]" />
            <p>Chats</p>
          </NavLink>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
};
export default ColumnHeader;
