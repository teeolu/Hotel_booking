import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="header">
                <img src="img/logo.png" alt="Trillo logo" className="logo" />

                <form action="#" className="search" >
                    <input type="text" className="search-input" placeholder="Search for hotels" />
                    <button className="search-button">
                        <svg className="search-icon">
                            <use href="img/sprite.svg#icon-magnifying-glass" />
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav-icon-box">
                        <svg className="user-nav-icon">
                            <use href="img/sprite.svg#icon-bookmark" />
                        </svg>
                        <span className="user-nav-notification">13</span>
                    </div>
                    <div className="user-nav-icon-box">
                        <svg className="user-nav-icon">
                            <use href="img/sprite.svg#icon-chat" />
                        </svg>
                        <span className="user-nav-notification">3</span>
                    </div>
                    <div className="user-nav-icon-box">
                        <img src="img/user.jpg" alt="" className="user-nav-user-photo"/>
                        <span className="user-nav-user-name">Jonas</span>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default Header;