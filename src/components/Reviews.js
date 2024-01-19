import React from "react";
import './components.css'

const Reviews = () => {
    return (
        <div id="review-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators d-none d-sm-flex">
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="0"
                        className="active"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="4"></button>
                <button type="button" data-bs-target="#review-carousel" data-bs-slide-to="5"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="card text-white bg-transparent blur-background border-0">
                        <div className="card-body">
                            <p className="card-title">⭐⭐⭐⭐⭐ Product: <b>Cardholder V1.0</b></p>
                            <p className="card-text"><q>
                                Love my Mallet Cardholder! Stylish, practical, and eco-friendly. Holds 7 cards with
                                ease, and the recycled materials add a great touch. Top-notch craftsmanship and slim
                                design make it a perfect choice. Highly recommended!</q></p>
                            <p className="card-subtitle">- Manuela Gloeckner, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-transparent blur-background border-0">
                        <div className="card-body">
                            <p className="card-title">⭐⭐⭐⭐ Product: <b>Cardholder V1.0</b></p>
                            <p className="card-text"><q>
                                The Mallet Cardholder offers a unique blend of style and functionality. The slider
                                mechanism is smooth, and the compact design makes it convenient to carry. While the
                                materials are good, I would have loved more color options. Overall, a solid choice for
                                those seeking a practical and well-designed cardholder.</q></p>
                            <p className="card-subtitle">- Barbara Kortig, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-transparent blur-background border-0">
                        <div className="card-body">
                            <p className="card-title">⭐⭐⭐⭐⭐ Product: <b>Cardholder V1.0</b></p>
                            <p className="card-text"><q>
                                The Mallet Cardholder is a game-changer! The sleek design and innovative slider for easy
                                card access make it stand out. The craftsmanship is impressive, and the use of recycled
                                materials aligns with my eco-conscious values. An excellent addition to my everyday
                                carry. Worth every penny!</q></p>
                            <p className="card-subtitle">- Lukas Schiffer, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-transparent blur-background border-0">
                        <div className="card-body">
                            <p className="card-title">⭐⭐⭐⭐⭐ Product: <b>Cardholder V1.0</b></p>
                            <p className="card-text"><q>Absolutely delighted with my new cardholder! The craftsmanship
                                is truly unmatched, showcasing meticulous attention to detail. A must-have for
                                individuals
                                who value both quality and style. Highly recommend this exquisite accessory!</q></p>
                            <p className="card-subtitle">- Klaudia Kuefer, Germany</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-transparent blur-background border-0">
                        <div className="card-body">
                            <p className="card-title">⭐⭐⭐⭐ Product: <b>Cardholder V1.0</b></p>
                            <p className="card-text"><q>
                                Impressed with the Mallet Cardholder's build quality and the thoughtful approach to
                                sustainability. The slider works seamlessly, and the recycled materials add an
                                eco-friendly touch. However, a bit more capacity for additional cards would have been
                                perfect. Still, a reliable choice for anyone in need of a modern and environmentally
                                conscious cardholder.</q></p>
                            <p className="card-subtitle">- Paul Gaertner, Austria</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card text-white bg-transparent blur-background border-0">
                        <div className="card-body">
                            <p className="card-title">⭐⭐⭐⭐⭐ Product: <b>Cardholder V1.0</b></p>
                            <p className="card-text"><q>The cardholder's quality is outstanding, and the attention to
                                detail is remarkable. I've received numerous compliments. Highly recommend this
                                product!</q></p>
                            <p className="card-subtitle">- Henry Baker, United Kingdom</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Reviews;