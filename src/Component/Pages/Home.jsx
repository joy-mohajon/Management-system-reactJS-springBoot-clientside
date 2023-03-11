import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="d-flex align-item-center justify-content-center mt-5 flex-column">
      <h1 className="text-center">Welcome our website😃!</h1>
      <h3 className="text-center">
        The Student Information management system helps🥰 to store information
        of students👨‍🎓 and it also helps to manage the information of students💁.
      </h3>
      <div className="mt-5 d-flex align-items-center justify-content-between w-50 m-auto">
        <Button href="/student/" className="p-3">
          Add Student 👨‍🎓
        </Button>
        or
        <Button href="/addcourse/" className="p-3">
          Add Course 📚
        </Button>
      </div>
    </div>
  );
};

export default Home;
