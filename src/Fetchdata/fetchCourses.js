import axios from "axios";

const fetchCourses = async () => {
  const data = await axios
    .get("http://localhost:8081/api/courses/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log("fetchErr:", err));
  return data;
};

export default fetchCourses;
