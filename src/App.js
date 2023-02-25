import Layout from "./Component/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Course from "./Component/Pages/Course";
import Student from "./Component/Pages/Student";
import Home from "./Component/Pages/Home";
import Details from "./Component/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="student/" element={<Student />} />
          <Route path="student/details/" element={<Details />} />
          <Route path="addcourse/" element={<Course />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
