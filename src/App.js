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
      subtopics: subtopics
    }
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate (data) {
    let list = this.state.subtopics;
    list.filter(function(val, i){
  	   if(val.index === data.index) {
         debugger;
         alert("check this line")
           this.setState({
//             https://facebook.github.io/react/docs/update.html
//             items: update(this.state.items, {1: {name: {$set: 'updated field name'}}})
             subtopics: this.state.subtopics[data.index].completed: data.status
           });
       }

    }.bind(this))

  }

  render() {
    return (
      <div className="App">
        <Header title={topic} subtopics={this.state.subtopics} />
        <Card subtopics={this.state.subtopics} onUpdate={this.onUpdate.bind(this)} />
        <Footer />
      </div>
    );
  }
}

export default App;
