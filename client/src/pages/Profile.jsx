const Profile = () => {
  return (
    <section>
      <div className="profile-page">
        <div className="profile-section">
          <div className="profile-container">
            <div className="image-profile-container">
              <img src="" alt="" />
            </div>
            <div className="profile-information">
              <p>Name:</p>
              <p>Age:</p>
              <p>Occupation:</p>
              <p>Location:</p>
              <p>Contact Number:</p>
              <p>More info</p>
              <div className="profile-buttons">
                <button className="edit-profile">Edit Profile</button>
                <button className="share-profile">Share Profile</button>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-section"></div>
      </div>
    </section>
  );
};

export default Profile;
