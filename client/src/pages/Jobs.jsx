import { useEffect, useState } from "react";
import Header from "../components/Header";
function formatDate(date) {
  return new Date(date).getDay();
}

const formatter = new Intl.RelativeTimeFormat("en", { style: "short" });

const Jobs = () => {
  const [announcements, setAnnouncements] = useState([]);
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
      <section className="jobs-page-grid">
        <div className="left-sidebar">
          <div className="jobs-buttons">
            <button className="preferences-button">Preferences</button>
            <button className="save-job-button">Save Job</button>
            <button type="button" className="create-post-button">
              Create a post
            </button>
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
              <div className="post-card">
                <img src="../assets/piie-logo-cropped.png" alt="" />
                <div className="post-content">
                  <h3 className="post-name">Jonhn Dock</h3>
                  <span className="post-time">1 minute ago</span>
                  <p className="post-message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam optio dolorum cupiditate nisi non inventore!
                  </p>
                </div>
              </div>
              <div className="post-card">
                <img src="../assets/piie-logo-cropped.png" alt="" />
                <div className="post-content">
                  <h3 className="post-name">Jonhn Dock</h3>
                  <span className="post-time">1 minute ago</span>
                  <p className="post-message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam optio dolorum cupiditate nisi non inventore!
                  </p>
                </div>
              </div>
              <div className="post-card">
                <img src="../assets/piie-logo-cropped.png" alt="" />
                <div className="post-content">
                  <h3 className="post-name">Jonhn Dock</h3>
                  <span className="post-time">1 minute ago</span>
                  <p className="post-message">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsam optio dolorum cupiditate nisi non inventore!
                  </p>
                </div>
              </div>
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
