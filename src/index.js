import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './component/App/';
import { BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Index />
    </Router>,
    document.getElementById('root')
);
