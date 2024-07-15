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
                  <div className="bg-[#264233] rounded-ee-2xl rounded-ss-2xl shadow-lg shadow-black">
                    <div className="profile-container font-bold rounded-ss-full rounded-ee-full rounded-es-lg bg-[#F8EDE3] ">
                      <div className="image-profile-container">
                        <img className="rounded-full border-4 border-[#264233]"
                          width="225px"
                          height="225px"
                          src={user.photopic ? user.photopic : PIIELOGOCROPPED}
                          alt={user.name}
                        />
                      </div>
                      <div className="profile-information">
                        <h1 className="py-2 ">HELLO EVERYBODY, I AM</h1>
                        <h3 className="py-2 text-5xl uppercase ">{user.name}</h3>
                        <p className="py-2">Age: {user.age}</p>
                        <p className="py-2">Birthday: {extractDate(user.birthday)}</p>
                        {/* <p>Created at: {user}</p> */}
                        <p className="py-2">Location: {user.location}</p>
                        <p className="py-2">Contact Number: {user.contact}</p>
                        <p className="py-2">Email: {user.email}</p>
                        <p className="py-2 text-xl hover:underline underline-offset-2 ">
                          More info
                        </p>
                        <div className="profile-buttons flex justify-end">
                          <NavLink to="/edit-profile">
                            <button className="edit-profile bg-[#508D4E] ">Edit Profile</button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="work-experience-section mt-3 bg-[#F8EDE3] text-black rounded-2xl border-4 border-[#508D4E] shadow-xl shadow-black-500">
                    <h3 className="experience-title font-bold">WORK EXPERIENCE</h3>
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
