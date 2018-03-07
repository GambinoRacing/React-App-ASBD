import 'react-select/dist/react-select.css';
import React, { Component } from 'react';
//За bootstrap NavLink import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';


export default class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      // <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse ">
      //  <div className="container">
      //  <button className="navbar-toggler navbar-toggler-right" 
      //     type="button" data-toggle="collapse" 
      //     data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
      //     aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      // <div className="collapse navbar-collapse" id="navbarNavDropdown">
      //   <ul className="navbar-nav">
      //     <li className="nav-item active">
      //     <NavLink exact to="/" className="nav-link">Начало <span className="sr-only">(current)</span></NavLink>
      //     </li>
      //     <li className="nav-item">
      //     <NavLink exact to="/weather" className="nav-link">Времето</NavLink>
      //     </li>      
      //   </ul>
      // </div>
      //  </div>
      // </nav>
      <div className="container">
        <div>
          <Nav pills>
            <NavItem>
              <NavLink href="/" active>НИМХ-БАН</NavLink>
            </NavItem>
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle nav caret>
                Сектори
          </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/Weather">Сектор Метеорология</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/Hydro">Сектор Хидрология</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/ASBD">Сектор АСБД</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="/Meteogram">Метеограма</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/RainMap">Карта с Валежи</NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
} 