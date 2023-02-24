import React, { useState } from "react";
import AddCourse from "../AddCourse";
import ShowCourses from "../ShowCourses";

const Course = () => {
  const [update, setUpdate] = useState(true);

  const updateState = () => {
    setUpdate(!update);
  };

  return (
    <div>
      <AddCourse updateState={updateState} />
      <ShowCourses update={update} />
    </div>
  );
};

export default Course;
