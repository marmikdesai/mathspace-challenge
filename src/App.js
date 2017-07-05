import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Card from './card/Card';
import Footer from './footer/Footer';

const topic = {
  title: "Geometry"
}

const subtopics = [
    { index: 1, title: "Triangles", completed: true },
    { index: 2, title: "Angle Sum", completed: true },
    { index: 3, title: "Similar Triangles", completed: true },
    { index: 4, title: "Congruence", completed: false },
    { index: 5, title: "Enlargements", completed: false },
    { index: 6, title: "Parallel Lines", completed: false },
    { index: 7, title: "Pythagoras Theorem", completed: false },
    { index: 8, title: "Revision", completed: false },
    { index: 9, title: "Topic Test", completed: false }
  ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtopics: subtopics,
      activeSlide: 1
    }
    this.onUpdate = this.onUpdate.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(slideNumber) {
    this.setState({
      activeSlide: slideNumber
    });
  }

  onUpdate (data) {
    let list = this.state.subtopics;
    list.filter(function(val, i){
      if(val.index === data.index) {
        const subtopics = this.state.subtopics;
        subtopics[val.index-1].completed = data.status;
        this.setState({
          subtopics
        });
      }
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <Header title={topic} subtopics={this.state.subtopics} onChange={this.onChange.bind(this)} />
        <Card subtopics={this.state.subtopics} onUpdate={this.onUpdate.bind(this)} activeSlide={this.state.activeSlide} />
        <Footer />
      </div>
    );
  }
}

export default App;
