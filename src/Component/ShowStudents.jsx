import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link, Navigate, Redirect, useNavigate } from "react-router-dom";
import fetchCourses from "../Fetchdata/fetchCourses";
import fetchStudents from "../Fetchdata/fetchStudents";

const ShowStudents = ({ update }) => {
  const { data, refetch } = useQuery("students", () => fetchStudents());
  const { data: courses } = useQuery("courses", () => fetchCourses());
  const navigate = useNavigate();

  console.log("student", data);
  console.log("courses", courses);

  useEffect(() => {
    refetch();
  }, [refetch, update]);


  return (
    <>
      <h2 className="text-center mb-4 mt-5">All students</h2>
      <table className="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th className="text-center" scope="col">
              Name
            </th>
            <th className="text-center" scope="col">
              Email
            </th>
            <th className="text-center" scope="col">
              Semester
            </th>
            <th className="text-center" scope="col">
              Department
            </th>
            <th className="text-center" scope="col">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((student, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>

                  <td className="text-center">{student.name}</td>
                  <td className="text-center">{student.email}</td>
                  <td className="text-center">{student.semester}</td>
                  <td className="text-center">{student.department}</td>
                  <td>
                    <Link
                      to="details/"
                      className="text-center"
                      state={{ student, courses }}
                    >
                      Show
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ShowStudents;
