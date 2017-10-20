import React from 'react';
import Results from './Results';

// Pass the query and api key into the Results component
const Dogs = (props) => {
    return(
      <div>
        <h2>{props.title}</h2>
        <Results query={"dogs"} api={props.api} />
      </div>
    );
}

export default Dogs;
