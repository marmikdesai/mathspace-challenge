import React, { Component } from 'react';
import tick from './../images/tick.svg';
import './Card.css';

class CardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.card.completed,
      index: null,
      activeSlide: this.props.activeSlide
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      status: !this.props.card.completed,
      index: this.props.card.index
    }, this.updatingCard);
  }

  updatingCard(){
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
    let array = [],
        cards = this.props.cards;

    cards.filter((card, i) => {
      const _this = this;

      return (parseInt(_this.props.activeSlide, 10) === card.index) ? array.push(<CardDetails card={card} key={i} onUpdate={this.props.onUpdate.bind(this)} activeSlide={this.props.activeSlide}/>) : null
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
        <CardList cards={this.props.subtopics} onUpdate={this.props.onUpdate.bind(this)} activeSlide={this.props.activeSlide} />
      </section>
    );
  }
}

export default Card;
