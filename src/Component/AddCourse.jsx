import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddCourse = ({ updateState }) => {
  const [dptName, setDptName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseCredit, setCourseCredit] = useState("");
  const [courseFee, setCourseFee] = useState("");
  const [update, setUpdate] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    setUpdate((preUpdate) => !preUpdate);
    const data = {
      c_name: courseName.trim(),
      c_code: courseCode.trim(),
      c_credit: courseCredit.trim(),
      c_fee: courseFee.trim(),
      department: dptName.trim(),
    };
    console.log("data:", data);

    const postCourse = async () => {
      await axios
        .post("http://localhost:8081/api/addcourse/", data)
        .then((res) => console.log("res:", res))
        .catch((err) => console.log("err:", err));
    };
    postCourse();

    setCourseName("");
    setCourseCode("");
    setCourseCredit("");
    setCourseFee("");
    setDptName("");

    // for table updata
    updateState();
  };

  return (
    <Form className="mt-4" onSubmit={submitHandler}>
      <Form.Group as={Col} controlId="" className="mb-3">
        <Form.Label>Course Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group as={Col} controlId="" className="mb-3">
        <Form.Label>Course code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course code"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
          required
        />
      </Form.Group>
      <Row>
        <Form.Group as={Col} controlId="" className="mb-3">
          <Form.Label>Course Credit</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course credit"
            value={courseCredit}
            onChange={(e) => setCourseCredit(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="" className="mb-3">
          <Form.Label>Course Fee</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course fee amount"
            value={courseFee}
            onChange={(e) => setCourseFee(e.target.value)}
            required
          />
        </Form.Group>
      </Row>
      <Form.Group as={Col} controlId="" className="mb-3">
        <Form.Label>Department Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Department name"
          value={dptName}
          onChange={(e) => setDptName(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Course
      </Button>
    </Form>
  );
};

export default AddCourse;
