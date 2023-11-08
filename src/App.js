import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Courses from "./Courses.js";
import CourseDetails from "./CourseDetails.js";
import EnrolledCourses from "./EnrolledCourses.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/enrolled-courses" element={<EnrolledCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
