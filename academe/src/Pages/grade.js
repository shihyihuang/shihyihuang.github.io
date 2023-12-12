import DynamicTable from "../Components/dynamicTable";
import DeleteConfirmation from "../Components/deleteConfirmation";
import Icon from "../Components/icon";
import { useState, useEffect } from "react";

const Grade = () => {
  const STORAGE_KEY = "semesters";

  //   const [semesterData, setSemesterData] = useState(
  //     JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
  //       {
  //         column1: "",
  //         column2: "",
  //       },
  //     ]
  //   );

  //   useEffect(() => {
  //     const storedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  //     setSemesterData(storedData);
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(semesterData));
  //   }, [semesterData]);

  const header = ["Semester", "WAM"];

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
};

export default Grade;
