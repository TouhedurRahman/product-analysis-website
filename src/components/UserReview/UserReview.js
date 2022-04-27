import React from 'react';
import './/UserReview.css';

const UserReview = (props) => {
    const { img, name, user_review, ratings } = props.review;

    return (
        <div>
            <div className='review'>
                <img src={img} alt="" />
                <div className='review-details'>
                    <h3>{name}</h3>
                    <h4>{user_review}</h4>
                    <h4>Ratings: {ratings}</h4>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default UserReview;