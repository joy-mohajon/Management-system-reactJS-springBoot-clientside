import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword]=useState('');

    const submitHandler = (e)=>{
        e.preventDefault();


    }

  return (
    <Form className='mt-5' onSubmit={submitHandler}>
      <h3>Sign Up</h3>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          placeholder="First name"
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="d-grid">
        <Button type="submit" className="btn btn-primary">
          Sign Up
        </Button>
      </Form.Group>
      <p className="forgot-password text-right">
        Already registered <a href="/signin">sign in?</a>
      </p>
    </Form>
  );
}

export default Signup