import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class CreateItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            itemPrice: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.getItemName = this.getItemName.bind(this);
        this.getItemPrice = this.getItemPrice.bind(this);
    }

    getItemName(e) {
        this.setState({itemName: e.target.value});
    }

    getItemPrice(e) {
        this.setState({itemPrice: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let Item = {
            name: this.state.itemName,
            price: this.state.itemPrice
        };
        let uri = 'http://larareact.dev/items';
        axios.post(uri, Item).then((response) => {
            browserHistory.push('/display-item');
        });

    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Create New Item</h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Item Name :</label>
                            <input type="text" className="form-control" onChange={this.getItemName}/> 
                        </div>
                        <div className="form-group">
                            <label>Item Price :</label>
                            <input type="text" className="form-control" onChange={this.getItemPrice}/> 
                        </div>

                        <button className="btn btn-primary">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateItem;