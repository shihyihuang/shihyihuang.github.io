import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DynamicTable from "../Components/dynamicTable";

const EditSubject = () => {
  const location = useLocation();
  const { item } = location.state;
  const STORAGE_KEY = "subjects";
  const header = ["subject", "average"];

  return (
    <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} editItem={item} />
  );
};

export default EditSubject;

// console.log("EditSubject type of semester: ", typeof semester);
// console.log("EditSubject semester: ", semester);

// const subjectData = JSON.parse(localStorage.getItem(STORAGE_KEY)); //obj
// console.log("type of subjectData", typeof subjectData);
// const addSemester = () => {
//   if (subjectData == null || !subjectData.hasOwnProperty(semester)) {
//     localStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify(semester:[{column1: "", column2: ""},])
//     );
//   }
// };

// useEffect(() => {
//   addSemester();
// }, []);

// const storedSubjectData = {
//   [semester]: [
//     {
//       subject: "",
//       average: "",
//     },
//   ],
// };

// useEffect(() => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(storedSubjectData));
// }, []);
