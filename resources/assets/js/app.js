require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Example from './components/Example';
import Master from './components/Master';
import CreateItem from './components/CreateItem';
import DisplayItem from './components/DisplayItem';
import EditItem from './components/EditItem';
import Home from './components/Home';

render(
    <Router history={browserHistory}>
        <Route path="/" component={Master}>
            <IndexRoute component={Home} />
            <Route path="/add-item" component={CreateItem} />
            <Route path="/display-item" component={DisplayItem} />
            <Route path="/edit/:id" component={EditItem} />
        </Route>
    </Router>    
    , document.getElementById('example'));