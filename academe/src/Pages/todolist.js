import Table from "../Components/table";
const Todolist = () => {
  const header = ["Status", "Date", "Note"];
  const STORAGE_KEY = "toDoList";

  // localStorage.removeItem(STORAGE_KEY);
  console.log("localStorage todo:", localStorage.getItem("toDoList"));

  return (
    <Table
      header={header}
      id={STORAGE_KEY}
      hasOnUpdateItems={false}
      type={"checkbox"}
      columnToRender={["Note"]}
      columnCheckbox={"Status"}
      hasBack={false}
      hasAdd={true}
    />
  );
};

export default Todolist;
