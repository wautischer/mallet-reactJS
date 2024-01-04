import React from "react";
import './pages.css';
import Impressum from "../components/ImpressumComponent";

const Faq = () => {
    return (
        <>
            <div className={"container-fluid div-padding-top"}>
                <h1 className="text-center mb-5 animate-heading">Frequently asked Questions</h1>
                <section className="py-5">
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>What is <span
                            className="animate-text">Mallet</span>?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Mallet is a brand known for crafting personalized and
                            excellently designed cardholders. Our commitment to quality and attention to detail ensures
                            each cardholder is a unique blend of functionality and style. We take pride in providing
                            distinctive accessories that make a statement about individuality and sophistication.
                            Discover the artistry of Mallet and experience cardholders that go beyond the ordinary.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>How does the <span
                            className="animate-text">Mallet</span> Cardholder work?</b>
                        </h3></div>
                        <div className="col-sm-4 text-start"><p>The Mallet Cardholder features a sliding mechanism on
                            the side, providing convenient access to seven card slots. This innovative design allows for
                            easy storage and retrieval of your essential cards, ensuring practicality and efficiency.
                            The sleek and functional construction of the cardholder reflects Mallet's commitment to
                            blending craftsmanship with modern utility, making it an ideal accessory for those who
                            appreciate both style and functionality.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Where can I buy the <span
                            className="animate-text">Mallet</span> Cardholder?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Presently, our Mallet Cardholders are exclusively
                            available for direct pickup at our manufacturing facility. However, to enhance accessibility
                            and cater to a wider audience, we are diligently working on making our Cardholders available
                            for online purchase. This upcoming option will offer customers the convenience of acquiring
                            our products from the comfort of their homes. Keep an eye out for our online release, as we
                            are committed to providing a streamlined and user-friendly experience for our valued
                            customers.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>How is the <span
                            className="animate-text">Mallet</span> Cardholder
                            produced?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Our team synergizes to bring the Mallet Cardholder to
                            life, employing innovative techniques such as laser cutting. We take pride in using recycled
                            materials, aligning with our commitment to sustainability. This collaborative effort ensures
                            that each cardholder is a unique blend of craftsmanship and environmental consciousness.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Why should one buy the <span
                            className="animate-text">Mallet</span> Cardholder?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>The Mallet Cardholder stands out for its meticulous
                            craftsmanship, functional design with a side slider for seven cards, and durable, premium
                            materials. Its sleek and minimalistic style, combined with future online availability, makes
                            it a smart and stylish choice for those seeking a compact and reliable accessory.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Where is the <span
                            className="animate-text">Mallet</span> Cardholder
                            manufactured?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>The Mallet Cardholder is crafted through our dedicated
                            efforts at the Makerspace Carinthia, where we utilize state-of-the-art facilities and
                            collaborate with skilled professionals. Working hands-on in this creative environment, we
                            employ innovative techniques and quality materials to bring the Mallet Cardholder to life.
                            Our direct involvement in the production process ensures meticulous attention to detail and
                            the delivery of a finely crafted cardholder that meets our standards of excellence.</p>
                        </div>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    );
};

export default Faq;
