import React, { Component } from 'react';
import br2049 from './br2049.jpg';
import dune from './dune.jpg';
import btilc from './btilc.jpg';
import twelveMonkeys from './12monkeys.jpg';
import spiritedAway from './spiritedAway.jpg';
import evilDeadTwo from './evilDead2.jpg';
import wetHot from './wetHot.jpg';
import MovieList from './components/MovieList';


export default class App extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: 2234234234,
          title: 'Blade Runner 2049',
          director: 'Denis Villeneuve',
          releaseDate: 2017,
          reviews: [
            {
              id: 10,
              rating: 4,
              review: 'Better than the original! Very atmospheric, great cinematography!',
              user: 'Kim'
            },
            {
              id: 11,
              rating: 4,
              review: 'great',
              user: 'Geoff'
            },
            {
              id: 12,
              rating: 2,
              review: 'ok',
              user: 'Dave'
            },
            {
              id: 13,
              rating: 5,
              review: 'fantastic',
              user: 'Mike'
            }
          ],
          poster: br2049
        },
        {
          id: 1,
          title: 'Dune',
          director: 'Denis Villeneuve',
          releaseDate: 2021,
          reviews: [
            {
              id: 20,
              rating: 5,
              review: 'pretty good',
              user: 'Kim'
            },
            {
              id: 21,
              rating: 3,
              review: 'it was okay',
              user: 'Anne'
            },
            {
              id: 22,
              rating: 4,
              review: 'I dug it',
              user: 'Frank'
            },
            {
              id: 23,
              rating: 1,
              review: 'I have no taste',
              user: 'Billy'
            }
          ],
          poster: dune
        },
        {
          id: 2,
          title: 'Big Trouble in Little China',
          director: 'John Carpenter',
          releaseDate: 1986,
          reviews: [
            {
              id: 30,
              rating: 3,
              review: 'good',
              user: 'Kim'
            },
            {
              id: 31,
              rating: 4,
              review: 'great',
              user: 'Geoff'
            },
            {
              id: 32,
              rating: 2,
              review: 'ok',
              user: 'Dave'
            },
            {
              id: 33,
              rating: 5,
              review: 'fantastic',
              user: 'Mike'
            }
          ],
          poster: btilc
        },
        {
          id: 3,
          title: 'Twelve Monkeys',
          director: 'Terry Gilliam',
          releaseDate: 1996,
          reviews: [
            {
              id: 40,
              rating: 3,
              review: 'good',
              user: 'Kim'
            },
            {
              id: 41,
              rating: 4,
              review: 'great',
              user: 'Geoff'
            },
            {
              id: 42,
              rating: 2,
              review: 'ok',
              user: 'Dave'
            },
            {
              id: 43,
              rating: 5,
              review: 'fantastic',
              user: 'Mike'
            }
          ],
          poster: twelveMonkeys
        },
        {
          id: 4,
          title: 'Spirited Away',
          director: 'Hayao Miyazaki',
          releaseDate: 2001,
          reviews: [
            {
              id: 50,
              rating: 3,
              review: 'good',
              user: 'Kim'
            },
            {
              id: 51,
              rating: 4,
              review: 'great',
              user: 'Geoff'
            },
            {
              id: 52,
              rating: 2,
              review: 'ok',
              user: 'Dave'
            },
            {
              id: 53,
              rating: 5,
              review: 'fantastic',
              user: 'Mike'
            }
          ],
          poster: spiritedAway
        },
        {
          id: 5,
          title: 'Evil Dead II',
          director: 'Sam Raimi',
          releaseDate: 1987,
          reviews: [
            {
              id: 60,
              rating: 3,
              review: 'good',
              user: 'Kim'
            },
            {
              id: 63,
              rating: 5,
              review: 'fantastic',
              user: 'Mike'
            }
          ],
          poster: evilDeadTwo
        },
        {
          id: 6,
          title: 'Wet Hot American Summer',
          director: 'David Wain',
          releaseDate: 2001,
          reviews: [
            {
              id: 70,
              rating: 4,
              review: 'finest performance ever from a talking can',
              user: 'Alex'
            },
            {
              id: 71,
              rating: 4,
              review: 'one of the best comedies of all time',
              user: 'Charisa'
            },
            {
              id: 72,
              rating: 2,
              review: `I don't get it`,
              user: 'Susan'
            },
            {
              id: 73,
              rating: 5,
              review: 'laughed till I cried',
              user: 'Frank'
            },
            {
              id: 74,
              rating: 4,
              review: 'finest performance ever from a talking can',
              user: 'Alex'
            },
            {
              id: 75,
              rating: 4,
              review: 'one of the best comedies of all time',
              user: 'Charisa'
            },
            {
              id: 76,
              rating: 2,
              review: `I don't get it`,
              user: 'Susan'
            },
            {
              id: 77,
              rating: 5,
              review: 'laughed till I cried',
              user: 'Frank'
            }
          ],
          poster: wetHot
        }
      ]
    };
  }

  addReview = (newReview) => {

    this.setState(state => {
      const moviesCopy = [...state.movies]
      const index = moviesCopy.findIndex(i => i.id === (newReview.movieId))
      const movieCopy = {...state.movies[index]}
      const reviewsCopy = [...movieCopy.reviews]
      reviewsCopy.push(newReview);
      movieCopy.reviews=reviewsCopy;
      moviesCopy[index] = movieCopy;
      return {movies: moviesCopy};
    })
  }
  
  render() {
    return (
      <MovieList movies={this.state.movies} onSubmit={this.addReview}/>
    )
  };
};

