import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {
  const results = props.data,
  query = props.query
  let gifs;
  // If we have some results
  if (results.length > 0) {
    // Use map to loop through each image in the object and pass the values into the Gif component
    // the URL is constructed using template literal and passes the required values
    // Used console.log(props.data) to examine the object and see where the values are stored
    gifs = results.map(gif => <Gif url={`https://farm${gif.farm}.staticflickr.com/${gif.server}/${gif.id}_${gif.secret}.jpg`} key={gif.id} title={gif.title}/>);
  } else {
    // If there are no results and the query is not blank, then load the NoGifs Component
    if (results.length === 0 && query !== '') {
    gifs = <NoGifs />
  }
  }

  // return the values
  return (
    <div>
      <h2>{query}</h2>
      <ul>
        {gifs}
      </ul>
    </div>
  );

}

export default GifList;
