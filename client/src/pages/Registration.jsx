import { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [photo, setPhoto] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [batch, setBatch] = useState("");

  // const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("firstname", firstname);
    formData.append("middlename", middlename);
    formData.append("surname", surname);
    formData.append("age", age);
    formData.append("birthday", birthday);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("batch", batch);
    // console.log(formData);
    try {
      await axios.post(
        "http://localhost:8000/ie-connect/api/registration",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
    } catch (error) {
      if (!error?.response) {
        console.log("Field must be completed!");
      }
    }
  }
  return (
    <>
      <header className=" | login-header">
        <ul className=" | login-header-icons">
          <img src="../assets/piie-logo-cropped.png" alt="" />

          <span>
            <img src="../assets/ie-connect-new.png" alt="" />
          </span>

          <a href="https://www.pup.edu.ph/">
            <img src="../assets/pup-logo.png" alt="" />
          </a>
        </ul>
      </header>
      <main>
        <section>
          <div>
            <h1>Edit Profile</h1>
          </div>
          <div>
            <form
              method="post"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <label htmlFor="photo">
                Upload a profile pic:
                <input
                  type="file"
                  name="photo"
                  id="photo"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setPhoto(e.target.files[0])} // Handle file input
                />
              </label>
              <label htmlFor="firstname">
                Firstname:
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <label htmlFor="middlename">
                Middlename:
                <input
                  id="middlename"
                  name="middlename"
                  type="text"
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                />
              </label>
              <label htmlFor="surname">
                Surname:
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </label>
              <label htmlFor="age">
                Age:
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label htmlFor="birthday">
                Birthday:
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </label>
              <label htmlFor="contact">
                Contact:
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="username">
                Username:
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <label htmlFor="batch">
                Batch:
                <select
                  name="batch"
                  id="batch"
                  onChange={(e) => setBatch(e.target.value)}
                >
                  <option value="">Select your batch</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
                <input type="submit" value="submit" />
              </label>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;
