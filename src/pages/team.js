import React from "react";
import './pages.css';
import Impressum from "../components/Impressum";

const Team = () => {
    return (
        <>
            <div className="container div-padding-top">
                <h1 className="text-center mb-5 animate-heading">Das Team</h1>
                <div className="row pt-5">
                    <div className="col-sm-4 mx-auto d-flex align-items-center">
                        <div className="card bg-transparent blur-background d-flex flex-column border-0">
                            <img src={process.env.PUBLIC_URL + '/images/logo/android-chrome-512x512.png'} alt="Simon"
                                 className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">S</span>imon</h2>
                                <h2><span className="animate-text">H</span>ürlimann</h2>
                                <p className="title">CEO & Produkt Designer</p>
                                <div className="pb-2">
                                    Als Chief Executive Officer ist Simon der visionäre Anführer hinter Mallet. Mit
                                    einem tiefen Verständnis für die Branche lenkt er die strategische Ausrichtung des
                                    Unternehmens und stellt sicher, dass Mallet weiterhin herausragende Leistungen
                                    erbringt. Darüber hinaus ist er unser Produktdesigner.
                                </div>
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
                            <img src={process.env.PUBLIC_URL + '/images/logo/android-chrome-512x512.png'}
                                 alt="Laurin"
                                 className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">L</span>aurin</h2>
                                <h2><span className="animate-text">W</span>autischer</h2>
                                <p className="title">Web Entwicklung & Prototyp</p>
                                <div className="pb-2">
                                    Laurin ist die kreative Kraft hinter unserer digitalen Präsenz. Als erfahrener
                                    Webentwickler haucht er Websites und Online-Erlebnissen Leben ein, und gewährleistet
                                    somit, dass die Online-Plattform von Mallet die Innovation und benutzerfreundliche
                                    Gestaltung der Marke widerspiegelt.
                                </div>
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
                            <img src={process.env.PUBLIC_URL + '/images/logo/android-chrome-512x512.png'} alt="Thomas"
                                 className="custom-img-styles"/>
                            <div className="container text-white">
                                <h2><span className="animate-text">T</span>homas</h2>
                                <h2><span className="animate-text">H</span>undsbichler</h2>
                                <p className="title">Finanzen & Prototyp</p>
                                <div className="pb-2">
                                    Thomas verwaltet den finanziellen Puls von Mallet. Als Finanzexperte sorgt er für
                                    die finanzielle Gesundheit des Unternehmens, gewährleistet Stabilität und ermöglicht
                                    Wachstum durch eine solide Finanzführung.
                                </div>
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