import { useEffect, useState } from "react";
import DeleteConfirmation from "../Components/deleteConfirmation";
import Icon from "./icon";
import { useNavigate } from "react-router-dom";

const StaticTable = ({ header, id }) => {
  const navigate = useNavigate();

  const STORAGE_KEY = id;
  console.log("<StaticTable>STORAGE_KEY: ", STORAGE_KEY);
  console.log(
    "<StaticTable> local storage of sem1: ",
    localStorage.getItem(STORAGE_KEY)
  );

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY) || [])
  );

  const saveData = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  useEffect(() => {
    saveData();
  }, [items]);

  const renderHeader = () => {
    return header.map((header, index) => (
      <th key={"item-" + index}> {header} </th>
    ));
  };

  const handleModifyColumn = (index, event, target) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [target]: event.target.value,
    };
    setItems(updatedItems);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAdd = () => {
    setItems([...items, { unit: "", average: "" }]);
  };

  const handleEdit = (event) => {
    const editId = event.target.id;
    navigate("/editAssignment", { state: { id: editId } });
  };

  const renderRows = () => {
    return items.map((item, index) => (
      <tr key={"item-" + index}>
        {header.map((header, columnIndex) => (
          <td key={`column-${columnIndex}`}>
            <input
              type="text"
              name={header}
              value={item[header] || ""}
              onChange={(event) => handleModifyColumn(index, event, header)}
              style={{ border: "none", background: "transparent" }}
            />
          </td>
        ))}
        <td>
          <button
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            onClick={(event) => handleEdit(event)}
            id={id + "-" + item.unit}>
            Edit
          </button>
          <DeleteConfirmation context={{ handleDelete }} index={index} />
        </td>
      </tr>
    ));
  };

  return (
    <div className="container">
      <br />
      <button id="#addSemesterBtn" onClick={handleAdd}>
        <Icon name="add" />
      </button>
      <table className="table table-striped table-hover">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default StaticTable;
