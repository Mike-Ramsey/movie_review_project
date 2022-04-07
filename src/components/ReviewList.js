import React, { Component } from 'react';
import Review from './Review';

export default class ReviewList extends Component {
  render() {
    return (
      <>
      <h5>User Reviews:</h5>
        <br/>
        <div  className='overflow-auto' id='reviewBox'>
          {this.props.reviews.map( review => <Review review={review} key={review.id} /> )}
        </div>
      </>
    )
  }
}
