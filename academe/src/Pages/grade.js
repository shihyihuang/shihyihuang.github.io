import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";
import { useNavigate } from "react-router-dom";

const Grade = () => {
  const navigate = useNavigate();
  const header = ["semester", "unit", "mark"];

  console.log(
    "<grade> unitAvg's local: ",
    JSON.parse(localStorage.getItem("unitAvg"))
  );

  const handleClick = (event) => {
    const id = event.target.id;
    navigate("/editUnit", { state: { id: id } });
  };

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  const retrieveOverallData = () => {
    const temp = {};
    items.forEach((item) => {
      const semester = item.id.split("-")[0];
      const unit = item.id.split("-")[1];

      if (!temp[semester]) {
        temp[semester] = { units: [], markSum: 0 };
      }
      temp[semester].units.push(unit);
      temp[semester].markSum += item.average;
    });

    return Object.keys(temp).map((semester) => ({
      semester: semester,
      unit: temp[semester].units.join(", "),
      mark:
        Math.round(
          (temp[semester].markSum / temp[semester].units.length) * 100
        ) / 100,
    }));
  };

  console.log("data: ", JSON.stringify(retrieveOverallData()));

  const renderHeader = () => {
    return header.map((column, index) => <th key={index}> {column} </th>);
  };

  const renderRows = () => {
    const data = retrieveOverallData();
    return data.map((item, dataIndex) => (
      <tr key={`row-${dataIndex}`}>
        {header.map((header, headerIndex) => (
          <td
            key={`column-${headerIndex}`}
            name={header}
            value={item[header] || ""}>
            {item[header] || "" || []}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="container">
      <ButtonGroup aria-label="Basic example" style={{ margin: "50px" }}>
        {[1, 2, 3, 4].map((semester) => (
          <Button
            key={semester}
            variant="secondary"
            id={`sem${semester}`}
            onClick={handleClick}>
            Semester {semester}
          </Button>
        ))}
        {/* <Button variant="secondary" id="sem1" onClick={handleClick}>
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
        </Button> */}
      </ButtonGroup>
      <table className="table table-striped table-hover">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default Grade;

// const data = [];

// const retrieveOverallData = () => {
//   const sem1Unit = [];
//   const sem2Unit = [];
//   const sem3Unit = [];
//   const sem4Unit = [];
//   var sem1GradeSum = 0;
//   var sem2GradeSum = 0;
//   var sem3GradeSum = 0;
//   var sem4GradeSum = 0;
//   items.map((item) => {
//     const semester = item.id.split("-")[0];
//     const unit = item.id.split("-")[1];
//     switch (semester) {
//       case "sem1":
//         sem1Unit.push(unit);
//         sem1GradeSum += item.average;
//         break;
//       case "sem2":
//         sem2Unit.push(unit);
//         sem2GradeSum += item.average;
//         break;
//       case "sem3":
//         sem3Unit.push(unit);
//         sem3GradeSum += item.average;
//         break;
//       case "sem4":
//         sem4Unit.push(unit);
//         sem4GradeSum += item.average;
//         break;
//       default:
//         return [];
//     }
//   });
//   data.push({
//     semester: "1",
//     unit: sem1Unit.toString(),
//     average: Math.round((sem1GradeSum / sem1Unit.length) * 100) / 100,
//   });
//   data.push({
//     semester: "2",
//     unit: sem2Unit.toString(),
//     average: Math.round((sem2GradeSum / sem2Unit.length) * 100) / 100,
//   });
//   data.push({
//     semester: "3",
//     unit: sem3Unit.toString(),
//     average: Math.round((sem3GradeSum / sem3Unit.length) * 100) / 100,
//   });
//   data.push({
//     semester: "4",
//     unit: sem4Unit.toString(),
//     average: Math.round((sem4GradeSum / sem4Unit.length) * 100) / 100,
//   });
//   return data;
// };
