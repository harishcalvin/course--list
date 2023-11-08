import "./EnrolledCourses.css";
import Courses from "./Courses";

function EnrolledCourses() {
  return (
    <div className="studentEnrolledCourses">
      <div className="studentInfo">
        <h1 class="studentName">student name</h1>
        <p className="studentBio">Loves to learn</p>
      </div>
      <div className="enrolledCourseList">
        <p className="enrolledCourseList__title">Courses enrolled in:</p>
      </div>
      <Courses />
    </div>
  );
}

export default EnrolledCourses;
