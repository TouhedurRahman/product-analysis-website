import React from 'react';
import { Card } from 'react-bootstrap';
import './ProductContainer.css';

const ProductContainer = () => {
    return (
        <div className="product">
            <div className="product-details">
                <h4>Asus ROG Strix G15 G513IE Ryzen 7 4800H RTX 3050Ti 4GB Graphics 15.6" FHD Gaming Laptop</h4>

                <br />

                <p>
                    Key Features: <br />
                    MPN: HN037T <br />
                    Model: ROG Strix G15 G513IE <br />
                    AMD Ryzen 7 4800H Processor 2.9 GHz (8M Cache, up to 4.2 GHz) <br />
                    8GB DDR4 3200MHz RAM <br />
                    512GB M.2 NVMe PCIe 3.0 SSD <br />
                    NVIDIA GeForce RTX 3050Ti 4GB Graphics <br />
                </p>

                <br />

                <button className='live-demo-btn'>Live Demo</button>
            </div>
            <div className="product-picture">
                <img src='images/gaming-pc.png' alt='Gaming-PC...'></img>
            </div>
        </div>
    );
};

export default ProductContainer;