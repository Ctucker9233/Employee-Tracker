import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/index";
import Main from "./components/Main/index"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Main />
        {/* Based on `this.state.currentPage`, render the appropriate component
          here. */}

      </div>
    </Router>
  )
}

export default App;
