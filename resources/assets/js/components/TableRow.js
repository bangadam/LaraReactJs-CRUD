import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class TableRow extends Component {
    constructor(props) {
        super(props); 

        this.state = {

        }

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        axios.get('http://larareact.dev/items/'+this.props.obj.id+'/delete');
        browserHistory.push('/display-item');
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={"edit/" + this.props.obj.id} className="btn btn-warning">Edit</Link> 
                    &nbsp;
                    <form onSubmit={this.handleSubmit}>
                        <button className="btn btn-danger">Delete</button>
                    </form>                    
                </td>
            </tr>
        )
    }
}

export default TableRow;