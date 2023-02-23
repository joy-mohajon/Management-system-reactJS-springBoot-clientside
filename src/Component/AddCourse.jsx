import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddCourse = () => {
  const [dptName, setDptName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseCredit, setCourseCredit] = useState("");
  const [courseFee, setCourseFee] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("courseName:", courseName);
    const data = {
      c_name: courseName,
      c_code: courseCode,
      c_credit: courseCredit,
      c_fee: courseFee,
      department: dptName,
    };
    console.log("data:", data);
    axios
      .post("http://localhost:8081/api/addcourse/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
        />
      </Form.Group>
      <Form.Group as={Col} controlId="" className="mb-3">
        <Form.Label>Course code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course code"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
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
          />
        </Form.Group>
        <Form.Group as={Col} controlId="" className="mb-3">
          <Form.Label>Course Fee</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter course fee amount"
            value={courseFee}
            onChange={(e) => setCourseFee(e.target.value)}
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
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Course
      </Button>
    </Form>
  );
};

export default AddCourse;
