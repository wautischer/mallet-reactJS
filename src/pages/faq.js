import React from "react";
import './pages.css';
import Impressum from "../components/Impressum";

const Faq = () => {
    return (
        <>
            <div className={"container-fluid div-padding-top"}>
                <h1 className="text-center mb-5 animate-heading">FaQ</h1>
                <section className="py-5">
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Was ist <span
                            className="animate-text">Mallet</span>?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Mallet ist eine Marke, die für die Herstellung
                            personalisierter und exzellent gestalteter Cardholder bekannt ist. Unser Engagement für
                            Qualität und Liebe zum Detail gewährleistet, dass jeder Cardholder eine einzigartige
                            Kombination aus Funktionalität und Stil ist. Wir sind stolz darauf, einzigartige Accessoires
                            anzubieten, die eine Aussage über Individualität und Raffinesse treffen. Entdecken Sie die
                            Kunstfertigkeit von Mallet und erleben Sie Cardholder, die über das Gewöhnliche
                            hinausgehen.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Wie funktioniert der <span
                            className="animate-text">Mallet</span> Cardholder?</b>
                        </h3></div>
                        <div className="col-sm-4 text-start"><p>Der Mallet-Cardholder verfügt über einen seitlichen
                            Schiebemechanismus, der einen bequemen Zugang zu sieben Kartenfächern bietet. Dieses
                            innovative Design ermöglicht eine einfache Aufbewahrung und Entnahme Ihrer wichtigsten
                            Karten, was Praktikabilität und Effizienz gewährleistet. Die schlanke und funktionale
                            Konstruktion des Cardholder spiegelt das Engagement von Mallet wider, Handwerkskunst mit
                            modernem Nutzen zu vereinen, und macht ihn zu einem idealen Accessoire für diejenigen, die
                            sowohl Stil als auch Funktionalität schätzen.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Wo kann ich den <span
                            className="animate-text">Mallet</span> Cardholder kaufen?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Aktuell sind unsere Mallet-Cardholder ausschließlich
                            für die direkte Abholung in unserer Produktionsstätte erhältlich. Um die Zugänglichkeit zu
                            verbessern und eine breitere Zielgruppe anzusprechen, arbeiten wir jedoch intensiv daran,
                            unsere Cardholder für den Online-Kauf verfügbar zu machen. Diese baldige Option wird es
                            Kunden ermöglichen, unsere Produkte bequem von zu Hause aus zu erwerben. Behalten Sie unsere
                            Online-Veröffentlichung im Auge, denn wir sind bestrebt, unseren geschätzten Kunden eine
                            effiziente und benutzerfreundliche Erfahrung zu bieten.</p></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Wie wird der <span
                            className="animate-text">Mallet</span> Cardholder
                            hergestellt?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Unser Team arbeitet synergistisch zusammen, um den
                            Mallet-Cardholder zum Leben zu erwecken, unter Verwendung innovativer Techniken wie
                            Laserbeschnitt. Wir sind stolz darauf, recycelte Materialien zu verwenden, was unserem
                            Bekenntnis zur Nachhaltigkeit entspricht. Diese gemeinsame Anstrengung gewährleistet, dass
                            jeder Cardholder eine einzigartige Kombination aus Handwerkskunst und Umweltbewusstsein
                            ist.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Wo wird der <span
                            className="animate-text">Mallet</span> Cardholder
                            hergestellt?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Der Mallet-Cardholder wird durch unsere engagierten
                            Bemühungen im Makerspace Kärnten gefertigt, wo wir hochmoderne Einrichtungen nutzen und mit
                            qualifizierten Fachleuten zusammenarbeiten. In dieser kreativen Umgebung arbeiten wir
                            praktisch und setzen innovative Techniken sowie hochwertige Materialien ein, um den
                            Mallet-Cardholder zum Leben zu erwecken. Unsere direkte Beteiligung am Produktionsprozess
                            gewährleistet akribische Aufmerksamkeit für Details und die Bereitstellung eines fein
                            gearbeiteten Cardholder, der unseren Qualitätsstandards entspricht.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-sm-end text-start"><h3><b>Warum sollte ich den <span
                            className="animate-text">Mallet</span> Cardholder kaufen?</b></h3></div>
                        <div className="col-sm-4 text-start"><p>Der Mallet-Cardholder zeichnet sich durch seine
                            akribische Handwerkskunst, das funktionale Design mit einem seitlichen Schieberegler für
                            sieben Karten und hochwertige, langlebige Materialien aus. Sein schlanker und
                            minimalistischer Stil, kombiniert mit der zukünftigen Online-Verfügbarkeit, macht ihn zu
                            einer klugen und stilvollen Wahl für diejenigen, die nach einem kompakten und zuverlässigen
                            Accessoire suchen.</p></div>
                    </div>
                </section>
            </div>
            <Impressum/>
        </>
    );
};

export default Faq;
