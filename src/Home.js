import React from "react";
import Courses from "./Courses";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/enrolled-courses" className="three-d-link">
        View Profile
      </Link>
      <Courses />
    </div>
  );
}

export default Home;
