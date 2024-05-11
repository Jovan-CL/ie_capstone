import { useState } from "react";
// import Magnify from "../assets/magnifying-glass.png";

let isThereAProfiles = false;
// let render = false;

const People = () => {
  const [state, setState] = useState({
    batch: "".trim(),
    name: "".trim(),
  });

  function getBatch(e) {
    setState({
      ...state,
      batch: e.target.value,
    });
  }
  function getName(e) {
    setState({
      ...state,
      name: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    setState({
      ...state,
      batch: "",
      name: "",
    });
  }

  return (
    <section className="people-page">
      <form className="form-people" action="GET" onSubmit={handleSubmit}>
        <div className="input-container">
          {/* Input for getting the Batch year */}
          <input
            className="input-people"
            type="number"
            placeholder="Batch"
            min="2020"
            max="2070"
            value={state.batch}
            onChange={getBatch}
          />
          {/* Input for getting the Fullname */}
          <input
            className="input-people"
            type="search"
            placeholder="Fullname"
            value={state.name}
            onChange={getName}
          />

          <button className="search-button" type="submit">
            {/* <img src={Magnify} alt="" /> */}
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
        </div>
      </form>
      <div className="cards-outer">
        <div className="cards-container">
          {isThereAProfiles ? (
            <div>
              <div className="cards">
                <div className="card">
                  <img src="../assets/piie-logo-cropped.png" alt="" />
                </div>
                <div className="card">
                  <img src="../assets/piie-logo-cropped.png" alt="" />
                </div>
                <div className="card">
                  <img src="../assets/piie-logo-cropped.png" alt="" />
                </div>
                <div className="card">
                  <img src="../assets/piie-logo-cropped.png" alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="backup">Please search profile</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default People;
