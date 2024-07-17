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
          <div className="job-posts-container">
            <h2>New Jobs</h2>
            <div className="posts-container">
              {/* Start of post-card */}
              {jobs.map((job) => {
                return (
                  <div key={job._id} className="post-card">
                    <div className="flex items-center">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={job.jobPostName.photopic}
                        alt="Source name"
                      />
                      <h3 className="post-name">{job.jobPostName.name}</h3>
                    </div>
                    <div className="post-content">
                      <span className="post-time">
                        {extractDate(job.createdAt)}
                      </span>
                      <p className="">{job.jobHeader}</p>
                      <p className="post-message">{job.jobDefinition}</p>
                    </div>
                  </div>
                );
              })}

              {/* End of post-card */}
            </div>
          </div>
          <div></div>
        </div>
        <div className="right-sidebar">
          <div className="jobs-side-announcement">
            <h2>Announcement</h2>
            {announcements ? (
              announcements.map((item) => {
                console.log(item.date_posted);
                console.log(-formatDate(item.date_posted));
                return (
                  <div className="announcement-card" key={item._id}>
                    <img src="../assets/piie-logo-cropped.png" alt="" />
                    <div className="announcement-content">
                      <h3 className="announcement-name">{item.name}</h3>
                      <span className="announcement-time">
                        {formatter.format(-formatDate(item.date_posted), "day")}
                      </span>
                      <p className="announcement-message">
                        {item.announcement}
                      </p>
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
