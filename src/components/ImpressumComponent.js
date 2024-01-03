import React from "react";
import './components.css';

const Impressum = () => {
    const navigateToFAQ = () => {
        window.location.hash = 'faq';
    };

    return (
        <div className={"p-4 bg-dark text-white text-center"}>
            <div className={"row"}>
                <div className={"col-sm-4"}>
                    <h5>Mallet</h5>
                    <a>Klagenfurt, Österreich</a>
                </div>
                <div className={"col-sm-4"}>
                    <h5>Contact</h5>
                    <a href= "mailto:office@mallet.at">office@mallet.at</a>
                </div>
                <div className={"col-sm-4"}>
                    <h5>More</h5>
                    <p><a href="#/faq" onClick={navigateToFAQ}>FAQ</a></p>
                </div>
            </div>
        </div>
    );
};

export default Impressum;