import React, { useState } from "react";
import Card from "./Card";

function Cards(props) {
  let courses = props.courses;
  const [likedCourses,setLikedCourses]=useState([]);
  console.log(courses);
  // returns me a list of all courses recieved from the api response
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
}
export default Cards;
