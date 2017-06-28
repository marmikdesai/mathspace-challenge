import React, { Component } from 'react';
import tick from './../images/tick.svg';
import piechart from './../images/piechart.svg';
import linegraph from './../images/linegraph.svg';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super();
    this.state = {
      stateName: '',
    }
  }

  render() {
    return (
      <footer className="Footer">
        <div>
          <a href="#" className="active"><img src={tick} alt="" /></a>
        </div>
        <div>
          <a href="#"><img src={piechart} alt="" /></a>
        </div>
        <div>
          <a href="#"><img src={linegraph} alt="" /></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
