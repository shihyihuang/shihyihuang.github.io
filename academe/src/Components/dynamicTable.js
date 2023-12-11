import React, {useEffect, useState} from "react";
import DeleteConfirmation from "./deleteConfirmation";
import Icon from "../Components/icon"
//https://app.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

const DynamicTable = ({column1, column2}) => {
    const [message, setMessage] = useState("");
    const [items, setItems] = useState(
       JSON.parse(localStorage.getItem('items')) || []
       );
    
    useEffect(()=> {
        localStorage.setItem('items', JSON.stringify(items))
    },[items]);

    const updateMessage = (event) => {
        setMessage(event.target.value);
    };

    const handleAdd = () => {
        // const items = [...items];
        // items.push(this.state.message);
        setItems([...items, message]);
        setMessage("");
    };

    const handleModifyColumn1 = (index, event) => {
        const updatedItems = [...items];
        updatedItems[index] = {...updatedItems[index], column1: event.target.value};
        setItems(updatedItems);
    };

    const handleModifyColumn2 = (index, event) => {
        const updatedItems = [...items];
        updatedItems[index] = {...updatedItems[index], column2: event.target.value};
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
                        name="column1"
                        value={o.column1 || ""}
                        onChange={ (event) => handleModifyColumn1(index, event)} 
                        style={{border:'none', background:'transparent'}}/>
                    </td>
                    <td>
                        <input 
                        type="text"
                        name="column2"
                        value={o.column2 || ""}
                        onChange={(event) =>  handleModifyColumn2(index, event)}
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
                        <th> {column1} </th>
                        <th> {column2} </th>
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
