import StaticTable from "../Components/staticTable";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Icon from "../Components/icon";

const EditAssignment = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["assignment", "percentage", "mark"];

  console.log(
    "<editAssignment>",
    id,
    "'s local: ",
    JSON.parse(localStorage.getItem(id))
  );

  const [items, setItems] = useState(() => {
    const initialData = [{ assignment: "", percentage: "", mark: "" }];
    const localStorageData = JSON.parse(localStorage.getItem(id));
    if (localStorageData === null) {
      localStorage.setItem(id, JSON.stringify(initialData));
      return initialData;
    }
    return localStorageData;
  });

  const handleUpdateItems = (updatedItems) => {
    setItems(updatedItems);
  };

  const [unitAvgArray, setUnitAvgArray] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  useEffect(() => {
    localStorage.setItem("unitAvg", JSON.stringify(unitAvgArray));
  }, [unitAvgArray]);

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
    const foundIndex = unitAvgArray.findIndex((item) => item.id === id);

    if (foundIndex === -1) {
      setUnitAvgArray((prevList) => [
        ...prevList,
        { id: id, average: average },
      ]);
    } else {
      setUnitAvgArray((prevList) => {
        const updatedList = [...prevList];
        updatedList[foundIndex] = { id: id, average: average };
        return updatedList;
      });
    }
  };

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
        Save
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
