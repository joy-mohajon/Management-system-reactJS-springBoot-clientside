import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowCourses = ({ update }) => {
  const [courses, setCourses] = useState([]);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      await axios
        .get("http://localhost:8081/api/courses/")
        .then((res) => setCourses(res.data))
        .catch((err) => console.log("fetchErr:", err));
    };
    fetchCourse();
  }, [update, flag]);

  const deleteStudent = async (id) => {
    await axios
      .post(`http://localhost:8081/api/courses/${id}/delete`)
      .then((res) => setFlag(!flag))
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-5">All Courses</h2>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Code</th>
            <th scope="col">Name</th>
            <th className="text-center" scope="col">
              Credit
            </th>
            <th className="text-center" scope="col">
              Fee
            </th>
            <th className="text-center" scope="col">
              Department
            </th>
          </tr>
        </thead>
        <tbody>
          {courses &&
            courses.map((course, index) => {
              console.log("coourseId", course);
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{course.c_code}</td>
                  <td>{course.c_name}</td>
                  <td className="text-center">{course.c_credit}</td>
                  <td className="text-center">{course.c_fee}</td>
                  <td className="text-center">{course.department}</td>
                  <td>
                    <button
                      className="border-0 mx-2 bg-info"
                      onClick={() => deleteStudent(course.c_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ShowCourses;
