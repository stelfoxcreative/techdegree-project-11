import React, { Component } from 'react';
import axios from 'axios';
import GifList from './GifList.js';

class Results extends Component {

  constructor() {
    super();
    // Create an empty array named gifs, this will be used to store the returned object from Flickr
    // search created and assigned an empty string
    this.state = {
      gifs: [],
      loading: true,
      noResults: false,
      search: ''
    }
  }

// If the App has loaded
  componentDidMount() {
    // and the query state is not empty
    if (this.props.query !=='') {
      // then use GET on the flickr.photo.search API, the query from the search results is passed into the template literal and the requested return format is JSON
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${this.props.query}&per_page=20&format=json&nojsoncallback=1`)
      // we then put the response into the empty gif array and set the loading state to false since we now have some data returned
      .then(response => {
        this.setState({
          gifs: response.data.photos.photo,
          loading: false
        })
      })
      // If the object cannot be returned then we output an error to the console to help with debugging
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
    }
  }

// This will allow Results to pass in the the new property values when the SearchForm compontent is used
  componentWillReceiveProps(nextProps) {
    // update the emptry search string to be equal to the new query
    this.setState({ search: nextProps.query });
    // Then run the getImages functions and pass in the search new search
    this.getImages(nextProps.query);
  }

// The getImages function is very similar to the function in componentDidMount
// Ideally it would be best to use the one function, I could not get this to work with one function
// I had to click the submit button twice before seeing the actual search results
// I tried adding a callback function and using a Promises but could not get that to work either
// Revisit and refactor this code in the future
  getImages(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        gifs: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div className="photo-container">
      {
        // Let the user know if the app is loading the results
        (this.state.loading && this.props.query !=='')
        ? <p>Loading...</p>
        // If the app is not loading, then display the results
        : <GifList data={this.state.gifs} query={this.state.search}/>
      }
      </div>
    )
  }
}

export default Results;
