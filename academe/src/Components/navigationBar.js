import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationBar = () => {
  const navigate = useNavigate();
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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/coffeeMel">Coffee</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/todolist">To-Do List</Nav.Link>
            <Nav.Link href="/overallGrade">Grade</Nav.Link>
            {/* <NavDropdown title="Grade" id="basic-nav-dropdown">
              <NavDropdown.Item href="/overallGrade">Overall</NavDropdown.Item>
              <NavDropdown.Item href="/semesterOneGrade" id="sem1">
                Semester1
              </NavDropdown.Item>
              <NavDropdown.Item href="/semester2">Semester2</NavDropdown.Item>
              <NavDropdown.Item href="/semester3">Semester3</NavDropdown.Item>
              <NavDropdown.Item href="/semester4">Semester4</NavDropdown.Item>
              {/* <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

// <nav className="topnav">
//   <ul>
//     <button onClick={() => navigate("/")}>
//       {" "}
//       <img src="./logo.png" alt="logo" />{" "}
//     </button>
//     <li>
//       <NavLink
//         className={({ isActive }) => (isActive ? "active" : "inactive")}
//         to="/">
//         Home
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         className={({ isActive }) => (isActive ? "active" : "inactive")}
//         to="/coffeeMel">
//         Coffee
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         className={({ isActive }) => (isActive ? "active" : "inactive")}
//         to="/profile">
//         Profile
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         className={({ isActive }) => (isActive ? "active" : "inactive")}
//         to="/calendar">
//         Calendar
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         className={({ isActive }) => (isActive ? "active" : "inactive")}
//         to="/todolist">
//         To-Do List
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         className={({ isActive }) => (isActive ? "active" : "inactive")}
//         to="/grade">
//         Grade
//       </NavLink>
//     </li>
//   </ul>
// </nav>
