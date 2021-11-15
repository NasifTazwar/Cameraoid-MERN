import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";

const SliderCard = ({review}) => {
    const ratingNumber = parseInt(review.rating);

    const starsRating = "1";
    let starString = "" ;
    let arr =[];
    let arr2 =[];
    for(let i=0 ;i< 5 ; i++){
        starString = starsRating;
           if(i<ratingNumber){

               arr[i] = starString;
           }
           else{
               arr2[i] = starString;
           } 
        
    }
    
    
    
    return (
        <div className="d-flex g-4 flex-column align-items-center w-75 mx-auto">
              <div className="" style={{ zIndex: 1 }}>
                <img className="profile-img" src={review.img} alt="" />
              </div>
              <div
                className="row flex-column gy-3 custom-card-container"
                style={{ color: "white" }}
              >
                <h4 className="mt-5">{review.name}</h4>
                <div className="border-bottom"></div>

                <h2 className="text-secondary">{
                    arr.map((arr3 , index)=>(
                        <span 
                        key={index}
                        className="orange-golden-text"><AiFillStar></AiFillStar></span>
                    ))
                }{
                    arr2.map((arr3, index)=>(
                        <span
                        key={index}
                        ><AiFillStar></AiFillStar></span>
                    ))
                }</h2>
                
                

                <p className="fst-italic" style={{fontSize:"15px"}}>
                  ‘‘‘ <small>{review.description.slice(0, 500)}</small> ’’’
                </p>
              </div>
            </div>
    );
};

export default SliderCard;