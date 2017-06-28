import React, { Component } from 'react';
import './PageTitle.css';

class PageTitle extends Component {
  render() {
    return (
      <div className="page-title">
        <h1>{this.props.title.title}</h1>
      </div>
    )
  }
}

export default PageTitle;
