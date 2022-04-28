import React from 'react';
import './/UserReview.css';

const UserReview = (props) => {
    const { img, name, user_review, ratings } = props.review;

    return (
        <div>
            <div className='review'>
                <img src={img} alt="" />
                <div className='review-details'>
                    <h2><b><i>{name}</i></b></h2>
                    <h5>{user_review}</h5>
                    <br />
                    <h5>Ratings: {ratings}</h5>
                    <button className='user-profile-btn'>User Profile</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default UserReview;