import StaticTable from "../Components/staticTable";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Icon from "../Components/icon";
import EditUnit from "./editUnit";

const EditAssignment = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["assignment", "percentage", "mark"];

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(id)) || []
  );

  const handleUpdateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  const [unitAvgArray, setUnitAvgArray] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  useEffect(() => {
    localStorage.setItem("unitAvg", JSON.stringify(unitAvgArray));
  }, [unitAvgArray]);

  // useEffect(() => {
  //   setAverage();
  // }, [items]);

  const calculateAverage = () => {
    var sum = 0;
    items.map((item) => {
      sum += item.mark * item.percentage;
    });
    if (isNaN(sum)) return 0;
    return sum / 100;
  };

  const setAverage = () => {
    const average = calculateAverage();
    const foundIndex = unitAvgArray.findIndex((unitObj) => unitObj.id === id);

    if (foundIndex === -1) {
      console.log("setAverage -1 id", id);
      setUnitAvgArray((prevList) => [
        ...prevList,
        { id: id, average: average },
      ]);
    } else {
      setUnitAvgArray((prevList) => {
        console.log("setAverage else id", id);
        const updatedList = [...prevList];
        updatedList[foundIndex] = { id: id, average: average };
        return updatedList;
      });
    }
  };

  console.log("<editAss> unitAvgArray: ", unitAvgArray);
  console.log("<editAss>", id, "'s local: ", localStorage.getItem(id));

  return (
    <div className="container">
      <h5 style={{ marginTop: "20px", marginLeft: "20px" }}>
        {" "}
        GARDE / {id.split("-")[0].toUpperCase()} /{" "}
        {id.split("-")[1].toUpperCase()}{" "}
      </h5>
      <h3 style={{ float: "right", margin: "20px" }}>
        {" "}
        Average: {calculateAverage()}{" "}
      </h3>
      <Button
        onClick={setAverage}
        style={{ float: "right", marginTop: "20px" }}
        variant="outline-secondary">
        Update Average Mark
      </Button>
      <StaticTable
        header={header}
        id={id}
        onUpdateItems={handleUpdateItems}
        type={"zero"}
        hasBack={true}
        hasAdd={true}
      />
    </div>
  );
};

export default EditAssignment;
