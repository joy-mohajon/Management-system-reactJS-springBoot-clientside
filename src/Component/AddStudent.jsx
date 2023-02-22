import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddStudent = () => {
  return (
    <Form className="mt-4">
      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" placeholder="Enter roll no" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Enrolled Semester</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Fall 2023</option>
            <option>Spring 2023</option>
            <option>Summer 2023</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter deparment name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridCity" className="mb-4">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Student
      </Button>
    </Form>
  );
};

export default AddStudent;
