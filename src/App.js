import Layout from "./Component/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Course from "./Component/Pages/Course";
import Student from "./Component/Pages/Student";
import Home from "./Component/Pages/Home";
import Details from "./Component/Details";
import Login from "./Component/Pages/Login";
import Signup from "./Component/Pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="student/" element={<Student />} />
          <Route path="signin" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="student/details/" element={<Details />} />
          <Route path="addcourse/" element={<Course />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
