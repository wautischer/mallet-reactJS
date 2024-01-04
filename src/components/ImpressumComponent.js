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
                    <label>Mallet</label><button className="btn btn-dark text-white disabled">Carinthia, Austria</button>
                </div>
                <div className={"col-sm-4"}>
                    <label>Contact</label><a href= "mailto:office@mallet.at"><button className="btn btn-dark text-white disabled">office@mallet.at</button></a>
                </div>
                <div className={"col-sm-4"}>
                    <label>More</label><a href="#/faq" onClick={navigateToFAQ}><button className="btn btn-dark text-white disabled">FaQ</button></a>
                </div>
            </div>
        </div>
    );
};

export default Impressum;