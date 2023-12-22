import Table from "../Components/table";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const UnitGrade = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
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

  useEffect(() => {
    setAverage();
  }, [items]);

  const calculateAverage = () => {
    var sum = 0;
    items.map((item) => {
      sum += item.mark * item.percentage;
    });
    if (isNaN(sum)) return NaN;
    return sum / 100;
  };

  const setAverage = () => {
    const average = calculateAverage();
    const foundIndex = unitAvgArray.findIndex((unitObj) => unitObj.id === id);

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
      {/* <Button
        onClick={setAverage}
        style={{ float: "right", marginTop: "20px" }}
        variant="outline-secondary">
        Update Average Mark
      </Button> */}
      <Table
        header={header}
        id={id}
        hasOnUpdateItems={true}
        onUpdateItems={handleUpdateItems}
        type={"zero"}
        hasBack={true}
        hasAdd={true}
      />
    </div>
  );
};

export default UnitGrade;
