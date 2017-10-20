import React from 'react';
import Results from './Results';

// Pass the query and api key into the Results component
const Cats = (props) => {
    return(
      <div>
        <h2>{props.title}</h2>
        <Results query={"cats"} api={props.api} />
      </div>
    );
}

export default Cats;
