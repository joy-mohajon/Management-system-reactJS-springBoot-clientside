import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const AddCourse = () => {
  const [dptName, setDptName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseCredit, setCourseCredit] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(courseName);
  };

  return (
    <Form className="mt-4" onSubmit={submitHandler}>
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Department Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Department name"
          value={dptName}
          onChange={(e) => setDptName(e.target.value)}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Course Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course name"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Course code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course code"
          value={courseCode}
          onChange={(e) => setCourseCode(e.target.value)}
        />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Course Credit</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter course credit"
          value={courseCredit}
          onChange={(e) => setCourseCredit(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Course
      </Button>
    </Form>
  );
};

export default AddCourse;
