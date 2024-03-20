import axios from "axios";
import React, { useEffect, useState } from "react";
import { UrlConstant } from "../Urlconstant";
import { useNavigate, useParams } from "react-router-dom";
const UpdateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [skills, setSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [status, setStatus] = useState("");
  const [nodeExperience, setNodeExperience] = useState(0);
  const [reactExperience, setReactExperience] = useState(0);
  const getCandidateDetails = async () => {
    const response = await axios.get(`${UrlConstant.getCandidateById}${id}`);
    setEmail(response?.data?.email);
    setName(response?.data?.name);
    setMobile(response?.data?.phone);
    setSkills(response?.data?.skills);
    setStatus(response?.data?.current_status);
    setSalary(response?.data?.expected_salary);
    setNodeExperience(response?.data?.nodeexperience);
    setReactExperience(response?.data?.reactexperience);

  };

  useEffect(() => {
    getCandidateDetails();
  }, []);

  const addNewCandidate = async () => {
    try {
      const payload = {
        name: name,
        email: email,
        mobile: mobile,
        skills: skills,
        salary: salary,
        status: status,
        nodeExperience: nodeExperience,
        reactExperience: reactExperience,
      };
      const response = await axios.put(UrlConstant.addCandidate, payload);

    } catch (error) {
      console.log(error);
    }
  };
  const updateCandidateDetails = async () => {
    try {
      const payload = {
        name: name,
        email: email,
        mobile: mobile,
        skills: skills,
        salary: salary,
        status: status,
        nodeExperience: nodeExperience,
        reactExperience: reactExperience,
      };
      const response = await axios.put(
        `${UrlConstant.getCandidateById}${id}`,
        payload
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    updateCandidateDetails();
    navigate("/candidates");
  };
  return (
    <>
      <div className="mx-4 flex justify-center items-center">
        <form className="text-2xl">
          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                Candidate Name
              </span>
              <input
                className="w-96 p-2 border-solid border-2 border-black rounded-lg"
                placeholder="Enter name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                Candidate Email
              </span>
              <input
                type="email"
                name="email"
                className="w-96 p-2 bg-white border-solid border-2 border-black rounded-lg"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                Candidate phone number
              </span>
              <input
                className="w-96 p-2 border-solid border-2 border-black rounded-lg"
                type="text"
                placeholder="Enter phone number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </label>
          </div>

          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                Skills/Qualifications
              </span>
              <input
                className="w-96 p-2 border-solid border-2 border-black rounded-lg"
                type="text"
                placeholder="Enter Skills/Qualifications"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                Node.js Experience (years)
              </span>
              <input
                className="w-96 p-2 border-solid border-2 border-black rounded-lg"
                type="number"
                placeholder="Enter Node.js experience (years)"
                value={nodeExperience}
                onChange={(e) => setNodeExperience(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                React.js Experience (years)
              </span>
              <input
                className="w-96 p-2 border-solid border-2 border-black rounded-lg"
                type="number"
                placeholder="Enter React.js experience (years)"
                value={reactExperience}
                onChange={(e) => setReactExperience(parseInt(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-3">
            <label
              htmlFor="countries"
              className="block font-medium text-slate-700"
            >
              Current Status
            </label>

            <select
              id="countries"
              className="w-96 bg-gray-50 rounded-xl focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-black p-2 border-solid border-2 border-black"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option>Select an option</option>
              <option value="Contacted">Contacted</option>
              <option value="Interview Scheduled">Interview Scheduled</option>
              <option value="Offer Extended">Offer Extended</option>
              <option value="Hired">Hired</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div className="mb-3">
            <label>
              <span className="block font-medium text-slate-700">
                Expected salary
              </span>
              <input
                className="w-96 p-2 border-solid border-2 border-black rounded-lg"
                type="text"
                placeholder="Enter salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </label>
          </div>

          <button
            className="mb-2 w-96 p-2 bg-sky-500 hover:bg-sky-700 border-solid border-2 border-black rounded-lg"
            type="submit"
            onClick={handleClick}
            style={{ backgroundColor: "#00a1ff", color: "white" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateForm;
