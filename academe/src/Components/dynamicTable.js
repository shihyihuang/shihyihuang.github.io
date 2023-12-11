import React, {useState} from "react";
import DeleteConfirmation from "./deleteConfirmation";
import Icon from "../Components/icon"
//https://app.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

const DynamicTable = () => {
    const [message, setMessage] = useState("");
    const [items, setItems] = useState([]);

    const updateMessage = (event) => {
        setMessage(event.target.value);
    };

    const handleAdd = () => {
        // const items = [...items];
        // items.push(this.state.message);
        setItems([...items, message]);
        setMessage("");
    };

    const handleModifySemester = (index, event) => {
        const updatedItems = [...items];
        updatedItems[index] = {...updatedItems[index], semester: event.target.value};
        setItems(updatedItems);
    };

    const handleModifyGrade = (index, event) => {
        const updatedItems = [...items];
        updatedItems[index] = {...updatedItems[index], grade: event.target.value};
        setItems(updatedItems);
    };

    const handleDelete = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index,1);
        setItems(updatedItems);
    }

    const renderRows = () => {
        return items.map((o,index) => (
                <tr key={"item-" + index}>
                    <td>
                        <input 
                        type="text"
                        name="semester"
                        value={o.semester || ""}
                        onChange={ (event) => handleModifySemester(index, event)} 
                        style={{border:'none', background:'transparent'}}/>
                    </td>
                    <td>
                        <input 
                        type="text"
                        name="grade"
                        value={o.grade || ""}
                        onChange={(event) =>  handleModifyGrade(index, event)}
                        style={{border:'none', background:'transparent'}}/>
                    </td>
                    <td>
                        <DeleteConfirmation 
                        context={{ handleDelete}} 
                        index={index}
                         />
                    </td>
                </tr>
        ));
    };
    
    return(
        <div className="container">
            <br/>
            <div style={{display: 'flex'}}>
                {/* <input 
                    type="text" 
                    style={{height:'40px', marginRight:'10px'}}
                    onChange={this.updateMessage.bind(this)} 
                    /> */}
                <button 
                    id="#addSemesterBtn"
                    onClick={handleAdd}> 
                    <Icon name="add"/>
                </button>
            </div>
            <hr/>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th> Semester </th>
                        <th> Grade </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;
