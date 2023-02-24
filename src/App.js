import Layout from "./Component/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Course from "./Component/Pages/Course";
import MultiSelectDropdown from "./Component/MultiSelectDropdown";
import Student from "./Component/Pages/Student";
import Home from "./Component/Pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addstudent/" element={<Student />} />
          <Route path="addcourse/" element={<Course />} />
          <Route path="ShowDetails/" element={<MultiSelectDropdown />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
