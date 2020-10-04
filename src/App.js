import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav';
import Migrate from './components/Migrate';
import Farm from './components/Farm';
import Home from './components/Home';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
     <Router>
       <Nav/>
       <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/farm" exact component={Farm}/>
        <Route path="/migrate" exact component={Migrate}/>
        <Route path="/faq" exact component={Faq}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
