import DynamicTable from "../Components/dynamicTable";
const Todolist = () => {
  const header = ["Date", "Note", "Status"];
  const STORAGE_KEY = "toDoList";
  console.log("local storage todo: ", localStorage.getItem(STORAGE_KEY));

  return <DynamicTable header={header} STORAGE_KEY={STORAGE_KEY} />;
};

export default Todolist;
