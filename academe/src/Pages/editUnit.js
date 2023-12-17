import { useLocation, useNavigate } from "react-router-dom";
import StaticTable from "../Components/staticTable";
import { useState } from "react";
import Icon from "../Components/icon";

const EditUnit = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["unit", "average"];

  const [unitAvg, setUnitAvg] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  // console.log("unitAvg: ", unitAvg);

  const retrieveAvg = () => {
    const temp = [];
    unitAvg.map((unit) => {
      if (unit.id.split("-")[0] === id) {
        temp.push({ id: unit.id.split("-")[1], average: unit.average });
      }
    });
    return temp;
  };

  return (
    <div className="container">
      <h5 style={{ marginTop: "20px", marginLeft: "20px" }}>
        {" "}
        GARDE / {id.toUpperCase()}
      </h5>
      <StaticTable
        header={header}
        id={id}
        averageArray={retrieveAvg()}
        type={"one"}
        columnToRender={"unit"}
      />
    </div>
  );
};

export default EditUnit;

//   const units = [{ unit: "FIT5032", average: "80" }];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(units));
