import { useLocation } from "react-router-dom";
import "./CourseDetails.css";
import useCourseStore from "./courseStore";

function CourseDetails() {
  let { state } = useLocation();
  const courses = useCourseStore((state) => state.courses);
  const updateCourses = useCourseStore((state) => state.updateCourses);

  const handleClick = () => {
    const updatedCourses = courses.map((course) => {
      if (course.title === state.title) {
        return { ...course, isEnrolled: true };
      }
      return course;
    });

    updateCourses(updatedCourses);
  };
  const currentCourse = courses.find((c) => c.title === state.title);

  return (
    <div className="courseListing">
      <div className="courseListing__details">
        <div className="courseListing--info">
          <div className="courseListing__primary">
            <h1 className="courseListing__info--title">
              {currentCourse.title}
            </h1>
            <p className="courseListing__info--des">course description</p>
            <p className="courseListing__info--author">
              Created by
              <span className="courseListing__author--profile">
                <a href="/google.com" className="courseListing__author--user">
                  {currentCourse.author}
                </a>
              </span>
            </p>
          </div>
          <div className="courseListing__info--secondary">
            <p className="courseListing__lastUpdate">Last updated 06/2023</p>
            <p className="courseListing__language">English</p>
            <p className="courseListing__language--caption">English</p>
            {currentCourse.isEnrolled ? (
              <p className="fade-in">✅ Enrolled</p>
            ) : (
              <button className="green-button" onClick={handleClick}>
                Enroll Now
              </button>
            )}
          </div>
        </div>
        <div className="courseListing--info--preview">
          <img
            src={currentCourse.thumbnail}
            alt=""
            className="courseListing--info--img"
          />
        </div>
      </div>
      <p className="courseListing__secondary--details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit
        dolorem perferendis reprehenderit praesentium deleniti laborum fugit
        tenetur expedita harum. Modi amet corrupti inventore nulla tempore
        minima obcaecati quis, consequatur nam adipisci! Consequuntur provident
        maxime blanditiis sequi deleniti praesentium nihil consectetur libero
        est laboriosam iste veniam, doloribus nemo consequatur molestiae
        quisquam adipisci doloremque quibusdam ex temporibus voluptate alias
        reprehenderit. Quidem corrupti dolorum nobis. Voluptate odit neque ipsam
        perspiciatis nihil maxime, obcaecati, eveniet nulla voluptatum ex
        accusamus saepe reprehenderit eaque ullam porro consequuntur libero. Sit
        autem, exercitationem quasi expedita perferendis perspiciatis omnis
        dolore iure esse obcaecati totam vel itaque. Nemo possimus dignissimos
        alias in ratione adipisci eius quaerat earum, maxime iure ex obcaecati
        accusantium pariatur atque. Ipsum, soluta. Sunt odit, iusto ratione
        libero ea quo maxime consequuntur, praesentium repellendus eum a
        temporibus quas? Repellat, delectus, consequuntur iusto vero ut ex non
        voluptatibus modi odit maxime quam quas, quae eveniet consectetur libero
        optio nulla repudiandae numquam voluptate incidunt iste eligendi iure
        aliquam illo. Iusto sapiente explicabo facere. Eos eligendi possimus,
        totam aut tempora sapiente, inventore delectus id magni vitae esse
        architecto cumque. Voluptates sed quam, facere dolore, cupiditate hic
        repudiandae reprehenderit, assumenda qui vero quisquam quia dignissimos
        magni! Debitis recusandae similique ullam.
      </p>
    </div>
  );
}

export default CourseDetails;
