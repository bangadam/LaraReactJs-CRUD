import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class EditItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
        }

        this.getItemName = this.getItemName.bind(this);
        this.getItemPrice = this.getItemPrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('http://larareact.dev/items/'+this.props.params.id+'/edit')
            .then((response) => {
                this.setState({ 
                    name: response.data.name,
                    price: response.data.price,
                });
                // console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getItemName(e) {
        this.setState({name: e.target.value});
    }

    getItemPrice(e) {
        this.setState({price: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let item = {
            name: this.state.name,
            price: this.state.price    
        };

        axios.post('http://larareact.dev/items/'+this.props.params.id+'/update', item)
            .then((response) => {
                browserHistory.push('/display-item');
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Update Item</h3>
                </div>
                <div className="panel-body">
                    <Link to="/display-item" className="btn btn-danger">Back</Link>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" 
                                className="form-control" 
                                value={this.state.name}
                                onChange={this.getItemName} />
                        </div>
                        <div className="form-group">
                            <label>Item Price</label>
                            <input type="text" 
                                className="form-control"
                                value={this.state.price} 
                                onChange={this.getItemPrice}/>
                        </div>

                        <button className="btn btn-primary">Update Item</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default EditItem;