import DynamicTable from "../Components/dynamicTable";
// localStorage.removeItem("subjects");
// localStorage.removeItem("assignments");
const Grade = () => {
  const STORAGE_KEY = "semesters";
  const header = ["semester", "wam"];

  console.log("localStorage subjects", localStorage.getItem("subjects"));
  console.log("localStorage semesters", localStorage.getItem("semesters"));
  console.log("localStorage assignment", localStorage.getItem("assignments"));

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
};

export default Grade;

// console.log(
//     "semesters localStorage",
//     JSON.parse(localStorage.getItem(STORAGE_KEY))
//   );
