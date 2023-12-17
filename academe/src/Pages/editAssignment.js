import StaticTable from "../Components/staticTable";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Icon from "../Components/icon";

const EditAssignment = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["assignment", "percentage", "grade"];

  const [items, setItems] = useState(() => {
    const initialData = [{ assignment: "", percentage: "", grade: "" }];
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

  const [averageList, setAverageList] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  useEffect(() => {
    localStorage.setItem("unitAvg", JSON.stringify(averageList));
  }, [averageList]);

  const calculateAverage = () => {
    var sum = 0;
    items.map((item) => {
      sum += item.grade * item.percentage;
    });
    if (isNaN(sum)) return 0;
    return sum / 100;
  };

  const setAverage = () => {
    const average = calculateAverage();
    const foundIndex = averageList.findIndex((item) => item.id === id);

    if (foundIndex === -1) {
      setAverageList((prevList) => [...prevList, { id: id, average: average }]);
    } else {
      setAverageList((prevList) => {
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
      <button
        onClick={setAverage}
        style={{ float: "right", marginTop: "20px" }}>
        <Icon name="update" />
      </button>
      <StaticTable
        header={header}
        id={id}
        onUpdateItems={handleUpdateItems}
        type={"two"}
      />
    </div>
  );
};

export default EditAssignment;
