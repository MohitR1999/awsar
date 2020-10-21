import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Main from './screens/Main';
import Home from './screens/Home';
import Routes from './screens/Routes';
function App() {
  return (
    <Router>
      <Routes/>
    </Router>
  );
}


export default App;
