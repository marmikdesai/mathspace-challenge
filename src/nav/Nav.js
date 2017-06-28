import React, { Component } from 'react';
import menuIcon from './../images/menu.svg';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super();
    this.state = {
      stateName: '',
    }
  }

  render() {
    return (
      <div className="nav">
        <a href="#">
          <img src={menuIcon} alt="navigation" />
        </a>
      </div>
    );
  }
}

export default Nav;
