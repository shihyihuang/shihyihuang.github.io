import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="AcadeMe logo"
          />{" "}
          AcadeMe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#/">Home</Nav.Link>
            <Nav.Link href="/#/todolist">To-Do List</Nav.Link>
            <Nav.Link href="/#/grade">Grade</Nav.Link>
            <Nav.Link href="/#/coffeeMel">Coffee</Nav.Link>
            {/* <Nav.Link href="/#/profile">Profile</Nav.Link>
            <Nav.Link href="/#/calendar">Calendar</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
