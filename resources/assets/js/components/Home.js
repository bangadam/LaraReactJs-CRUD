import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Laravel ReactJs Basic Crud</h1>
                <p><Link className="btn btn-primary btn-lg" to="/add-item">Create New Item</Link></p>
            </div>
        )
    }
}

export default Home;