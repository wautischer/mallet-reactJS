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
                                <p className="text-center">
                                    <a href="mailto:huerlimann@mallet.at?subject=Contact">
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
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
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Schaar.png'} alt="Stefan" className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">S</span>tefan</h2>
                                <h2><span className="animate-text">S</span>chaar</h2>
                                <p className="title">Ressource Manager</p>
                                <div className="pb-2">
                                    Stefan Schaar serves as the Resource Manager at Mallet, overseeing the efficient production of our custom cardholders.
                                    His professionalism and strong team collaboration make him a valuable asset to the Mallet team.
                                </div>
                                <p></p>
                                <p className="text-center">
                                    <a href="mailto:schaar@mallet.at?subject=Contact">
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Hundsbichler.png'} alt="Thomas" className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">T</span>homas</h2>
                                <h2><span className="animate-text">H</span>undsbichler</h2>
                                <p className="title">CFO</p>
                                <div className="pb-2">
                                    Thomas manages the financial heartbeat of Mallet. As the Finance expert, he ensures
                                    the company's fiscal health, providing stability and enabling growth through sound
                                    financial management.
                                </div><p>&#x200b;</p>
                                <p className="text-center">
                                    <a href="mailto:hundsbichler@mallet.at?subject=Contact">
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
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
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Prinz.png'} alt="Maximilian" className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">M</span>aximilian</h2>
                                <h2><span className="animate-text">P</span>rinz</h2>
                                <p className="title">Facility Manager</p>
                                <div className="pb-2">
                                    Maximilian Prinz, our Facility Manager, plays a key role in ensuring seamless operations and cultivating a positive team environment through his attention to detail and organizational skills.
                                    <p>&#x200b;</p>
                                </div>
                                <p className="text-center">
                                    <a href="mailto:prinz@mallet.at?subject=Contact">
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4 mb-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Krassnitzer.png'} alt="Bastian" className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">B</span>astian</h2>
                                <h2><span className="animate-text">K</span>rassnitzer</h2>
                                <p className="title">Designer</p>
                                <div className="pb-2">
                                    Bastian Krassnitzer, our creative designer, shapes Mallet's artistic identity through
                                    distinctive logos. His keen eye for aesthetics ensures that each Mallet product is
                                    not just functional but also a unique piece of art.
                                </div>
                                <p></p>
                                <p className="text-center">
                                    <a href="mailto:krassnitzer@mallet.at?subject=Contact">
                                        <button className="btn text-white bg-transparent blur-background border-white">Contact Me!</button>
                                    </a>
                                </p>
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