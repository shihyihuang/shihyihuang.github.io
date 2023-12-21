import Table from "../Components/table";
const Todolist = () => {
  const header = ["Date", "Note", "Status"];
  const STORAGE_KEY = "toDoList";

  return (
    <Table
      header={header}
      id={STORAGE_KEY}
      hasOnUpdateItems={false}
      type={"zero"}
      hasBack={false}
      hasAdd={true}
    />
  );
};

export default Todolist;
