import React from "react";
import './pages.css';
import Impressum from "../components/Impressum";

const About = () => {

    const navigateToTeam = () => {
        window.location.hash = '/team';
    };

    return (
        <>
            <div className="container div-padding-top">
                <h1 className="text-center mb-5 animate-heading">Über Uns</h1>
                <section className="py-5">
                    <ul className="timeline">
                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Gründung unseres Unternehmens</h5>
                            <p className="text-white mb-2 fw-bold">02 November 2023</p>
                            <p className="text-white">
                                Gegründet am 2. November 2023 steht unser Unternehmen als Zeugnis für Leidenschaft, Hingabe und eine Vision für außergewöhnliche Produkte. Mit dem Ziel, Funktionalität mit Ästhetik zu verbinden, begeben wir uns seit unserer Gründung auf eine fortlaufende Reise der Innovation.
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">V1 Cardholder</h5>
                            <p className="text-white mb-2 fw-bold">25 November 2023</p>
                            <p className="text-white">
                                Am 25. November 2023 eingeführt, repräsentiert der V1 Cardholder einen Meilenstein in unserem Produktangebot. Präzise und sorgfältig gefertigt, vereint er nahtlos Funktionalität und Stil. Mit einem Kunststoffgehäuse und einer markanten, individuell gestalteten Logoplatte aus Aluminium ist der V1 eine Aussage für modernes Design und Praktikabilität.
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Erster Kunde</h5>
                            <p className="text-white mb-2 fw-bold">11 Januar 2024</p>
                            <p className="text-white">
                                Am 11. Januar 2024 feierten wir ein bedeutsames Ereignis – unseren ersten Kunden! Das
                                markierte den Beginn unserer Reise zur Bereitstellung hochwertiger und außergewöhnlicher Produkte
                                Service. Wir danken unserem ersten Kunden von ganzem Herzen für seine Teilnahme
                                die Familie Mallet. Ein Hoch auf viele weitere Meilensteine!
                            </p>
                        </li>

                        <li className="timeline-item mb-5">
                            <h5 className="fw-bold">V2 Cardholder</h5>
                            <p className="text-white mb-2 fw-bold">18 Januar 2024</p>
                            <p className="text-white">
                                Wir stellen den V2-Cardholder vor! Unsere neueste Ausgabe wurde am 18. Januar 2024 vorgestellt und vereint
                                Funktionalität und Stil nahtlos miteinander verbinden. Der mit Präzision gefertigte V2 zeichnet sich durch eine langlebige Konstruktion aus
                                Kunststoffgehäuse mit einem eleganten Aluminiumschieber und einer individuellen Logoplatte. Erhöhen Sie Ihr
                                Erleben Sie das Tragen von Karten mit diesem raffinierten Accessoire für den modernen Menschen.
                                Entdecken Sie mit dem V2-Cardholder die nächste Stufe der Mallet-Handwerkskunst.
                            </p>
                        </li>
                    </ul>
                </section>
                <section className="py-5">
                    <h3>Unsere Mission und Grundwerte</h3>
                    <p>Unsere Mission bei Mallet ist es, eine solide Lösung für individuelle Cardholder bereitzustellen. Wir sind
                        engagiert sich dafür, den Markt für robuste Cardholder zu verändern. Unser Streben nach Exzellenz treibt uns dazu an
                        verwenden modernste Technologie und achten dabei auf unseren ökologischen Fußabdruck.</p>
                    <p><b>Integrität:</b> Wir wahren die
                        höchste Standards der Integrität in all unseren Handlungen. Transparenz, Ehrlichkeit und ethische Praktiken stehen im Vordergrund  Kern von
                        alles was wir tun.
                    </p>
                    <p>
                        <b>Innovation:</b> Wir begrüßen Innovation als treibende Kraft für Fortschritt. Indem wir kontinuierlich nach neuen und besseren Wegen suchen, hinterfragen wir den Status quo, um fortschrittliche Lösungen zu bieten.
                    </p>
                    <p>
                        <b>Kunden-Zentriert:</b> Unsere Kunden stehen im Mittelpunkt unseres Geschäfts. Wir sind verpflichtet, ihre Bedürfnisse zu verstehen und ihre Erwartungen durch personalisierten Service und außergewöhnliche Produkte zu übertreffen.
                    </p>
                    <p>
                        <b>Teamarbeit:</b> Wir schätzen Zusammenarbeit und glauben an die kollektive Stärke unseres vielfältigen Teams. Gemeinsam erreichen wir mehr und fördern eine unterstützende und inklusive Arbeitsumgebung.
                    </p>
                    <p>
                        <b>Soziale Verantwortung:</b> Wir erkennen die Auswirkungen unserer Handlungen auf die Gemeinschaft und die Umwelt an. Mit dem Bekenntnis zu Nachhaltigkeit und unternehmerischer sozialer Verantwortung streben wir danach, einen positiven Beitrag zur Welt zu leisten.
                    </p>
                </section>
                <section className="py-5">
                    <h3>Die Leitung</h3>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 pb-5">
                            <div className="card bg-transparent blur-background d-flex flex-column border-0">
                                <img src={process.env.PUBLIC_URL + '/images/logo/android-chrome-512x512.png'} alt="Simon" className="custom-img-styles"/>
                                <div className="container text-white">
                                    <h2><span className="animate-text">S</span>imon</h2>
                                    <h2><span className="animate-text">H</span>ürlimann</h2>
                                    <p className="title">CEO & Produkt Designer</p>
                                    <div className="pb-2"> Als Chief Executive Officer ist Simon der visionäre Anführer hinter Mallet. Mit einem tiefen Verständnis für die Branche lenkt er die strategische Ausrichtung des Unternehmens und stellt sicher, dass Mallet weiterhin herausragende Leistungen erbringt. Darüber hinaus ist er unser Produktdesigner.
                                    </div>
                                    <p></p>
                                    <p className="text-center">
                                        <a href="mailto:huerlimann@mallet.at?subject=Contact">
                                            <button className="btn btn-dark text-white bg-transparent blur-background border-white">Hier Kontaktieren!</button>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-cols-12 text-center pt-4">
                        <button onClick={navigateToTeam} className="btn bg-white text-black blur-background border-white">Unser Team!</button>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    );
};

export default About;
