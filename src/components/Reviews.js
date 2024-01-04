import React from "react";
import './components.css'

const Reviews = () => {
    return (
        <div id="review-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators d-none d-sm-flex">
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="3"></button>
            </div>

            <div className="carousel-inner custom-height-reviews">
                <div className="carousel-item active">
                    <div className="card text-white bg-card border-0">
                        <div className="card-body">
                            <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'}
                                                             width={100} alt="rating"/></p>
                            <p className="card-text">"Exceptional craftsmanship and attention to detail. Highly
                                recommended!"</p>
                            <p className="card-subtitle">- Manuela Gloeckner, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-card border-0">
                        <div className="card-body">
                            <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'}
                                                             width={100} alt="rating"/></p>
                            <p className="card-text">"Exceptional craftsmanship and attention to detail. Highly
                                recommended!"</p>
                            <p className="card-subtitle">- Lukas Schiffer, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-card border-0">
                        <div className="card-body">
                            <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'}
                                                             width={100} alt="rating"/></p>
                            <p className="card-text">Absolutely delighted with my new cardholder! The craftsmanship
                                is
                                truly unmatched, showcasing meticulous attention to detail. A must-have for
                                individuals
                                who value both quality and style. Highly recommend this exquisite accessory!</p>
                            <p className="card-subtitle">- Klaudia Kuefer, Germany</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-card border-0">
                        <div className="card-body">
                            <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'}
                                                             width={100} alt="rating"/></p>
                            <p className="card-text">The cardholder's quality is outstanding, and the attention to
                                detail is remarkable. I've received numerous compliments. Highly recommend this
                                product!"</p>
                            <p className="card-subtitle">- Henry Baker, United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Reviews;