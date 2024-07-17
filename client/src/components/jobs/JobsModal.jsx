import { useRef, useState } from "react";
import useAutosizeTextArea from "../../utils/useAutoResizeTextArea";
// import { PiVanLight } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";

const JobsModal = () => {
  const [jobForm, setJobForm] = useState({
    jobheader: "",
    jobdefinition: "",
  });
  const textAreaRef = useRef(null);
  useAutosizeTextArea(textAreaRef.current, jobForm.jobdefinition);
  const handleSubmit = async (e) => {
    if (jobForm.jobheader === "" || jobForm.jobdefinition === "") {
      e.preventDefault();
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:8000/ie-connect/api/jobPost",
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(jobForm),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.status === 500) throw new Error(result.message);
      console.log(result);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Create post
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-12">
          <h3 className="font-bold text-3xl uppercase text-center border-y-8 border-double">Post a Job</h3>
          <p className="py-4 text-sm">Press <span className="font-bold text-red-500">ESC</span> to cancel</p>
          <div className="flex font-bold uppercase">
            <form className="flex flex-col flex-1" onSubmit={handleSubmit}>
              <label htmlFor="job-header">
                Job Title:
                <div>
                  <input
                    className="py-1 px-2 rounded-md input input-bordered w-full font-normal placeholder:italic placeholder:font-bold"
                    placeholder="What's the Job Title?"
                    value={jobForm.jobheader}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, jobheader: e.target.value })
                    }
                    id="job-header"
                    type="text"
                  />
                </div>
              </label>
              <label className="mt-2" htmlFor="job-definition">
                Job Description:
                <textarea
                  className="resize-none text-wrap py-1 px-2 rounded-md textarea textarea-bordered w-full font-normal placeholder:italic placeholder:font-bold
                  h-[0]"
                  placeholder="Description here..."
                  name=""
                  id=""
                  // cols="30"
                  ref={textAreaRef}
                  rows="2"
                  value={jobForm.jobdefinition}
                  onChange={(e) =>
                    setJobForm({ ...jobForm, jobdefinition: e.target.value })
                  }
                ></textarea>
                {/* <div className="">
                  <div
                    contentEditable="true"
                    className="border border-black w-full text-wrap py-1 px-2 rounded-md"
                    value={jobForm.jobdefinition}
                    onChange={(e) =>
                      setJobForm({ ...jobForm, jobdefinition: e.target.value })
                    }
                    id="job-definition"
                    type="text"
                  >
                    dsfdsf
                  </div>
                </div> */}
              </label>
              {/* if there is a button, it will close the modal */}
              <button type="submit">Post</button>
              {/* <button className="btn">Close</button> */}
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default JobsModal;
