import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';

class DisplayItem extends Component {
    constructor(props) {
        super(props);

        this.state = {value: '', items: ''};
    }
    componentDidMount() {
        axios.get('http://larareact.dev/items')
            .then((response) => {
                this.setState({items: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios.get('http://larareact.dev/items')
            .then((response) => {
                this.setState({items: response.data});
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    tabRow() {
        if(this.state.items instanceof Array) {
            return this.state.items.map(function(object, i) {
                return <TableRow obj={object} key={i} />;
            })
        }
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Item List</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Item Name</td>
                                <td>Item Price</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tabRow()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default DisplayItem;