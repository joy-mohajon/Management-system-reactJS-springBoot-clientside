import { Container } from "react-bootstrap";
import Layout from "./Component/Layout";
import AddStudent from "./Component/AddStudent";
import AddCourse from "./Component/AddCourse";

function App() {
  return (
    <>
      <Layout />
      <Container>
        <AddStudent />
        {/* <AddCourse />s */}
      </Container>
    </>
  );
}

export default App;
