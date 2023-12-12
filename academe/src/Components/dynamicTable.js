import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteConfirmation from "./deleteConfirmation";
import Icon from "../Components/icon";
// //https://app.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

const DynamicTable = ({ header, STORAGE_KEY }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ||
      [
        // {
        //   column1: "",
        //   column2: "",
        // },
      ]
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
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

  const handleAdd = () => {
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
    console.log("handleEdit item: ", item);
    const semester = item.column1;
    console.log("handleEdit semester: ", semester);
    console.log("handleEdit type of semester: ", typeof semester);
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
        <td>
          <input
            type="text"
            name="column1"
            value={item.column1 || ""}
            onChange={(event) => handleModifyColumn(index, event, "column1")}
            style={{ border: "none", background: "transparent" }}
          />
        </td>
        <td>
          <input
            type="text"
            name="column2"
            value={item.column2 || ""}
            onChange={(event) => handleModifyColumn(index, event, "column2")}
            style={{ border: "none", background: "transparent" }}
          />
        </td>
        <td>
          <button
            className="btn btn-outline-primary"
            style={{ marginRight: "10px" }}
            onClick={() => handleEdit(item)}>
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

export default DynamicTable;

// <td>
//     <button
//     className="btn btn-outline-primary"
//     style={{marginRight:'10px'}}
//     onClick={() => handleEdit("editSemester")}
//     >
//     Edit
//     </button>
// </td>

//     // const navigate = useNavigate();

// const handleEdit = (items, index) => {
//     navigatePage("editSemester");
// };

//     // const headers = ['Subject', 'Average'];

//     // const semesterValues = {
//     //     sem1: [
//     //         {
//     //             subject: '1',
//     //             average: '100'
//     //         },
//     //         {
//     //             subject: '2',
//     //             average: '90'
//     //         }
//     //     ],
//     //     sem2: [
//     //         {
//     //             subject: '3',
//     //             average: '100'
//     //         },
//     //         {
//     //             subject: '4',
//     //             average: '90'
//     //         }
//     //     ]
//     // }

//     // const values = [
//     //     {
//     //         subject: '1',
//     //         average: '100'
//     //     },
//     //     {
//     //         subject: '2',
//     //         average: '90'
//     //     }
//     // ]
//     // <DynamicTable headers={headers} values={values} />

//     // <DynamicTable headers={headers} values={semesterValues.sem1} />

//     // const headers = ['Semester', 'WAM', 'AnotherField'];
//     // const values = [
//     //     {
//     //         semester: '1',
//     //         wam: '100',
//     //         anotherField: 'aa'
//     //     },
//     //     {
//     //         semester: '1',
//     //         wam: '100',
//     //         anotherField: 'aa'
//     //     }
//     // ]
//     // <DynamicTable headers={headers} values={values} />
