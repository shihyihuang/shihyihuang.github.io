import DynamicTable from "../Components/dynamicTable";
const Todolist = () => {
  const header = ["Date", "Note", "Status"];
  const STORAGE_KEY = "toDoList";

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
};

export default Todolist;
