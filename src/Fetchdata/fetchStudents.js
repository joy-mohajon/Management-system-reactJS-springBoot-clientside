import axios from "axios";
import React from "react";

const fetchStudents = async () => {
  const data = await axios
    .get("http://localhost:8081/api/students/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("fetchStdErr:", err));
  return data;
};

export default fetchStudents;
