import { useLocation } from "react-router-dom";
import "./CourseDetails.css";

function CourseDetails() {
  let { state } = useLocation();

  return (
    <div className="courseListing">
      <div className="courseListing__details">
        <div className="courseListing--info">
          <div className="courseListing__primary">
            <h1 className="courseListing__info--title">{state.title}</h1>
            <p className="courseListing__info--des">course description</p>
            <p className="courseListing__info--author">
              Created by
              <span className="courseListing__author--profile">
                <a href="/google.com" className="courseListing__author--user">
                  {state.author}
                </a>
              </span>
            </p>
          </div>
          <div className="courseListing__info--secondary">
            <p className="courseListing__lastUpdate">Last updated 06/2023</p>
            <p className="courseListing__language">English</p>
            <p className="courseListing__language--caption">English</p>
          </div>
        </div>
        <div className="courseListing--info--preview">
          <img
            src={state.thumbnail}
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
