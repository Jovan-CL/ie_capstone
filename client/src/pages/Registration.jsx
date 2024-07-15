import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { PIIELOGOCROPPED, IECONNECNEWPNG, PUPLOGOPNG } from "../assets/index";

// let checker = function () {
//   let password = document.querySelector("#password").value;
//   let confirmPassword = document.querySelector("#confPassword").value;

//   if (password === "" && confirmPassword === "") {
//     document.querySelector("#message").innerHTML = "Empty Field";
//     document.querySelector("#message").style.color = "Orange";
//   } else if (password === confirmPassword) {
//     document.querySelector("#message").innerHTML = "Matched";
//     document.querySelector("#message").style.color = "Green";
//   } else {
//     document.querySelector("#message").innerHTML = "Not Matched";
//     document.querySelector("#message").style.color = "Red";
//   }
// };

const Registration = () => {
  const navigate = useNavigate();

  const [newUserProfile, setNewUserProfile] = useState({
    firstname: "",
    middlename: "",
    surname: "",
    age: "",
    birthday: "",
    contact: "",
    location: "",
    email: "",
    username: "",
    password: "",
    batch: "",
    confirmPassword: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(newUserProfile);
    const checker = newUserProfile.confirmPassword === newUserProfile.password;
    if (!checker) return;
    try {
      const res = await fetch(
        "http://localhost:8000/ie-connect/api/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserProfile),
        }
      );

      const result = res.json();
      if (result.ok) {
        toast.success(result.message);
      }
    } catch (error) {
      if (!error?.response) {
        toast.error(error.message);
        console.log("Field must be completed!");
      }
    }
    navigate("/login");
  }
  return (
    <>
      <header className=" | login-header ">
        <ul className=" | login-header-icons flex items-center w-full justify-between">
          <img src={PIIELOGOCROPPED} alt="" />

          <span>
            <img src={IECONNECNEWPNG} alt="" />
          </span>

          <a href="https://www.pup.edu.ph/">
            <img src={PUPLOGOPNG} alt="" />
          </a>

        </ul>
      </header>
      <main>
        <div className="text-center pt-5 font-bold text-lime-900">
          <h1>Register Account</h1>
        </div>
        <section className="flex basis-5 max-w-full min-w-50 justify-center">
          <div className="max-w-4xl pt-14">
            <form
              className="grid grid-cols-7 grid-rows-5 gap-7"
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="firstname"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Firstname:
                <input
                  className="grow overflow-hidden"
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={newUserProfile.firstname}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      firstname: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="middlename"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Middlename:
                <input
                  className="grow overflow-hidden"
                  id="middlename"
                  name="middlename"
                  type="text"
                  value={newUserProfile.middlename}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      middlename: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="surname"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Surname:
                <input
                  className="grow overflow-hidden"
                  id="surname"
                  name="surname"
                  type="text"
                  value={newUserProfile.surname}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      surname: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="age"
                className="input input-bordered flex items-center gap-2 text-sm"
              >
                Age:
                <input
                  className="grow overflow-hidden"
                  id="age"
                  name="age"
                  type="number"
                  value={newUserProfile.age}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      age: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="birthday"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Birthday:
                <input
                  className="grow overflow-hidden"
                  id="birthday"
                  name="birthday"
                  type="date"
                  value={newUserProfile.birthday}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      birthday: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="contact"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Contact:
                <input
                  className="grow overflow-hidden"
                  id="contact"
                  name="contact"
                  type="text"
                  value={newUserProfile.contact}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      contact: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="location"
                className="input input-bordered flex items-center gap-2 text-sm col-span-3"
              >
                Address:
                <input
                  className="grow overflow-hidden"
                  id="location"
                  name="location"
                  type="text"
                  value={newUserProfile.location}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      location: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="email"
                className="input input-bordered flex items-center gap-2 text-sm col-span-3"
              >
                Email:
                <input
                  className="grow overflow-hidden"
                  id="email"
                  name="email"
                  type="text"
                  value={newUserProfile.email}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      email: e.target.value,
                    })
                  }
                />
              </label>
              <label
                htmlFor="username"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Username:
                <input
                  className="grow overflow-hidden"
                  id="username"
                  name="username"
                  type="username"
                  value={newUserProfile.username}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      username: e.target.value,
                    })
                  }
                />
              </label>

              <label
                htmlFor="password"
                className="input input-bordered flex items-center gap-2 text-sm col-span-2"
              >
                Password:
                <input
                  className="grow overflow-hidden pass"
                  id="password"
                  name="password"
                  type="password"
                  value={newUserProfile.password}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      password: e.target.value,
                    })
                  }
                />
              </label>

              <label
                htmlFor="confirmPassword"
                className="input input-bordered flex items-center gap-2 text-sm col-span-3"
              >
                Confirm Password:
                <input
                  className="grow overflow-hidden pass"
                  id="confPassword"
                  name="password"
                  type="password"
                  value={newUserProfile.confirmPassword}
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <span className="" id="message"></span>
              </label>

              <label
                htmlFor="batch"
                className="input input-bordered flex items-center gap-2 text-sm col-span-3 justify-center"
              >
                Batch:
                <select
                  name="batch"
                  id="batch"
                  onChange={(e) =>
                    setNewUserProfile({
                      ...newUserProfile,
                      batch: e.target.value,
                    })
                  }
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
              </label>
              <button
                className="btn bg-lime-900 font-bold text-white hover:bg-white hover:text-lime-900 shadow-lg w-56 col-start-6 col-end-4 row-start-5"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Registration;
