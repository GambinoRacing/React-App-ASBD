import 'react-select/dist/react-select.css';
import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse ">
       <div className="container">
       <button className="navbar-toggler navbar-toggler-right" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <NavLink exact to="/" className="nav-link">Начало <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink exact to="/weather" className="nav-link">Времето</NavLink>
            </li>      
          </ul>
        </div>
       </div>
      </nav>
    );
  }
}