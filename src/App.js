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
  render() {
    return (
      <div className="App">
        <Header title={topic} subtopics={subtopics}/>
        <Card subtopics={subtopics}/>
        <Footer />
      </div>
    );
  }
}

export default App;
