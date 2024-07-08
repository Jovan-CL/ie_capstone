import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          "http://localhost:8000/ie-connect/api/profile",
          {
            withCredentials: true,
          }
        );
        setUserProfile(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchUser();
  }, []);
  return (
    <>
      <Header />
      <section className="profile-page">
        <div className="profile-section">
          <div className="profile-container">
            <div className="image-profile-container">
              <img
                width="225px"
                height="225px"
                src={userProfile.photopic}
                alt=""
              />
            </div>
            <div className="profile-information">
              <h3>Name: {userProfile.name}</h3>
              <p>Age: {userProfile.age}</p>
              <p>Birthday: {userProfile.birthday}</p>
              <p>Location: </p>
              <p>Contact Number: {userProfile.contact}</p>
              <p>Email: {userProfile.email}</p>
              <p>More info</p>
              <div className="profile-buttons">
                <NavLink to="/edit-profile">
                  <button className="edit-profile">Edit Profile</button>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="work-experience-section">
            <h3 className="experience-title">WORK EXPERIENCE</h3>
            <p className="experience-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              autem quasi nemo ad totam perspiciatis vel esse reiciendis quaerat
              perferendis id dignissimos quae corrupti dolore ducimus, sequi
              optio fuga magni!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
