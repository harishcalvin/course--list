import "./EnrolledCourses.css";
import Course from "./Course";
import useCourseStore from "./courseStore";

function EnrolledCourses() {
  const courses = useCourseStore((state) => state.courses);
  const enrolledCourses = courses.filter((c) => c.isEnrolled);

  return (
    <div className="studentEnrolledCourses">
      <div className="studentInfo">
        <h1 class="studentName">student name</h1>
        <p className="studentBio">Loves to learn</p>
      </div>
      <div className="enrolledCourseList">
        <p className="enrolledCourseList__title">Courses enrolled in:</p>
      </div>
      <div className="course__container">
        {enrolledCourses.map((course) => (
          <Course key={course.title} {...course} />
        ))}
      </div>
    </div>
  );
}

export default EnrolledCourses;
