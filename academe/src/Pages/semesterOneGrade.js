import { useLocation } from "react-router-dom";
import StaticTable from "../Components/staticTable";
import { useState } from "react";

const SemesterOneGrade = () => {
  const location = useLocation();
  const { id } = location.state;
  const STORAGE_KEY = id;
  const header = ["unit", "average"];
  //   const units = [{ unit: "FIT5032", average: "80" }];
  //   const [ items, setItems] = useState(
  //     JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  //   );
  //   console.log("local storage of sem1: ", localStorage.getItem(STORAGE_KEY));

  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(units));

  return <StaticTable header={header} id={id} />;
};

export default SemesterOneGrade;
