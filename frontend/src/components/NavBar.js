import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  const goToCandidatesPage = () => {
    navigate("/candidates");
  };
  const goToApplicationPage = () => {
    navigate("/newCandidate");
  };
  return (
    <nav className="bg-brand-primary text-content-primary flex justify-between p-4 hover:cursor-pointer">
      <a onClick={goToHomePage} className="text-xl font-bold">
        TaskPhin
      </a>
      <ul className="flex space-x-20">
        <li
          onClick={goToCandidatesPage}
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
        >
          <a>Candidates</a>
        </li>
        <li
          onClick={goToApplicationPage}
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."
        >
          <a className="hover:text-gray-400">New Candidate</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
