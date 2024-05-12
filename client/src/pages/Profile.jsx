const Profile = () => {
  return (
    <section className="profile-page">
      <div className="profile-section">
        <div className="profile-container">
          <div className="image-profile-container">
            <img src="../assets/piie-logo-cropped.png" alt="" />
          </div>
          <div className="profile-information">
            <h3>Name:</h3>
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
        <div className="work-experience-section">
          <h3 className="experience-title">WORK EXPERIENCE</h3>
          <p className="experience-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod autem
            quasi nemo ad totam perspiciatis vel esse reiciendis quaerat
            perferendis id dignissimos quae corrupti dolore ducimus, sequi optio
            fuga magni!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
