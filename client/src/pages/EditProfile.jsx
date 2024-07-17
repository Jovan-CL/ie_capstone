import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import useGetConversations from "../hooks/useGetConversations";
import { 
  PIIELOGOCROPPED, 
  IECONNECNEWPNG, 
  PUPLOGOPNG,
  BULLETINICON,
  PEOPLEICONPNG,
  PROFILEICONPNG,
  JOBSICONPNG,
} from "../assets/index";

const EditProfile = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const [photo, setPhoto] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [batch, setBatch] = useState("");

  const navigate = useNavigate();

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
    formData.append("location", location);
    formData.append("email", email);
    formData.append("batch", batch);
    // console.log(formData);

    // console.log(formData);

    try {
      const response = await fetch(
        `http://localhost:8000/ie-connect/api/profile/editProfile/${isAuthenticated.id}`,
        {
          method: "PATCH",
          credentials: "include",
          body: formData,
        }
      );

      const result = await response.json();

      // console.log(result);
      localStorage.setItem("user", JSON.stringify(result.data));
      console.log(result);
      toast.success(`${result.message}`);
    } catch (error) {
      toast.error(error.message);
      console.error("Update fail", error.message);
    }
    navigate("/profile");
  }

  return (
    <>
      <header className="bulletin-header">
        <ul className="bulletin_icons">
          <img src={PIIELOGOCROPPED} alt="" />

          <span>
            <img src={IECONNECNEWPNG} alt="" />
          </span>

          <a href="https://www.pup.edu.ph/">
            <img src={PUPLOGOPNG} alt="" />
          </a>
        </ul>
        <div className="nav-container">
          <nav className="bulletin-nav">
            <NavLink to="/bulletin">
              <img src={BULLETINICON} alt="" />
              <p>Bulletin</p>
            </NavLink>
            <NavLink to="/people">
              <img src={PEOPLEICONPNG} alt="" />
              <p>People</p>
            </NavLink>
            <NavLink to="/profile">
              <img src={PROFILEICONPNG} alt="" />
              <p>Profile</p>
            </NavLink>
            <NavLink to="/jobs">
              <img className="jobs-icon" src={JOBSICONPNG}alt="" />
              <p>Jobs</p>
            </NavLink>
          </nav>
          <div className="hamburger-container">
            <button className="hamburger-button">
              <svg width="25" viewBox="0 0 100 100">
                <rect width="80" height="10" x="10" y="30" rx="5"></rect>
                <rect width="80" height="10" x="10" y="50" rx="5"></rect>
                <rect width="80" height="10" x="10" y="70" rx="5"></rect>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main>
          <div className="flex justify-center text-center pt-5 font-bold text-lime-900 ">
              <h1 className="border-y-8 px-96 border-gray-300 border-double ">Edit Profile</h1>
          </div>
        <section className="flex basis-5 max-w-full min-w-50 justify-center ">
          <div className="max-w-4xl pt-14">
            <form className="grid grid-cols-7 grid-rows-4 gap-7 shadow-sm shadow-black rounded-lg p-8"
              method="post"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-3 col-end-6 mb-7" htmlFor="photo">
                <input
                  type="file"
                  className="file-input w-full max-w-xs"
                  name="photo"
                  id="photo"
                  accept=".png, .jpg, .jpeg"
                  onChange={(e) => setPhoto(e.target.files[0])} // Handle file input
                />
                <p className="text-sm text-center">Upload a profile pic</p>
              </label>
              
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-1 col-end-3 row-start-2" htmlFor="firstname">
                Firstname:
                <input
                  className="grow overflow-hidden" placeholder="Juan"
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-3 col-end-5 row-start-2" htmlFor="middlename">
                Middlename:
                <input
                  className="grow overflow-hidden" placeholder="Mendoza"
                  id="middlename"
                  name="middlename"
                  type="text"
                  value={middlename}
                  onChange={(e) => setMiddlename(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-5 col-end-7 row-start-2" htmlFor="surname">
                Surname:
                <input
                  className="grow overflow-hidden" placeholder="Dela Cruz"
                  id="surname"
                  name="surname"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm row-start-2" htmlFor="age">
                Age:
                <input
                  className="grow overflow-hidden" placeholder="0"
                  id="age"
                  name="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-1 col-end-3 row-start-3" htmlFor="birthday">
                Birthday:
                <input
                  className="grow overflow-hidden"
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-3 col-end-5 row-start-3" htmlFor="contact">
                Contact:
                <input
                  className="grow overflow-hidden" placeholder="09123456789"
                  id="contact"
                  name="contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-5 col-end-8 row-start-3" htmlFor="location">
                Location:
                <input
                  className="grow overflow-hidden"
                  id="location"
                  name="location"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 text-sm col-start-1 col-end-3 row-start-4" htmlFor="email">
                Email:
                <input
                  className="grow overflow-hidden" placeholder="JuanDelaCruz@gmail.com"
                  id="email"
                  name="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 text-sm row-start-4 col-span-2" htmlFor="batch">
                Batch:
                <select
                  className="grow overflow-hidden"
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
                
              </label>
                  <button className="btn bg-lime-900 font-bold text-white hover:bg-white hover:text-lime-900 shadow-lg col-start-6 col-end-8 row-start-4" type="submit" value="submit">
                  Submit
                </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default EditProfile;
