import Course from "./Course";
import "./Course.css";
import "./Courses.css";
import React from "react";
import useCourseStore from "./courseStore";

function Courses() {
  const courses = useCourseStore((state) => state.courses);

  return (
    <div>
      <div className="course__container">
        {courses.map((course, index) => (
          <Course
            key={index}
            thumbnail={course.thumbnail}
            title={course.title}
            author={course.author}
            oldPrice={course.oldPrice}
            newPrice={course.newPrice}
            isBestSeller={course.isBestSeller}
            isEnrolled={course.isEnrolled}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
