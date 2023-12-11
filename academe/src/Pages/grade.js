import { useNavigate } from "react-router-dom";
import DynamicTable from "../Components/dynamicTable";

const Grade = () => {

    return(
        <div className="container"> 
            <DynamicTable
                column1={"Semester"}
                column2={"WAM"}
            />
            {/* <button onClick={() => handleClick("addSemester")}><Icon name="add"/></button>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th> Semester </th>
                        <th> WAM </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 2022 S2 </td>
                        <td> 1 </td>
                    </tr>
                    <tr>
                        <td> 2023 S1 </td>
                        <td> 1 </td>
                    </tr>
                </tbody>
            </table> */}
        </div>
    );
};

export default Grade;