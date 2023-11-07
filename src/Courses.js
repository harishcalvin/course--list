import Course from "./Course";
import "./Course.css";
import "./Courses.css";

function Courses() {
  const courses = [
    {
      thumbnail:
        "https://i.ibb.co/mCFB38t/young-boy-learning-to-swim-in-pool-with-teacher-488585333-b0bb71ede6254305ba3b8ccc31b9b862.jpg",
      title: "Swimming Lessons Secrets | Babies, Toddlers & Adults",
      author: "Global Swiming Academy",
      oldPrice: "₹3,500",
      newPrice: "₹1,500",
      isBestSeller: true,
    },
    {
      thumbnail: "https://i.ibb.co/sgPbwKr/fight-test-1.jpg",
      title: "Fighting Lessons - Self Defence and Street Fighting",
      author: "Joe Rogan",
      oldPrice: "₹5,000",
      newPrice: "₹2,000",
      isBestSeller: false,
    },
    {
      thumbnail: "https://i.ibb.co/zs1y8b3/Cooking-class-india.jpg",
      title: "101 Vegan Cooking recipes",
      author: "harish",
      oldPrice: "₹5,000",
      newPrice: "₹1,600",
      isBestSeller: false,
    },
  ];

  return (
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
        />
      ))}
    </div>
  );
}

export default Courses;
