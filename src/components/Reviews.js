import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components.css';

const Reviews = () => {
    return (
        <>
            <div id="bewertungs-carousel" className="carousel slide pb-5" data-bs-ride="carousel">
                <button className="carousel-control-prev position-absolute top-0" type="button" data-bs-target="#bewertungs-carousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Zurück</span>
                </button>
                <button className="carousel-control-next position-absolute top-0" type="button" data-bs-target="#bewertungs-carousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Weiter</span>
                </button>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card text-white bg-transparent blur-background border-0">
                            <div className="card-body">
                                <p className="card-title">Produkt: <b>Cardholder V3.0</b> ⭐⭐⭐⭐⭐</p>
                                <p className="card-text"><q>
                                    Liebe meinen Mallet Cardholder! Stilvoll, praktisch und umweltfreundlich. Hält
                                    mühelos
                                    7 Karten und die recycelten Materialien verleihen ihm das gewisse Etwas.
                                    Erstklassige Handwerkskunst und schlankes Design machen ihn zur perfekten Wahl. Sehr
                                    empfehlenswert!</q></p>
                                <p className="card-subtitle">- Manuela Gloeckner, Österreich</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card text-white bg-transparent blur-background border-0">
                            <div className="card-body">
                                <p className="card-title">Produkt: <b>Cardholder V1.0</b> ⭐⭐⭐⭐</p>
                                <p className="card-text"><q>
                                    Der Mallet Cardholder bietet eine einzigartige Mischung aus Stil und
                                    Funktionalität. Der
                                    Schiebemechanismus ist geschmeidig und das kompakte Design macht ihn bequem zu
                                    tragen.
                                    Die Materialien sind gut, aber ich hätte mir mehr Farboptionen gewünscht. Insgesamt
                                    eine solide Wahl für diejenigen, die einen praktischen und gut gestalteten
                                    Cardholder
                                    suchen.</q></p>
                                <p className="card-subtitle">- Barbara Kortig, Österreich</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card text-white bg-transparent blur-background border-0">
                            <div className="card-body">
                                <p className="card-title">Produkt: <b>Cardholder V1.0</b> ⭐⭐⭐⭐⭐</p>
                                <p className="card-text"><q>
                                    Der Mallet Cardholder ist ein Game-Changer! Das schlanke Design und der innovative
                                    Schiebemechanismus für einfachen Zugriff auf die Karten machen ihn besonders. Die
                                    Handwerkskunst ist beeindruckend und die Verwendung von recycelten Materialien
                                    entspricht meinen umweltbewussten Werten. Eine hervorragende Ergänzung zu meinem
                                    täglichen Tragen. Jeder Cent wert!</q></p>
                                <p className="card-subtitle">- Lukas Schiffer, Österreich</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card text-white bg-transparent blur-background border-0">
                            <div className="card-body">
                                <p className="card-title">Produkt: <b>Cardholder V3.0</b> ⭐⭐⭐⭐⭐</p>
                                <p className="card-text"><q>Absolut begeistert von meinem neuen Cardholder! Die
                                    Handwerkskunst ist wirklich unübertroffen und zeigt eine akribische
                                    Aufmerksamkeit zum Detail. Ein Muss für Menschen, die sowohl Qualität als auch Stil
                                    schätzen. Ich empfehle dieses exquisite Accessoire sehr!</q></p>
                                <p className="card-subtitle">- Klaudia Kuefer, Österreich</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card text-white bg-transparent blur-background border-0">
                            <div className="card-body">
                                <p className="card-title">Produkt: <b>Cardholder V1.0</b> ⭐⭐⭐⭐⭐</p>
                                <p className="card-text"><q>
                                    Beeindruckt von der Bauqualität des Mallet Cardholder und dem durchdachten
                                    Ansatz zur Nachhaltigkeit. Der Schiebemechanismus funktioniert nahtlos und die
                                    recycelten Materialien fügen eine umweltfreundliche Note hinzu. Ein
                                    bisschen mehr Platz für zusätzliche Karten wäre perfekt gewesen. Dennoch eine
                                    zuverlässige Wahl für alle, die einen modernen und umweltbewussten Cardholder
                                    suchen.</q></p>
                                <p className="card-subtitle">- Paul Gaertner, Österreich</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card text-white bg-transparent blur-background border-0">
                            <div className="card-body">
                                <p className="card-title">Produkt: <b>Cardholder V3.0</b> ⭐⭐⭐⭐⭐</p>
                                <p className="card-text"><q>Die Qualität des Cardholder ist herausragend und die
                                    Liebe zum Detail ist bemerkenswert. Ich habe zahlreiche Komplimente erhalten.
                                    Ich empfehle dieses Produkt wärmstens!</q></p>
                                <p className="card-subtitle">- Fixi Hartmann, Österreich</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reviews;
