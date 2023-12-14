import { useLocation } from "react-router-dom";

const StaticTable = ({ header, id }) => {
  const renderHeader = () => {
    return header.map((header, index) => <th key={index}> {header}</th>);
  };

  console.log("StaticTable header: ", header);
  console.log("StaticTable id: ", id);

  return (
    <div className="container">
      <table className="table table-striped table-hover">
        <thead>
          <tr> {renderHeader} </tr>
        </thead>
        <tbody>
          <tr>
            <td> {id} </td>
            <td> {id} </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StaticTable;
