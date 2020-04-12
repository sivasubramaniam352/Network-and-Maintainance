import React from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/startingPAge/starting';
import moduleName from './components/registerAdmin/RegisterAdmin'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Router>      <Switch>
      <Route path="/" exact children ={<div><Start/></div>}/>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
