import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import { useNavigate } from "react-router-dom";
import StaticTable from "../Components/staticTable";

const Grade = () => {
  const navigate = useNavigate();
  const header = ["semester", "unit", "wam"];

  const handleClick = (event) => {
    const id = event.target.id;
    navigate("/editUnit", { state: { id: id } });
  };

  const [wamArray, setWamArray] = useState(
    JSON.parse(localStorage.getItem("wam")) || []
  );

  const calculateOverallWam = () => {
    var weightedMarkSum = 0;
    var weightedCreditSum = 0;
    wamArray.map((wamObj) => {
      weightedMarkSum += wamObj.weightedMark;
      weightedCreditSum += wamObj.weightedCredit;
    });
    return (
      Math.round(
        (weightedMarkSum / weightedCreditSum + Number.EPSILON) * 1000
      ) / 1000
    );
  };

  const retrieveDisplayedArray = () => {
    const processedArray = [];
    wamArray.map((wamObj) => {
      const semesterNum = wamObj.semester.substr(-1, 1);
      processedArray.push({
        semester: semesterNum,
        unit: wamObj.unit.join(", "),
        wam: wamObj.wam,
      });
    });
    const sortedArray = processedArray.sort((a, b) =>
      a.semester > b.semester ? 1 : a.semester < b.semester ? -1 : 0
    );
    return sortedArray;
  };

  return (
    <div className="container">
      <h3 style={{ float: "right", margin: "20px" }}>
        {" "}
        WAM: {calculateOverallWam()}{" "}
      </h3>
      <ButtonGroup
        aria-label="Basic example"
        style={{ marginTop: "20px", marginLeft: "20px" }}>
        {[1, 2, 3, 4].map((semester) => (
          <Button
            key={semester}
            variant="secondary"
            id={`sem${semester}`}
            onClick={handleClick}>
            Semester {semester}
          </Button>
        ))}
      </ButtonGroup>
      <StaticTable
        className="centerDiv"
        header={header}
        array={retrieveDisplayedArray()}
        // onUpdateItems={handleUpdateItems}
        type={"all"}
        hasBack={false}
        hasAdd={false}
      />
    </div>
  );
};

export default Grade;
