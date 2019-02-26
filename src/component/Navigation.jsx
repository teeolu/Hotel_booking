import React from 'react';

const Navigation = () => {
    return ( 
        <ul className="side-nav">
            <li className="side-nav-item side-nav-item-active">
                <a href="#" className="side-nav-link">
                    <svg className="side-nav-icon">
                        <use href="img/sprite.svg#icon-home"></use>
                    </svg>
                    <span>Hotel</span>
                </a>
            </li>
            <li className="side-nav-item">
                <a href="#" className="side-nav-link">
                    <svg className="side-nav-icon">
                        <use href="img/sprite.svg#icon-aircraft-take-off"></use>
                    </svg>
                    <span>Flight</span>
                </a>
            </li>
            <li className="side-nav-item">
                <a href="#" className="side-nav-link">
                    <svg className="side-nav-icon">
                        <use href="img/sprite.svg#icon-key"></use>
                    </svg>
                    <span>Car rentals</span>
                </a>
            </li>
            <li className="side-nav-item">
                <a href="#" className="side-nav-link">
                    <svg className="side-nav-icon">
                        <use href="img/sprite.svg#icon-map"></use>
                    </svg>
                    <span>Tours</span>
                </a>
            </li>
            <div className="legal">
                &copy; 2017
            </div>
        </ul>
     );
}
 
export default Navigation;