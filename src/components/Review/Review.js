import React from 'react';
import CustomerReview from '../../hooks/CustomerReview';
import UserReview from '../UserReview/UserReview';
import './Review.css';

const Review = () => {
    const [reviews, setReviews] = CustomerReview([]);

    return (
        <div className='review-container'>
            <h1>What our customers say..!</h1>
            <div className="customer-review">
                {
                    reviews.map(review => <UserReview
                        key={review.id}
                        review={review}
                    ></UserReview>)
                }
            </div>
        </div>
    );
};

export default Review;