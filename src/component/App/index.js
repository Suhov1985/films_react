import React, { Component } from 'react';
import './index.css';
import BlogList from "../../page/BlogList"
import Header from '../../containers/Header'
import Footer from '../../containers/Footer'
import NotFound from '../../page/404'
import ArticleItem from '../../page/ArticleItem'
import { Route, Switch } from 'react-router-dom'

class Index extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/" component={BlogList}/>
                        <Route path="/article/:id" component={ArticleItem}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default Index;

