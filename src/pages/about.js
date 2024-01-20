import React from "react";
import './pages.css';
import Impressum from "../components/ImpressumComponent";

const About = () => {

    const navigateToTeam = () => {
        window.location.hash = '/team';
    };

    return (
        <>
            <div className="container div-padding-top">
                <h1 className="text-center mb-5 animate-heading">About Us</h1>
                <section className="py-5">
                    <ul className="timeline">
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Establishment of our company</h5>
                            <p className="text-white mb-2 fw-bold">02 November 2023</p>
                            <p className="text-white">
                                Founded on November 2, 2023, our company stands as a testament to passion, dedication,
                                and a vision for exceptional products. Committed to blending functionality with
                                aesthetics, we embark on an ongoing journey of innovation since our establishment.
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">V1 Cardholder</h5>
                            <p className="text-white mb-2 fw-bold">25 November 2023</p>
                            <p className="text-white">
                                Launched on November 25, 2023, the V1 Cardholder represents a milestone in our product
                                offerings. Crafted with precision and care, it seamlessly combines functionality and
                                style. With a plastic case and a distinctive custom logo plate made of aluminum, the V1
                                is a statement of modern design and practicality.
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">First Customer</h5>
                            <p className="text-white mb-2 fw-bold">11 January 2024</p>
                            <p className="text-white">
                                On January 11, 2024, we celebrated a momentous occasion – our first customer! This
                                marked the beginning of our journey towards providing quality products and exceptional
                                service. We extend our heartfelt gratitude to our inaugural customer for being a part of
                                the Mallet family. Cheers to many more milestones ahead!
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">V2 Cardholder</h5>
                            <p className="text-white mb-2 fw-bold">18 January 2024</p>
                            <p className="text-white">
                                Introducing the V2 Cardholder! Unveiled on January 18, 2024, our latest edition combines
                                functionality and style seamlessly. Crafted with precision, the V2 features a durable
                                plastic case housing a sleek aluminum slider and custom logo plate. Elevate your
                                card-carrying experience with this refined accessory designed for the modern individual.
                                Explore the next level of Mallet craftsmanship with the V2 Cardholder.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="py-5">
                    <h3>Our Mission and core Values</h3>
                    <p>At Mallet, our mission is to provide a solid solution for custom cardholders. We are
                        dedicated to change the market for robust cardholders. Our commitment to excellence drives us to
                        use
                        state of the art technology whilst watching our environmental footprint.</p>
                    <p><b>Integrity:</b> We uphold the
                        highest
                        standards
                        of integrity in all our actions. Transparency, honesty, and ethical practices are at the
                        core of
                        everything we do.
                    </p>
                    <p>
                        <b>Innovation:</b> We embrace
                        innovation as a
                        driving force for progress. Continuously seeking new and better ways, we challenge the
                        status
                        quo to provide cutting-edge solutions.
                    </p>
                    <p>
                        <b>Customer-Centric:</b> Our
                        customers are at
                        the
                        heart of our business. We are committed to understanding their needs and exceeding their
                        expectations through personalized service and exceptional products.
                    </p>
                    <p>
                        <b>Customer-Centric:</b> Our
                        customers are at
                        the
                        heart of our business. We are committed to understanding their needs and exceeding their
                        expectations through personalized service and exceptional products.
                    </p>
                    <p>
                        <b>Teamwork:</b> We value
                        collaboration and
                        believe in the collective strength of our diverse team. Together, we achieve more, fostering
                        a
                        supportive and inclusive work environment.
                    </p>
                    <p>
                        <b>Social Responsibility:</b> We
                        recognize
                        the
                        impact of our actions on the community and environment. Committed to sustainability and
                        corporate social responsibility, we strive to make a positive contribution to the world.
                    </p>
                </section>
                <section className="py-5">
                    <h3>Our Team</h3>
                    <div className="row">
                        <div className="col-sm-4 py-4">
                            <div className="card bg-transparent blur-background d-flex flex-column border-0">
                                <img src={process.env.PUBLIC_URL + '/images/team/Huerlimann.png'} alt="Simon" className="custom-img-styles"/>
                                <div className="container text-white">
                                    <h2><span className="animate-text">S</span>imon</h2>
                                    <h2><span className="animate-text">H</span>ürlimann</h2>
                                    <p className="title">CEO</p>
                                    <div className="pb-2">
                                        As the Chief Executive Officer, Simon is the visionary leader behind Mallet. With a
                                        keen understanding of the industry, he drives the company's strategic direction and ensures Mallet continues to excel.
                                    </div>
                                    <p></p>
                                    <p className="text-center">
                                        <a href="mailto:huerlimann@mallet.at?subject=Contact">
                                            <button className="btn btn-dark text-white bg-transparent blur-background border-white">Contact Me!</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 py-4">
                            <div className="card bg-transparent blur-background d-flex flex-column border-0">
                                <img src={process.env.PUBLIC_URL + '/images/team/Wautischer.png'} alt="Laurin" className="custom-img-styles"/>
                                <div className="container text-white">
                                    <h2><span className="animate-text">L</span>aurin</h2>
                                    <h2><span className="animate-text">W</span>autischer</h2>
                                    <p className="title">Web Developer</p>
                                    <div className="pb-2">
                                        Laurin is the creative force behind our digital presence. As a skilled web developer,
                                        he brings websites and online experiences to life, ensuring Mallet's online platform
                                        reflects the brand's innovation and user-friendly design.
                                    </div>
                                    <p></p>
                                    <p className="text-center">
                                        <a href="mailto:wautischer@mallet.at?subject=Contact">
                                            <button className="btn btn-dark text-white bg-transparent blur-background border-white">Contact Me!</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 py-4">
                            <div className="card bg-transparent blur-background d-flex flex-column border-0">
                                <img src={process.env.PUBLIC_URL + '/images/team/Eckl.png'} alt="Matthias" className="custom-img-styles"/>
                                <div className="container text-white">
                                    <h2><span className="animate-text">M</span>atthias</h2>
                                    <h2><span className="animate-text">E</span>ckl</h2>
                                    <p className="title">Product Designer</p>
                                    <div className="pb-2">
                                        Matthias is the engineering genius at Mallet. With a focus on mechanical design, he
                                        crafts innovative solutions, ensuring that Mallet's products not only look stunning
                                        but function flawlessly. <p>&#x200b;</p>
                                    </div>
                                    <p className="text-center">
                                        <a href="mailto:eckl@mallet.at?subject=Contact">
                                            <button className="btn btn-dark text-white bg-transparent blur-background border-white">Contact Me!</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-cols-12 text-center pt-2">
                        <button onClick={navigateToTeam} className="btn bg-white text-black blur-background border-white">See the full Team</button>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    );
};

export default About;
