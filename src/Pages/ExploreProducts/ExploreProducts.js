import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Home/Products/Product/Product';
import './ExploreProducts.css';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // fetch('/products.json')
        fetch('https://lit-refuge-91293.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="services-container py-5">
            <div id="products">
            <h1 className="py-5">Explore All The Powerful Cameras</h1>
            <Container>
                <Row className="row-cols-lg-4 row-cols-md-3 row-cols-sm-1 row-cols-1 row-services justify-content-center">
                        {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                        }
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default ExploreProducts;