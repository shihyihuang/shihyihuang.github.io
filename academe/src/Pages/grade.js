import DynamicTable from "../Components/dynamicTable";

const Grade = () => {
  const STORAGE_KEY = "semesters";
  const header = ["Semester", "WAM"];

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
};

export default Grade;
