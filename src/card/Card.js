import React, { Component } from 'react';
import tick from './../images/tick.svg';
import './Card.css';

let left = 40;

class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.card.completed,
      index: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.refs.col1.style.left = left+"px";
    left += this.refs.col1.offsetWidth + 40;
  }

  handleClick() {
    this.setState(prevState => ({
      status: !prevState.status,
      index: this.props.card.index
    }));
    this.props.onUpdate(this.state)
  }

  render() {
    return (
      <article className="blog" data-status={this.props.card.completed} ref="col1">
        <h2>{this.props.card.index}. {this.props.card.title}</h2>
        <i><img src={tick} alt=""/></i>
        <button className="go-button" onClick={this.handleClick}>Lets Go</button>
      </article>
    )
  }
}

class CardList extends Component {
  render() {
    var array = [];
    this.props.cards.forEach((card, i) =>{
      array.push(<CardDetails card={card} key={i} onUpdate={this.props.onUpdate.bind(this)} />)
    })

    return (
      <div>{array}</div>
    )
  }
}

class Card extends Component {

  render() {
    return (
      <section className="card">
        <CardList cards={this.props.subtopics} onUpdate={this.props.onUpdate.bind(this)} />
      </section>
    );
  }
}

export default Card;
