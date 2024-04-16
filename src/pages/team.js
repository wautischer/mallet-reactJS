import React from "react";
import './pages.css';
import Impressum from "../components/Impressum";

const Team = () => {
    return (
        <>
            <div className="container div-padding-top">
                <h1 className="text-center mb-5 animate-heading">Das Team</h1>
                <div className="row pt-5">
                    <div className="col-sm-4 py-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Foto_Simon_Hurlimann.jpg'} alt="Simon"
                                 className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">S</span>imon</h2>
                                <h2><span className="animate-text">H</span>ürlimann</h2>
                                <p className="title">CEO & Produkt Designer</p>
                                <div className="pb-5">Zusätzlich zu seinen Pflichten als Chief Executive Officer trägt er auch die Verantwortung für die Gestaltung der Produkte.</div>
                                <p className="text-center">
                                    <a href="mailto:huerlimann@mallet.at?subject=Contact">
                                        <button
                                            className="btn text-white bg-transparent blur-background border-white">Hier Kontaktieren!
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Foto_Laurin_Wautischer.jpg'}
                                 alt="Laurin"
                                 className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">L</span>aurin</h2>
                                <h2><span className="animate-text">W</span>autischer</h2>
                                <p className="title">Web Entwicklung</p>
                                <div className="pb-2">Als Webentwicklungs-Enthusiast ist er die passende Person für die Gestaltung der Website. Zusätzlich ist er, neben Simon, für das Produktdesign verantwortlich.</div>
                                <p></p>
                                <p className="text-center">
                                    <a href="mailto:wautischer@mallet.at?subject=Contact">
                                        <button
                                            className="btn text-white bg-transparent blur-background border-white">Hier Kontaktieren!
                                        </button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 py-4">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/team/Foto_Thomas_Hundsbichler.jpg'} alt="Thomas"
                                 className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">T</span>homas</h2>
                                <h2><span className="animate-text">H</span>undsbichler</h2>
                                <p className="title">Finanzen</p>
                                <div className="pb-2"></div>
                                <p>&#x200b;</p>
                                <p className="text-center">
                                    <a href="mailto:hundsbichler@mallet.at?subject=Contact">
                                        <button
                                            className="btn text-white bg-transparent blur-background border-white">Hier Kontaktieren!</button>
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