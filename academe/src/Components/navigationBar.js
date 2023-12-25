import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

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
