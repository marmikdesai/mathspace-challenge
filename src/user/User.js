import React, { Component } from 'react';
import userAvatar from './../images/avatar.png';
import './User.css';

class User extends Component {
  constructor(props) {
    super();
    this.state = {
      stateName: '',
    }
  }

  render() {
    return (
      <div className="user online">
        <a href="#">
          <img src={userAvatar} alt=""/>
        </a>
      </div>
    );
  }
}

export default User;
