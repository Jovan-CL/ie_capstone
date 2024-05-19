const Jobs = () => {
  return (
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
          <div className="announcement-card">
            <img src="../assets/piie-logo-cropped.png" alt="" />
            <div className="announcement-content">
              <h3 className="announcement-name">Jonhn Dock</h3>
              <span className="announcement-time">1 minute ago</span>
              <p className="announcement-message">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                optio dolorum cupiditate nisi non inventore!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
