import React, { Component } from 'react';

class HotelView extends Component {
    render() { 
        return ( 
            <div>
                <div className="gallery">
                    <figure className="gallery-item">
                        <img src="img/hotel-1.jpg" alt="" className="gallery-photo"/>
                    </figure>
                    <figure className="gallery-item">
                        <img src="img/hotel-2.jpg" alt="" className="gallery-photo"/>
                    </figure>
                    <figure className="gallery-item">
                        <img src="img/hotel-3.jpg" alt="" className="gallery-photo"/>
                    </figure>
                </div>
                <div className="overview">
                    <h1 className="overview-heading">
                        Hotel Las Palmas
                    </h1>
                    <div className="overview-stars">
                        <svg className="overview-icon-star">
                            <use href="img/sprite.svg#icon-star"></use>
                        </svg>
                        <svg className="overview-icon-star">
                            <use href="img/sprite.svg#icon-star"></use>
                        </svg>
                        <svg className="overview-icon-star">
                            <use href="img/sprite.svg#icon-star"></use>
                        </svg>
                        <svg className="overview-icon-star">
                            <use href="img/sprite.svg#icon-star"></use>
                        </svg>
                        <svg className="overview-icon-star">
                            <use href="img/sprite.svg#icon-star"></use>
                        </svg>
                    </div>
                    <div className="overview-location">
                        <svg className="overview-icon-location">
                            <use href="img/sprite.svg#icon-location-pin"></use>
                        </svg>
                        <button className="btn-inline">Albufera, Portugal</button>
                    </div>
                    <div className="overview-rating">
                        <div className="overview-rating-avg">8.6</div>
                        <div className="overview-rating-count">429 vote</div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default HotelView;