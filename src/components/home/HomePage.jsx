import React, { Component } from "react";
import {Link} from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1> Pluralsight Administration </h1>
        <p>Bla bla blablablabla</p>
        <Link to="about" className = "btn btn-primary btn-lg">About </Link>
      </div>
    );
  }
}

export default HomePage;
