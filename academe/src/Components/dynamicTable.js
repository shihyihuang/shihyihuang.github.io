import React from "react";
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

    handleClick(){
        var items = this.state.items;
        items.push(this.state.message);
        this.setState({
            items: items
        });
    }

    handleModify(i, event){
        var items = this.state.items;

        items[i] = event.target.value;
        this.setState({
            items: items
        });
    }

    handleDelete(i){
        var items = this.state.items;

        items.splice(i,1);
        this.setState({
            items: items
        });
    }

    renderRows(){
        var context = this;

        return this.state.items.map((o,i) => {
            return(
                <tr key={"item-" + i}>
                    <td>
                        <input 
                        type="text"
                        value={o}
                        onChange={context.handleModify.bind(context,i)} style={{border:'none', background:'transparent'}}/>
                    </td>
                    <td>
                        <button className="btn btn-danger" onClick={context.handleDelete.bind(context, i)}> Delete </button>
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
                <input type="text" onChange={this.updateMessage.bind(this)} style={{height:'40px'}}/>
                <button className="btn btn-primary"onClick={this.handleClick.bind(this)} style={{marginLeft: '10px', height:'40px', alignItems: 'center'}}> add </button>
                </div>
                <hr/>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th> Item </th>
                            <th> Action </th>
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
