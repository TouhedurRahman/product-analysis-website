import React from 'react';
import CustomerReview from '../../hooks/CustomerReview';
import CustomLink from '../CustomLink/CustomLink';
import ProductContainer from '../ProductContainer/ProductContainer';
import UserReview from '../UserReview/UserReview';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = CustomerReview([]);

    return (
        <div>
            <div className="product-container">
                <ProductContainer></ProductContainer>
            </div>
            <div className="review-container">
                <h1>Customer Reviews (3)</h1>
                <div className="customer-review-homepage">
                    {
                        reviews.slice(0, 3).map(review => <UserReview
                            key={review.id}
                            review={review}
                        ></UserReview>)
                    }
                </div>
                <CustomLink to="/review">
                    <button className='see-all-reviews-btn'>See All Reviews</button>
                </CustomLink>
            </div>
        </div>
    );
};

export default Home;