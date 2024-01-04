import React from "react";
import './pages.css';
import Impressum from "../components/ImpressumComponent";

const Team = () => {
    return (
        <>
            <div className="container div-padding-top">
                <h1 className="text-center mb-5 animate-heading">Meet the Team</h1>
                <div className="row pt-5">
                    <div className="col-sm-4 mx-auto d-flex align-items-center">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Simon"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">S</span>imon <span className="animate-text">H</span>ürlimann
                                </h2>
                                <p className="title">CEO &amp; Founder</p>
                                <p className="custom-introduction-height">As the Chief Executive Officer, Simon is the visionary leader behind Mallet. With a
                                    keen understanding of the industry and a passion for innovation, he drives the
                                    company's strategic direction and ensures Mallet continues to excel.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:huerlimann@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">huerlimann@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Laurin"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">L</span>aurin <span className="animate-text">W</span>autischer
                                </h2>
                                <p className="title">Web Developer &amp; Founder</p>
                                <p className="custom-introduction-height">Laurin is the creative force behind our digital presence. As a skilled web developer,
                                    he brings websites and online experiences to life, ensuring Mallet's online platform
                                    reflects the brand's innovation and user-friendly design.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:wautischer@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">wautischer@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Stefan"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">S</span>tefan <span className="animate-text">S</span>chaar
                                </h2>
                                <p className="title">Marketing &amp; Founder</p>
                                <p className="custom-introduction-height">Stefan is our marketing maestro, crafting strategies to showcase Mallet to the world.
                                    Through creative campaigns and strategic initiatives, he ensures our products are
                                    not just seen but celebrated in the market.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:schaar@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">schaar@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Thomas"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">T</span>homas <span className="animate-text">H</span>undsbichler
                                </h2>
                                <p className="title">Finances &amp; Founder</p>
                                <p className="custom-introduction-height">Thomas manages the financial heartbeat of Mallet. As the Finance expert, he ensures
                                    the company's fiscal health, providing stability and enabling growth through sound
                                    financial management.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:hundsbichler@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">hundsbichler@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Matthias"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">M</span>atthias <span
                                    className="animate-text">E</span>ckl</h2>
                                <p className="title">Mechanical Engineer &amp; Founder</p>
                                <p className="custom-introduction-height">Matthias is the engineering genius at Mallet. With a focus on mechanical design, he
                                    crafts innovative solutions, ensuring that Mallet's products not only look stunning
                                    but function flawlessly.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:eckl@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">eckl@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Maximilian"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">M</span>aximilian <span className="animate-text">P</span>rinz</h2>
                                <p className="title">Marketing</p>
                                <p className="custom-introduction-height">Maximilian, alongside Stefan, plays a crucial role in our marketing endeavors. His creative insights and market understanding contribute to the success of Mallet's marketing campaigns.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:prinz@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">prinz@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4 mb-4">
                        <div className="card bg-dark custom-card-height d-flex flex-column">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Bastian"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">B</span>astian <span
                                    className="animate-text">K</span>rassnitzer</h2>
                                <p className="title">Design &amp; Founder</p>
                                <p className="custom-introduction-height">Bastian Krassnitzer, our creative designer, shapes Mallet's artistic identity through
                                    distinctive logos. His keen eye for aesthetics ensures that each Mallet product is
                                    not just functional but also a unique piece of art.</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                                <a href="mailto:krassnitzer@mallet.at?subject=Contact">
                                    <button className="btn btn-dark text-white">krassnitzer@mallet.at</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Impressum/>
        </>
    );
}
export default Team;