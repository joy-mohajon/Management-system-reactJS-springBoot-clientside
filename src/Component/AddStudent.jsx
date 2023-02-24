import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import fetchCourses from "../Fetchdata/fetchCourses";
import MultiSelectDropdown from "./MultiSelectDropdown";

const AddStudent = () => {
  const { data } = useQuery("courses", () => fetchCourses());
  const courseData = [];
  const [filterCourses, setFilterCourses] = useState(courseData);
  const departments = [];
  const [dptNames, setDptNames] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);

  const [stdName, setStdName] = useState("");
  const [stdId, setStdId] = useState("");
  const [Semester, setSemester] = useState("");
  const [dptName, setDptName] = useState("hello");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [payable, setPayable] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    // setCourses(data);
    const info = {
      name: stdName,
      roll: stdId,
      email: email,
      semester: Semester,
      department: dptName,
      address: address,
      courses: selectedCourse,
      payable: payable,
    };

    const postStudent = async () => {
      await axios
        .post("http://localhost:8081/api/addstudent/", info)
        .then((res) => console.log("addStudent:", res))
        .catch((err) => console.log("stdErr: ", err));
    };
    postStudent();
    console.log("data", data);
    console.log("data", typeof data);
    console.log("selected", selectedCourse);
    console.log("payable", payable);
  };

  useEffect(() => {
    if (data) {
      data.forEach((course) => {
        const { department } = course;
        console.log(department);
        if (!departments.includes(department)) {
          departments.push(department);
        }
        courseData.push(course);
      });
    }
    console.log("courseDta", courseData);
    setDptNames(departments);
    setFilterCourses(courseData);
  }, [data]);

  const selectedCourseData = (courses) => {
    setSelectedCourse(courses);

    selectedCourse.forEach((course) => {
      filterCourses.forEach((courseData) => {
        if (courseData.c_name === course) {
          let amount = Number(courseData.c_fee);
          setPayable((prev) => (prev += amount));
        }
      });
    });
  };

  const filterCourse = (e) => {
    setDptName(e.target.value);

    const newCourses = Object.values(data).filter(
      (course) => course.department === e.target.value
    );
    setFilterCourses(newCourses);
  };

  return (
    <Form className="mt-4" onSubmit={submitHandler}>
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={stdName}
          onChange={(e) => setStdName(e.target.value)}
        />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Roll No</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter roll no"
            value={stdId}
            onChange={(e) => setStdId(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Enrolled Semester</Form.Label>
          <Form.Select
            value={Semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option className="d-none">Choose...</option>
            <option value="Fall 2023">Fall 2023</option>
            <option value="Spring 2023">Spring 2023</option>
            <option value="Summer 2023">Summer 2023</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Select value={dptName} onChange={(e) => filterCourse(e)}>
          <option className="d-none">Choose...</option>
          {dptNames &&
            dptNames.map((department, index) => {
              return (
                <option key={index} value={department}>
                  {department}
                </option>
              );
            })}
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Courses</Form.Label>
        <MultiSelectDropdown
          courses={filterCourses}
          selectedCourses={selectedCourseData}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity" className="mb-4">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Student
      </Button>
    </Form>
  );
};

export default AddStudent;
