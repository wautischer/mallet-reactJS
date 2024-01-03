import React from "react";

const Reviews = () => {
    return (
        <div className="container">
            <h2>Reviews</h2>
            <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card text-white bg-card border-0">
                            <div className="card-body">
                                <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'} width={100} alt="rating"/></p>
                                <p className="card-text">"Exceptional craftsmanship and attention to detail. Highly recommended!"</p>
                                <p className="card-subtitle">- Satisfied Customer 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-white bg-card border-0">
                            <div className="card-body">
                                <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'} width={100} alt="rating"/></p>
                                <p className="card-text">"Exceptional craftsmanship and attention to detail. Highly recommended!"</p>
                                <p className="card-subtitle">- Satisfied Customer 2</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card text-white bg-card border-0">
                            <div className="card-body">
                                <p className="card-img-top"><img src={process.env.PUBLIC_URL + '/images/rating.png'} width={100} alt="rating"/></p>
                                <p className="card-text">"Exceptional craftsmanship and attention to detail. Highly recommended!"</p>
                                <p className="card-subtitle">- Satisfied Customer 3</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Reviews;