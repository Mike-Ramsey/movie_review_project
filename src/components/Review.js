import React, { Component } from 'react';
import Stars from './Stars';

export default class Review extends Component {
  render() {
    return (
      <div>
        <Stars user={this.props.review.user} rating={this.props.review.rating}/>
        <div>{this.props.review.review}</div>
        <br/>
      </div>
    );
  }
}  