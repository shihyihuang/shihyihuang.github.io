import DynamicTable from "../Components/dynamicTable";
import { useLocation } from "react-router-dom";

const EditAssignment = () => {
  const location = useLocation();
  const { id } = location.state;
  const header = ["assignment", "grade"];
  const STORAGE_KEY = id;
  //   const assignments = [{ assignment: "ass1", grade: "80" }];

  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(assignments));

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
};

export default EditAssignment;

// console.log("EditSubject type of semester: ", typeof semester);
// console.log("EditSubject semester: ", semester);
