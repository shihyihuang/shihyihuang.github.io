import { useEffect, useState } from "react";
import DeleteConfirmation from "../Components/deleteConfirmation";
import Icon from "./icon";
import { useNavigate } from "react-router-dom";
import useNavigateWithId from "../Hooks/useNavigateWithId";

const StaticTable = ({
  header,
  id,
  array,
  onUpdateItems,
  type,
  columnToRender,
  hasBack,
  hasAdd,
}) => {
  const navigate = useNavigate();
  const navigateWithId = useNavigateWithId();

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

  const [unitAvgArray, setUnitAvgArray] = useState(
    JSON.parse(localStorage.getItem("unitAvg")) || []
  );

  useEffect(() => {
    localStorage.setItem("unitAvg", JSON.stringify(unitAvgArray));
  }, [unitAvgArray]);

  const handleModifyColumn = (index, event, target) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [target]: event.target.value,
    };
    onUpdateItems(updatedItems);
    setItems(updatedItems);
  };

  const remove = (array, key, value) => {
    const index = array.findIndex((obj) => obj[key] === value);
    return array.splice(index, 1);
  };

  const handleDelete = (index, id) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    onUpdateItems(updatedItems);
    setItems(updatedItems);

    const updataedUnitAvg = [...unitAvgArray];
    remove(updataedUnitAvg, "id", id);
    setUnitAvgArray(updataedUnitAvg);
  };

  const handleAdd = () => {
    setItems([...items, ""]);
  };

  const handleEdit = (event) => {
    const editId = event.target.id;
    navigateWithId("/editAssignment", { id: editId });
    // navigate("/editAssignment", { state: { id: editId } });
  };

  const retrieveAverageOfUnit = (unit) => {
    const averageData = array.find((arrayItem) => arrayItem.id === unit);
    return averageData ? averageData.average : 0;
  };

  const allAutoRenderColumns = () => {
    return array.map((item, dataIndex) => (
      <tr key={`row-${dataIndex}`}>
        {header.map((header, headerIndex) => (
          <td
            key={`column-${headerIndex}`}
            name={header}
            value={item[header] || ""}>
            {item[header] || "" || []}
          </td>
        ))}
      </tr>
    ));
  };

  const allEditableColumns = () => {
    return items.map((item, index) => (
      <tr key={"row-" + index}>
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

  const autoRenderOneColumn = (columnToRender) => {
    return items.map((item, index) => (
      <tr key={"row-" + index}>
        {columnToRender.map((column, columnIndex) => (
          <td key={"column-" + columnIndex}>
            <input
              type="text"
              name={column}
              value={item[column] || ""}
              onChange={(event) => handleModifyColumn(index, event, column)}
              style={{ border: "none", background: "transparent" }}
            />
          </td>
        ))}
        <td> {retrieveAverageOfUnit(item.unit)}</td>
        <td>
          <button
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            onClick={(event) => handleEdit(event)}
            id={id + "-" + item.unit}>
            Edit
          </button>
          <DeleteConfirmation
            context={{ handleDelete }}
            index={index}
            id={id + "-" + item.unit}
          />
        </td>
      </tr>
    ));
  };

  const renderRows = (type) => {
    switch (type) {
      case "zero":
        return allEditableColumns();
      case "one":
        return autoRenderOneColumn(columnToRender);
      case "all":
        return allAutoRenderColumns();
      default:
        return allEditableColumns();
    }
  };

  const hasBackBtn = () => {
    if (hasBack) {
      return (
        <button onClick={() => navigate(-1)}>
          <Icon name="back" />
        </button>
      );
    }
  };

  const hasAddBtn = () => {
    if (hasAdd) {
      return (
        <button onClick={handleAdd}>
          <Icon name="add" />
        </button>
      );
    }
  };

  return (
    <div className="container">
      <br />
      {hasBackBtn()}
      {hasAddBtn()}
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
