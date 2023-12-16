import { useLocation } from "react-router-dom";
import StaticTable from "../Components/staticTable";
import { useState } from "react";

const EditUnit = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["unit", "average"];
  // console.log("type of id", typeof id);
  const [unitAvg, setUnitAvg] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  // console.log("id: ", id);
  // console.log("unitAvg[0].id.slice('-')[0]: ", unitAvg[0].id.split("-")[0]);

  const retrieveAvg = () => {
    const temp = [];
    unitAvg.map((unit) => {
      if (unit.id.split("-")[0] === id) {
        // console.log("unit.id.slice(" - ")[0]: ", unit.id.split("-")[0]);
        temp.push({ id: unit.id.split("-")[1], average: unit.average });

        // console.log("type of temp: ", typeof temp);
      }
    });
    return temp;
  };

  // const [average, setAverage] = useState(() => {
  //   return retrieveAvg();
  // });

  // setAverage(retrieveAvg());

  console.log("unitAvg: ", unitAvg);

  return (
    <>
      <StaticTable header={header} id={id} averageArray={retrieveAvg()} />;
    </>
  );
};

export default EditUnit;

//   const units = [{ unit: "FIT5032", average: "80" }];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(units));
