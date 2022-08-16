import "./App.css";
import { Container, Row, Col, Navbar, Card, Button } from "react-bootstrap";
import { FcAssistant } from "react-icons/fc";
import DataForm from "./DataForm.js";
import CardPost from "./CardPost";
function App() {

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">
              <FcAssistant size={30} /> Let them know
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Container fluid>
          <Row className="justify-content-md-center mt-4">
            <Col xs lg="7">
              <DataForm />
            </Col>
          </Row>
          <Row className="mx-3 mt-4">
            <CardPost />
          </Row>
        </Container>
      </>
    )
}

export default App;
