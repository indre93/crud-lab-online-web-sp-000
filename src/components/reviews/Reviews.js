import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const filteredReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);

    return (
      <div>
        <ul>
          {filteredReviews.map(review =>
            <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />
          )}
        </ul>
      </div>
    );
  }
};

export default Reviews;
