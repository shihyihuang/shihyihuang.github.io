import React from "react";
import DeleteConfirmation from "./deleteConfirmation";
import Icon from "../Components/icon"
//https://app.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

class DynamicTable extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: "",
            items:[]
        }
    }


    updateMessage(event){
        this.setState({
            message: event.target.value
        });
    }

    handleAdd(){
        const items = [...this.state.items];
        items.push(this.state.message);
        this.setState({
            items: items
        });
    }

    handleModifySemester(index, event){
        const items = [...this.state.items];

        items[index] = {...items[index], semester: event.target.value};
        this.setState({
            items: items
        });
    }

    handleModifyGrade(index, event){
        const items = [...this.state.items];

        items[index] = {...items[index], grade: event.target.value};
        this.setState({
            items: items
        });
    }

    handleDelete(index){
        const items = [...this.state.items];

        items.splice(index,1);
        this.setState({
            items: items
        });
        console.log("after delete items: ",items);
    }

    renderRows(){
        const context = this;

        return this.state.items.map((o,index) => {
            return(
                <tr key={"item-" + index}>
                    <td>
                        <input 
                        type="text"
                        name="semester"
                        value={o.semester || ""}
                        onChange={context.handleModifySemester.bind(context,index)} style={{border:'none', background:'transparent'}}/>
                    </td>
                    <td>
                        <input 
                        type="text"
                        name="grade"
                        value={o.grade || ""}
                        onChange={context.handleModifyGrade.bind(context,index)} style={{border:'none', background:'transparent'}}/>
                    </td>
                    <td>
                        <DeleteConfirmation context={this} index={index}/>
                    </td>
                </tr>
            );
        });
    }

    render(){
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
                        onClick={this.handleAdd.bind(this)}> 
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
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    };
};

export default DynamicTable;
