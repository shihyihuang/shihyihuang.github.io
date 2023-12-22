import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import Table from "../Components/table";

import useNavigateWithId from "../Hooks/useNavigateWithId";
//https://ultimatecourses.com/blog/navigate-to-url-query-strings-search-params-react-router
//https://ultimatecourses.com/blog/query-strings-search-params-react-router

const Grade = () => {
  const navigateWithId = useNavigateWithId();
  const header = ["semester", "unit", "wam"];

  const handleClick = (event) => {
    const id = event.target.id;
    navigateWithId("/semesterGrade", { id: id });
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
        wam: wamObj.wam === 0 ? "0" : wamObj.wam,
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
      <DropdownButton
        id="dropdown-basic-button"
        title="Edit / Detail "
        drop="end"
        variant="secondary"
        aria-label="Basic example"
        style={{ marginTop: "20px", marginLeft: "20px" }}>
        {[1, 2, 3, 4].map((semester) => (
          <Dropdown.Item
            key={semester}
            // variant="secondary"
            id={`sem${semester}`}
            onClick={handleClick}>
            Semester {semester}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <Table
        className="centerDiv"
        header={header}
        hasOnUpdateItems={false}
        array={retrieveDisplayedArray()}
        type={"all"}
        hasBack={false}
        hasAdd={false}
      />
    </div>
  );
};

export default Grade;
