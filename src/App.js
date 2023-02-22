import { Container } from "react-bootstrap";
import Layout from "./Component/Layout";
import AddStudent from "./Component/AddStudent";

function App() {
  return (
    <>
      <Layout />
      <Container>
        <AddStudent />
      </Container>
    </>
  );
}

export default App;
