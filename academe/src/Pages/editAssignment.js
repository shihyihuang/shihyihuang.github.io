import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DynamicTable from "../Components/dynamicTable";

const EditAssignment = () => {
  const location = useLocation();
  const { item } = location.state;
  const STORAGE_KEY = "assignments";
  const header = ["Assignment", "Grade"];

  return (
    <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} editItem={item} />
  );
};

export default EditAssignment;

// console.log("EditSubject type of semester: ", typeof semester);
// console.log("EditSubject semester: ", semester);
