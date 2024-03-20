import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Recruiter from "./pages/Recruiter";
import Navbar from "./components/NavBar";
import Applicant from "./pages/Applicant";
import Login from "./pages/Login";
// import NotFound from "./NotFound";

function Routes() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={<HomePage />} />
          <Route path="/candidates" element={<Recruiter />} />
          <Route path="/newCandidate" element={<Applicant />} />
          <Route path="/update/:id" element={<Login />} />
        </Switch>
      </Router>
    </>
  );
}

export default Routes;
