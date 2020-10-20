import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode"
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import Toggle from "./components/Toggler"
import Nav from './components/Nav';
import Migrate from './components/Migrate';
import Farm from './components/Farm';
import Home from './components/Home';
import Faq from './components/Faq';
import Dashboard from './components/Dashboard';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">
        <Router>
          <div className="Nav-outer">
            <Nav/>
            <div className="theme-btn">
              <Toggle theme={theme} toggleTheme={themeToggler} />
            </div>
          </div>
          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/farm" exact component={Farm}/>
            <Route path="/migrate" exact component={Migrate}/>
            <Route path="/faq" exact component={Faq}/>
            <Route path="/dashboard" exact component={Dashboard}/>
          </Switch>
        </Router>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
