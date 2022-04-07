import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';



export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        user:'',
        review:''
      },
      review: {
        rating: 3,
      }
    }
  };

  onUserChanged = (event) => {
    this.setState(state => {
      const formDataCopy = {...state.formData};
      formDataCopy.user = event.target.value;
      return {formData: formDataCopy}
    })
  };

  onReviewChanged = (event) => {
    this.setState(state => {
      const formDataCopy = {...state.formData};
      formDataCopy.review = event.target.value;
      return {formData: formDataCopy}
    })
  };

  onRatingChanged = (event) => {
    this.setState(state => {
      const reviewCopy = {...state.review};
      reviewCopy.rating = parseInt(event.target.value);
      return {review: reviewCopy}
    })
  };

  onSaveButtonClicked = () => {
    const newReview = {
      id: "id" + Math.random().toString(16).slice(2),
      user: this.state.formData.user,
      review: this.state.formData.review,
      rating: this.state.review.rating,
      movieId: this.props.movie.id,      
    }
    this.props.onSubmit(newReview);
    this.setState({formData:{user:'', review:''}});
    this.setState({review: {rating:3}});
  };

  render() {

    return (
      <>
      <h6>Add your Review:</h6>
      <br/>
      <Box sx={{'& > legend': { mt: 2 },}}>
      <Rating name="simple-controlled" value={this.state.review.rating} onChange={this.onRatingChanged}/>
      </Box>
      <label>User Name</label>
      <input type='text' className='form-control' value={this.state.formData.user} onChange={this.onUserChanged}/>
      <label>Review</label>
      <textarea className='form-control' rows='3' value={this.state.formData.review} onChange={this.onReviewChanged}/>
      <br/>
      <button className="btn btn-primary" type="button" onClick={this.onSaveButtonClicked}>Save</button>
      </>
    )
  };
}
