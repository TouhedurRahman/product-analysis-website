import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='qna'>
            <div>
                <h1 className='question'>What is Context API?</h1>
                <h4 className='answer'>
                    The Context API is a React framework that lets you share unique facts and helps you solve props-drilling problems at various levels of your project. It is a solution for props drilling. Context api provides a way to split those props between two components without passing them via the intervening components. It is easy way for props drilling which makes yourn project so much easier.
                </h4>
            </div>
            <hr />
            <div>
                <h1 className='question'>What is semantic tag?</h1>
                <h4 className='answer'>
                    A semantic tag defining feature is that it communicates its meaning to both the developer and the browser. Its content is clearly defined by these aspects. Human and machine can esily understand the emantic tag because it is a self describing tag. Both the browser and the developer will understand what it means. Example: form, article, table, nav etc.
                </h4>
            </div>
        </div>
    );
};

export default Blogs;