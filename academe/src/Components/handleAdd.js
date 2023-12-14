import { useState, useEffect } from "react";
import Icon from "../Components/icon";

const HandleAdd = ({ STORAGE_KEY, semesterIndex, subjectIndex }) => {
  //   console.log("HandleAdd");
  //   const addedType = toString(STORAGE_KEY);
  console.log("semesterIndex: ", semesterIndex);
  console.log("subjectIndex: ", subjectIndex);
  //   console.log("type of STORAGE_KEY: ", typeof STORAGE_KEY);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  useEffect(() => {
    handleSave();
  }, [items]);

  const add = () => {
    if (STORAGE_KEY === "semesters") addSemester();
    if (STORAGE_KEY === "subjects") addSubject();
    if (STORAGE_KEY === "assignments") addAssignment();
    console.log("add");
  };

  const addSemester = () => {
    setItems((items) => [
      ...items,
      {
        semester: "",
        wam: "",
        subjects: [],
      },
    ]);
    console.log("addSemester");
  };

  const addSubject = () => {
    console.log("in addSubject");
    setItems((items) => {
      const newSemester = [...items];

      if (!newSemester[semesterIndex].subjects) {
        newSemester[semesterIndex].subjects = [];
      }

      newSemester[semesterIndex].subject.push({
        subject: "",
        average: "",
        assignments: [],
      });
      return newSemester;
    });
    console.log("end addSubject");
  };

  const addAssignment = () => {
    console.log("in addAssignment");
    setItems((items) => {
      const newSubject = [...items];
      newSubject[semesterIndex].subjects[subjectIndex].assignments.push({
        assignment: "",
        grade: "",
      });
      return newSubject;
    });
    console.log("end addAssignment");
  };

  return (
    <>
      <button id="#addSemesterBtn" onClick={add}>
        <Icon name="add" />
      </button>
    </>
  );
};

export default HandleAdd;
