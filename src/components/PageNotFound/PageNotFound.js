import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div>
            <img src="./images/4O4-not-found.png" alt="" />
            <br />
            <CustomLink to='home'>
                <button className='home-btn'>Go to Home</button>
            </CustomLink>
        </div>
    );
};

export default PageNotFound;