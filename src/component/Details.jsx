import React from 'react';

const Details = () => {
    return ( 
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <p className="paragraph">
                    Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <ul className="list">
                    <li className="list-item">Close to the beach</li>
                    <li className="list-item">Close to beach</li>
                    <li className="list-item">Close to the beach</li>
                    <li className="list-item">Close to the beach</li>
                    <li className="list-item">Close to the beach</li>
                    <li className="list-item">Close the beach</li>
                    <li className="list-item">Close to the beach</li>
                    <li className="list-item">Close to the beach</li>
                </ul>
                <div className="recommend">
                    <p className="recommend-count">
                        lucy and 3 other friends recomend this hotel
                    </p>
                    <div className="recommend-friends">
                        <img src="img/user-3.jpg" alt="" className="recommend-photo" />
                        <img src="img/user-4.jpg" alt="" className="recommend-photo" />
                        <img src="img/user-5.jpg" alt="" className="recommend-photo" />
                        <img src="img/user-6.jpg" alt="" className="recommend-photo" />
                    </div>
                </div>
            </div>

            <div className="user-reviews">
                <figure className="review">
                    <blockquote className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className="review-user">
                        <img src="img/user-1.jpg" className="review-photo" alt=""/>
                        <div className="review-user-box">
                            <p className="review-user-name">Nick Smith</p>
                            <p className="review-user-date">Nov 21st, 2018</p>
                        </div>
                        <div className="review-rating">7.8</div>
                    </figcaption>
                </figure>
                <figure className="review">
                    <blockquote className="review-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                    </blockquote>
                    <figcaption className="review-user">
                        <img src="img/user-2.jpg" className="review-photo" alt=""/>
                        <div className="review-user-box">
                            <p className="review-user-name">Mary Thomas</p>
                            <p className="review-user-date">Nov 21st, 2018</p>
                        </div>
                        <div className="review-rating">9.3</div>
                    </figcaption>
                </figure>
                <button className="btn-inline">Show all <span>&rarr;</span></button>
            </div>
        </div>
     );
}
 
export default Details;