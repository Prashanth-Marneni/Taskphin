import React from "react";
import search from "../assests/recuriterSearch.jpg";
import Navbar from "./NavBar";
export default function HomePage() {
  return (
    <>
      <div className="flex">
        <div className="text-large font-bold leading-loose">
          Say Goodbye to Guesswork: Hire with Confidence Based on Skills
        </div>
        <img src={search} className="fill-transparent" />
      </div>
    </>
  );
}
