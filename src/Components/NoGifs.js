import React from 'react';

// A JSX compontent that will provide some simple HTML
// Keyword 'return' is highlighted in Atom text editor, may need to explore this further
const NoGifs = props => (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>Your search did not return any results. Please try again.</p>
  </li>
);

export default NoGifs;
