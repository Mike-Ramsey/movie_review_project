import React, { Component } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class Movie extends Component {  

  render() {

    return (
      <>
        <div className='flex-container' id='movieBox'>
          <div className='row'  >
            <div className="col-sm-4">
              <img id='poster' src={this.props.movie.poster}/>
            </div>
            <div className='col-sm-8'>
              <div className='row'>
              <h2>{this.props.movie.title}</h2>
                <div className="col-sm-5">                                
                  <h5>Director: {this.props.movie.director}</h5>
                  <h5>Release Date: {this.props.movie.releaseDate}</h5>
                  <br/>
                  <br/>
                  <ReviewForm reviews={this.props.movie.reviews} onSubmit={this.props.onSubmit} movie={this.props.movie}/>
                </div>
                <div className='col-sm-7'>
                  <div><ReviewList reviews={this.props.movie.reviews}/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>    
    )
  }
}


