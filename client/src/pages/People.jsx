import { useEffect, useState } from "react";
import Header from "../components/Header";
import { PIIELOGOCROPPED } from "../assets";

// import axios from "axios";
// import Magnify from "../assets/magnifying-glass.png";

// let isThereAProfiles = false;
// let render = false;

const People = () => {
  const [batch, setBatch] = useState("");
  const [name, setName] = useState("");
  const [batchInput, setBatchInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  // function setBatch(e) {
  //   setBatch({
  //     ...state,
  //     batch: e.target.value,
  //   });
  // }
  // function setName(e) {
  //   ;
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setBatch(batchInput);
      setName(nameInput);
    }, 1000);
    return () => clearTimeout(timeOutId);
  }, [batchInput, nameInput]);
  // }

  // console.log(name);
  // console.log(batch);
  useEffect(() => {
    async function fetchingUsers() {
      try {
        const getUsers = await fetch(
          "http://localhost:8000/ie-connect/api/people",
          {
            credentials: "include",
          }
        );
        const res = await getUsers.json();
        const allUsers = res.data;
        // console.log(allUsers);
        setAllUsers(allUsers);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchingUsers();
  }, []);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   // console.log(allUsers);
  //   const userRes = allUsers.filter((user) => {
  //     // console.log(user);
  //     if (
  //       user.name.toLowerCase().includes(state.name.toLowerCase()) &&
  //       user.batch === state.batch
  //     ) {
  //       return user;
  //     }
  //   });

  //   setState({
  //     ...state,
  //     batch: "",
  //     name: "",
  //   });
  // }

  return (
    <>
      <Header />
      <section className="people-page">
        <form className="form-people">
          <div className="input-container">
            {/* Input for getting the Batch year */}
            <select
              name="batch"
              id="batch"
              className="bg-[#eaefe7] rounded-[1rem] px-4 text-[1.25rem]"
              onChange={(e) => setBatchInput(e.target.value)}
            >
              <option value="">--Select batch--</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2024">2025</option>
              <option value="2024">2026</option>
              <option value="2024">2027</option>
              <option value="2024">2028</option>
              <option value="2024">2029</option>
            </select>
            {/* <input
              className="input-people"
              type="number"
              placeholder="Batch"
              min="2020"
              max="2070" */}
            {/* // value={state.batch}
              onChange={(e) => setBatchInput(e.target.value)}
              required
            /> */}
            {/* Input for getting the Fullname */}
            <label htmlFor="name">
              <input
                id="name"
                className="input-people"
                type="search"
                placeholder="Fullname"
                // value={state.name}
                onChange={(e) => setNameInput(e.target.value)}
                required
              />
              {/* 
              <button className="search-button" type="submit">
                {/* <img src={Magnify} alt="" />
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
              </button> */}
            </label>
          </div>
        </form>
        <div className="cards-outer">
          <div className="cards-container">
            <div>
              <div className="cards">
                <div>
                  <div className="cards">
                    {allUsers
                      .filter((user) => {
                        if (user.batch.includes(batch)) {
                          if (
                            user.name.toLowerCase().includes(name.toLowerCase())
                          ) {
                            return user;
                          } else if (name === "" && batch === "") {
                            return user;
                          }
                        }
                      })
                      .map((user) => {
                        // console.log(user);
                        return (
                          <div className="card p-2 " key={user._id}>
                            <div className="flex justify-center items-center">
                              <img
                                className="rounded-full w-40 h-40 object-contain"
                                // key={user.id}
                                src={
                                  user.photopic
                                    ? user.photopic
                                    : PIIELOGOCROPPED
                                }
                                alt=""
                              />
                            </div>
                            <p className="text-lg text-center font-semibold">
                              {user.name}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default People;
