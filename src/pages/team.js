import React from "react";
import './pages.css';
import Impressum from "../components/ImpressumComponent";

const Team = () => {
    //eckl, basti, prinzi
    return (
        <>
            <div className="container css_div_padding_top">
                <h1 className="text-center mb-5">Meet the Team</h1>
                <div className="row">
                    <div className="col-sm-4 mx-auto d-flex align-items-center">
                        <div className="card bg-dark">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Simon"/>
                            <div className="container text-white">
                                <h2>Simon Hürlimann</h2>
                                <p className="title">CEO &amp; Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><a href="mailto:office@mallet.at">hürlimann@mallet.at</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
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
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Stefan"/>
                            <div className="container text-white">
                                <h2>Stefan Schaar</h2>
                                <p className="title">Marketing &amp; Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><a href="mailto:office@mallet.at">schaar@mallet.at</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Thomas"/>
                            <div className="container text-white">
                                <h2>Thomas Hundsbichler</h2>
                                <p className="title">Finances &amp; Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><a href="mailto:office@mallet.at">hundsbichler@mallet.at</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Matthias"/>
                            <div className="container text-white">
                                <h2>Matthias Eckl</h2>
                                <p className="title">Mechanical Engineer &amp; Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><a href="mailto:office@mallet.at">eckl@mallet.at</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Maximilian"/>
                            <div className="container text-white">
                                <h2>Maximilian Prinz</h2>
                                <p className="title">Intern</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><a href="mailto:office@mallet.at">prinz@mallet.at</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-dark">
                            <img src={process.env.PUBLIC_URL + '/images/android-chrome-512x512.png'} alt="Bastian"/>
                            <div className="container text-white">
                                <h2>Bastian Krassnitzer</h2>
                                <p className="title">Design &amp; Founder</p>
                                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                                <p><a href="mailto:office@mallet.at">krassnitzer@mallet.at</a></p>
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