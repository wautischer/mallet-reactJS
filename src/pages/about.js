import React from "react";
import './pages.css';

const About = () => {
    return (
        <div className="container css_div_padding_top">
            <h1 className="text-center mb-5">Mallet: Crafting Excellence</h1>

            <div className="row">
                <div className="col-md-6">
                    <section className="mb-4">
                        <h2>Company History</h2>
                        <p>
                            Mallet, a junior company, started its journey with a passion for crafting custom cardholders.
                            Since our inception, we have achieved significant milestones and garnered recognition for our dedication to quality craftsmanship.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2>Mission and Values</h2>
                        <p>
                            Our mission is to provide exceptional and personalized cardholder solutions.
                            We value craftsmanship, innovation, and customer satisfaction.
                        </p>
                    </section>
                </div>

                <div className="col-md-6">
                    <section className="mb-4">
                        <h2>Team Members</h2>
                        <p>
                            Meet the passionate individuals behind Mallet's success. Our diverse team brings a wealth of experience and creativity to every project.
                        </p>
                    </section>

                    <section className="mb-4">
                        <h2>Company Culture</h2>
                        <p>
                            At Mallet, we foster a culture of collaboration, creativity, and continuous improvement.
                            Join us in creating a positive impact through craftsmanship and innovation.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
