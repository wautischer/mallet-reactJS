import React from "react";
import './about.css';
import Impressum from "../components/ImpressumComponent";

const About = () => {

    const navigateToTeam = () => {
        window.location.hash = '/team';
    };

    return (
        <>
            <div className="container css_div_padding_top">
                <h1 className="text-center mb-5">About Us</h1>
                <section className="py-5">
                    <ul className="timeline">
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Establishment of our company</h5>
                            <p className="text-white mb-2 fw-bold">02 November 2023</p>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                                necessitatibus adipisci, ad alias, voluptate pariatur officia
                                repellendus repellat inventore fugit perferendis totam dolor
                                voluptas et corrupti distinctio maxime corporis optio?
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">V1 Cardholder</h5>
                            <p className="text-white mb-2 fw-bold">25 November 2023</p>
                            <p className="text-white">
                                Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
                                aliquet laoreet sapien, eget pulvinar lectus maximus vel.
                                Phasellus suscipit porta mattis.
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">First Customer</h5>
                            <p className="text-white mb-2 fw-bold">11 January 2024</p>
                            <p className="text-white">
                                Orci varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
                                facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
                                convallis. Quisque consectetur purus erat, et ullamcorper sapien
                                tincidunt vitae.
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">V2 Cardholder</h5>
                            <p className="text-white mb-2 fw-bold">18 January 2024</p>
                            <p className="text-white">
                                Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
                                et urna sit amet massa dapibus tristique non finibus ligula. Nam
                                pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
                                vulputate mattis.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="py-5">
                    <h3>Mission and Values</h3>
                    <p>At Mallet, our mission is to provide a solid solution for custom cardholders. We are
                        dedicated to change the market for robust cardholders. Our commitment to excellence drives us to
                        use
                        state of the art technology whilst watching our environmental footprint.</p>
                    <h3>Our core Values</h3>
                    <ol className="list-group list-group-numbered mb-5">
                        <li className="list-group-item bg-dark text-white"><b>Integrity:</b> We uphold the highest
                            standards
                            of integrity in all our actions. Transparency, honesty, and ethical practices are at the
                            core of
                            everything we do.
                        </li>
                        <li className="list-group-item bg-dark text-white"><b>Innovation:</b> We embrace innovation as a
                            driving force for progress. Continuously seeking new and better ways, we challenge the
                            status
                            quo to provide cutting-edge solutions.
                        </li>
                        <li className="list-group-item bg-dark text-white"><b>Customer-Centric:</b> Our customers are at
                            the
                            heart of our business. We are committed to understanding their needs and exceeding their
                            expectations through personalized service and exceptional products.
                        </li>
                        <li className="list-group-item bg-dark text-white"><b>Teamwork:</b> We value collaboration and
                            believe in the collective strength of our diverse team. Together, we achieve more, fostering
                            a
                            supportive and inclusive work environment.
                        </li>
                        <li className="list-group-item bg-dark text-white"><b>Social Responsibility:</b> We recognize
                            the
                            impact of our actions on the community and environment. Committed to sustainability and
                            corporate social responsibility, we strive to make a positive contribution to the world.
                        </li>
                    </ol>
                </section>
                <section className="py-5">
                    <h3>Our Team</h3>
                    <div className="row">
                        <div className="col-sm-4 py-4">
                            <div className="card bg-dark">
                                <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Simon"/>
                                <div className="container text-white">
                                    <h2>Simon Hürlimann</h2>
                                    <p className="title">Chief Executive Officer &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p><a href="mailto:office@mallet.at">hürlimann@mallet.at</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 py-4">
                            <div className="card bg-dark">
                                <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Laurin"/>
                                <div className="container text-white">
                                    <h2>Laurin Wautischer</h2>
                                    <p className="title">Web Developer &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p><a href="mailto:office@mallet.at">wautischer@mallet.at</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 py-4">
                            <div className="card bg-dark">
                                <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'}
                                     alt="Matthias"/>
                                <div className="container text-white">
                                    <h2>Matthias Eckl</h2>
                                    <p className="title">Mechanical Engineer &amp; Founder</p>
                                    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                    <p><a href="mailto:office@mallet.at">eckl@mallet.at</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-cols-2 text-center pt-2">
                        <button onClick={navigateToTeam} className="btn btn-dark text-white">See the full Team</button>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    );
};

export default About;
