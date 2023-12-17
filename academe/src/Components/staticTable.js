import { useEffect, useState } from "react";
import DeleteConfirmation from "../Components/deleteConfirmation";
import Icon from "./icon";
import { useNavigate } from "react-router-dom";

const StaticTable = ({
  header,
  id,
  averageArray,
  onUpdateItems,
  type,
  columnToRender,
}) => {
  const navigate = useNavigate();

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(id)) || []
  );

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(items));
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
    if (id.includes("-")) {
      onUpdateItems(updatedItems);
    }
    setItems(updatedItems);
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAdd = () => {
    setItems([...items, ""]);
  };

  const handleEdit = (event) => {
    const editId = event.target.id;
    navigate("/editAssignment", { state: { id: editId } });
  };

  const retrieveAverageOfUnit = (unit) => {
    const averageData = averageArray.find((arrayItem) => arrayItem.id === unit);
    return averageData ? averageData.average : "NaN";
  };

  const editableColumns = () => {
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
          <DeleteConfirmation context={{ handleDelete }} index={index} />
        </td>
      </tr>
    ));
  };

  const autoRenderSecondColumn = (columnToRender) => {
    return items.map((item, index) => (
      <tr key={"item-" + index}>
        <td>
          <input
            type="text"
            name={columnToRender}
            value={item[columnToRender] || ""}
            onChange={(event) =>
              handleModifyColumn(index, event, columnToRender)
            }
            style={{ border: "none", background: "transparent" }}
          />
        </td>
        <td> {retrieveAverageOfUnit(item.unit)}</td>
        <td>
          <button
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            onClick={(event) => handleEdit(event)}
            id={id + "-" + item[columnToRender]}>
            Edit
          </button>
          <DeleteConfirmation context={{ handleDelete }} index={index} />
        </td>
      </tr>
    ));
  };

  const renderRows = (type) => {
    switch (type) {
      case "one":
        return autoRenderSecondColumn(columnToRender);
      case "two":
        return editableColumns();
      default:
        return editableColumns();
    }
  };

  return (
    <div className="container">
      <br />
      <button onClick={() => navigate(-1)}>
        <Icon name="back" />
      </button>
      <button onClick={handleAdd}>
        <Icon name="add" />
      </button>
      <table className="table table-striped table-hover">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderRows(type)}</tbody>
      </table>
    </div>
  );
};

export default StaticTable;
