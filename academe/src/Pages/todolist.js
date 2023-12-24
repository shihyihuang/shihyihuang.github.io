import Table from "../Components/table";
const Todolist = () => {
  const header = ["Status", "Date", "Note"];
  const STORAGE_KEY = "toDoList";

  // localStorage.removeItem(STORAGE_KEY);

  return (
    <Table
      header={header}
      id={STORAGE_KEY}
      hasOnUpdateItems={false}
      type={"checkbox"}
      columnToRender={["Date", "Note"]}
      columnCheckbox={"Status"}
      hasBack={false}
      hasAdd={true}
    />
  );
};

export default Todolist;
