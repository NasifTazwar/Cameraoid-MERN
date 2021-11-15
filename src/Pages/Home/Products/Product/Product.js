import React from 'react';
import { FaStar } from 'react-icons/fa';
import { BiBookAlt ,BiArrowFromLeft,BiDollar } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './Product.css';


const Product = ({product}) => {
    const { _id, name ,description , img ,price} = product;
    return (
        <div className="course-container">
                <div className="img-container mt-1">
                    <img className="course-img" src={img} alt="" />
                </div>
                <div className="course-details">
                    <h4 className="course-name">{name}</h4>
                    <p className="course-name">{description}</p>
                </div>
                <div className="cost-details">
                    <h4>${price}</h4>
                    <Link to={`/placeOrder/${_id}`}>
                    <button className="btn btn-lg btn-dark m-2 p-2 custom-button"> Buy Now <BiArrowFromLeft></BiArrowFromLeft>
                    </button>

                    </Link>
                </div>
        </div>
    );
};

export default Product;