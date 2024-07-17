// import { useEffect, useState } from "react";
import Header from "../components/Header";
import useConversation from "../zustand/zustand.store";
import useGetJobs from "../hooks/useGetJobs";
import extractDate from "../utils/extractDate";

import JobsModal from "../components/jobs/JobsModal";
function formatDate(date) {
  return new Date(date).getDay();
}

const formatter = new Intl.RelativeTimeFormat("en", { style: "short" });

const Jobs = () => {
  const { announcements } = useConversation();
  const { jobs } = useGetJobs();
  // console.log(jobs);
  return (
    <>
      <Header />
      <section className="jobs-page-grid">
        <div className="left-sidebar">
          <div className="jobs-buttons">
            {/* <button className="preferences-button">Preferences</button>
            <button className="save-job-button">Save Job</button> */}
            <JobsModal />
          </div>
        </div>
        <div className="middle-content">
          <div className="jobs-search-container">
            <form action="" method="get">
              <label htmlFor="search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Job/Company"
                />
                <button type="submit">
                  <svg
                    width="30px"
                    fill="none"
                    stroke="black"
                    strokeWidth="10px"
                    viewBox="0 0 100 100"
                  >
                    <path
                      className="line"
                      d="m 72 68 a -1 -1 0 0 0 -42 -42 a -1 -1 0 0 0 42 42 m -2 2 l 21 21"
                    ></path>
                  </svg>
                </button>
              </label>
            </form>
          </div>
          <h2 className="text-center font-bold outline-double outline-[#264233]">New Jobs</h2>
          <div className="job-posts-container">
            <div className="posts-container flex flex-wrap justify-between">
              {/* Start of post-card */}
              {jobs.map((job) => {
                return (
                  <div key={job._id} className="post-card w-64 rounded-lg hover:scale-110 transition ease-in-out delay-100">
                    <div className="flex items-center">
                      <img
                        className="w-14 h-14 rounded-full border-2 mr-2"
                        src={job.jobPostName.photopic}
                        alt="Source name"
                      />
                      <h3 className="post-name">{job.jobPostName.name}</h3>
                    </div>
                    <div className="post-content grid grid-rows-3 break-keep">
                      <p className="italic text-lg tracking-wider font-bold">{job.jobHeader}</p>
                      <p className="post-message overflow-auto h-16">{job.jobDefinition}</p>
                      <p className="text-xs self-end">Remote / Onsite</p>
                      <span className="post-time text-xs row-start-4 font-bold items place-items-end"><p className="font-normal">Posted</p>
                        {extractDate(job.createdAt)}
                      </span>            
                    </div>
                  </div>
                );
              })}

              {/* End of post-card */}
            </div>
          </div>
          <div></div>
        </div>
        <div className="right-sidebar bg-[#264233] mt-3 rounded-lg">
          <div className="jobs-side-announcement text-white">
            <h2 className="font-bold uppercase text-center">Announcement</h2>
            {announcements ? (
              announcements.map((item) => {
                console.log(item.date_posted);
                console.log(-formatDate(item.date_posted));
                return (
                  <div className="announcement-card" key={item._id}>
                    <img src="../assets/piie-logo-cropped.png" alt="" />
                    <div className="announcement-content border-y-4 my-3 border-double">
                      <h3 className="announcement-name my-3">{item.name}</h3>
                      <p className="announcement-message font-bold text-xl uppercase tracking-widest">
                        {item.announcement}
                      </p>
                      <span className="announcement-time text-xs">
                        {formatter.format(-formatDate(item.date_posted), "day")}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <li>No Announcement</li>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
