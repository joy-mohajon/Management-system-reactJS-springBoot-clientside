import React from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Form className="mt-5">
      <h3>Sign In</h3>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Group className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-Form.Control"
            id="customCheck1"
          />
          <Form.Label
            className="custom-control-Form.Label"
            htmlFor="customCheck1"
          >
            Remember me
          </Form.Label>
        </Form.Group>
      </Form.Group>
      <Form.Group className="d-grid">
        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form.Group>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </Form>
  );
};

export default Login;
