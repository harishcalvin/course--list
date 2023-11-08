import create from "zustand";

const useCourseStore = create((set) => ({
  courses: [
    {
      thumbnail:
        "https://i.ibb.co/mCFB38t/young-boy-learning-to-swim-in-pool-with-teacher-488585333-b0bb71ede6254305ba3b8ccc31b9b862.jpg",
      title: "Swimming Lessons Secrets | Babies, Toddlers & Adults",
      author: "Global Swimming Academy",
      oldPrice: "₹3,500",
      newPrice: "₹1,500",
      isBestSeller: true,
      isEnrolled: false,
    },
    {
      thumbnail: "https://i.ibb.co/sgPbwKr/fight-test-1.jpg",
      title: "Fighting Lessons - Self Defence and Street Fighting",
      author: "Joe Rogan",
      oldPrice: "₹5,000",
      newPrice: "₹2,000",
      isBestSeller: false,
      isEnrolled: false,
    },
    {
      thumbnail: "https://i.ibb.co/zs1y8b3/Cooking-class-india.jpg",
      title: "101 Vegan Food Recipes",
      author: "Harish",
      oldPrice: "₹2,000",
      newPrice: "₹5,000",
      isBestSeller: false,
      isEnrolled: false,
    },
  ],
  updateCourses: (courses) => set(() => ({ courses: courses })),
}));

export default useCourseStore;
