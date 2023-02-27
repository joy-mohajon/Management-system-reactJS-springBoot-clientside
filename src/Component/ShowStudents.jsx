import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link, Navigate, Redirect, useNavigate } from "react-router-dom";
import fetchCourses from "../Fetchdata/fetchCourses";
import fetchStudents from "../Fetchdata/fetchStudents";

const ShowStudents = ({ update }) => {
  const { data, refetch } = useQuery("students", () => fetchStudents());
  const { data: courses } = useQuery("courses", () => fetchCourses());
  const navigate = useNavigate();

  const [flag, setFlag] = useState(true);

  console.log("studentttttttttttttt", data);
  // console.log("courses", courses);

  useEffect(() => {
    refetch();
    // console.log("updataegggggggg", update);
  }, [refetch, update, flag]);

  const deleteStudent = async (id) => {
    await axios
      .post(`http://localhost:8081/api/student/${id}/delete`)
      .then((res) => setFlag(!flag))
      .catch((err) => console.log("error", err));
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-5">All students</h2>
      <table className="table mb-5">
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
              Payable
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
                  <td className="text-center">{student.payable}</td>
                  <td className="d-flex justify-content-center align-item-center flex-row flex-nowrap">
                    <Link
                      to="details/"
                      className="text-center mx-2"
                      state={{ student, courses }}
                    >
                      Show
                    </Link>
                    <button
                      className="border-0 mx-2 bg-info"
                      onClick={() => deleteStudent(student.id)}
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

export default ShowStudents;
