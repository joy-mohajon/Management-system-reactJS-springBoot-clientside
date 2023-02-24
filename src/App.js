import Layout from "./Component/Layout";
import AddStudent from "./Component/AddStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Course from "./Component/Pages/Course";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addstudent/" element={<AddStudent />} />
          <Route path="addcourse/" element={<Course />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
