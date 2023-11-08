import "./Course.css";
import { Link } from "react-router-dom";

function Course(props) {
  return (
    <div className="course">
      <Link
        to="/course-details"
        state={{
          title: props.title,
        }}
        className="course__card"
      >
        <div className="course__thumbnail">
          <img
            src={props.thumbnail}
            alt="course-img"
            className="course__thumbnail--img"
          />
        </div>
        <div className="course__details">
          <p className="course__title">{props.title}</p>
          <p className="course__author">{props.author}</p>
          <div className="course__price">
            <p className="course__price--real">{props.newPrice}</p>
            <p className="course__price--fullprice">{props.oldPrice}</p>
          </div>
        </div>
        {props.isBestSeller ? (
          <div className="course__tag">Best Seller</div>
        ) : null}
      </Link>
    </div>
  );
}

export default Course;
