import React, { Component } from 'react';

import Header from './Header.js';
import Results from './Results.js';

export default class SearchForm extends Component {

state = {
    query: '',
};

input = {
    search: ''
};

// every time a key is pressed in the search input, state.query is set as the value
// This by itself would work well as a live search feature
handleChange = e => {
    this.input.search = e.target.value;
};

// When the form is submitted, update state.equery to be equal to what has been stored in input.search
// If we don't do this and just try to set it without handChange the returned value would be empty
handleSubmit = e => {
    e.preventDefault();
    this.setState({ query: this.input.search });
    e.currentTarget.reset();
};

// Render the search form and attach event triggers
// Load the nav bar
// Return the results
    render() {
        return (
          <div>
          <form className="search-form" onSubmit={this.handleSubmit} >
            <input type="search" name="search" placeholder="Search" onChange={this.handleChange} />
            <button type="submit" className="search-button">
            <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
            </button>
          </form>
          <Header />
          <Results query={this.state.query} api={this.props.api} />
          </div>
        );
    }
}
