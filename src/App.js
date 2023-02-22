import Layout from "./Component/Layout";
import AddStudent from "./Component/AddStudent";
import AddCourse from "./Component/AddCourse";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="addcourse" element={<AddCourse />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
