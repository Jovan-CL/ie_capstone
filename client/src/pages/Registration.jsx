import { useState } from "react";
import {useNavigate} from "react-router-dom"
import toast from "react-hot-toast"

const Registration = () => {
  const navigate = useNavigate();

const [newUserProfile, setNewUserProfile ] = useState({
  firstname:"",
  middlename:"",
  surname:"",
  age:"",
  birthday:"",
  contact:"",
  email:"",
  username:"",
  password:"",
  batch:"",
})


  async function handleSubmit(e) {
    e.preventDefault();
console.log(newUserProfile)
    try {
      const res = await fetch(
        "http://localhost:8000/ie-connect/api/registration",
        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(newUserProfile),
        }
      );

      const result = res.json();
      console.log(result.data);
    } catch (error) {
      if (!error?.response) {
        toast.error(error.message)
        console.log("Field must be completed!");
      }
    }
    navigate("/login")
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
              onSubmit={handleSubmit}
            >
              
              <label htmlFor="firstname">
                Firstname:
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={newUserProfile.firstname}
                  onChange={(e) => setNewUserProfile({...newUserProfile, firstname: e.target.value})}
                />
              </label>
              <label htmlFor="middlename">
                Middlename:
                <input
                  id="middlename"
                  name="middlename"
                  type="text"
                  value={newUserProfile.middlename}
                  onChange={(e) => setNewUserProfile({...newUserProfile, middlename: e.target.value})}
                />
              </label>
              <label htmlFor="surname">
                Surname:
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={newUserProfile.surname}
                  onChange={(e) => setNewUserProfile({...newUserProfile, surname: e.target.value})}
                />
              </label>
              <label htmlFor="age">
                Age:
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={newUserProfile.age}
                  onChange={(e) => setNewUserProfile({...newUserProfile, age: e.target.value})}
                />
              </label>
              <label htmlFor="birthday">
                Birthday:
                <input
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={newUserProfile.birthday}
                  onChange={(e) => setNewUserProfile({...newUserProfile, birthday: e.target.value})}
                />
              </label>
              <label htmlFor="contact">
                Contact:
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={newUserProfile.contact}
                  onChange={(e) => setNewUserProfile({...newUserProfile, contact: e.target.value})}
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  id="email"
                  name="email"
                  type="text"
                  value={newUserProfile.email}
                  onChange={(e) => setNewUserProfile({...newUserProfile, email: e.target.value})}
                />
              </label>
              <label htmlFor="username">
                Username:
                <input
                  id="username"
                  name="username"
                  type="username"
                  value={newUserProfile.username}
                  onChange={(e) => setNewUserProfile({...newUserProfile, username: e.target.value})}
                />
              </label>
              <label htmlFor="password">
                Password:
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={newUserProfile.password}
                  onChange={(e) => setNewUserProfile({...newUserProfile, password: e.target.value})}
                />
              </label>

              <label htmlFor="batch">
                Batch:
                <select
                  name="batch"
                  id="batch"
                  onChange={(e) => setNewUserProfile({...newUserProfile, batch: e.target.value})}
                >
                  <option value="">Select your batch</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                </select>
                <button type="submit">Submit</button>
              </label>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;
