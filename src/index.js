import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import './index.css';
import Index from './component/App/';
import { BrowserRouter as Router} from 'react-router-dom'

import store, { history } from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Index />
        </Router>
    </Provider>,
    document.getElementById('root')
);
