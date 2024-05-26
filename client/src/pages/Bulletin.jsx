import IELOGOBIG from "../assets/logo-big.png";
import { NavLink } from "react-router-dom";

const Bulletin = () => {
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

      <section className="bulletin-page-main">
        <section className="bulletin-page">
          <div>
            <h1>Announcement!</h1>
          </div>
          <div>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eaque!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eaque!
              </li>
            </ul>
          </div>
        </section>
        <section className="about-org-section">
          <div>
            <h2>About the organization</h2>
          </div>
          <div className="ie-logo-container">
            <img src={IELOGOBIG} alt="" />
          </div>
          <div className="piie-pupbc-container">
            <h2>PIIE-PUPBSC</h2>
            <p>Philippine Institute of Industrial Engineers</p>
            <p>
              Polytechnic University of the Philippines - Biñan Student Chapter
            </p>
          </div>
          <div className="socials-container">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>G-mail</span>
          </div>
          <div className="mission-vision-container">
            <div>
              <h3>Mission</h3>
              <p>
                The Philippine Institute of Industrial Engineers – Polytechnic
                University of the Philippines Biñan Student Chapter, as a
                university recognized organization, aims to promote the rights
                and welfare of every Industrial Engineering students and all its
                members to develop a strong and harmonious foundation within its
                community and elaborating the skills of its officers and members
                for global competitiveness and national progression.
              </p>
            </div>
            <div>
              <h3>Vision</h3>
              <p>
                The Philippine Institute of Industrial Engineers – Polytechnic
                University of the Philippines Biñan Student Chapter, guided by
                University values, envisions the formation and development of an
                organization entrusted to promote a dynamic, arbitrary, and
                unceasing quest for academic excellence and technical expertise;
                motivator student’s interests towards excellence in Industrial
                Engineering as their field of specialization and to promote the
                school’s and organization’s existence.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Bulletin;
