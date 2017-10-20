import React from 'react';

// A single list with an image
// img attributes are provided by the props passed in from GifList
const Gif = props => (
  <li>
    <img src={props.url} alt="" title={props.title} />
  </li>
);

export default Gif;
