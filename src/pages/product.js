import React, {useState, useEffect} from 'react';
import './pages.css';
import ObjViewer from "../components/Viewer3D";
import Reviews from "../components/Reviews";
import Impressum from "../components/Impressum";

const Product = () => {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLoader(false);
        }, 2500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className={"container div-padding-top"}>
                <h1 className="text-center mb-5 animate-heading">Produkte</h1>
                <div className="py-5">
                    <h3>Cardholder <span className="animate-text">V3.0</span> 9,99€</h3>
                    <div className="row">
                        <div className="col-sm-6 position-relative">
                            {showLoader && (
                                <div className="loader-container loader-margin-top">
                                    <div className="loader"></div>
                                </div>
                            )}
                            {!showLoader &&
                                <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObjV3.obj'}/>}
                        </div>
                        <div className="col-sm-6">
                            <p>Der V3 Cardholder präsentiert sich als minimalistisches Meisterwerk, bestehend aus zwei eleganten Platten, die durch ein schmales 30-mm-Gummiband miteinander verbunden sind. Diese bewusste Einfachheit verleiht dem Accessoire einen modernen und zugleich zeitlosen Charme. Durch seine reduzierte Formgebung fügt sich der V3 nahtlos in den Alltag ein und verströmt dabei eine subtile Eleganz. Entdecken Sie die Fusion von Funktionalität und Stil – der V3 Cardholder, ein unverzichtbares Statement für anspruchsvollen Minimalismus.
                            </p>
                            <p><b>Pros</b></p>
                            <div>
                                <ol>
                                    <li><b>Schicker Minimalismus:</b> Der V3 Cardholder zeichnet sich durch ein stilvolles und minimalistisches Design aus.</li>
                                    <li><b>Müheloser Zugang:</b> Das Design mit elastischem Band ermöglicht einen schnellen und einfachen Zugriff auf Ihre Karten.</li>
                                    <li><b>Leichte Portabilität:</b> Schlank und leicht, eignet sich der V3 perfekt für unterwegs.</li>
                                </ol>
                            </div>
                            <p><b>Cons</b></p>
                            <div>
                                <ol>
                                    <li><b>Abhängigkeit vom Gummiband:</b> Das Gummiband, als primärer Sicherungsmechanismus, kann sich im Laufe der Zeit abnutzen.</li>
                                    <li><b>Stilpräferenz:</b> Personen, die traditionelle oder sperrigere Designs bevorzugen, finden den V3 möglicherweise weniger ansprechend.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <h3>Cardholder <span className="animate-text">V2.0</span> <span className="fs-5 text-danger">eingestellt</span></h3>
                    <div className="row">
                        <div className="col-sm-6 position-relative">
                            {showLoader && (
                                <div className="loader-container loader-margin-top">
                                    <div className="loader"></div>
                                </div>
                            )}
                            {!showLoader &&
                                <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObjV2.obj'}/>}
                        </div>
                        <div className="col-sm-6">
                            <p>In unserer V2.0-Edition haben wir das robuste Kunststoffgehäuse beibehalten
                                bei der Einführung von Verbesserungen. Der Schiebemechanismus, ein Schlüsselmerkmal des Mallet
                                Der Kartenhalter und das individuelle Logoschild sind sorgfältig aus hochwertigem Material gefertigt
                                Aluminium. Dies verleiht nicht nur einen Hauch von Eleganz, sondern sorgt auch für reibungslose Funktionalität.
                                macht den V2.0 zu einem raffinierten und hochwertigen Accessoire.
                            </p>
                            <p><b>Pros</b></p>
                            <div>
                                <ol>
                                    <li><b>Verbesserter Schiebemechanismus:</b> Der Schieber, eine Schlüsselkomponente, ist jetzt aus langlebigem Aluminium gefertigt und gewährleistet eine reibungslose und zuverlässige Verwendung.</li>
                                    <li><b>Vereinfachtes Design:</b> Der V2.0 behält ein schlankes und minimalistisches Erscheinungsbild bei und konzentriert sich auf Funktionalität, ohne Kompromisse beim Stil einzugehen.</li>
                                    <li><b>Aluminium-Logoplatte:</b> Die individuelle Logoplatte aus Aluminium verleiht dem Kartenetui einen Hauch von Eleganz.</li>
                                </ol>
                            </div>
                            <p><b>Cons</b></p>
                            <div>
                                <ol>
                                    <li><b>Materialkonsistenz:</b> Während der Schieber und die Logoplatte aus Aluminium bestehen, bleibt das Gehäuse aus Kunststoff und bietet so ein ausgewogenes Verhältnis zwischen Gewicht und Haltbarkeit.</li>
                                    <li><b>Ähnliches Design:</b> Das Gesamtdesign weicht möglicherweise nicht wesentlich von der Version V1.0 ab, was die Attraktivität möglicherweise für diejenigen einschränkt, die ein radikal anderes Erscheinungsbild suchen.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <h3>Cardholder <span className="animate-text">V1.0</span> <span className="fs-5 text-danger">eingestellt</span></h3>
                    <div className="row">
                        <div className="col-sm-6 position-relative">
                            {showLoader && (
                                <div className="loader-container loader-margin-top">
                                    <div className="loader"></div>
                                </div>
                            )}
                            {!showLoader &&
                                <ObjViewer documentName={process.env.PUBLIC_URL + '/3dModel/cardholderObj.obj'}/>}
                        </div>
                        <div className="col-sm-6">
                            <p>Die V1.0-Edition kombiniert ein robustes Kunststoffgehäuse mit einem
                                unverwechselbare, individuelle Logoplatte aus hochwertigem Aluminium. Diese Verschmelzung von
                                Materialien sorgen für eine perfekte Balance zwischen Haltbarkeit und Ästhetik und machen es zu einem
                                ideale Wahl für diejenigen, die sowohl Stil als auch Funktionalität schätzen.
                            </p>
                            <p><b>Pros</b></p>
                            <div>
                                <ol>
                                    <li><b>Herausragende Ästhetik:</b> Die individuelle Logoplatte aus Aluminium verleiht dem Kartenetui einen hochwertigen und unverwechselbaren Look.</li>
                                    <li><b>Langlebige Konstruktion:</b> Die Kombination aus Kunststoff und Aluminium sorgt für eine robuste und langlebige Konstruktion.</li>
                                    <li><b>Vielseitig einsetzbar:</b> Geeignet für alle, die beim täglichen Tragen sowohl Wert auf Stil als auch Funktionalität legen.</li>
                                </ol>
                            </div>
                            <p><b>Cons</b></p>
                            <div>
                                <ol>
                                    <li><b>Gewicht:</b> Die Aluminiumkomponenten können zu einem etwas schwereren Gefühl im Vergleich zu einer Vollkunststoffalternative führen.</li>
                                    <li><b>Material Zusammensetzung:</b> Während die individuelle Logoplatte aus Aluminium besteht, besteht das Gehäuse aus Kunststoff, was einen Kompromiss in der Materialkonsistenz darstellt.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5">
                    <h3>Rezensionen <span className="animate-text">&</span> Rückmeldungen</h3>
                    <Reviews/>
                    <div className="row-cols-12 text-center pt-2">
                        <a href="mailto:feedback@mallet.at?subject=Feedback">
                            <button className="btn bg-white text-black blur-background border-white">Send Us feedback</button>
                        </a>
                    </div>
                </div>
            </div>
            <Impressum/>
        </>
    );
};

export default Product;
