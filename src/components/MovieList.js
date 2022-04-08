import React, { Component } from 'react';
import Movie from './Movie';

export default class MovieList extends Component {

  render() {
    return (
      <div id='background'>
        {this.props.movies.map((movie) => 
          <Movie key={movie.id} movie={movie} onSubmit={this.props.onSubmit}/>
        )}       
      </div>
    )
  }
}