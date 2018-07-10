import React, {Component} from 'react'
import Autosuggest from 'react-autosuggest'
import {Link} from 'react-router-dom'

import './styles.css'

function getSuggestionValue(suggestion) {
    return suggestion.name;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name}</span>
    );
}


class Header extends Component{
    state = {
        data: [],
        value: '',
        suggestions: []
    }
    componentDidMount () {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=24f501845f94ecdd83b2fe94f252059a&language=ru-Ru&page=1',
            {
                method: "GET"
            }).then(res => {
            return res.json()
        }).then(response => {
            this.setState({
                data: response.results,
                activeLoader: false
            })
        })
    }
    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.state.data
        });
    };
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };
    render(){
        const {value, suggestions} = this.state
        const inputProps = {
            placeholder: "Поиск",
            value,
            onChange: this.onChange
        };
        return (
            <header>
                <div className="header">
                    <div className="container">
                        <a href="/" className="logo"><img src="https://www.themoviedb.org/static_cache/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="logo"/></a>
                    </div>
                </div>
                <div className="search">
                    <div className="container">
                        <div className="">
                            <Autosuggest
                                suggestions={suggestions}
                                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                                getSuggestionValue={getSuggestionValue}
                                renderSuggestion={renderSuggestion}
                                inputProps={inputProps} />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header