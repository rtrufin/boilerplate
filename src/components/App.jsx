import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./common/Navigation";
import AppRoutes from "../routes";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div>
            <Navigation />
          </div>
          <div>
            <AppRoutes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
