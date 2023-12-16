import { useEffect, useState } from "react";
import DeleteConfirmation from "../Components/deleteConfirmation";
import Icon from "./icon";
import { useNavigate } from "react-router-dom";

const StaticTable = ({ header, id, averageArray }) => {
  const navigate = useNavigate();
  console.log("StaticTable averageArray: ", averageArray);
  const STORAGE_KEY = id;
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
    setItems([...items, ""]);
  };

  const handleEdit = (event) => {
    const editId = event.target.id;
    navigate("/editAssignment", { state: { id: editId } });
  };

  const retrieveAverageOfUnit = (unit) => {
    const averageData = averageArray.find((arrayItem) => arrayItem.id === unit);
    return averageData ? averageData.average : "NaN";
    //   <td>
    //     {averageData ? <span> {averageData.average} </span> : <span> no average found</span>}
    //   </td>
  };

  //   {/* // return averageArray.map((average, index) => (
  // //   <tr key={index}>
  // //     <td>{average.average}</td>
  // //   </tr>
  // // )); */}

  const renderRows = () => {
    return items.map((item, index) => (
      <tr key={"item-" + index}>
        <td>
          <input
            type="text"
            name="unit"
            value={item.unit || ""}
            onChange={(event) => handleModifyColumn(index, event, "unit")}
            style={{ border: "none", background: "transparent" }}
          />
        </td>
        <td> {retrieveAverageOfUnit(item.unit)}</td>
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

//   const renderRows = () => {
//     return items.map((item, index) => (
//       <tr key={"item-" + index}>
//         <td>
//           <input
//             type="text"
//             name="unit"
//             value={item.unit || ""}
//             onChange={(event) => handleModifyColumn(index, event, "unit")}
//             style={{ border: "none", background: "transparent" }}
//           />
//         </td>
//         {averageArray.map((average, index) => (
//           <td key={index}>{average}</td>
//         ))}
//         <td>
//           <button
//             className="btn btn-outline-primary"
//             style={{ marginRight: "10px" }}
//             onClick={(event) => handleEdit(event)}
//             id={id + "-" + item.unit}>
//             Edit
//           </button>
//           <DeleteConfirmation context={{ handleDelete }} index={index} />
//         </td>
//       </tr>
//     ));
//   };
