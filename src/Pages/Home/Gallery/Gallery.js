import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="container-fluid pt-5 px-0 border-top">
            <h3 className="pb-5">Gallery</h3>
            <div className="row g-0">
                <img className="col-lg-6 img-fluid" src="https://images.unsplash.com/photo-1611307742746-43cbea512c37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                <img className="col-lg-6 img-fluid" src="https://cdn.pixabay.com/photo/2019/08/15/19/18/nature-4408716_960_720.jpg" alt="" />
                <img className="col-lg-6 img-fluid" src="https://c4.wallpaperflare.com/wallpaper/566/119/596/national-park-ama-dablam-orange-sky-evening-wallpaper-preview.jpg" alt="" />
                <img className="col-lg-6 img-fluid" src="https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg" alt="" />
                <img className="col-lg-6 img-fluid" src="https://image.freepik.com/free-photo/whitetail-deer-standing-autumn-wood_167946-143.jpg" alt="" />
                <img className="col-lg-6 img-fluid" src="https://cache.marriott.com/marriottassets/marriott/IAGAF/iagaf-attraction-americanfalls-8046-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*" alt="" />
            </div>
        </div>
    );
};

export default Gallery;