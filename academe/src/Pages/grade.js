import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useNavigate } from "react-router-dom";

// localStorage.removeItem("unitAvg");
const Grade = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    const id = event.target.id;
    navigate("/editUnit", { state: { id: id } });
  };

  return (
    <>
      <ButtonGroup aria-label="Basic example" style={{ margin: "50px" }}>
        <Button variant="secondary" id="sem1" onClick={handleClick}>
          Semester1
        </Button>
        <Button variant="secondary" id="sem2" onClick={handleClick}>
          Semester2
        </Button>
        <Button variant="secondary" id="sem3" onClick={handleClick}>
          Semester3
        </Button>
        <Button variant="secondary" id="sem4" onClick={handleClick}>
          Semester4
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Grade;

// localStorage.removeItem("subjects");
// localStorage.removeItem("assignments");
// localStorage.removeItem("semesters");
//   console.log("localStorage subjects", localStorage.getItem("subjects"));
//   console.log("localStorage semesters", localStorage.getItem("semesters"));
//   console.log("localStorage assignment", localStorage.getItem("assignments"));
