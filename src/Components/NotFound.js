import React from 'react';

// This component will be return something similar to a 404 error message when a page is not found
const NotFound = () => (
  <div className="main-content not-found">
    <i className="material-icons icn-error">error_outline</i>
    <h2>Page Not Found</h2>
  </div>
);

export default NotFound;
