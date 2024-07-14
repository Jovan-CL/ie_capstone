import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { PIIELOGOCROPPED } from "../assets";
import extractDate from "../utils/extractDate";
import { AuthContext } from "../context/AuthContext";
import useConversation from "../zustand/zustand.store";
import useGetConversations from "../hooks/useGetConversations";
// const loadings = true;
const Profile = () => {
  const { loading, conversations } = useGetConversations();
  // console.log(conversations);
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Header />
      <section className="profile-page">
        {loading ? (
          <div className="w-svw h-svh flex justify-center items-center">
            <span className="loading loading-spinner text-success w-12"></span>
          </div>
        ) : (
          conversations.map((user) => {
            if (user._id === isAuthenticated.id) {
              return (
                <div key={user._id} className="profile-section">
                  <div className="profile-container">
                    <div className="image-profile-container">
                      <img
                        width="225px"
                        height="225px"
                        src={user.photopic ? user.photopic : PIIELOGOCROPPED}
                        alt={user.name}
                      />
                    </div>
                    <div className="profile-information">
                      <h3>Name: {user.name}</h3>
                      <p>Age: {user.age}</p>
                      <p>Birthday: {extractDate(user.birthday)}</p>
                      {/* <p>Created at: {user}</p> */}
                      <p>Location: {user.location}</p>
                      <p>Contact Number: {user.contact}</p>
                      <p>Email: {user.email}</p>
                      <p className="text-xl hover:underline underline-offset-2 ">
                        More info
                      </p>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quod autem quasi nemo ad totam perspiciatis vel esse
                      reiciendis quaerat perferendis id dignissimos quae
                      corrupti dolore ducimus, sequi optio fuga magni!
                    </p>
                  </div>
                </div>
              );
            }
          })
        )}
      </section>
    </>
  );
};

export default Profile;
