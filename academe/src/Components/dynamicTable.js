import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "./deleteConfirmation";
import Icon from "../Components/icon";
// //https://app.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

const DynamicTable = ({ header, STORAGE_KEY, onUpdateItems }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  );
  // localStorage.removeItem(STORAGE_KEY);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);
  // console.log("DynamicTable items: ", items);

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
    onUpdateItems(updatedItems);
    console.log("<dt> updatedItems: ", updatedItems);
    setItems(updatedItems);
  };

  // const setInitialData = () => {
  //   return header.map((column) => ({ [column]: "" }));
  // };

  const handleAdd = () => {
    // const initialData = setInitialData();
    // setItems([...items, initialData]);
    setItems([...items, ""]);
  };

  // const pageRoutes = {
  //   editSubject: "/grade/editSubject",
  // };

  // const navigatePage = (page) => {
  //   const route = pageRoutes[page];
  //   if (route) {
  //     navigate(route);
  //   } else {
  //     console.error("Can't find your page:", page);
  //   }
  // };

  const handleEdit = (item) => {
    const semester = item.column1;
    navigate("/editSubject", { state: semester });
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
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
          {/* <button
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            onClick={() => handleEdit(item)}>
            Edit
          </button> */}
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

export default DynamicTable;
