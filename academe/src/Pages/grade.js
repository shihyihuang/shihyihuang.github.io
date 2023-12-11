import Icon from "../Components/icon"
import { useNavigate } from "react-router-dom";

const Grade = () => {
    const navigate = useNavigate();

    const pageRoutes = {
        addSemester: '/addSemester',
      };
      
      const handleClick = (page) => {
        const route = pageRoutes[page];
        
        if (route) {
          navigate(route);
        } else {
          console.error("Can't find your page:", page);
        }
      };

    return(
        <div className="container centerDiv"> 
            <button onClick={() => handleClick("addSemester")}><Icon name="add"/></button>
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
            </table>
        </div>
    );
};

export default Grade;