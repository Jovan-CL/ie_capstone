import { useEffect, useState } from "react";

import IELOGOBIG from "../assets/logo-big.png";

import Header from "../components/Header";
import {
  AIRA,
  LEX,
  ZETH,
  AXEL,
  DANIELA,
  EUNICE,
  MARK,
  MICOLE,
  MIKAELA,
  MIKAY,
  HENRY,
  JANELLA,
  PAUL,
  RHEA,
  SHAINA,
  VIVIENE,
  EXECBG,
<<<<<<< HEAD
} from "../assets";
import useConversation from "../zustand/zustand.store";
=======
  FACEBOOK,
  INSTAGRAM,
  GMAIL,
  GOOGLE
} from "../assets";
>>>>>>> 18501c41e6ad068197e0b97c0fa45c5d2cb781f6

const Bulletin = () => {
  const { announcements, setAnnouncements } = useConversation();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/ie-connect/api/bulletin",
          {
            credentials: "include", // Include credentials (cookies)
          }
        );
        if (response.ok) {
          const data = await response.json();
          setAnnouncements(data.announcement);
        } else {
          console.error("Failed to fetch announcements:", response.status);
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <>
      <Header />
      <section className="bulletin-page-main">
        <section className="bulletin-page">
          <div>
            <h1 className="font-bold">Announcement!</h1>
          </div>
          <div>
            <ul>
              {announcements ? (
                announcements.map((item) => {
                  return <li key={item._id}>{item.announcement}</li>;
                })
              ) : (
                <li>No Announcement</li>
              )}
            </ul>
            {/* <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eaque!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eaque!
              </li> */}
          </div>
        </section>
        <section className="about-org-section">
          <div>
            <h2 className="text-xl">About the organization</h2>
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
            <span className="italic tracking-wider"><a href="https://www.facebook.com/PIIEPUPBSC"><img className="rounded-full hover:shadow-black hover:rounded-full transition ease-in-out delay-100 hover:shadow-md hover:scale-110" src={FACEBOOK} alt="" />Facebook</a></span>
            <span className="italic tracking-wider"><img className="" src={GMAIL} alt=""/>piie.pupbschapter@gmail.com</span>
            <span className="italic tracking-wider"><a href="https://www.instagram.com/piiepupbsc?igsh=ZXR0dHlqYjhwMmJr"><img className="rounded-full hover:shadow-black hover:rounded-full transition ease-in-out delay-100 hover:shadow-md p-1 hover:scale-110" src={INSTAGRAM} alt="" />Instagram</a></span>
          </div>
          <div className="mission-vision-container">
            <div>
              <h3 className="font-bold">Mission</h3>
              <p className="text-justify">
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
              <h3 className="font-bold">Vision</h3>
              <p className="text-justify">
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
            <div>
              <h3 className="text-center font-bold">EXECUTIVE BOARDS</h3>
              <p className="text-center italic">Batch 2023 - 2024</p>
            </div>
            <div>
<<<<<<< HEAD
              <div className="shadow-lg shadow-black ">
                <img
                  className="exec-bg index-bg absolute flex shrink"
                  src={EXECBG}
                  alt=""
                />
                <div className="exec-bg grid grid-cols-7 grid-rows-4 w-full gap-4 p-4 overflow-hidden">
                  <img className="col-start-4 col-end-5" src={AIRA} alt="" />
                  <img
                    className="col-start-3 col-end-4 row-start-2"
                    src={ZETH}
                    alt=""
                  />
                  <img
                    className="col-start-5 col-end-6 row-start-2"
                    src={LEX}
                    alt=""
                  />
                  <img
                    className="col-start-7 col-end-8 row-start-3"
                    src={AXEL}
                    alt=""
                  />
                  <img
                    className="col-start-6 col-end-7 row-start-3"
                    src={DANIELA}
                    alt=""
                  />
                  <img
                    className="col-start-5 col-end-6 row-start-3"
                    src={EUNICE}
                    alt=""
                  />
                  <img
                    className="col-start-4 col-end-5 row-start-3"
                    src={MARK}
                    alt=""
                  />
                  <img
                    className="col-start-3 col-end-4 row-start-3"
                    src={MICOLE}
                    alt=""
                  />
                  <img
                    className="col-start-2 col-end-3 row-start-3"
                    src={MIKAELA}
                    alt=""
                  />
                  <img
                    className="col-start-1 col-end-2 row-start-3"
                    src={MIKAY}
                    alt=""
                  />
                  <img
                    className="col-start-7 col-end-8 row-start-4"
                    src={SHAINA}
                    alt=""
                  />
                  <img
                    className="col-start-6 col-end-7 row-start-4"
                    src={JANELLA}
                    alt=""
                  />
                  <img
                    className="col-start-5 col-end-6 row-start-4"
                    src={RHEA}
                    alt=""
                  />
                  <img
                    className="col-start-3 col-end-4 row-start-4"
                    src={HENRY}
                    alt=""
                  />
                  <img
                    className="col-start-2 col-end-3 row-start-4"
                    src={PAUL}
                    alt=""
                  />
                  <img
                    className="col-start-1 col-end-2 row-start-4"
                    src={VIVIENE}
                    alt=""
                  />
                </div>
=======
              <div className="shadow-lg shadow-black p-4">
                <div className="grid grid-cols-7 grid-rows-4 gap-4 overflow-hidden">
                    <img className=" col-start-4 col-end-5 row-start-1 shadow-lg shadow-black" src={AIRA} alt="" />
                    <img className="col-start-3 col-end-4 row-start-2 shadow-lg shadow-black" src={ZETH} alt="" />
                    <img className="col-start-5 col-end-6 row-start-2 shadow-lg shadow-black" src={LEX} alt="" />
                    <img className="col-start-7 col-end-8 row-start-3 shadow-lg shadow-black" src={AXEL} alt="" />
                    <img className="col-start-6 col-end-7 row-start-3 shadow-lg shadow-black" src={DANIELA} alt="" />
                    <img className="col-start-5 col-end-6 row-start-3 shadow-lg shadow-black" src={EUNICE} alt="" />
                    <img className="col-start-4 col-end-5 row-start-3 shadow-lg shadow-black" src={MARK} alt="" />
                    <img className="col-start-3 col-end-4 row-start-3 shadow-lg shadow-black" src={MICOLE} alt="" />
                    <img className="col-start-2 col-end-3 row-start-3 shadow-lg shadow-black" src={MIKAELA} alt="" />
                    <img className="col-start-1 col-end-2 row-start-3 shadow-lg shadow-black" src={MIKAY} alt="" />
                    <img className="col-start-7 col-end-8 row-start-4 shadow-lg shadow-black" src={SHAINA} alt="" />
                    <img className="col-start-6 col-end-7 row-start-4 shadow-lg shadow-black" src={JANELLA} alt="" />
                    <img className="col-start-5 col-end-6 row-start-4 shadow-lg shadow-black" src={RHEA} alt="" />
                    <img className="col-start-3 col-end-4 row-start-4 shadow-lg shadow-black" src={HENRY} alt="" />
                    <img className="col-start-2 col-end-3 row-start-4 shadow-lg shadow-black" src={PAUL} alt="" />
                    <img className="col-start-1 col-end-2 row-start-4 shadow-lg shadow-black" src={VIVIENE} alt="" />
                    <img className="exec-bg index-bg col-start-1 col-end-8 row-start-1 row-end-5 flex shrink" src={EXECBG} alt="" />   

>>>>>>> 18501c41e6ad068197e0b97c0fa45c5d2cb781f6
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Bulletin;
