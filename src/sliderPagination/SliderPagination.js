import React, { Component } from 'react';
import './SliderPagination.css';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onChange(e.target.text)
  }

  render() {
    let classes = (this.props.card.completed ? "available" : "") + " " + (this.props.card.index === this.props.activeSlide ? "active" : "")
    return (
      <li className={classes}><a href="#" onClick={this.handleClick}>{this.props.card.index}</a></li>
    )
  }
}

class SliderPagination extends Component {
  constructor(props) {
    super();
    this.state = {
      stateName: '',
    }
  }

  render() {
    var array = [];
    this.props.cards.forEach((card, i) => {
      array.push(<Pagination card={card} key={i} onChange={this.props.onChange.bind(this)} activeSlide={parseInt(this.props.activeSlide, 10)} />)
    })

    return (
      <div>
        <div className="slider-pagination">
          <ul>
            <li className="next-prev prev">
              <a href="#">Prev</a>
            </li>
            {array}
            <li className="next-prev next">
              <a href="#">Next</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SliderPagination;
