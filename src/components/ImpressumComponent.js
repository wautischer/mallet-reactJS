import React from "react";
import './components.css';

const Impressum = () => {
    const navigateToFAQ = () => {
        window.location.hash = 'faq';
    };

    return (
        <div className={"mt-5 p-4 bg-dark text-white text-center fixed-bottom"}>
            <div className={"row impressum_padding"}>
                <div className={"col-sm-4"}>
                    <h3>Mallet JC</h3>
                    <p>Klagenfurt, Österreich</p>
                </div>
                <div className={"col-sm-4"}>
                    <h3>Kontakt</h3>
                    <p>E-Mail: office@mallet.at</p>
                </div>
                <div className={"col-sm-4"}>
                    <h3>Sonstiges</h3>
                    <p><a href="#/faq" onClick={navigateToFAQ}>FAQ</a></p>
                </div>
            </div>
        </div>
    );
};

export default Impressum;