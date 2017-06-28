import React, { Component } from 'react';
import './SliderPagination.css';

class Pagination extends Component {
  render() {
    let classes = (this.props.card.completed ? "available" : "") + " " + (this.props.card.index === 9 ? "active" : "")
    return (
      <li className={classes}><a href="#">{this.props.card.index}</a></li>
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
      array.push(<Pagination card={card} key={i} />)
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
