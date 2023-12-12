import { useState } from "react";
import { useLocation } from "react-router-dom";
import DynamicTable from "../Components/dynamicTable";

const EditSubject = () => {
  const location = useLocation();
  const semester = location.state;
  const STORAGE_KEY = "subjects";
  const header = ["Subjects", "Average"];
  console.log("EditSubject semester: ", semester);

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
  //   const [items, setItems] = useState(
  //     JSON.parse(localStorage.getItem("items")) || []
  //   );
  //   useEffect(() => {
  //     localStorage.setItem("items", JSON.stringify(items));
  //   }, [items]);
  //   return (
  //     <>
  //       <DynamicTable column1={"Subject"} column2={"Average"} />
  //     </>
  //   );
};

export default EditSubject;
