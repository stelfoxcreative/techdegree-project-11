import React from 'react';
import './App.css';

// Load the installed React router modules required
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import API Key from config file
// Use this to import your own API Key for Flickr
import apiKey from './Config';

// App components
import SearchForm from './Components/SearchForm';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';
import Birds from './Components/Birds';
import NotFound from './Components/NotFound';

// Set up the browser routing using 'react-router-dom' module
// Switch provides 404 type support
// exact used on the home page to stop it from appearing on other URLs such as /*
// If no matches are found, load the NotFound component
const App = () =>{
  return (
    <BrowserRouter>
      <nav className="main-nav">
        <Switch>

          <Route exact path="/" render={() => (<SearchForm api={apiKey} />)}/>
          <Route path="/cats" render={() => (<Cats api={apiKey} title="Cats" />)}/>
          <Route path="/dogs" render={() => (<Dogs api={apiKey} title="Dogs" />)}/>
          <Route path="/birds" render={() => (<Birds api={apiKey} title="Birds" />)}/>
          <Route component={NotFound} />
        </Switch>
      </nav>
    </BrowserRouter>
  );
}

export default App;
