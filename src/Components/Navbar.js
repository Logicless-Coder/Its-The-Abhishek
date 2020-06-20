import React, { Component } from "react";
import "./Navbar.css";

// import { Bars } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

function Menu() {
  return (
    <div className="menu">
      <ul className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>
    </div>
  );
}

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: true,
    };

    const toggleMenu = () => {
      this.setState({
        menuOpen: !this.state.menuOpen,
      });
      console.log(this.state.menuOpen);
    };
  }

  render() {
    return (
      <div>
        <div className="nav-bar" id="topnav">
          <div className="logo">A</div>
          <ul className="nav-list">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <a href="#">Projects</a>
            </li>
          </ul>
          <div className="menu" onClick={this.toggleMenu}>
            <FiMenu />
          </div>
        </div>
        {this.state.menuOpen == true && <Menu />}
      </div>
    );
  }
}

export default Navbar;
