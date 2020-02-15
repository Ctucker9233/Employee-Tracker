import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation/index";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        {/* Based on `this.state.currentPage`, render the appropriate component
          here. */}

      </div>
    </Router>
  )
}

export default App;
