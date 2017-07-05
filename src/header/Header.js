import React, { Component } from 'react';
import Nav from './../nav/Nav';
import PageTitle from './../pageTitle/PageTitle';
import User from './../user/User';
import SliderPagination from './../sliderPagination/SliderPagination';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <Nav />
          <User />
        </div>
        <PageTitle title={this.props.title}/>
        <SliderPagination cards={this.props.subtopics} onChange={this.props.onChange.bind(this)}/>
      </header>
    );
  }
}

export default Header;
